"use client";

import Image from "next/image";

// pages/index.js
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './styles.module.css'


export default function Page2() {
  const [query, setQuery] = useState('');
  const [products, setcProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [displayImage, setDisplayImage] = useState(false);

  function handleClick() { 
    setDisplayImage(!displayImage); 
  }

  

  return (<>
  <div id='test' className={ "bg-slate-700 min-h-screen flex flex-col px-4 "}> {/*styles.frontierImage*/}
    {/*<div className="w-full max-w-md">
        
        {loading && <p className="mt-4 text-center">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>*/}
      <div className="inline object-top mx-auto">
        <button className="bg-gray-100 rounded w-20 h-8 m-6">button1</button>
        <button className="bg-gray-100 rounded w-20 h-8 m-6" onClick={handleClick}> Locations </button>
      </div>
      {displayImage && <div className="allign-center"><Image src="/map.PNG" className="w-1200 h-1200 mx-auto my-8 border-2 border-black rounded-2xl" width={1200} height={1200}/></div>} 
    </div>
   
    </>
  );
}
