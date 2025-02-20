import React from 'react';

const Illustration: React.FC = () => {
  return (
    <div className="relative w-[537px] h-[532px]">
      <div className="absolute left-[45px] top-[28px] w-[455px] h-[462px]">
        
        <img className="absolute left-[232px] top-[121px] w-[153px] h-[204px]" src="/1.png" alt="" />
        <img className="absolute left-[396px] top-[242px] w-[58px] h-[115px]" src="/1.png" alt="" />
       
      </div>
      <div className="absolute right-0 top-0 w-[15px] h-[166px] bg-[#F54E50]"></div>
      <div className="absolute right-[15px] bottom-0 w-[15px] h-[134px] bg-[#EEAB47]"></div>
      <div className="absolute right-[10px] top-[262px] w-[15px] h-[96px] bg-[#F56A19] transform -rotate-90 origin-top-left"></div>
      {/* Add more decorative elements here */}
    </div>
  );
};

export default Illustration;
