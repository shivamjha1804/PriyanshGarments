import { useState } from "react";
import { Menu, X, Home, User, Phone } from "lucide-react";
import Brandlogo from "../../assets/shortLogo.png";
import { Link } from "react-router-dom";

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
          <div className="flex items-center">
            {/* <img src={Brandlogo} alt="Logo" className="h-8 mr-3" /> */}
            <h2 className="text-xl font-semibold text-white">Menu</h2>
          </div>
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
                <Link
                  to="/"
                  className="flex items-center space-x-4 text-white hover:text-red-500 transition duration-300 group"
                  onClick={onClose}
                >
                  <Home size={20} className="group-hover:text-red-500" />
                  <span className="text-lg">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center space-x-4 text-white hover:text-red-500 transition duration-300 group"
                  onClick={onClose}
                >
                  <User size={20} className="group-hover:text-red-500" />
                  <span className="text-lg">About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center space-x-4 text-white hover:text-red-500 transition duration-300 group"
                  onClick={onClose}
                >
                  <Phone size={20} className="group-hover:text-red-500" />
                  <span className="text-lg">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

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
          {/* Logo on the left */}
          <div className="text-xl font-semibold text-white">
            <Link to="/">
              <img src={Brandlogo} alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Menu Items on the right */}
          <div className="flex-1 flex justify-end">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-red-500 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-red-500 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-red-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center h-full px-4">
          {/* Logo - centered with hamburger menu on right */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="text-xl font-semibold text-white">
              <img src={Brandlogo} alt="Logo" className="h-7" />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-red-500 transition duration-300"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
};

export default LowerNav;
