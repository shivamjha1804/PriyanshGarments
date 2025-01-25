import React from "react";

const LowerNav = () => {
  return (
    <nav
      className="
        flex
        justify-between
        items-center
        w-full
        h-16
        bg-[#292929]  /* Custom navbar background color */
        text-gray-600
        py-4
        px-6
        lg:px-12
        xl:px-24
        2xl:px-32
        shadow-md opacity-95
      "
    >
      {/* Logo or brand name */}
      <div className="text-xl font-semibold text-white">
        <a href="#">Logo</a>
      </div>

      {/* Menu */}
      <ul className="flex space-x-8">
        <li>
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300" /* Hover color set to red */
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300" /* Hover color set to red */
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white hover:text-red-500 transition duration-300" /* Hover color set to red */
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Optional: Add a button */}
      <div>
        <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default LowerNav;
