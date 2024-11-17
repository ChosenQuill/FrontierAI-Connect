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
  const [displayForm, setDisplayForm] = useState(false);


  function handleClickImage() { 
    if(!displayForm)
      setDisplayImage(!displayImage); 
  }
  function handleClickForm() { 
    if(!displayImage)
      setDisplayForm(!displayForm); 
  }

  function onSubmit(){
    let x = document.getElementById("Username");
  }
  
  return (<>
  <div id='test' className={ "bg-slate-700 min-h-screen flex flex-col px-4 "}> {/*styles.frontierImage*/}
    {/*<div className="w-full max-w-md">
        
        {loading && <p className="mt-4 text-center">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>*/}
      <div className="inline object-top mx-auto">
        <button className="bg-gray-100 rounded w-20 h-8 m-6 inline" onClick={handleClickForm}>Log In</button>
        <button className="m-6 inline" onClick={handleClickImage}> <Image src="/red pin.PNG" className="bg-slate-400 mx-auto my-8 border-4 border-black rounded-2xl inline" width={100} height={100}/> </button>
      </div>
      {displayImage && <div className="allign-center">
        <Image src="/map.PNG" className="w-1200 h-1200 mx-auto my-8 border-4 border-black rounded-2xl" width={1200} height={1200}/>
        </div>}
      {
        displayForm && <form>
          <label for="username" required>Username: </label>
          <input type="text" id="username"/>
          <label for="password" required>Password: </label>
          <input type="password" id="password"/>
          <button type="submit">Submit</button>
        </form>
      }
       
    </div>
   
    </>
  );
}
