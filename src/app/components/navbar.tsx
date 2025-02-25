'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) setScrolled(true);
      if (window.scrollY <= 50 && scrolled) setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header>
      <nav
        className={clsx(
          'fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-4 flex justify-between items-center transition-all duration-300 ease-in-out z-50',
          scrolled
            ? 'w-3/5 mt-4 rounded-[16px] border border-gray-300 shadow-sm bg-white'
            : 'w-[90vw] border-none bg-transparent'
        )}
      >
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="TripMates Logo" width={56} height={67} priority />
          <h1 className="text-[#0C0C0C] text-3xl font-medium font-['DM_Serif_Display']">TripMates</h1>
        </Link>

        {/* Navigation Links */}
        <div className="w-[448px] h-12 px-[42px] py-[14px] bg-white/34 flex justify-center items-center gap-2">
  <div className="flex-1 h-5 opacity-70 flex justify-between items-center">
    {['Explore', 'How it Works', 'About'].map((item) => (
      <button key={item} className="text-[#0E0E0E] text-sm font-medium font-['DM_Sans'] hover:text-orange-600">
        {item}
      </button>
    ))}
  </div>
</div>


        {/* Join Button */}
        <Button variant="primary">Join as creator</Button>
      </nav>
    </header>
  );
};

export default Navbar;
