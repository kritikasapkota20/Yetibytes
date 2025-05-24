import React from "react";
import image from "../../../../assets/service/webdevlopment.svg";

const Web = () => {
  return (
    <div className="bg-blue-50 py-8 px-4 md:px-8">

      <div className="text-center mb-12">
        {/* <h2 className="text-3xl font-bold text-primary"> */}
        {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"> */}
<h2 className="text-3xl sm:text-4xl font-bold text-primary">
          Built For You, With You
        </h2>
        {/* <p className="mt-4 text-gray-500"> */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
          Yetibytes is the ultimate destination for tailored solutions that
          perfectly meet your business needs.
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        {/* <img src={image}  /> */}
        <img
  src={image}
  alt="Web Development"
   className="w-full max-w-6xl h-auto object-contain mx-auto"
   
/>
      </div>
    </div>
  );
};

export default Web;
