"use client";

import Image from "next/image";

import Page2 from "./page2"
import MyNavbar from "./MyNavbar"
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
      /*TODO: Replace with actual API call
      
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
  <div id='test' className={ "bg-slate-100 min-h-screen flex flex-col items-center px-4 justify-center"}> {/*styles.frontierImage*/}
    
    <MyNavbar/>
    
    <div className="w-full max-w-3xl">
        <Image src="/Title.png" className="rounded-2xl bg-white mx-auto mb-6 border-2 border-black p-6" width={2560/5} height={1047/5}/>
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you looking for?"
            className="w-full h-12 px-4 py-2 border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
          >
            <Image src="/searchIcon.png" className="h-12 px-4 py-2 bg-slate-300 text-white rounded-r-2xl hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600" width={259/3} height={194/2}/>
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
    <div>
               <Page2 />
           </div>
    </>
  );
}

