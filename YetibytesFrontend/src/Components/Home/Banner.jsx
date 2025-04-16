import React from "react";
import Image from "../../assets/Group 40.svg"
const Banner=()=> {
  return (
    <div className="flex justify-center items-center w-full py-20">
      <div className="bg-white rounded-xl shadow-md  flex justify-between items-center w-4/5 max-w-4xl">
        <div className="text-2xl font-bold text-gray-800 max-w-md px-10">
          Hire the best developers and designers around!
        </div>
        
        <div className="">
          <div className="w-full h-full rounded-md opacity-20  bg-center z-10"/>
          <img src={Image} className=" w-full h-48" 
            />
          <button className="bg-blue-700 text-white py-3 px-6 rounded-md font-semibold  flex justify-center text-center z-20">
          
            Let's Work together
          </button>
        </div>
          
        
      </div>
    </div>
  );
}
export default Banner