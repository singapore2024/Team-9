import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="JP Morgan" className="h-8" />
          </a>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 flex-grow justify-center ml-8"> {/* Added ml-8 */}
          <Link to="home" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">
            HOME
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">
            OUR PROJECTS
          </Link>
          <Link to="involved" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">
            GET INVOLVED
          </Link>
          <Link to="about" smooth={true} duration={500} className="text-gray-700 hover:text-blue-600 cursor-pointer">
            ABOUT
          </Link>
        </div>

        {/* Sign In and Donate Buttons */}
        <div className="flex items-center space-x-4">
          <a href="/sign-up" className="text-gray-700 hover:text-blue-600">
            Sign In
          </a>
          <a href="/sign-up" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center px-4 py-4">
        <button className="text-gray-700 hover:text-blue-600">Menu</button>
        <a href="/" className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition">
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
