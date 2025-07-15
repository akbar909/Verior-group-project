import React from 'react';

const Shape = () => {
  return (
    
    <div className="flex max-sm:justify-start   items-center justify-center bg-[#0D0D0D] p-4">

    
      <div className="flex h-[443px] w-[304px] items-center justify-center rounded-lg border-2 border-gray-500 border-opacity-25 bg-[#0f0f0f] sm:h-96 sm:w-96">

        <svg
          width="70%" 
          height="70%"
          viewBox="0 0 200 210"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#323232]"
        >
          <path
            d="M20 100 C20 0, 180 0, 180 100 L180 190 A20 20 0 0 0 140 190 A20 20 0 0 0 100 190 A20 20 0 0 0 60 190 A20 20 0 0 0 20 190 Z"
          />
        </svg>

      </div>
    </div>
  );
};

export default Shape;