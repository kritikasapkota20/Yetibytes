import { useState } from "react";
import image from "../../../../assets/service/digitalmarketing.svg";

const DigitalMarketing = () => {
  

  return (
    <div className="w-full h-full px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="text-3xl font-bold text-gray-800">
          Customized Digital Marketing Solutions
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Our role as a top digital marketing agency in Texas has been solidified by consistently delivering superior results for our clients.
        </div>
      </div>

      <div className="w-full h-full">
        <img src={image} alt="Digital Marketing" />
      </div>

    </div>
  );
};

export default DigitalMarketing;
