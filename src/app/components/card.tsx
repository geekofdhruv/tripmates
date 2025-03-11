import type { NextPage } from 'next';
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center p-16 rounded-4xl bg-white bg-opacity-72 border border-white backdrop-blur-md">
      <div className="flex flex-col items-center justify-center relative">
        <div className="w-111 h-111 p-4 rounded-full bg-[#D9E8FF] relative flex items-center justify-center">
          <Image
            className="w-92 h-83"
            width={92}
            height={83}
            alt=""
            src={imageSrc}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 z-1 w-251 mt-8">
          <div className="text-center font-medium font-sans text-lg  ">
            {title}
          </div>
          <div className="text-center text-sm font-sans leading-145% tracking-wide opacity-70">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Frame: NextPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-16 w-[78vw]">
        <Card
          title="Host Your Trips"
          description="Lead adventures, connect with travelers, and explore the world—your journey starts here!"
          imageSrc="/c1.png"
        />
        <Card
          title="Explore New Places"
          description="Discover hidden gems and experience the beauty of the world around you."
          imageSrc="/c1.png"
        />
        <Card
          title="Connect with Travelers"
          description="Meet fellow adventurers and share unforgettable experiences."
          imageSrc="/c1.png"
        />
      </div>
    </div>
  );
};

export default Frame;
