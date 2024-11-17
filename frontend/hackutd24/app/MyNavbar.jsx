"use client";

import Image from "next/image";

// pages/index.js
import { useState } from 'react';
// Import shadcn/ui components as needed

export default function MyNavbar() {
    return <div className="w-full h-16 items-center bg-white absolute top-0 left-0 inline rounded border-1 border-white">
      <Image src="/logo.svg" className="w-12 h-12" width={12} height={12}/>
    </div>;
}