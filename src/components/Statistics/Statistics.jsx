import React, { useEffect, useState } from "react";
// import StatisticsImage from "../../assets/Statistics/StatisticsImage.jpg";
const StatisticsImage =
  "https://priyanshgarments.com/assets/Statistics/StatisticsImage.JPG";

const useCounter = (start, end, duration) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, start, duration]);

  return count;
};

const Statistics = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsElement = document.getElementById("stats");
      if (statsElement) {
        const rect = statsElement.getBoundingClientRect();
        setInView(rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const successfulProjects = useCounter(0, 500, 2000);
  const happyClients = useCounter(0, 300, 2000);
  const yearsInMarket = useCounter(0, 5, 2000);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white flex flex-col lg:flex-row justify-center items-center py-8 md:py-12 lg:py-16 gap-8 lg:gap-12">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 max-w-3xl mx-auto space-y-4 md:space-y-6">
        {/* Title Section */}
        <div className="text-center lg:text-left space-y-3 md:space-y-4">
          <h1 className="text-base md:text-lg font-bold text-gray-800">
            OUR <span className="text-red-600">STATISTICS</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            MAKE YOUR <br className="hidden xs:block" />
            STATEMENT <span className="text-red-600">IN STYLE</span>
          </h2>
          <p className="text-sm sm:text-[0.92rem] md:text-base text-gray-700 leading-relaxed">
            Priyansh Garments has manufactured over 500 garments and served more
            than 300 satisfied clients worldwide. Our facility in Mumbai
            consistently delivers results for fashion startups, established
            retail brands, and corporate partners. Backed by 5 years of industry
            experience, we combine innovation and efficiency in every project.
            Each garment is a reflection of our commitment to precision,
            quality, and timely delivery. Our results are not just numbers —
            they are proof of our dedication to customer satisfaction and
            production excellence.
          </p>
        </div>

        {/* Statistics Section */}
        <div
          id="stats"
          className="grid  lg:grid-cols-3 grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-8"
        >
          {[
            { value: successfulProjects, label: "Successful Projects" },
            { value: happyClients, label: "Happy Clients" },
            { value: yearsInMarket, label: "Years in Market" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-3 sm:p-4 text-center bg-gray-50 rounded-lg"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {inView
                  ? `${stat.value.toLocaleString()}${
                      stat.label === "Years in Market" ? "" : "+"
                    }`
                  : "0"}
              </h1>
              <p className="text-xs sm:text-sm text-red-600 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={StatisticsImage}
          alt="Statistics Image"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-cover rounded-lg shadow-lg"
          style={{
            height: "auto",
            maxHeight: "400px",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;
