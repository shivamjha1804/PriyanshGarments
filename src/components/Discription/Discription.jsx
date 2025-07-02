import React from "react";
// import Checking from "../../assets/Discription/Checking.jpg";
// import Kansai from "../../assets/Discription/Kansai.jpg";
// import Packing from "../../assets/Discription/Packing.JPG";
// import Press from "../../assets/Discription/Press.jpg";

const CheckingImg =
  "https://priyanshgarments.com/assets/Discription/Checking.jpg";
const KansaiImg = "https://priyanshgarments.com/assets/Discription/Kansai.jpg";
const PackingImg =
  "https://priyanshgarments.com/assets/Discription/Packing.JPG";
const PressImg = "https://priyanshgarments.com/assets/Discription/Press.jpg";

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
          Welcome to Priyansh Garments, your trusted apparel manufacturing
          partner. Based in Mumbai, we serve fashion and corporate brands across
          India and overseas. Our modern facility and skilled team handle bulk
          orders with ease, offering men’s, women’s, kidswear, uniforms, and
          custom styles—ensuring quality, consistency, and innovation in every
          garment produced.
        </p>
        <div className="my-6 md:my-8 max-w-2xl">
          <h1 className="text-xl md:text-2xl font-bold text-left text-black mb-2">
            INNOVATIVE
          </h1>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            At Priyansh Garments, innovation drives everything we do. We use
            advanced tools and smart, sustainable practices to improve quality
            and speed. Our evolving processes support both the environment and
            fashion trends. Whether scaling production or launching new lines,
            we ensure efficiency, customization, and reliability to keep your
            brand ahead.
          </p>
        </div>
        <div className="my-6 md:my-8 max-w-2xl">
          <h1 className="text-xl md:text-2xl font-bold text-left text-black mb-2">
            CREATIVE
          </h1>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            At Priyansh Garments, creativity shapes every step. Our design team
            works closely with clients to turn ideas into stylish,
            production-ready garments. From fabric selection to final sampling,
            we ensure comfort, style, and brand identity. With trend insight and
            design expertise, we bring fashion visions to life with originality.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:w-1/2 w-full">
        <div className="lg:translate-y-10">
          <img
            src={CheckingImg}
            alt="Description One"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
        <div className="lg:-translate-y-10">
          <img
            src={KansaiImg}
            alt="Description Two"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
        <div className="lg:translate-y-10">
          <img
            src={PackingImg}
            alt="Description Three"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
        <div className="lg:-translate-y-10">
          <img
            src={PressImg}
            alt="Description Four"
            className="w-full h-48 sm:h-64 md:h-80 object-cover border border-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Discription;
