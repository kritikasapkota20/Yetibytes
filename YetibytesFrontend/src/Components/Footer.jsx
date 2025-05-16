import React from 'react';
import Logo from "../assets/yetibyteslogo.png"

const Footer = () => {
  const company = {
    name: "YetiBytes",
    tagline: "TECH PRIVATE LIMITED",
    logo: Logo, 
  };

  const contact = {
    email: "setglobaltech@gmail.com",
    phone: "+977-9808113353",
    location: "Maitidevi, Kathmandu Nepal"
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Services", url: "#" },
        { name: "About us", url: "#" },
        { name: "Partners", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Pricing", url: "#" },
        { name: "Testimonials", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Technologies", url: "#" },
        { name: "Terms and Conditions", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Team", url: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Ecommerce Platforms", url: "#" },
        { name: "Websites & Web Apps", url: "#" },
        { name: "Content Platforms", url: "#" },
        { name: "Strategy & Design", url: "#" },
        { name: "Digital Products", url: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-800 text-white py-12 px-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="text-3xl font-medium max-w-md mb-6 md:mb-0">
            Kickstart your project with our team of experts.
          </div>
          <button className="bg-primary hover:bg-primaryHover text-white py-3 px-6 rounded">
            Let's Work Together
          </button>
        </div>

        <div className="flex flex-wrap">


          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="mb-4 bg-white p-2 rounded w-fit shadow-md">
            <img 
    src={company.logo} 
    alt={`${company.name} Logo`} 
    className="h-12 w-auto object-contain"
  />

            </div>
            {/* <div className="text-gray-400 text-sm uppercase tracking-wide">{company.tagline}</div> */}
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="w-full md:w-1/6 mb-8 md:mb-0">
              <div className="font-medium mb-4">{column.title}</div>
              <div className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <div key={linkIndex}>
                    <a href={link.url} className="text-gray-300 hover:text-white text-sm">{link.name}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="w-full md:w-1/6">
            <div className="font-medium mb-4">Address</div>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                Email: {contact.email}
              </div>
              <div className="text-gray-300 text-sm">
                Phone: {contact.phone}
              </div>
              <div className="text-gray-300 text-sm">
                Location: {contact.location}
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-700 my-8" />
        <div className="text-center">
          <div className="text-gray-400 text-sm">
            Copyright ©2025 {company.name}. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;