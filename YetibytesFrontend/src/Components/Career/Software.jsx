import React from "react";
import icon1 from "../../assets/agile.svg";
import icon2 from "../../assets/AI IOT.svg";
import icon3 from "../../assets/ai.svg";
import icon4 from "../../assets/cloud NA.svg";
import icon5 from "../../assets/fullstack.svg";
import icon6 from "../../assets/robotics.svg";
import SoftwareImage from "../../assets/softwarecenter.svg";

const roles = [
  {
    title: "AI-Powered Software Development",
    description:
      "Our AI-powered software development services integrate cutting-edge AI technologies to enhance efficiency and drive innovation.",
    icon: icon1,
  },
  {
    title: "Full Stack Development",
    description:
      "Our full-stack development services leverage AI to optimize every stage of the software development lifecycle.",
    icon: icon3,
  },
  {
    title: "Cloud-Native Applications",
    description:
      "Revolutionize your projects with our AI-powered agile software development services.",
    icon: icon4,
  },
  {
    title: "Predictive Analytics",
    description:
      "Our AI-powered predictive analytics services provide sophisticated tools to help you make informed business decisions.",
    icon: icon2,
  },
  {
    title: "Robotics Process Automation",
    description:
      "Revolutionize your business operations with our AI-powered robotic process automation (RPA) services.",
    icon: icon6,
  },
  {
    title: "Agile Software Development",
    description:
      "Revolutionize your projects with our AI-powered agile software development services.",
    icon: icon5,
  },
];

const Software = () => {
  return (
    <div className="w-full py-16 px-4 grid ">
      <div className="text-3xl font-bold text-center text-primary mb-12">
        Who We’re Looking For
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="flex flex-col gap-8 ">
          {roles.slice(0, 3).map((role, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4"
            >
              <div className="flex-1">
                <div className="font-semibold text-lg text-primary">
                  {role.title}
                </div>
                <p className="text-sm text-gray-500">{role.description}</p>
              </div>
              <div className="bg-white rounded-full shadow-md p-3 flex justify-center items-center w-24 h-24">

              <div className="bg-primary rounded-full p-3 flex justify-center items-center w-16 h-16">
                <img src={role.icon} alt={role.title} className="w-12 h-12" />
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-center items-center">
          <img
            src={SoftwareImage}
            alt="Software Center"
            className="w-[80%] h-auto"
          />
        </div>

        <div className="flex flex-col gap-8 pt-4 ">
          {roles.slice(3).map((role, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-white rounded-full shadow-md p-3 flex justify-center items-center w-24 h-24">
                <div className="bg-primary rounded-full p-3 flex justify-center items-center w-16 h-16">
                  <img src={role.icon} alt={role.title} className="w-12 h-12" />
                </div>
              </div>
                <div className="flex-1">
                  <div className="font-semibold text-lg text-primary">
                    {role.title}
                  </div>
                  <div className="text-sm text-gray-500">{role.description}</div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Software;
