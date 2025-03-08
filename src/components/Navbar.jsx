'use client';
import React from "react";
import ToggleDarkmode from "./ui/toggleDarkmode";

const Navbar = () => {
  return (
    <div className="flex bg-background justify-between p-12">
        <ToggleDarkmode />
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          Connect
        </button>
        
    </div>
  )
}

export default Navbar
