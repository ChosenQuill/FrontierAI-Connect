"use client";

import Image from "next/image";
import Link from "next/link";
// pages/index.js
import { useState } from 'react';
// Import shadcn/ui components as needed

export default function MyNavbar(props) {
    return <div className="border-1 border-solid border-black rounded-3xl w-full h-16 bg-white my-4 top-0 flex items-center">
      <Image alt="logo" src="/logo.svg" className="w-12 h-12 mx-2 inline" width={12} height={12}/>
      <h1 className="inline mx-auto text-2xl font-bold font-sans text-slate-600" >Here you can find what you need!</h1>
      {!props.displayForm && <button className="bg-gray-100 rounded w-20 h-8 m-6 inline float-right" onClick={props.handleClickForm}>Log In</button>}
    </div>;
}