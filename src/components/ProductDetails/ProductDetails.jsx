import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();
  const [expandedSections, setExpandedSections] = useState({});

  // Sample product data - in a real app, this would be fetched based on the ID
  const allProducts = [
    {
      id: 1,
      name: "Classy White Apparel",
      originalPrice: 6999,
      salePrice: 5999,
      rating: 4.5,
      reviews: 102,
      category: "Men",
      brand: "Nick",
      size: "L",
      image:
        "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639",
    },
    {
      id: 2,
      name: "Striped Casual Shirt",
      originalPrice: 4999,
      salePrice: 3999,
      rating: 4.2,
      reviews: 89,
      category: "Men",
      brand: "Adidas",
      size: "M",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Rainbow Stripe Polo",
      originalPrice: 7999,
      salePrice: 6499,
      rating: 4.8,
      reviews: 156,
      category: "Rainbow",
      brand: "Jenck & Co",
      size: "S",
      image:
        "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Kids Summer Tee",
      originalPrice: 2999,
      salePrice: 1999,
      rating: 4.0,
      reviews: 67,
      category: "Kid",
      brand: "My Shoeed",
      size: "XS",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Women Floral Blouse",
      originalPrice: 5999,
      salePrice: 4599,
      rating: 4.6,
      reviews: 234,
      category: "Women",
      brand: "Florida Fox",
      size: "M",
      image:
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Sport Active Wear",
      originalPrice: 8999,
      salePrice: 7499,
      rating: 4.4,
      reviews: 98,
      category: "Sport",
      brand: "Adidas",
      size: "L",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Casual Denim Shirt",
      originalPrice: 6499,
      salePrice: 5199,
      rating: 3.8,
      reviews: 45,
      category: "Casual",
      brand: "Nick",
      size: "XL",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "Premium Cotton Shirt",
      originalPrice: 9999,
      salePrice: 8499,
      rating: 4.9,
      reviews: 312,
      category: "Men",
      brand: "Jenck & Co",
      size: "L",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Vintage Style Tee",
      originalPrice: 3999,
      salePrice: 2999,
      rating: 4.1,
      reviews: 78,
      category: "Casual",
      brand: "My Shoeed",
      size: "M",
      image:
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
    },
  ];

  // Find the current product based on ID
  const currentProduct = allProducts.find(product => product.id === parseInt(id));

  // Fallback product if ID not found
  const product = currentProduct || {
    id: 404,
    name: "PG 404",
    category: "Men's Clothing",
    brand: "PriyanshGarments",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    originalPrice: 7999,
    salePrice: 6999,
    rating: 4.5,
    reviews: 128
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Header */}
      <div className="bg-white px-4 py-3 border-b shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/products" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-700">Shop</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-gray-700">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x600/f0f0f0/999999?text=No+Image";
              }}
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

            {/* Price */}
            {product.originalPrice && product.salePrice && (
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.salePrice.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  Save ₹{(product.originalPrice - product.salePrice).toLocaleString()}
                </span>
              </div>
            )}

            {/* Category and Tag */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="text-gray-600">Category:</span>
                <span className="ml-2 text-gray-900">{product.category}</span>
              </div>
              <div>
                <span className="text-gray-600">Brand:</span>
                <span className="ml-2 text-gray-900">{product.brand}</span>
              </div>
              {product.size && (
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 text-gray-900">{product.size}</span>
                </div>
              )}
            </div>

            {/* Rating */}
            {product.rating && product.reviews && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : star <= Math.ceil(product.rating)
                          ? "text-yellow-200 fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} Reviews)
                </span>
              </div>
            )}

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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
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
                    This premium {product.name} is crafted with attention to detail and quality materials. 
                    Perfect for {product.category.toLowerCase()} who appreciate style and comfort. 
                    Each piece is designed to provide the perfect fit and long-lasting wear.
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
                    Made from high-quality cotton blend fabric that offers excellent breathability and comfort. 
                    The fabric is pre-shrunk and colorfast, ensuring that your garment maintains its shape 
                    and color wash after wash. Features a soft hand feel with just the right amount of stretch.
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
                    <ul className="space-y-2">
                      <li>• Machine washable for easy care</li>
                      <li>• Reinforced stitching for durability</li>
                      <li>• Fade-resistant colors</li>
                      <li>• Comfortable fit that moves with you</li>
                      <li>• Available in multiple sizes</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Care Instructions */}
              <div className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection("care")}
                  className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">Care Instructions</span>
                  {expandedSections.care ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {expandedSections.care && (
                  <div className="px-4 pb-4 text-gray-700">
                    <ul className="space-y-2">
                      <li>• Machine wash cold with like colors</li>
                      <li>• Use mild detergent</li>
                      <li>• Tumble dry low or hang to dry</li>
                      <li>• Iron on low heat if needed</li>
                      <li>• Do not bleach or dry clean</li>
                    </ul>
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