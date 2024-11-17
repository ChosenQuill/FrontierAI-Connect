# main.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import os
from dotenv import load_dotenv
import openai  # Ensure you have the openai package installed
import json

app = FastAPI()

# Load environment variables from .env file
load_dotenv()
api_key = os.getenv("SAMBANOVA_API_KEY")
if not api_key:
    raise ValueError("API key not found. Please ensure your .env file contains 'SAMBANOVA_API_KEY'.")

# Initialize the SambaNova client
client = openai.OpenAI(
    api_key=api_key,
    base_url="https://api.sambanova.ai/v1",
)

# Specify data types using the nullable 'boolean' dtype
dtype_dict = {
    'whole_home_wifi': 'boolean',
    'wifi_security': 'boolean',
    'wifi_security_plus': 'boolean',
    'premium_tech_pro': 'boolean',
    'identity_protection': 'boolean',
    'family_identity_protection': 'boolean',
    'total_shield': 'boolean',
    'youtube_tv': 'boolean',
}

# Load data with specified data types
try:
    current_customers_df = pd.read_csv('data/current_customers.csv', dtype=dtype_dict)
except ValueError as ve:
    print(f"ValueError while reading CSV: {ve}")
    # Handle or log the error as needed
    raise ve
except Exception as e:
    print(f"Unexpected error while reading CSV: {e}")
    raise e

# Optional: Handle missing values (if desired)
# For example, fill NA with False
bool_columns = [
    'whole_home_wifi',
    'wifi_security',
    'wifi_security_plus',
    'premium_tech_pro',
    'identity_protection',
    'family_identity_protection',
    'total_shield',
    'youtube_tv',
]

current_customers_df[bool_columns] = current_customers_df[bool_columns].fillna(False)

# Request model
class RecommendationRequest(BaseModel):
    user_id: str
    question: str

# Response model
class RecommendationResponse(BaseModel):
    recommendations: list

def create_prompt(user_info, question):
    # System prompt
    system_prompt = {
        "role": "system",
        "content": (
            "You are an AI assistant for Frontier Communications. "
            "Based on the user's account information and their question, "
            "provide personalized recommendations for products and solutions. "
            "Use the product catalog provided. Respond in JSON format."
        )
    }

    # Product catalog summary
    product_catalog = """
Product Catalog:

- Fiber 500: 500Mbps Connection. Includes one standard Wi-Fi router ($45/mo)
- Fiber 1 Gig: 1Gbps Connection. Includes one standard Wi-Fi router ($65/mo)
- Fiber 2 Gig: 2Gbps Connection. Includes one upgraded Wi-Fi router and one extender ($99/mo)
- Additional Extender: Improves Wi-Fi coverage ($5/mo per extender)
- Whole-Home Wi-Fi: Latest generation router with up to two additional extenders ($10/mo)
- Wi-Fi Security: Advanced security managed via the app ($5.00/mo)
- Wi-Fi Security Plus: Includes Wi-Fi Security, Multi-Device Security, VPN & Password Manager ($10.00/mo)
- Total Shield: Security for up to 10 devices, including mobile devices ($10.00/mo)
- YouTube TV: 100+ live channels ($79.99/mo)
"""

    # Convert user_info to a readable format
    user_info_formatted = "\n".join([f"{key}: {value}" for key, value in user_info.items()])

    # User message
    user_message = {
        "role": "user",
        "content": f"""
User Information:
{user_info_formatted}

Question:
{question}

{product_catalog}

Please analyze the user's information and question to identify any issues or opportunities for product recommendations.

Provide recommendations as a JSON array of objects with the following fields:
- issue_detected (optional): A brief description of any issues found.
- description: A detailed explanation of the issue or recommendation.
- solutions: An array of possible solutions or tips.
- product_recommendation (optional): An object with product_name, features, price if a product is recommended.

Ensure the response is in valid JSON format.
"""
    }

    return [system_prompt, user_message]

async def generate_recommendations(user_info, question):
    # Prepare the prompt
    prompt = create_prompt(user_info, question)

    # Call SambaNova API
    try:
        response = client.chat.completions.create(
            model='Meta-Llama-3.1-405B-Instruct',  # Adjust model name as per SambaNova
            messages=prompt,
            temperature=0.7,
            max_tokens=500,
            top_p=0.95,
        )
    except Exception as e:
        print(f"Error while calling SambaNova API: {e}")
        raise e

    # Extract the assistant's reply
    reply = response.choices[0].message.content

    # Parse the JSON response
    try:
        recommendations = json.loads(reply)
    except json.JSONDecodeError:
        print("Failed to parse the AI response. Ensure the response is in valid JSON format.")
        raise HTTPException(status_code=500, detail="AI response parsing failed.")

    return recommendations

@app.post("/recommendations", response_model=RecommendationResponse)
async def get_recommendations(request: RecommendationRequest):
    user_id = request.user_id
    question = request.question

    # Look up user data
    user_data = current_customers_df[current_customers_df['acct_id'] == user_id]
    if user_data.empty:
        raise HTTPException(status_code=404, detail="User not found.")

    # Convert user data to dict
    user_info = user_data.to_dict(orient='records')[0]

    # Generate recommendations using SambaNova API
    try:
        recommendations = await generate_recommendations(user_info, question)
    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return RecommendationResponse(recommendations=recommendations)
