import React from "react";
import InovationImage from "../../assets/Inovation/InovationImage.png";

const InnovationIdea = () => {
  return (
    <div className="w-full mx-auto bg-gray-100 py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={InovationImage}
          alt="Innovation Image"
          className="w-full max-w-full h-auto sm:max-w-[500px] md:max-w-[600px] object-cover rounded-lg shadow-lg"
          style={{ height: "clamp(300px, 50vh, 550px)" }}
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 lg:pl-4">
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-base sm:text-lg font-bold text-gray-800">
            WE GAVE <span className="text-red-600">THE BEST</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
            INNOVATIVE IDEAS <br className="hidden sm:block" />
            <span className="text-red-600">STYLISH DESIGNS</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <button className="mt-4 sm:mt-6 border-2 border-red-600 text-red-600 px-4 py-2 text-sm sm:text-base hover:bg-red-700 hover:text-white transition duration-300 ease-in-out">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default InnovationIdea;
