"use client";

import Image from "next/image";

// pages/index.js
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './styles.module.css'
// Import shadcn/ui components as needed

export default function Home() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sample data
  const sampleProducts = [
    {
      id: 1,
      name: 'Frontier Internet Plan',
      description: 'High-speed internet with no data caps.',
      price: 49.99,
    },
    {
      id: 2,
      name: 'Frontier TV Package',
      description: 'Over 200 channels with premium features.',
      price: 59.99,
    },
    {
      id: 3,
      name: 'Frontier Phone Service',
      description: 'Unlimited local and long-distance calls.',
      price: 29.99,
    },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      /*
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data.products);
      */

      // Using sample data for now
      setProducts(sampleProducts);
    } catch (err) {
      setError('Failed to fetch products.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (<>
  <div className={styles.frontierBackgroundColor + "min-h-screen flex flex-col items-center px-4 justify-center"}>
    <Image src="/favicon.ico" className="w-24 h-24 border-2 border-black float-left" width={24} height={24}/>
      <div className="justify-center">
        <div className="w-full max-w-md">
          <div className={styles.frontierColor + " rounded-2xl w-full h-full text-center mb-6 border-2 border-black"}>
            <h1 className="text-white text-3xl font-bold text-center mb-6">Frontier Communications</h1>
          </div>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </form>
          {loading && <p className="mt-4 text-center">Loading...</p>}
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </div>

        {/* Product Cards */}
        {products.length > 0 && (
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}