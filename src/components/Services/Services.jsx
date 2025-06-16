import React from "react";
import watchImage from "../../assets/Services/ServiceWatch.png";

const Services = () => {
  const services = [
    {
      title: "Fast Response",
      description: "Quickly replying to messages, emails, or service requests.",
    },
    {
      title: "Quality Work",
      description:
        "Providing results that are well-made, professional, and meet high standards.",
    },
    {
      title: "Expert Team",
      description:
        "A group of skilled and knowledgeable professionals in the field.",
    },
    {
      title: "24/7 Support",
      description:
        "Help and assistance are available at any time—day or night.",
    },
  ];

  return (
    <div className="w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Services Grid Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-black p-6 sm:p-7 md:p-8 text-center rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 h-[200px] sm:h-[220px] md:h-[240px] lg:h-[250px]"
            >
              <img
                src={watchImage}
                alt={service.title}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain mb-3 sm:mb-4"
              />
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white text-xs sm:text-sm md:text-[0.9rem] leading-snug w-4/5 mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Title Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:pl-6 xl:pl-8">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 text-center lg:text-left">
            OUR <span className="text-red-600">SERVICES</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] xl:text-5xl font-semibold text-gray-900 text-center lg:text-left leading-tight">
            WE ARE DEDICATED <br className="hidden sm:block" />
            <span className="text-red-600">TO OUR WORK</span>
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-[0.92rem] md:text-base text-gray-700 leading-relaxed">
              At Priyansh Garments, we provide complete clothing manufacturing
              services tailored to your specific requirements. We handle
              everything from initial design discussions to final packaging and
              delivery. Our production covers men’s wear, women’s wear,
              kidswear, uniforms, medical scrubs, and fancy designer garments —
              all crafted to match your brand’s standards. Every stage of
              production is carried out using advanced machines and monitored
              closely for quality. We focus on meeting deadlines, ensuring fit
              accuracy, and delivering garments that your customers will love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
