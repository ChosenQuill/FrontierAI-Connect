# FrontierAI Connect

**FrontierAI Connect** is a cutting-edge, AI-driven web platform designed to assist Frontier Communications customers in diagnosing their networking issues and discovering personalized product recommendations. The project leverages Next.js, Tailwind CSS, and shadcn/ui for the frontend, and FastAPI, Python, and SambaNova’s AI model for the backend. This integration provides a seamless experience, guiding customers through problem-solving steps and suggesting the most relevant internet and network-related products to enhance their service.

Our team developed this project as part of the **HackUTD24 hackathon challenge**. 

## Demo Video



## Project Goals & Reasoning

Our team’s main goal was to create an intelligent support system for Frontier Communications customers. Modern internet users often face complex network issues—slow speeds, poor Wi-Fi coverage, or security concerns—and may not know how to address them. By leveraging SambaNova's AI, we aim to:

1. **Simplify Troubleshooting**: Customers can describe their issues in plain language. The system interprets their problems and provides actionable advice.
2. **Personalized Recommendations**: Based on the customer’s network data, usage patterns, and stated issues, the AI recommends products tailored to their unique situation. For example, if a customer’s Wi-Fi signal is weak, the system might suggest an extender or a more robust fiber plan.
3. **Reduce Support Load**: Automating first-level troubleshooting and recommendations empowers customers to resolve issues quickly and reduces the burden on human support teams.
4. **Enhance Customer Satisfaction**: By providing meaningful, context-aware solutions, FrontierAI Connect aims to improve the overall customer experience and trust in the brand.

## Technology Stack

- **Frontend:**
    - [Next.js](https://nextjs.org/) for server-side rendering and a smooth user experience.
    - [Tailwind CSS](https://tailwindcss.com/) for quick and responsive UI development.
    - shadcn/ui for enhanced and accessible UI components.
- **Backend:**
    - FastAPI for creating a performant, production-ready REST API.
    - [Poetry](https://python-poetry.org/) for dependency management and virtual environment handling.
    - Pandas for data manipulation and analysis.
    - [SambaNova / OpenAI-Compatible API](https://sambanova.ai/) for integrating with advanced AI models.
- **Data Source:**
    - Mock network and product data from CSV files (e.g., `current_customers.csv`).


## Setup and Installation

### Prerequisites

- **Node.js (v14 or later)** and **npm/yarn** for the frontend.
- **Python 3.8+** for the backend.
- **Poetry** installed for Python dependency management:
    
    ```bash
    pip install poetry
    ```
    
- A valid SambaNova API key.

### Backend Setup (FastAPI + Poetry)

1. **Navigate to the Backend Directory:**
    
    ```bash
    cd backend
    ```
    
2. **Install Dependencies:**
    
    ```bash
    poetry install
    ```
    
3. **Create a `.env` File:**
In `backend/src`, create a `.env` file:
    
    ```bash
    touch backend/src/.env
    ```
    
    Add your SambaNova API key:
    
    ```
    SAMBA_API_KEY=your_sambanova_api_k
    ```
    
4. **Data Files:**
Ensure `data/current_customers.csv` and other necessary CSV files are placed in the `backend/data` directory.

### Frontend Setup (Next.js)

1. **Navigate to the Frontend Directory:**
    
    ```bash
    cd frontend
    ```
    
2. **Install Dependencies:**
    
    ```bash
    npm install
    ```
    
    or if you prefer Yarn:
    
    ```bash
    yarn install
    ```
    

## Running the Application

### Running the Backend

1. **Activate the Poetry Environment:**
    
    ```
    cd backend
    poetry shell
    ```
    
2. **Run the Backend:**
    
    ```
    uvicorn src.main:app --reload
    ```
    
    The backend should now be running at `http://127.0.0.1:8000`.
    
3. **Test the Backend:**
    Open `http://127.0.0.1:8000/docs` in your browser to view the swagger documentation and test the `/recommendations` endpoint.

### Running the Frontend

1. **Start the Frontend:**
    
    ```bash
    cd frontend
    npm run dev
    ```
    
    or with Yarn:
    
    ```bash
    yarn dev
    ```
    
2. **Access the Application:**
    Open `http://localhost:3000` in your browser to see the frontend.

## License

This project is licensed under the MIT License.