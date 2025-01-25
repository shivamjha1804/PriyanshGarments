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
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 sm:px-12 md:px-24">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-lg">
          <span className="text-red-600">WE DESIGN</span> THE BEST APPARELS FOR
          YOU
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        {/* Button */}
        <button className="px-6 py-3 bg-red-600 text-white font-semibold text-lg hover:bg-red-700 transition duration-300">
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
