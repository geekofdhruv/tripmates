import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';



const TripMates: React.FC = () => {
  return (
    
    <div className='bg-custom'>
    <Navbar/><div className='flex'><Landing /></div>
    </div>
    
  );
};

export default TripMates;
