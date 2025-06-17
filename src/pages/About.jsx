import React, { useState, useEffect } from "react";
import {
  Star,
  Users,
  Award,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";

const AboutUsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      value: "300+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="w-8 h-8 text-red-600" />,
      value: "5.0",
      label: "Average Rating",
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      value: "8+",
      label: "Years Experience",
    },
  ];

  const [currentStat, setCurrentStat] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextStat = () => {
    setCurrentStat((prev) => (prev === stats.length - 1 ? 0 : prev + 1));
  };

  const prevStat = () => {
    setCurrentStat((prev) => (prev === 0 ? stats.length - 1 : prev - 1));
  };

  return (
    <>
      <NavBar />
      <section id="about" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ABOUT US
            </h2>
            <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Crafting exceptional experiences and delivering quality solutions
              that exceed expectations
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Founded with a vision to transform the industry, we have been
                dedicated to providing exceptional service and innovative
                solutions. Our journey began with a simple belief: that quality
                and customer satisfaction should never be compromised.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Over the years, we have built a reputation for excellence,
                working with clients from various industries and helping them
                achieve their goals through our expertise and commitment to
                quality.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                  <span className="ml-2 text-sm text-gray-600">5.0 Rating</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 md:p-8">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our team"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Stats - Slideshow on mobile, grid on desktop */}
          <div className="mb-12 md:mb-16">
            {/* Mobile Slideshow */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentStat * 100}%)` }}
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="text-center bg-white p-6 rounded-lg shadow-sm">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          {stat.icon}
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {stat.value}
                        </h4>
                        <p className="text-gray-600">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevStat}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full z-10"
                aria-label="Previous stat"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextStat}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full z-10"
                aria-label="Next stat"
              >
                <ChevronRight size={20} />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {stats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentStat === index ? "bg-red-600" : "bg-gray-300"
                    }`}
                    aria-label={`Go to stat ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative solutions that empower our clients to
                achieve their goals while maintaining the highest standards of
                quality, integrity, and customer service.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the leading provider in our industry, recognized for
                our commitment to excellence, innovation, and creating lasting
                value for our clients and community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUsSection;
