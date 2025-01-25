import React from "react";
import BannerImage from "../../assets/MainBanner/mainBannerImage.png"; // Import banner image

const MainBanner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BannerImage})`, // Set the background image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay to darken the background image */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-16 sm:px-20 lg:px-25 lg:pt-7">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl lg:text-6xl w-3/4 sm:w-full font-extrabold leading-tight mb-6">
          <span className="text-red-600">WE DESIGN</span> THE <br />
          BEST APPARELS <br />
          FOR YOU
        </h1>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl lg:text-lg mb-8 max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-red-600 text-white font-bold text-sm lg:text-base  hover:bg-red-700 transition duration-300 shadow-lg">
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
