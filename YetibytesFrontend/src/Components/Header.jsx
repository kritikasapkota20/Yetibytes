import React, { useState } from 'react';
import yetibyteslogo from '../assets/yetibyteslogo.png'; // Adjust the path as necessary

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home'); // Default active link is "Home"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <header className="bg-white shadow-md">
      <div className="px-4 md:px-10 flex items-center justify-between py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={yetibyteslogo}
            alt="Yetibytes Logo"
            className="h-[66px] w-[190px] cursor-pointer"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className={`${
              activeLink === '#home' ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Home
          </a>
          <a
            href="about"
            onClick={() => handleLinkClick('#about')}
            className={`${
              activeLink === '#about' ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => handleLinkClick('#services')}
            className={`${
              activeLink === '#services' ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Services
          </a>
          <a
            href="#team"
            onClick={() => handleLinkClick('#team')}
            className={`${
              activeLink === '#team' ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Teams
          </a>
          <a
            href="#portfolio"
            onClick={() => handleLinkClick('#portfolio')}
            className={`${
              activeLink === '#portfolio' ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Portfolio
          </a>
          <a
            href="#blog"
            onClick={() => handleLinkClick('#blog')}
            className={`${
              activeLink === '#blog' ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className={`${
              activeLink === '#contact' ? 'bg-primary' : 'bg-primary'
            } text-white font-medium px-4 py-2 rounded-lg hover:bg-primaryHover`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            <a
              href="#home"
              onClick={() => handleLinkClick('#home')}
              className={`${
                activeLink === '#home' ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleLinkClick('#about')}
              className={`${
                activeLink === '#about' ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => handleLinkClick('#services')}
              className={`${
                activeLink === '#services' ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
            >
              Services
            </a>
            <a
              href="#team"
              onClick={() => handleLinkClick('#team')}
              className={`${
                activeLink === '#team' ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
            >
              Teams
            </a>
            <a
              href="#portfolio"
              onClick={() => handleLinkClick('#portfolio')}
              className={`${
                activeLink === '#portfolio' ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
            >
              Portfolio
            </a>
            <a
              href="#blog"
              onClick={() => handleLinkClick('#blog')}
              className={`${
                activeLink === '#blog' ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="bg-primary text-white w-fit font-medium px-4 py-2 rounded-lg hover:bg-primaryHover text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;