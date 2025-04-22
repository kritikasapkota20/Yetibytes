import React from 'react';

const ImageBox = () => {
  const images = [
    {
      img: "https://cdn.pixabay.com/photo/2025/04/03/04/49/winter-9510493_1280.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2025/02/12/13/21/country-9401550_1280.jpg"
    },
    {
      img: "https://cdn.pixabay.com/photo/2025/03/19/16/52/hands-9481149_1280.jpg"
    }
  ];

  return (
    <div className="padding py-6 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden shadow-md h-[500px]">
          <img
            src={images[0].img}
            alt="Main"
            className="w-full h-full  object-cover"
          />
        </div>

        {/* Right Images stacked vertically */}
        <div className="flex flex-col grid-cols-2 gap-4 h-[500px]">
          <div className="rounded-lg overflow-hidden shadow-md flex-1">
            <img
              src={images[1].img}
              alt="Top Right"
              className="w-full h-full  object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md flex-1 ">
            <img
              src={images[2].img}
              alt="Bottom Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
