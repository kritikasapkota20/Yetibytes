import React from "react";
import image from "../../../../assets/service/webdevlopment.svg";

const Web = () => {
  return (
    <div className="bg-blue-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">
          Built For You, With You
        </h2>
        <p className="mt-4 text-gray-500">
          Yetibytes is the ultimate destination for tailored solutions that
          perfectly meet your business needs.
        </p>
      </div>
      <div className="flex justify-center items-center w-full">
        <img src={image}  />
      </div>
    </div>
  );
};

export default Web;
