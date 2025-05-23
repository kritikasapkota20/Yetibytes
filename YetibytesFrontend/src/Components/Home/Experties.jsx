import React from "react";
import website from "../../assets/website.svg";
import application from "../../assets/application.svg";
import digital from "../../assets/digital.svg";
import software from "../../assets/software.svg";

const ExpertiseCard = () => {
  const data = [
    {
      id: 1,
      img: website,
      title: "Website Development",
    },
    {
      id: 2,
      img: application,
      title: "Application Development",
    },
    {
      id: 3,
      img: digital,
      title: "Digital Marketing",
    },
    {
      id: 4,
      img: software,
      title: "Software Development",
    },
    {
      id: 5,
      img: software,
      title: "UI/UX Design",
    },
  ];

  return (
    <div className=" text-center mt-4 px-8">
      <div className="text-2xl font-semibold text-primary mb-8">
        Areas of Expertise
      </div>
      <div className="flex flex-wrap justify-center gap-8 cursor-pointer">
        {data.map((item) => (
          <div
            key={item.id}
            className="  w-60 md:w-52 h-48 bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:bg-primary group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="mb-2 w-16 h-16 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <div className="text-sm font-medium text-center mt-2 text-gray-800 group-hover:text-white">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;
