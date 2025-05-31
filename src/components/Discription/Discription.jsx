import React from "react";
import DiscriptionOneImage from "../../assets/Discription/DiscriptionOne.png";
import DiscriptionTwoImage from "../../assets/Discription/DiscriptionTwo.png";
import DiscriptionThreeImage from "../../assets/Discription/DiscriptionThree.png";
import DiscriptionFourImage from "../../assets/Discription/DiscriptionFour.png";

const Discription = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 bg-white flex flex-col lg:flex-row justify-between mt-4 md:mt-8">
      <div className="text-left mb-8 lg:mb-0 lg:w-1/2 w-full self-center lg:pr-8">
        <h1 className="text-lg md:text-xl font-bold mb-2">
          WELCOME TO <span className="text-red-600">PRIYANSH GARMENTS</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="text-red-600">CLOTHING</span> <br /> MANUFACTURING
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="my-6 md:my-8 max-w-2xl">
          <h1 className="text-xl md:text-2xl font-bold text-left text-black mb-2">
            INNOVATIVE
          </h1>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="my-6 md:my-8 max-w-2xl">
          <h1 className="text-xl md:text-2xl font-bold text-left text-black mb-2">
            CREATIVE
          </h1>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:w-1/2 w-full">
        <div className="lg:translate-y-10">
          <img
            src={DiscriptionOneImage}
            alt="Description One"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
        <div className="lg:-translate-y-10">
          <img
            src={DiscriptionTwoImage}
            alt="Description Two"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
        <div className="lg:translate-y-10">
          <img
            src={DiscriptionThreeImage}
            alt="Description Three"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
        <div className="lg:-translate-y-10">
          <img
            src={DiscriptionFourImage}
            alt="Description Four"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Discription;
