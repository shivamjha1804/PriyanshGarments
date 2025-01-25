import React from "react";
import watchImage from "../../assets/Services/ServiceWatch.png";

const Services = () => {
  return (
    <div className="w-full py-12 px-6 sm:px-12 bg-gray-100 flex flex-col lg:flex-row">
      {/* Services Grid Section */}
      <div className="lg:w-1/2 space-y-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-black h-[250px] px-8 py-8 text-center rounded-md shadow-lg"
            >
              <img
                src={watchImage}
                alt="Service"
                className="w-15 h-15 object-cover mb-4 rounded-full"
              />
              <h3 className="text-lg font-bold text-white mb-2">
                Fast Response
              </h3>
              <p className="text-white text-xs w-3/4 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          );
        })}
      </div>

      {/* Title Section */}
      <div className="lg:w-1/2 lg:ml-10 self-center space-y-4">
        <h1 className="text-lg font-bold text-gray-800">
          OUR <span className="text-red-600">SERVICE</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
          WE ARE DEDICATED <span className="text-red-600">TO OUR WORK</span>
        </h2>
        <p className="text-sm sm:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="text-sm sm:text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default Services;
