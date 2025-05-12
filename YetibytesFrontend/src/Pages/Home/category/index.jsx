import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/ourservicebg.svg";
import Logo from "../../../assets/vikinglogo.svg";
import Description from "./Description";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("UI/UX DESIGN");
  const navigate = useNavigate();

  const categories = [
    "WEBSITE DEVELOPMENT",
    "DIGITAL MARKETING",
    "APPLICATION DEVELOPMENT",
    "UI/UX DESIGN",
    "SOFTWARE DEVELOPMENT",
  ];

  return (
    <div className="min-h-screen py-12"
    style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }} 
    >

    <div className="bg-white w-full max-w-7xl mx-auto mt-10" >
      <div className="bg-primary text-white flex justify-center py-4 font-bold text-lg">
        <div className="flex gap-32 items-center">
          <div>DESIGN</div>
           <div className='h-10 '>
                <img className='h-20' src={Logo} alt="Logo" />
            </div>
          <div>AWARDS</div>
        </div>
      </div>

      <div className="flex justify-center gap-14  text-sm font-medium py-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
                selectedCategory === category
                ? "text-primary border-b-2 border-primary"
                : "text-gray-600"
            } hover:text-primary transition-all`}
            >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-10 gap-10">
        {/* <div className="flex-1">
          <div className="text-2xl font-bold mb-4">Create Your Own Designs</div>
          <div className="text-gray-600 mb-6">
            Here at YetiBytes, you imagine and we design it to reality.
          </div>
          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors">
            Start Now
          </button>

          <div className="mt-8 text-sm text-gray-600">
            <p>Confused on how to start? Contact us</p>
            <div className="flex items-center gap-4 mt-2">
              <div>📞 +977 9867077179</div>
              <div>📧 yetibytes8@gmail.com</div>
            </div>
          </div>
        </div> */}

        <div className="flex">
          <Description selectedCategory={selectedCategory} />
        </div>
      </div>

    </div>
      <div className="text-center pb-8 py-4">
        <button
          onClick={() => navigate("/services")}
          className="border border-primary text-primary px-6 py-2 rounded inline-flex items-center hover:bg-primary hover:text-white transition"
          >
          Our Services
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
          </svg>
        </button>
      </div>
              </div>
  );
};

export default Category;
