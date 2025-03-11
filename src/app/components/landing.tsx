import React from 'react';
import Button from './Button';

const HeroContent = () => {
  return (
    <div className='flex mt-40'>
    <div className="w-[40vw] mt-12 ml-40 mr-5">
      <h1 className="text-7xl font-affection leading-normal mb-3">
        Don't Just Follow, Travel With Them
      </h1>
      <p className="text-xl opacity-70 mb-8">
        Join Exclusive Trips Curated by Your Favorite Influencers & Explore the World Together!
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">How It Works?</Button>
      </div>
    </div>
     <img src="/Elements.png" alt="Tillustration" className='w-[32vw] ml-5'  />
    </div>
  );
};

export default HeroContent;
