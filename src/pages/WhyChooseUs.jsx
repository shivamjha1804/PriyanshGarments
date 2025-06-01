import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why{" "}
            <span className="underline decoration-red-500 decoration-2 underline-offset-4">
              choose
            </span>{" "}
            Us
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="lg:order-1">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Fashion designer working with fabric"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:order-2">
            <div className="space-y-6">
              {/* Introduction Paragraph */}
              <p className="text-gray-600 leading-relaxed text-sm">
                At Priyojan Garments, we are dedicated to providing top-quality
                fabrics that meet the needs of a diverse range of industries.
                With years of expertise and a commitment to excellence, we have
                established ourselves as a trusted partner for businesses
                seeking reliable textile solutions. What sets us apart is our
                passion for craftsmanship, innovation, and sustainability. Our
                customer-focused approach means we work closely with you to
                deliver the perfect fabric solutions tailored to your specific
                requirements.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      High-Quality Materials:
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      We use only premium fabrics sourced from trusted suppliers
                      to ensure that every product meets the highest standards
                      of quality and durability.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Custom Solutions:
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      Our team offers personalized fabric options, tailoring
                      designs and materials to match the unique needs of your
                      business or project.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Sustainable Practices:
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      We are committed to environmentally-friendly manufacturing
                      processes, using eco-conscious materials and reducing
                      waste to support a greener future.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Fast Turnaround:
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      With advanced technology and streamlined production, we
                      deliver your orders on time, ensuring minimal delays and
                      maximum efficiency.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Expert Craftsmanship:
                    </span>
                    <span className="text-gray-600 text-sm ml-1">
                      Our skilled workforce combines industry knowledge with
                      modern techniques to produce fabrics that are both
                      functional and stylish.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
