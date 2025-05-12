import React, { useState } from "react";

const data = [
  {
    name: "Emily",
    img: "https://www.headshotpro.com/avatar-results/danny-2.webp",
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.",
    rating: 5,
  },
  {
    name: "Jake",
    img: "https://img.freepik.com/premium-photo/cartoon-man-with-glasses-beard-blue-shirt-generative-ai_958165-24562.jpg?w=826",
    text: "Their service and professionalism are unmatched. Always on point!",
    rating: 5,
  },
  {
    name: "Michael",
    img: "https://img.freepik.com/premium-photo/cartoon-man-with-glasses-beard-blue-shirt-generative-ai_958165-24562.jpg?w=826",
    text: "I’m seriously impressed with their creativity and fast delivery.",
    rating: 5,
  },
  {
    name: "Sophia",
    img: "https://www.headshotpro.com/avatar-results/danny-2.webp",
    text: "Alcaline helped me grow my brand faster than I expected. Love the team!",
    rating: 5,
  },
  {
    name: "David",
    img: "https://img.freepik.com/premium-photo/cartoon-man-with-glasses-beard-blue-shirt-generative-ai_958165-24562.jpg?w=826",
    text: "Super easy to work with and they deliver great quality.",
    rating: 5,
  },
];

const SliderCard = ({ test, featured }) => {
  return (
    <div
      className={`relative flex flex-col items-center text-center justify-center rounded-lg shadow-md transition-transform duration-300 w-64 h-64 ${
        featured
          ? "bg-blue-800 text-white scale-110 z-10"
          : "bg-yellow-50 text-gray-800 scale-95 opacity-80"
      }`}
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="italic mb-4">“ {test.text} ”</div>
      <div className="flex justify-center items-center mb-4">
        {Array.from({ length: test.rating }).map((_, i) => (
          <div key={i} className="text-yellow-400 flex items-end justify-end text-xl">★</div>
        ))}
      </div>
      <img
        src={test.img}
        alt={test.name}
        className="w-16 h-16 rounded-full border-4 border-white absolute -bottom-8"
      />
    </div>
  );
};

const Member = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = data.slice(startIndex, startIndex + 3);

  const goToNext = () => {
    if (startIndex + 3 < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="bg-blue-50   ">
      <div className="text-2xl md:text-3xl text-center py-16 font-semibold text-gray-800">
        Why customers love 
        <div className="text-blue-800 font-bold  ">working with us</div>
      </div>

      <div className="flex justify-center items-center gap-4 relative ">
        <button
          onClick={goToPrevious}
          disabled={startIndex === 0}
          className="text-white bg-primary w-10 h-10 justify-center rounded-full hover:bg-blue-800 disabled:opacity-50"
        >
          ←
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {visibleCards.map((test, idx) => (
            <SliderCard
              key={startIndex + idx}
              test={test}
              featured={idx === 1} 
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={startIndex + 3 >= data.length}
          className="text-white bg-primary w-10 h-10 justify-center rounded-full hover:bg-blue-800 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Member;
