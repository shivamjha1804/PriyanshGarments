import React from "react";
import DiscriptionOneImage from "../../assets/Discription/DiscriptionOne.png";
import DiscriptionTwoImage from "../../assets/Discription/DiscriptionTwo.png";
import DiscriptionThreeImage from "../../assets/Discription/DiscriptionThree.png";
import DiscriptionFourImage from "../../assets/Discription/DiscriptionFour.png";

const Discription = () => {
  return (
    <div className="px-8 sm:px-12 lg:px-16 py-12 bg-white flex justify-between mt-8">
      <div className="text-left mb-12 sm:w-1/2 w-full self-center">
        <h1 className="text-lg sm:text-lg font-bold mb-2">
          WELCOME TO <span className="text-red-600">PRIYANSH GARMENTS</span>
        </h1>
        <h1 className="text-5xl sm:text-5xl font-bold mb-2">
          <span className="text-red-600">CLOTHING</span> <br /> MANUFACTURING
        </h1>
        <p className="text-base sm:text-base text-gray-600 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="my-8 max-w-2xl">
          <h1 className="text-2xl font-bold text-left text-black mb-2">
            INNOVATIVE
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="my-8 max-w-2xl">
          <h1 className="text-2xl font-bold text-left text-black mb-2">
            CREATIVE
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:w-1/2 w-full">
        <div className="sm:translate-y-10">
          <img
            src={DiscriptionOneImage}
            alt="Description One"
            className="w-96 h-80 border border-red-600"
          />
        </div>
        <div className="sm:-translate-y-10">
          <img
            src={DiscriptionTwoImage}
            alt="Description Two"
            className="w-96 h-80 border border-red-600"
          />
        </div>
        <div className="sm:translate-y-10">
          <img
            src={DiscriptionThreeImage}
            alt="Description Three"
            className="w-96 h-80 border border-red-600"
          />
        </div>
        <div className="sm:-translate-y-10">
          <img
            src={DiscriptionFourImage}
            alt="Description Four"
            className="w-96 h-80 border border-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Discription;
