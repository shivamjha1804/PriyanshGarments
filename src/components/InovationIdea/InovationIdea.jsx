import React from "react";
// import InovationImage from "../../assets/Inovation/InovationImage.JPG";

const InovationImage =
  "https://priyanshgarments.com/assets/Inovation/InovationImage.JPG";
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
              We combine innovation with elegance to create stylish clothing
              that aligns with modern fashion standards. Our Mumbai-based team
              specializes in manufacturing apparel for men, women, and children
              with exceptional detail and finishing. From the drawing board to
              the final stitch, we deliver garments that are fashionable,
              functional, and brand-aligned. Every product is developed using
              state-of-the-art technology and creative design techniques to
              ensure comfort, consistency, and a polished look that enhances
              your brand identity.
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
