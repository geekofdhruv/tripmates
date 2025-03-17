// components/Heading.tsx
import React from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-[82px] ml-[164px] text-left">
      {/* Title */}
      <h1 className="text-black font-dm-sans text-[48px] font-bold leading-[69.6px] tracking-[0.96px]">
        {title}
      </h1>

      {/* Subtitle (Styled) */}
      <p className="text-black font-dm-sans text-[16px] font-normal leading-[23.2px] tracking-[0.32px] opacity-70 max-w-[742px] mt-[16px]">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
