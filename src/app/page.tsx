import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Card from './components/card';


const TripMates: React.FC = () => {
  return (

    <div className='bg-gradient'>
    <Navbar/><Landing />
    <Card/>
    </div>
    
  );
};

export default TripMates;
