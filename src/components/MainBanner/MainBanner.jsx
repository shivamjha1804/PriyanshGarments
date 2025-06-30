import React from "react";
// import BannerImage from "../../assets/MainBanner/mainBannerImage1.jpg";

const MainBanner = () => {
  return (
    <div
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
      style={{
        backgroundImage: `url(https://priyanshgarments.com/assets/mainBannerImage1-Dk-GIk7-.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-16">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full md:w-3/4 font-extrabold leading-tight mb-4 sm:mb-6">
          <span className="text-red-600">WE DESIGN</span> THE{" "}
          <br className="hidden sm:block" />
          BEST APPARELS <br className="hidden sm:block" />
          FOR YOU
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed">
          Priyansh Garments offers premium clothing manufacturing in Mumbai,
          crafting all styles with precision. We ensure global quality,
          efficient production, and timely delivery for every brand.
        </p>

        {/* Button */}
        <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base hover:bg-red-700 transition duration-300 shadow-lg">
          VIEW PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
