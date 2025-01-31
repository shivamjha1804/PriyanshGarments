import React from "react";
import image from "../../assets/Product/image.png";

const products = Array(8).fill({
  name: "PRODUCT 1",
  price: "₹5,599.00",
  image: image, // Replace with the actual image path
});

const Product = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="ext-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
        OUR <span className="text-red-600">PRODUCTS</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer  rounded-lg shadow-lg text-left transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="px-2 py-3">
              <p className="font-bold text-lg text-gray-700">{product.name}</p>
              <p className="text-sm font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-600 transition duration-300">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Product;
