import React from 'react';
import Button from './Button';

const HeroContent: React.FC = () => {
  return (
    <div className='flex py-40'>
    <div className="w-[900px] mt-16 px-40">
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
     <img src="/Elements.png" alt="Tillustration" className='w-[538px h-[532px]'  />
    </div>
  );
};

export default HeroContent;
