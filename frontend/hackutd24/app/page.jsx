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

  const [displayImage, setDisplayImage] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [username, setUsername] = useState(null);


  function onSubmit(){
    setUsername(document.getElementById("Username").value);
  }

  function handleClickImage() { 
    setDisplayImage(!displayImage); 
  }
  function handleClickForm() { 
    setDisplayForm(!displayForm); 
  }

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
    
    <MyNavbar handleClickForm={handleClickForm}/>
    
    {
      displayForm && <form onSubmit={onSubmit} className="mx-auto bg-slate-400 rounded-3xl border-solid border-black border-4 block p-6 min-w-64 max-w-96">
        <div className="block mx-auto mb-4">
          <h1 className="font-bold text-center">Log In</h1>
        </div>
        <input type="text" id="username" placeholder="Username" className="block mb-6 mx-auto rounded border-2 border-black p-1" required/>
        <input type="password" id="password" placeholder="Password" className="block mb-6 mx-auto rounded border-2 border-black p-1" required/>
        <button type="submit" className="p-2 border-2 border-solid border-black rounded bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">Log In</button>
      </form>
    }
    <div className="w-full max-w-3xl">
      { !displayForm && <>
      <Image alt="title" src="/Title.png" className="rounded-2xl bg-white mx-auto mb-6 border-2 border-black p-6" width={2560/5} height={1047/5}/>
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
          <Image alt="search icon" src="/searchIcon.png" className="h-12 px-4 py-2 bg-slate-300 text-white rounded-r-2xl hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600" width={259/3} height={194/2}/>
        </button>
      </form>
      </>}
      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>

    
    {products.length > 0 && (
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
  </div>
  
  <div>
    <Page2 handleClickImage={handleClickImage} handleClickForm={handleClickForm} displayImage={displayImage} displayForm={displayForm}/>
  </div>
  </>
  );
}

