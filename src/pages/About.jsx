import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About PriyanshGarments
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Crafting quality garments with passion and precision since 2010.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-96"
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Garment factory"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                Our Story
              </div>
              <p className="mt-2 text-gray-600">
                Founded in 2010, PriyanshGarments started as a small tailoring
                shop with just two sewing machines. Today, we've grown into a
                full-scale garment manufacturing unit employing over 200 skilled
                workers and producing high-quality apparel for both domestic and
                international markets.
              </p>

              <div className="mt-6">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                  Our Mission
                </div>
                <p className="mt-2 text-gray-600">
                  To deliver exceptional quality garments at competitive prices
                  while maintaining ethical production practices and sustainable
                  business operations.
                </p>
              </div>

              <div className="mt-6">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                  Our Values
                </div>
                <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                  <li>Quality craftsmanship in every stitch</li>
                  <li>Fair wages and safe working conditions</li>
                  <li>Innovation in design and production</li>
                  <li>Customer satisfaction above all</li>
                  <li>Environmental responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-indigo-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Production Capacity
            </h3>
            <p className="text-gray-600">
              50,000+ garments per month with state-of-the-art machinery and
              skilled workforce.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-indigo-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Certifications
            </h3>
            <p className="text-gray-600">
              ISO 9001:2015 certified, OEKO-TEX Standard 100 compliant, and
              Sedex member.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-indigo-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quick Turnaround
            </h3>
            <p className="text-gray-600">
              From design to delivery in as little as 4 weeks, depending on
              order complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
