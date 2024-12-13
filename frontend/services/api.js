// services/api.js

export async function getRecommendations(userId, question) {
    try {
      const response = await fetch('http://127.0.0.1:8000/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, question }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations.');
      }
  
      const data = await response.json();
      return data.recommendations;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      throw error;
    }
  }
  