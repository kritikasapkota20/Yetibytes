import React from "react";
import image from "../../../../assets/service/01.svg";
import image2 from "../../../../assets/service/02.svg";
import image3 from "../../../../assets/service/03.svg";
import image4 from "../../../../assets/service/04.svg";

const SoftwareDevelopment = () => {
  const data = [
    { img: image },
    { img: image2 },
    { img: image3 },
    { img: image4 },
  ];

  return (
    <div className="p-4  w-full h-full">
      <div className="text-center mb-8">
        <div className="text-2xl md:text-3xl font-bold text-blue-800">
          Customized Software Development Solutions Offered
        </div>
        <div className="text-sm md:text-base text-gray-600 mt-2">
          Our role as a top digital marketing agency in Nepal has been
          solidified by consistently delivering superior results for our
          clients.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden  transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={`Service ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
