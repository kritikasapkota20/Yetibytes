import React from "react";
import website from "../../assets/website.svg"
import application from "../../assets/application.svg"
import digital from "../../assets/digital.svg"
import software from "../../assets/software.svg"

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
      img: application, 
      title: "Digital Marketing",
    },
    {
      id: 4,
      img: digital, 
      title: "Software Development",
    },
    {
      id: 5,
      img: software,
      title: "UI/UX Design",
    },
  ];

  return (
    <div className="py-6 text-center">
      <div className="text-2xl font-semibold text-primary mb-8">
        Areas of Expertise
      </div>
      <div className="flex flex-wrap justify-center gap-5 cursor-pointer">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-48 h-48 bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center transition-transform duration-200 transform hover:scale-105"
          >
            <img 
              src={item.img} 
              className="mb-2 w-10 h-10" 
            />
            <div className="text-sm font-medium text-center mt-2">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseCard;