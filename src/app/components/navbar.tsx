'use client'
import React,{useState,useEffect} from 'react';

import Link from 'next/link';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   return (
    <div className='h-[1000px]'>
   <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-4 flex justify-between items-center transition-all duration-300 ease-in-out z-50 ${
        scrolled
          ? "w-3/5 mt-4 rounded-[20px] border border-gray-300 shadow-sm bg-white"
          : "w-4/5 border-none bg-transparent"
      }`}
    >
      <Link href='/' className="flex items-center gap-3">
      <img src="/logo.png" alt="TripMates Logo" width="56" height="67" />

        <h1 className="text-[#0C0C0C] text-3xl font-medium font-['DM_Serif_Display']">TripMates</h1>
      </Link>
      
      <ul className="flex justify-between items-center gap-24 px-10 py-3.5 bg-white/34 backdrop-blur-lg">
        <li><Link href='/' className="text-sm font-normal text-[#0E0E0E] opacity-70">Explore</Link></li>
        <li><Link href='/' className="text-sm font-normal text-[#0E0E0E] opacity-70">How it Works</Link></li>
        <li><Link href='/' className="text-sm font-normal text-[#0E0E0E] opacity-70">About</Link></li>
      </ul>
      
      <button className="px-10 py-3 bg-blue-100 text-[#1979F3] rounded-full border border-white/10 backdrop-blur-lg text-sm font-medium">
        Join As Creator
      </button>
    </nav>
    </div>
  );
};

export default Navbar;
