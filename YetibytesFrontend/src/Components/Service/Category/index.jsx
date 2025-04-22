import React, { useState } from "react";
import image from "../../../assets/ourservicebg.svg";
import Description from "../Describtion";
import WebDevelopment from "./Details/webDevlopment";
import MobileAppDevelopment from "./Details/appDevlopment";
import DigitalMarketing from "./Details/digitalMarketing";
import SoftwareDevelopment from "./Details/softwareDevlopment";
import UIUXDesign from "./Details/UIUXDesign";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  const categories = [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Software Development",
    "UI/UX Design",
  ];

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case "Web Development":
        return <WebDevelopment />;
      case "Mobile App Development":
        return <MobileAppDevelopment />;
      case "Digital Marketing":
        return <DigitalMarketing />;
      case "Software Development":
        return <SoftwareDevelopment />;
      case "UI/UX Design":
        return <UIUXDesign />;
      default:
        return <WebDevelopment />;
    }
  };

  return (
    <div className="w-full py-5">
      <div
        className="w-full h-screen py-6"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 md:py-40">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-2">
            FEATURED SERVICES
          </div>
          <div className="text-sm sm:text-base text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our versatile teams bring outstanding web solutions to life by seamlessly integrating design, development, and promotion.
          </div>

          <div className="w-full flex justify-center mb-10">
            <div className="flex  justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-w-[244px] sm:min-w-[220px] md:min-w-[245px] px-4 py-2 sm:px-6 sm:py-3 flex flex-wrap items-center justify-center text-sm sm:text-base  whitespace-nowrap ${
                    selectedCategory === category
                      ? "text-white bg-primary"
                      : "text-primary bg-transparent border border-primary"
                  }`}
                >
                  <span>🔧 {category}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Description selectCategory={selectedCategory} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 py-10">
        {renderCategoryContent()}
      </div>
    </div>
  );
};

export default Category;
