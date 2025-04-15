import React from "react";
import Aboutimage from '../../assets/aboutBanner.svg';
import Facebook from '../../assets/facebook.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Instagram from '../../assets/instagram.svg';
import WhatsApp from '../../assets/whatsapp.svg';


const socialMediaLinks = [
  {
    name: "Facebook",
    url: "#",
    img: Facebook, 
    altText: "Facebook icon"
  },
  {
    name: "LinkedIn",
    url: "#",
    img: LinkedIn,
    altText: "LinkedIn icon"
  },
  {
    name: "Instagram",
    url: "#",
    img: Instagram, 
    altText: "Instagram icon"
  },
  {
    name: "WhatsApp",
    url: "#",
    img: WhatsApp,
    altText: "WhatsApp icon"
  }
];

const AboutUs = () => {
  return (
    <div className="w-full  overflow-hidden bottom-12">
      <div className=" w-full  ">
        
        <div
          className="absolute bg-no-repeat bg-cover flex flex-col inset-0 z-0 top-0 bottom-48 w-full py-6"
          style={{
            backgroundImage: `url(${Aboutimage})`,
            
           
          }}
        >
        
       
        <div className="relative w-full h-full  justify-center">
          <div className="text-center ">
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <p className="text-white text-lg max-w-2xl mx-auto">
              We build smart apps, software, and websites to power your digital growth.
            </p>
          </div>
          
          
          <div className="absolute  right-10">
            <div className="flex flex-col justify-between">
              <p className="text-white  font-medium mb-2">Our Socials</p>
              <div className="flex space-x-3">
                {socialMediaLinks.map((social, index) => (
                    <a 
                    key={index} 
                    href={social.url} 
                    className=" p-2 rounded-full flex items-center justify-center"
                    aria-label={social.name}
                    >
                    <img 
                      src={social.img} 
                      alt={social.altText} 
                      width="24" 
                      height="24" 
                      className="w-6 h-6"
                      />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
      </div>
  );
};

export default AboutUs;