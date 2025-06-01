import { useNavigate } from "react-router-dom";
import image from "../../assets/Product/image.png";

const products = Array(8).fill({
  name: "PRODUCT 1",
  price: "₹5,599.00",
  image: image,
});

const Product = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/products"); // Use relative path since basename is set
  };


  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-100">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          OUR <span className="text-red-600">PRODUCTS</span>
        </h2>
      </div>
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 mt-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* View More Button */}
      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
        <button 
          onClick={handleViewMore}
          className="bg-red-600 hover:bg-red-700 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Product;