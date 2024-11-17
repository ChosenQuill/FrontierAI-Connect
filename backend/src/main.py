import os
from dotenv import load_dotenv
import openai

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key from the .env file
api_key = os.getenv("OPENAI_API_KEY")

# Check if API key is loaded correctly
if not api_key:
    raise ValueError("API key not found. Please ensure your .env file contains 'OPENAI_API_KEY'.")

# Initialize the OpenAI client
client = openai.OpenAI(
    api_key=api_key,
    base_url="https://api.sambanova.ai/v1",
)

# Make a request to the API
response = client.chat.completions.create(
    model='Meta-Llama-3.1-8B-Instruct',
    messages=[{"role": "system", "content": "You are a helpful assistant"}, {"role": "user", "content": "Hello"}],
    temperature=0.1,
    top_p=0.1
)

# Print the response
print(response.choices[0].message.content)

