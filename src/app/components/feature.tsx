import Image from "next/image";

type TripMatesCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const TripMatesCard = ({ title, description, imageAlt }: TripMatesCardProps) => {
  return (
  
    <div className=" backdrop-blur-[32.4px] rounded-[36px] bg-white/30 border border-white box-border flex flex-col md:flex-col items-center justify-start p-8 gap-8">
      <Image 
        className="w-[420px] relative rounded-[380.97px] max-h-full object-cover" 
        width={420} 
        height={384} 
        alt={imageAlt} 
        src='/f1.png'
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-6 sm:px-6 lg:px-12">
        <div className="self-stretch relative font-medium text-2xl text-center">
          {title}
        </div>
        <div className="self-stretch relative text-xl tracking-[0.02em] leading-[145%] opacity-70 text-center">
          {description}
        </div>
      </div>
    </div>
    
  );
};

export default TripMatesCard;