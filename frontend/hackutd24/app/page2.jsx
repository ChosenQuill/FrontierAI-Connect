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
  <div id='test' className={ "bg-slate-700 min-h-screen flex flex-col items-center px-4 justify-center"}> {/*styles.frontierImage*/}
    <div className="w-full max-w-md">
      
        
        {loading && <p className="mt-4 text-center">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
      <div className="inline">
        <button className="bg-gray-100 rounded w-16 h-8 m-1">button1</button>
        <button className="bg-gray-100 rounded w-16 h-8 m-1" onClick={handleClick }>button2</button>
      </div>
      {displayImage && <p className="">Boom Pow</p>}
    </div>
   
    </>
  );
}
