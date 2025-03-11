"use client";
import React from "react";

interface CardProps {
  image: string;
  title: string;
}

const HostingBox: React.FC<{ items: CardProps[] }> = ({ items }) => {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-[#DFE6F2] p-6 py-16">
      
      <h1 className="text-3xl text-[rgb(64,134,244)] md:text-4xl font-bold mb-8 text-left">
        How Hosting Works
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-40 sm:w-48 md:w-56 lg:w-64 p-4 flex flex-col items-center"
          >
            
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-full"
            />
            
            <p className="mt-4 text-lg font-semibold text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostingBox;
