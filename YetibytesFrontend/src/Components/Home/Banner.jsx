import React from "react";
import Image from "../../assets/Group 40.svg";

const Banner = () => {
  return (
   <div className="relative bg-[#E6F4FF] overflow-hidden">
  {/* Content above curve */}
  <div className="flex justify-center items-center w-full py-20 px-4">
    <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center w-full max-w-4xl p-7 gap-6">
      <div className="text-xl md:text-2xl font-bold text-gray-800 text-center md:text-left w-full md:w-[340px]">
        Hire the best developers and designers around!
      </div>

      <div className="relative flex-shrink-0 w-full max-w-[250px]">
        <img
          src={Image}
          className="w-full h-48 object-contain"
          alt="Collaboration illustration"
        />
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <button className="bg-primary text-white py-3 px-4 md:px-6 rounded-md font-semibold hover:bg-primaryHover transition-colors w-full text-sm md:text-base whitespace-nowrap shadow-md">
            Let's Work together
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* === Bottom Curve SVG === */}
  <svg
    className="w-full h-[80px] block"
    viewBox="0 0 1440 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      fill="#E6F4FF"
      d="M0,0 C480,120 960,-20 1440,100 L1440,0 L0,0 Z"
    />
  </svg>
</div>

  );
};

export default Banner;
