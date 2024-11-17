"use client";

import Image from "next/image";

// pages/index.js
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import styles from './styles.module.css'


export default function Page2(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  return (<>
  <div id='test' className={ "bg-slate-700 min-h-screen flex flex-col px-4 "}> {/*styles.frontierImage*/}
    {
      <div className="w-full max-w-md">
        
        {loading && <p className="mt-4 text-center">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>}

      <div className="inline object-top mx-auto">
        <button className="m-6 inline" onClick={props.handleClickImage}> <Image src="/red pin.PNG" className="bg-slate-400 mx-auto my-8 border-4 border-black rounded-2xl inline" width={100} height={100}/> </button>
      </div>
      {props.displayImage && <div className="allign-center">
        <Image alt="Google Maps demo pic" src="/map.PNG" className="w-1200 h-1200 mx-auto my-8 border-4 border-black rounded-2xl" width={1200} height={1200}/>
        </div>}
       
    </div>
   
    </>
  );
}
