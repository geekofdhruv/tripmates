'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !scrolled) setScrolled(true);
      if (window.scrollY <= 50 && scrolled) setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 mx-auto px-6 flex justify-between items-center transition-all duration-300 ease-in-out z-10000',
          scrolled
            ? 'w-4/5 mt-4 py-1 rounded-[16px] border border-gray-300 shadow-sm bg-white'
            : 'w-[84vw] py-6 border-none bg-transparent'
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="TripMates Logo" width={56} height={67} priority className={clsx(scrolled ? 'scale-75' : 'scale-100')} />
          <h1 className={clsx(
            "font-medium font-['DM_Serif_Display'] hidden lg:block text-[#0C0C0C]",
            scrolled ? 'text-xl' : 'text-3xl'
          )}>
            TripMates
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[448px] h-12 px-[42px] py-[14px] bg-white/34 justify-center items-center gap-2">
          <div className="flex-1 h-5 opacity-70 flex justify-between items-center">
            {['Explore', 'How it Works', 'About'].map((item) => (
              <button key={item} className="text-[#0E0E0E] text-sm font-medium font-['DM_Sans'] hover:text-orange-600">
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!menuOpen ? (
            <>
              <span className="block w-5 h-0.5 bg-black mb-1"></span>
              <span className="block w-5 h-0.5 bg-black mb-1"></span>
              <span className="block w-5 h-0.5 bg-black"></span>
            </>
          ) : (
            <span className="text-2xl bg-black mb-1">&times;</span>
          )}
        </button>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary">Join as creator</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed w-full bg-white z-40 pt-4 pb-4 px-6 shadow-md md:hidden">
          <div className="flex flex-col gap-4">
            <button className='text-2xl text-right' onClick={()=> setMenuOpen(false)}>&times;</button>
            {['Home', 'How it works?', 'About'].map((item) => (
              <button 
                key={item} 
                className="text-[#0E0E0E] text-base font-medium font-['DM_Sans'] py-2 text-left hover:text-orange-600"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="secondary" >Join as a creator</Button>
              <Button variant="primary" >Conatct us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;