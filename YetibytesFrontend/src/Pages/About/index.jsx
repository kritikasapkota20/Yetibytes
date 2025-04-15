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
    <div className="w-full min-h-screen">
      <div className="w-full h-[500px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${Aboutimage})`,
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-[30%] left-0 right-0 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
              <p className="text-white text-lg max-w-2xl mx-auto">
                We build smart apps, software, and websites to power your digital growth.
              </p>
            </div>
            
            <div className="absolute right-10 bottom-[20%]">
              <div className="flex flex-col items-end">
                <p className="text-white text-xl font-medium mb-3">Our Socials</p>
                <div className="flex gap-4">
                  {socialMediaLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="bg-white/10 p-2 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                      aria-label={social.name}
                    >
                      <img 
                        src={social.img} 
                        alt={social.altText} 
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal White Overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{
            clipPath: 'polygon(0 100%, 100% 0%, 100% 0)',
          }}
        />
      </div>
    </div>
  );
};

export default AboutUs;