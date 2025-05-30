import React from "react";

const NewsletterFooter = () => {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto mb-8 px-4 flex flex-col md:flex-row items-center justify-between gap-8 ">
        {/* Left side - Text content */}
        <div className="text-left max-w-md">
          <h2 className="text-xl font-bold  mb-4 tracking-tight">
            Join Our Newsletter
          </h2>
          <p className=" text-sm leading-relaxed">
            Be the first to know about our latest updates, exclusive offers, and
            more.
          </p>
        </div>

        {/* Right side - Input form */}
        <div className="flex flex-col sm:flex-row  gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3 py-3 border border-white rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all bg-black"
          />
          <button className=" bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm pt-10 border-t border-gray-100">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold  mb-4">Product & Service</h3>
          <ul className="space-y-2 ">
            <li>Clothing</li>
            <li>Storage</li>
            <li>Wearables</li>
            <li>Accessories</li>
            <li>Lifestyle</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold  mb-4">Account</h3>
          <ul className="space-y-2 ">
            <li>Orders</li>
            <li>Service</li>
            <li>Wishlist</li>
            <li>Rewards</li>
            <li>My Products</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold  mb-4">Shop Now</h3>
          <ul className="space-y-2 ">
            <li>Offers</li>
            <li>Promos</li>
            <li>Online Shop FAQ</li>
            <li>Business Offer</li>
            <li>Student Offer</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold  mb-4">Support</h3>
          <ul className="space-y-2 ">
            <li>Contact</li>
            <li>Email Support</li>
            <li>Live Chat</li>
            <li>Phone Support</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold  mb-4">About</h3>
          <ul className="space-y-2 ">
            <li>Company Info</li>
            <li>Brand Guidelines</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm ">
        <div className="mb-4 md:mb-0">
          © 2025 PRIVANSHOFANERTS. All Rights Reserved
        </div>
        <div className="flex space-x-4">
          <span>Privacy</span>
          <span>Legal</span>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFooter;
