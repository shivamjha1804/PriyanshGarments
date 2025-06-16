import React, { useState } from "react";
import image1 from "../../assets/LatestProject/image.jpg";
import image2 from "../../assets/LatestProject/image2.jpg";
import image3 from "../../assets/LatestProject/image3.jpg";
import image4 from "../../assets/LatestProject/image4.png";

const data = [
  { image: image1, title: "SCHOOL CLOTH" },
  { image: image2, title: "OFFICE CLOTH" },
  { image: image3, title: "HOME CLOTH" },
  { image: image4, title: "HOSPITAL CLOTH" },
];

const LatestProject = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First image is expanded by default

  return (
    <div className="max-w-[96%] mx-auto p-6 text-left mb-5">
      <h1 className="text-lg sm:text-lg font-bold text-gray-800 mb-2">
        Our <span className="text-red-600">Latest Project</span>
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        OUR <span className="text-red-600">LATEST</span> PROJECT
      </h2>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        In our latest project, we successfully completed a high-volume
        manufacturing order that included men’s formalwear, women’s ethnic
        garments, and playful children’s outfits. The collection was designed to
        reflect the client’s brand identity and executed with exceptional
        attention to detail. We used our advanced machinery to ensure flawless
        stitching, accurate sizing, and on-time delivery. From sourcing the
        fabrics to the final quality check, every process was managed
        seamlessly. This project showcases our ability to combine large-scale
        production with creativity and premium-quality output.
      </p>

      {/* Image Gallery */}
      <div className="flex gap-4 justify-center mt-6 h-64">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative shadow-lg overflow-hidden transition-all duration-500 cursor-pointer  
              ${activeIndex === index ? "w-3/5" : "w-1/5"} h-[102%]`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img
              src={item.image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay text in center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <button className="px-4 py-2 bg-red-600 rounded-md text-white">
                SHOW MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
