import React from "react";
import image from "../../assets/careerpage.svg";

const Software = () => {
  return (
    <div className="w-full py-16  grid ">
      <div className="text-3xl font-bold text-center text-primary mb-12">
        Who We’re Looking For
      </div>

      <div className="w-full h-full flex justify-center">
        <img src={image} />
      </div>
    </div>
  );
};

export default Software;
