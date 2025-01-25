import React, { useEffect, useState } from "react";
import StatisticsImage from "../../assets/Statistics/StatisticsImage.png";

// Counter function to animate numbers
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

  const handleScroll = () => {
    const statsElement = document.getElementById("stats");
    const rect = statsElement.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const successfulProjects = useCounter(0, 100000, 2000); // 2 seconds animation
  const happyClients = useCounter(0, 200, 2000);
  const yearsInMarket = useCounter(0, 10, 2000);

  return (
    <div className="w-full px-6 sm:px-12 bg-white flex flex-col lg:flex-row justify-center items-center py-12">
      <div className="max-w-7xl mx-auto text-left space-y-2 lg:w-1/2 lg:self-center lg:mr-10">
        {/* Title Section */}
        <h1 className="text-lg sm:text-lg font-bold text-gray-800 text-center lg:text-left">
          OUR <span className="text-red-600">STATISTIC</span>
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left">
          MAKE YOUR <br /> STATEMENT{" "}
          <span className="text-red-600">IN STYLE</span>
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Statistics Section */}
        <div
          id="stats"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">
              {inView ? `${successfulProjects} +` : "0"}
            </h1>
            <p className="text-sm text-red-600">Successful Projects</p>
          </div>
          <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">
              {inView ? `${happyClients} +` : "0"}
            </h1>
            <p className="text-sm text-red-600">Happy Clients</p>
          </div>
          <div className="p-4 text-center">
            <h1 className="text-2xl font-bold">
              {inView ? `${yearsInMarket} +` : "0"}
            </h1>
            <p className="text-sm text-red-600">Years in Market</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="my-8 lg:w-1/2 lg:self-center">
        <img
          src={StatisticsImage}
          alt="Statistics Image"
          className="w-full max-w-2xl mx-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Statistics;
