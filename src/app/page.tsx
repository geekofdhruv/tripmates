import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Card from './components/card';
import HostingBox from './components/how_hosting';
import TripMatesCard from './components/feature';

const items = [
  { image: "/h1.png", title: "Join TripMates" },
  { image: "/h1.png", title: "Select a Location" },
  { image: "/h1.png", title: "Plan Your Trip" },
  { image: "/h1.png", title: "Prep for Your Trip" },
  { image: "/h1.png", title: "Travel, Enjoy & Earn" },
];

const descriptionText = "Host Your Trip with TripMates and connect with like-minded travelers who share your interests, schedule, and budget! Whether you're.";

const TripMates: React.FC = () => {
  return (
<div>
    <div className='rectangleDiv'>
    <Navbar/><Landing />
    <div className='pb-20'><Card/></div>
    
    </div>
    <HostingBox items={items}/>
    <div className="flex w-screen px-16 pt-16 gap-16 items-center justify-between bg-[#FBEBE2]">
        
        <TripMatesCard 
          title="Host Your Trips"
          description={descriptionText}
          imageSrc="/Vector 4858.png"
          imageAlt="Host illustration"
        />
        
        <TripMatesCard 
          title="Sign up as Traveller"
          description={descriptionText}
          imageSrc="/Vector 4858.png"
          imageAlt="Traveller illustration"
        />
        
      </div>
    </div>
    
  );
};
