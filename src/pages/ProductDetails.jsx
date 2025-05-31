import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProductPage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-500">
            <span>Shop</span>
            <span className="mx-2">/</span>
            <span>Blazer Jackets</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900">PG404</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="PG 404 Jacket"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-4xl font-bold text-gray-900">PG 404</h1>

            {/* Category and Tag */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 text-gray-900">Men's Clothing</span>
              </div>
              <div>
                <span className="text-gray-600">Tag:</span>
                <span className="ml-2 text-gray-900">Men's Clothing</span>
              </div>
            </div>

            {/* Product Description */}
            <div className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <span className="font-semibold text-gray-900">
                    Breathability:
                  </span>
                  <span className="text-gray-700 ml-1">
                    Fabric allows air circulation, helping to regulate body
                    temperature and keeping the wearer cool and comfortable.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <span className="font-semibold text-gray-900">
                    Durability:
                  </span>
                  <span className="text-gray-700 ml-1">
                    Strong fabrics are resistant to wear and tear, ensuring
                    long-lasting use and maintaining their appearance over time.
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <span className="font-semibold text-gray-900">
                    Stretchability:
                  </span>
                  <span className="text-gray-700 ml-1">
                    Fabrics with stretch offer flexibility and comfort, allowing
                    for better movement and shape retention.
                  </span>
                </div>
              </div>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4 mt-8">
              {/* About this product */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("about")}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    About this product:
                  </span>
                  {expandedSections.about ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.about && (
                  <div className="px-4 pb-4 text-gray-700">
                    Detailed information about this product will be displayed
                    here.
                  </div>
                )}
              </div>

              {/* Fabric Description */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("fabric")}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    Fabric Description
                  </span>
                  {expandedSections.fabric ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.fabric && (
                  <div className="px-4 pb-4 text-gray-700">
                    Detailed fabric information and specifications will be shown
                    here.
                  </div>
                )}
              </div>

              {/* Our Features */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("features")}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    Our Features
                  </span>
                  {expandedSections.features ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.features && (
                  <div className="px-4 pb-4 text-gray-700">
                    Additional features and benefits of this product will be
                    listed here.
                  </div>
                )}
              </div>

              {/* Heading 4 */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("heading4")}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Heading 4</span>
                  {expandedSections.heading4 ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.heading4 && (
                  <div className="px-4 pb-4 text-gray-700">
                    Content for this section will be displayed here.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
