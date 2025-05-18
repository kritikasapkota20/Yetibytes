import React from "react";
import Img1 from "../../../assets/uiImg1.svg";
import Img2 from "../../../assets/uiImg2.svg";
import Img3 from "../../../assets/uiImg3.svg";

const Description = ({ selectedCategory }) => {
  const content = {
    "WEBSITE DEVELOPMENT": {
      heading: "Build Stunning Websites",
      text: "From portfolios to ecommerce, we craft responsive, beautiful websites tailored to your vision.",
      images: [Img1, Img2, Img3],
    },
    "DIGITAL MARKETING": {
      heading: "Grow Your Digital Presence",
      text: "We help you reach your audience with smart SEO, social media strategy, and targeted campaigns.",
      images: [Img1, Img2, Img3],
    },
    "APPLICATION DEVELOPMENT": {
      heading: "Custom App Solutions",
      text: "Mobile or web, we build user-friendly applications that perform and scale.",
      images: [Img1, Img2, Img3],
    },
    "UI/UX DESIGN": {
      heading: "Create Your Own Designs",
      text: "Here at YetiBytes, you imagine and we design it to reality.",
      images: [Img1, Img2, Img3],
    },
    "SOFTWARE DEVELOPMENT": {
      heading: "Enterprise Software That Works",
      text: "We engineer scalable, secure software solutions for your business needs.",
      images: [Img1, Img2, Img3],
    },
  };

  const { heading, text, images } = content[selectedCategory] || {};

  return (
    <div className="flex flex-col gap-8 md:flex-row px-4">
      {/* Left section: heading, text, button, contact */}
      <div className="flex-1 w-full md:w-1/2 ">
        <div className="text-2xl font-bold mb-4">{heading}</div>
        <div className="text-gray-600 mb-6">{text}</div>
        <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primaryHover transition-colors  mb-4 md:mb-8">
          Start Now
        </button>
        <div className="mt-8 text-sm text-gray-600">
          <div>Confused on how to start? Contact us</div>
          <div className="flex items-center gap-4 mt-2">
            <div>📞 +977 9867077179</div>
            <div>📧 yetibytes8@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Right section: images */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-1/2  items-center">
        {images &&
          images.map((src, index) => (
              <img
              key={index}
              src={src}
              alt={`${selectedCategory} ${index + 1}`}
              className="w-full object-cover h-[250px] md:h-auto mx-auto "
              />
            ))}
      </div>
    </div>
  );
};

export default Description;
