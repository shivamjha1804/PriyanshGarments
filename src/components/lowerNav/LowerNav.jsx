import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Menu, X, Home, User, Phone } from "lucide-react";

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Mobile Menu Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-[#292929] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-500 transition duration-300"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-6">
          <nav>
            <ul className="space-y-6">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-4 text-white hover:text-red-500 transition duration-300 group"
                  onClick={onClose}
                >
                  <Home size={20} className="group-hover:text-red-500" />
                  <span className="text-lg">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-4 text-white hover:text-red-500 transition duration-300 group"
                  onClick={onClose}
                >
                  <User size={20} className="group-hover:text-red-500" />
                  <span className="text-lg">About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-4 text-white hover:text-red-500 transition duration-300 group"
                  onClick={onClose}
                >
                  <Phone size={20} className="group-hover:text-red-500" />
                  <span className="text-lg">Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Get Started Button */}
          <div className="mt-8">
            <button
              className="w-full px-6 py-3 text-white bg-red-600 hover:bg-red-700 transition duration-300 rounded-lg font-medium"
              onClick={onClose}
            >
              Get Started
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              Ready to get started? Contact us today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Navigation Component
const LowerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-full h-16 bg-[#292929] text-gray-600 shadow-md opacity-95 relative">
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
            <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition duration-300 rounded">
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
            className="text-white focus:outline-none hover:text-red-500 transition duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
};

export default LowerNav;
