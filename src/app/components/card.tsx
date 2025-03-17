import type { NextPage } from 'next';
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full mt-12 sm:mt-16 md:mt-20 lg:mt-28 relative flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 rounded-xl bg-white bg-opacity-100 border">
      <div className="flex flex-col items-center justify-center relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 p-4 rounded-full bg-[#D9E8FF] relative flex items-center justify-center">
          <Image
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-24"
            width={92}
            height={83}
            alt={`${title} icon`}
            src={imageSrc}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full px-4 sm:px-6 md:px-8 mt-4 sm:mt-6 md:mt-8 max-w-xs">
          <div className="text-center font-medium font-sans text-base sm:text-lg">
            {title}
          </div>
          <div className="text-center text-xs sm:text-sm font-sans leading-relaxed tracking-wide opacity-70">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Frame: NextPage = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 w-full max-w-7xl">
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