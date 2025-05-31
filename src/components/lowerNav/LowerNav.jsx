import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LowerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full h-16 bg-[#292929] text-gray-600 shadow-md opacity-95">
      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center h-full px-6 lg:px-12 xl:px-24 2xl:px-32">
        {/* Logo */}
        <div className="text-xl font-semibold text-white">
          <a href="#">Logo</a>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <div>
          <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center h-full px-6">
        {/* Logo */}
        <div className="text-xl font-semibold text-white">
          <a href="#">Logo</a>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#292929] w-full absolute left-0 z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
            <li>
              <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition duration-300">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default LowerNav;
