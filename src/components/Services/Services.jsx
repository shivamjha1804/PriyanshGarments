import React from "react";
import watchImage from "../../assets/Services/ServiceWatch.png";

const Services = () => {
  return (
    <div className="w-full py-12 px-6 sm:px-12 bg-gray-100 flex flex-col lg:flex-row">
      {/* Services Grid Section */}
      <div className="max-w-full lg:max-w-1/2 mx-auto space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-black h-[310px] px-8 py-8 text-center "
            >
              <img
                src={watchImage}
                alt="Service"
                className="w-20 h-20 object-cover mb-4 rounded-full"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Fast Response
              </h3>
              <p className="text-white text-sm sm:text-base w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          );
        })}
      </div>

      {/* Title Section */}
      <div className="text-left space-y-4 lg:w-1/2 lg:ml-10 self-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          OUR <span className="text-red-600">SERVICE</span>
        </h1>
        <h2 className="text-4xl sm:text-6xl font-semibold text-gray-900">
          WE ARE DEDICATED <span className="text-red-600">TO OUR WORK</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mx-auto max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mx-auto max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat.
        </p>
      </div>
    </div>
  );
};

export default Services;
