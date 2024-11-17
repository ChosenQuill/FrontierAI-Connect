"use client";

import Image from "next/image";
import { useState } from 'react';
import MyNavbar from "./MyNavbar";
import ProductCard from '../components/ProductCard';
import { getRecommendations } from '../services/api';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [userId, setUserId] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const recs = await getRecommendations(userId, question);
      setRecommendations(recs);
    } catch (err) {
      setError('Failed to fetch recommendations.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-slate-100 min-h-screen flex flex-col items-center px-4 justify-center">
        <MyNavbar />
        <div className="w-full max-w-3xl">
          <Image
            alt="title"
            src="/Title.png"
            className="rounded-2xl bg-white mx-auto mb-6 border-2 border-black p-6"
            width={512}
            height={209}
          />
          <form onSubmit={handleSearch} className="flex flex-col items-center">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
              className="w-full h-12 px-4 py-2 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Describe the issue you're experiencing"
              className="w-full h-12 px-4 py-2 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="h-12 px-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Support
            </button>
          </form>
          {loading && <p className="mt-4 text-center">Loading...</p>}
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </div>

        {recommendations.length > 0 && (
          <div className="mt-8 w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
                {rec.issue_detected && (
                  <h3 className="text-xl font-semibold mb-2">
                    Issue Detected: {rec.issue_detected}
                  </h3>
                )}
                <p className="text-gray-700 mb-4">{rec.description}</p>
                {rec.solutions && rec.solutions.length > 0 && (
                  <>
                    <h4 className="font-semibold">Possible Solutions:</h4>
                    <ul className="list-disc list-inside mb-4">
                      {rec.solutions.map((solution, idx) => (
                        <li key={idx}>{solution}</li>
                      ))}
                    </ul>
                  </>
                )}
                {rec.product_recommendation && (
                  <ProductCard product={rec.product_recommendation} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
