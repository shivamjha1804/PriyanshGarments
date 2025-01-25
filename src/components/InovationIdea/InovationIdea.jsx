import React from "react";
import InovationImage from "../../assets/Inovation/InovationImage.png";

const InnovationIdea = () => {
  return (
    <div className="w-full mx-auto mt-5 bg-gray-100 py-6 px-6 sm:px-12 lg:px-16 sm:py-12 flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
      {/* Image Section */}
      <div className="flex justify-center lg:w-1/2">
        <img
          src={InovationImage}
          alt="Innovation Image"
          className="w-full max-w-[600px] h-[450px] sm:h-[550px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full flex justify-center self-center lg:justify-start lg:items-start lg:w-1/2 space-y-4 ml-10">
        <div className="text-center lg:text-left lg:w-full space-y-4 px-4 sm:px-0">
          <h1 className="text-lg sm:text-lg font-bold text-gray-800 mb-2">
            WE GAVE <span className="text-red-600">THE BEST</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            INNOVATIVE IDEAS <br />
            <span className="text-red-600">STYLISH DESIGNS</span>
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <button className="border-2 text-base border-red-600 text-red-600 px-4 py-2 hover:bg-red-700 hover:text-white transition duration-300 ease-in-out">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnovationIdea;
