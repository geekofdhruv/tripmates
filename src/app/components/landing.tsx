import React from 'react';
import Button from './Button';

const HeroContent = () => {
  return (
    <div className='flex flex-col md:flex-row mt-20 md:mt-30 lg:mt-40'>
      <div className="w-[60vw] lg:ml-40 sm:w-[60vw] mx-auto md:ml-20 md:w-[40vw] md:mr-5 mt-12 text-center md:text-left gap-6">
        <h1 className="text-6xl xsm:text-7xl md:text-6xl lg:text-7xl font-affection leading-tight md:leading-normal mb-3">
          Don't Just Follow, Travel With Them
        </h1>
        <p className="text-lg md:text-xl opacity-70 mb-6 md:mb-8">
          Join Exclusive Trips Curated by Your Favorite Influencers & Explore the World Together!
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">How It Works?</Button>
        </div>
      </div>
      <img 
        src="/Elements.png" 
        alt="Tillustration" 
        className="hidden md:block w-[32vw] ml-16 md:scale-[0.88] lg:scale-100"
      />
    </div>
  );
};

export default HeroContent;