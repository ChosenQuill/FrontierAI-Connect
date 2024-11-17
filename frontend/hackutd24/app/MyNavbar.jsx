"use client";

import Image from "next/image";

// pages/index.js
import { useState } from 'react';
// Import shadcn/ui components as needed

export default function MyNavbar() {
    return <div className="border-1 border-black rounded-3xl w-full h-16 bg-white absolute top-0 flex items-center">
      <Image src="/logo.svg" className="w-12 h-12 mx-2 inline" width={12} height={12}/>
      <h1 className="inline mx-auto text-2xl font-bold font-sans text-slate-600" >Here you can find what you need!</h1>
    </div>;
}