  import React from "react";

  const InfluencerCard = () => {
    return (
      <div className="flex justify-start">
        <div className="flex p-[36px] items-start gap-[84px] w-[1120px] h-[542px] bg-[#FFECE5] rounded-lg ml-[164px] mt-[62px] relative">
          {/* Left: Image */}
          <img
            src="/your-image.jpg"
            alt="Vietnam Trip"
            className="w-[396px] h-[470px] object-cover rounded-lg"
          />

          {/* Right: Text & Countdown */}
          <div className="flex flex-col w-[401px] relative">
            {/* Title */}
            <h2 className="text-black font-[600] text-[36px] leading-[52.2px] tracking-[0.72px] font-dm-sans">
              Influencia in Vietnam
            </h2>

            {/* Subtitle (With Komal Singh) */}
            <p className="self-stretch text-black font-affectionately text-[24px] leading-[34.8px] tracking-[0.48px] mt-[8px]">
              With Komal Singh
            </p>

            {/* 📝 Description */}
            <p className="self-stretch text-black font-dm-sans text-[14px] font-normal leading-[20.3px] tracking-[0.28px] mt-5">
              Vietnam Influencer Trip – 7 Days, 6 Nights  
              📍 <strong>Destinations:</strong> Hanoi – Ha Long Bay – Da Nang – Hoi An – Ho Chi Minh City  
              ✨ <strong>Highlights:</strong>  
              <strong>Hanoi:</strong> Explore the Old Quarter, cultural sites, and street food.  
              <strong>Ha Long Bay:</strong> Luxury cruise, kayaking, and sunset shoots.  
              <strong>Da Nang:</strong> Beach relaxation, Golden Bridge visit.  
              <strong>Hoi An:</strong> Lantern-lit streets, cycling, and cultural workshops.  
              <strong>Ho Chi Minh City:</strong> Vibrant nightlife, rooftop parties, and history tours.  
              📸 A perfect mix of adventure, luxury, and content creation!
            </p>

            {/* 🕒 BOOKING FAST */}
            <div className="mt-6 ml-[21px]">
              <p className="text-[#080808] font-dosis text-[18px] font-semibold uppercase tracking-wide">
                BOOKING FAST
              </p>

              {/* Countdown Timer */}
              <div className="flex mt-[12px] justify-start">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="w-[27px] h-[46px] bg-[#F8F8F8] opacity-80 rounded-[5px] flex items-center justify-center">
                    <span className="text-[#080808] text-[27px] font-abel font-normal leading-none">
                      0
                    </span>
                  </div>
                  <p className="text-gray-500 text-[12px] mt-[4px]">days</p>
                </div>

                <div className="w-[3px]"></div>

                <div className="flex flex-col items-center">
                  <div className="w-[27px] h-[46px] bg-[#F8F8F8] opacity-80 rounded-[5px] flex items-center justify-center">
                    <span className="text-[#080808] text-[27px] font-abel font-normal leading-none">
                      1
                    </span>
                  </div>
                </div>

                {/* Separator */}
                <div className="w-[16px] flex mt-2 justify-center text-[#080808] text-[20px] font-bold">
                  :
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-[27px] h-[46px] bg-[#F8F8F8] opacity-80 rounded-[5px] flex items-center justify-center">
                    <span className="text-[#080808] text-[27px] font-abel font-normal leading-none">
                      2
                    </span>
                  </div>
                  <p className="text-gray-500 text-[12px] mt-[4px]">hours</p>
                </div>

                <div className="w-[3px]"></div>

                <div className="flex flex-col items-center">
                  <div className="w-[27px] h-[46px] bg-[#F8F8F8] opacity-80 rounded-[5px] flex items-center justify-center">
                    <span className="text-[#080808] text-[27px] font-abel font-normal leading-none">
                      3
                    </span>
                  </div>
                </div>

                {/* Separator */}
                <div className="w-[16px] flex mt-2   justify-center text-[#080808] text-[20px] font-bold">
                  :
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="w-[27px] h-[46px] bg-[#F8F8F8] opacity-80 rounded-[5px] flex items-center justify-center">
                    <span className="text-[#080808] text-[27px] font-abel font-normal leading-none">
                      4
                    </span>
                  </div>
                  <p className="text-gray-500 text-[12px] mt-[4px]">minutes</p>
                </div>

                <div className="w-[3px]"></div> 

                <div className="flex flex-col items-center">
                  <div className="w-[27px] h-[46px] bg-[#F8F8F8] opacity-80 rounded-[5px] flex items-center justify-center">
                    <span className="text-[#080808] text-[27px] font-abel font-normal leading-none">
                      5
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-end w-full">
              <button className="mt-4 px-[42px] py-[8px] h-[48px] bg-[#FA7436] text-white font-bold rounded-[37px] flex items-center justify-center gap-[8px]">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default InfluencerCard;
