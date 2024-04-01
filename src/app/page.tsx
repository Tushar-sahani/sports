"use client"

import Image from "next/image";
import Sports from "@/components/Sports";
import CollectionSpotlite from "@/components/CollectionSpotlite";
import { useState } from "react";
export default function Home() {
  const [darkMode,setDarkMode] = useState(false);
  const handeldarkmode =()=>{
    setDarkMode(!darkMode)
  }
    return (
    <div className={`${darkMode?'dark':''}`}>
      <div className="dark:bg-[#F7F7F8]  bg-[#292B32] w-screen h-[1800px]">
        <button className="bg-white dark:bg-black dark:text-white text-xs text-black w-10 h-10 absolute right-10 top-10 rounded-full font-bold" onClick={handeldarkmode}>{darkMode?'dark':'lite'}</button>
        <Sports />
        <CollectionSpotlite />
      </div>
    </div>
  );
}
