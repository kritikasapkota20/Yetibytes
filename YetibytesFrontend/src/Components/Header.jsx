import { useState } from 'react';
import yetibyteslogo from '../assets/yetibyteslogo.png'; 
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={yetibyteslogo}
              alt="Yetibytes Logo"
              className="h-[66px] w-[190px] cursor-pointer "
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className={`${
              isActive('/') ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              isActive('/about') ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`${
              isActive('/services') ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Services
          </Link>
          <Link
            to="/team"
            className={`${
              isActive('/team') ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Teams
          </Link>
          <Link
            to="/portfolio"
            className={`${
              isActive('/portfolio') ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className={`${
              isActive('/blog') ? 'text-primary' : 'text-gray-700'
            } hover:text-primary font-medium`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="bg-primary text-white font-medium px-4 py-2 rounded-lg hover:bg-primaryHover"
          >
            Contact Us
          </Link>
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
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/team"
              className={`${
                isActive('/team') ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              to="/portfolio"
              className={`${
                isActive('/portfolio') ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`${
                isActive('/blog') ? 'text-primary' : 'text-gray-700'
              } hover:text-primary font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-white w-fit font-medium px-4 py-2 rounded-lg hover:bg-primaryHover text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;