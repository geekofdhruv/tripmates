import React from "react";
const Landing = () => {
    return (
      <div className="w-4/5  mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Don’t Just Follow, Travel With Them
          </h1>
          <p className="text-lg text-black opacity-70">
            Join Exclusive Trips Curated by Your Favorite Influencers & Explore the World Together!
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium">
              Get Started
            </button>
            <button className="px-8 py-3 bg-gray-200 text-blue-500 rounded-full font-medium">
              How It Works?
            </button>
          </div>
        </div>
        
        {/* Right Section (Images) */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <img src="https://placehold.co/152x203" alt="Image 1" className="absolute left-20 top-20 w-[152px] h-[203px]" />
          <img src="https://placehold.co/58x115" alt="Image 2" className="absolute left-40 top-48 w-[58px] h-[115px]" />
          <img src="https://placehold.co/91x70" alt="Image 3" className="absolute left-32 top-10 w-[91px] h-[70px]" />
        </div>
      </div>
    );
  };
  
  export default Landing;
  