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
    // <div className="w-full py-5  max-w-7xl px-4 md:px-8">
      <div className="w-full py-5 max-w-7xl px-4 md:px-8 pt-20 mx-auto">
      <div
           className="w-full py-6"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        
        }}
      >
        <div className="max-w-7xl mx-auto  py-20 sm:py-32 md:py-40 ">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-2">
            FEATURED SERVICES
          </div>
          <div className="text-sm sm:text-base text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our versatile teams bring outstanding web solutions to life by seamlessly integrating design, development, and promotion.
          </div>

          <div className="w-full flex justify-center mb-10 ">
            {/* <div className="flex flex-wrap gap-3 justify-center w-full"> */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full">

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  // className={`min-w-[244px] sm:min-w-[220px] md:min-w-[245px] px-4 py-2 sm:px-6 sm:py-3 flex flex-wrap items-center justify-center text-sm sm:text-base  whitespace-nowrap ${
                    className={`px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-center text-sm sm:text-base whitespace-nowrap rounded transition-all ${
                    selectedCategory === category
                      ? "text-white bg-primary"
                      : "text-primary bg-transparent border border-primary"
                  }`}
                   style={{ minWidth: "120px" }}
                >
                  <span>🔧 {category}</span>
                </button>
              ))}
            </div>
          </div>

{/* Description */}
          <div className="w-full flex justify-center mt-8">
             <div className="w-full mt-2 max-w-6xl">
            <Description selectCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </div>

{/* Category Detail */}
      {/* <div className="max-w-7xl mx-auto px-2 py-10"> */}
{/* <div className="max-w-7xl mx-auto px-2 py-10 mt-16 md:mt-24"> */}
  
    <div className="w-full flex justify-center mt-auto mb-10">
  <div className="w-full max-w-6xl">
    {renderCategoryContent()}
  </div>
</div>
</div> 
  );
};

export default Category;
