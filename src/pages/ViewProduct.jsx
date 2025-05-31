import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  Grid,
  List,
  MoreHorizontal,
  Star,
  Filter,
  X,
} from "lucide-react";

export default function ProductListing() {
  // Complete product dataset
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
      brand: "My Shooed",
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
      brand: "My Shooed",
      size: "M",
      image:
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
    },
  ];

  // Calculate max price for the price range slider
  const maxPrice = Math.ceil(
    Math.max(...allProducts.map((p) => p.salePrice)) / 100
  );

  const [filters, setFilters] = useState({
    category: [],
    ratings: "1.0 & up",
    brand: [],
    priceRange: [0, maxPrice],
    sizeRange: [5, 15],
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    ratings: true,
    brand: true,
    price: true,
    size: true,
  });

  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      // Category filter (show all if no categories selected)
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      ) {
        return false;
      }

      // Brand filter (show all if no brands selected)
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }

      // Price filter
      if (
        product.salePrice < filters.priceRange[0] * 100 ||
        product.salePrice > filters.priceRange[1] * 100
      ) {
        return false;
      }

      // Rating filter
      const minRating = parseFloat(filters.ratings.split(" ")[0]);
      if (product.rating < minRating) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high":
        filtered.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      ratings: "1.0 & up",
      brand: [],
      priceRange: [0, maxPrice],
      sizeRange: [5, 15],
    });
  };

  const StarRating = ({ rating, showCount = false, count = 0 }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : star <= Math.ceil(rating)
                ? "fill-yellow-200 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        {showCount && (
          <span className="text-sm text-gray-500">({count} Reviews)</span>
        )}
      </div>
    );
  };

  const FilterSection = ({ title, children, isExpanded, onToggle }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
      >
        {title}
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isExpanded && children}
    </div>
  );

  const CheckboxItem = ({ label, count, checked, onChange }) => (
    <label className="flex items-center justify-between text-sm text-gray-700 mb-2 cursor-pointer">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
        />
        {label}
      </div>
      <span className="text-gray-500">({count})</span>
    </label>
  );

  const RatingFilter = ({ rating, count, selected, onChange }) => (
    <label className="flex items-center justify-between text-sm text-gray-700 mb-2 cursor-pointer">
      <div className="flex items-center">
        <input
          type="radio"
          name="rating"
          checked={selected}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
        />
        <StarRating rating={rating} />
        <span className="ml-2">{rating}.0 & up</span>
      </div>
      <span className="text-gray-500">({count})</span>
    </label>
  );

  // Calculate counts for filters
  const getCategoryCount = (category) => {
    return allProducts.filter((p) => p.category === category).length;
  };

  const getBrandCount = (brand) => {
    return allProducts.filter((p) => p.brand === brand).length;
  };

  const getRatingCount = (minRating) => {
    return allProducts.filter((p) => p.rating >= minRating).length;
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
      {/* Mobile filter dialog */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              aria-hidden="true"
              onClick={() => setMobileFiltersOpen(false)}
            ></div>

            {/* Dialog panel */}
            <div className="inline-block align-bottom bg-white rounded-t-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Filters
                  </h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile filter content */}
                <div className="overflow-y-auto max-h-[60vh]">
                  {/* Category Filter */}
                  <FilterSection
                    title="Category"
                    isExpanded={expandedSections.category}
                    onToggle={() => toggleSection("category")}
                  >
                    <CheckboxItem
                      label="Kid"
                      count={getCategoryCount("Kid")}
                      checked={filters.category.includes("Kid")}
                      onChange={() => handleCheckboxChange("category", "Kid")}
                    />
                    <CheckboxItem
                      label="Men"
                      count={getCategoryCount("Men")}
                      checked={filters.category.includes("Men")}
                      onChange={() => handleCheckboxChange("category", "Men")}
                    />
                    <CheckboxItem
                      label="Women"
                      count={getCategoryCount("Women")}
                      checked={filters.category.includes("Women")}
                      onChange={() => handleCheckboxChange("category", "Women")}
                    />
                    <CheckboxItem
                      label="Casual"
                      count={getCategoryCount("Casual")}
                      checked={filters.category.includes("Casual")}
                      onChange={() =>
                        handleCheckboxChange("category", "Casual")
                      }
                    />
                    <CheckboxItem
                      label="Sport"
                      count={getCategoryCount("Sport")}
                      checked={filters.category.includes("Sport")}
                      onChange={() => handleCheckboxChange("category", "Sport")}
                    />
                    <CheckboxItem
                      label="Rainbow"
                      count={getCategoryCount("Rainbow")}
                      checked={filters.category.includes("Rainbow")}
                      onChange={() =>
                        handleCheckboxChange("category", "Rainbow")
                      }
                    />
                  </FilterSection>

                  {/* Ratings Filter */}
                  <FilterSection
                    title="Ratings"
                    isExpanded={expandedSections.ratings}
                    onToggle={() => toggleSection("ratings")}
                  >
                    <RatingFilter
                      rating={4}
                      count={getRatingCount(4)}
                      selected={filters.ratings === "4.0 & up"}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, ratings: "4.0 & up" }))
                      }
                    />
                    <RatingFilter
                      rating={3}
                      count={getRatingCount(3)}
                      selected={filters.ratings === "3.0 & up"}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, ratings: "3.0 & up" }))
                      }
                    />
                    <RatingFilter
                      rating={2}
                      count={getRatingCount(2)}
                      selected={filters.ratings === "2.0 & up"}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, ratings: "2.0 & up" }))
                      }
                    />
                    <RatingFilter
                      rating={1}
                      count={getRatingCount(1)}
                      selected={filters.ratings === "1.0 & up"}
                      onChange={() =>
                        setFilters((prev) => ({ ...prev, ratings: "1.0 & up" }))
                      }
                    />
                  </FilterSection>

                  {/* Brand Filter */}
                  <FilterSection
                    title="Brand"
                    isExpanded={expandedSections.brand}
                    onToggle={() => toggleSection("brand")}
                  >
                    <CheckboxItem
                      label="Adidas"
                      count={getBrandCount("Adidas")}
                      checked={filters.brand.includes("Adidas")}
                      onChange={() => handleCheckboxChange("brand", "Adidas")}
                    />
                    <CheckboxItem
                      label="Nick"
                      count={getBrandCount("Nick")}
                      checked={filters.brand.includes("Nick")}
                      onChange={() => handleCheckboxChange("brand", "Nick")}
                    />
                    <CheckboxItem
                      label="Jenck & Co"
                      count={getBrandCount("Jenck & Co")}
                      checked={filters.brand.includes("Jenck & Co")}
                      onChange={() =>
                        handleCheckboxChange("brand", "Jenck & Co")
                      }
                    />
                    <CheckboxItem
                      label="My Shooed"
                      count={getBrandCount("My Shooed")}
                      checked={filters.brand.includes("My Shooed")}
                      onChange={() =>
                        handleCheckboxChange("brand", "My Shooed")
                      }
                    />
                    <CheckboxItem
                      label="Florida Fox"
                      count={getBrandCount("Florida Fox")}
                      checked={filters.brand.includes("Florida Fox")}
                      onChange={() =>
                        handleCheckboxChange("brand", "Florida Fox")
                      }
                    />
                  </FilterSection>

                  {/* Price Filter */}
                  <FilterSection
                    title="Price"
                    isExpanded={expandedSections.price}
                    onToggle={() => toggleSection("price")}
                  >
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="range"
                          min="0"
                          max={maxPrice}
                          value={filters.priceRange[0]}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              priceRange: [
                                parseInt(e.target.value),
                                prev.priceRange[1],
                              ],
                            }))
                          }
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <input
                          type="range"
                          min="0"
                          max={maxPrice}
                          value={filters.priceRange[1]}
                          onChange={(e) =>
                            setFilters((prev) => ({
                              ...prev,
                              priceRange: [
                                prev.priceRange[0],
                                parseInt(e.target.value),
                              ],
                            }))
                          }
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₹{filters.priceRange[0] * 100}</span>
                        <span>₹{filters.priceRange[1] * 100}</span>
                      </div>
                    </div>
                  </FilterSection>

                  {/* Size Filter */}
                  <FilterSection
                    title="Size"
                    isExpanded={expandedSections.size}
                    onToggle={() => toggleSection("size")}
                  >
                    <div className="space-y-3">
                      <input
                        type="range"
                        min="5"
                        max="15"
                        value={filters.sizeRange[1]}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            sizeRange: [
                              prev.sizeRange[0],
                              parseInt(e.target.value),
                            ],
                          }))
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{filters.sizeRange[0]}</span>
                        <span>{filters.sizeRange[1]}</span>
                      </div>
                    </div>
                  </FilterSection>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={clearAllFilters}
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters Sidebar - Desktop */}
      <div className="hidden md:block w-80 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Clear All
          </button>
        </div>

        {/* Category Filter */}
        <FilterSection
          title="Category"
          isExpanded={expandedSections.category}
          onToggle={() => toggleSection("category")}
        >
          <CheckboxItem
            label="Kid"
            count={getCategoryCount("Kid")}
            checked={filters.category.includes("Kid")}
            onChange={() => handleCheckboxChange("category", "Kid")}
          />
          <CheckboxItem
            label="Men"
            count={getCategoryCount("Men")}
            checked={filters.category.includes("Men")}
            onChange={() => handleCheckboxChange("category", "Men")}
          />
          <CheckboxItem
            label="Women"
            count={getCategoryCount("Women")}
            checked={filters.category.includes("Women")}
            onChange={() => handleCheckboxChange("category", "Women")}
          />
          <CheckboxItem
            label="Casual"
            count={getCategoryCount("Casual")}
            checked={filters.category.includes("Casual")}
            onChange={() => handleCheckboxChange("category", "Casual")}
          />
          <CheckboxItem
            label="Sport"
            count={getCategoryCount("Sport")}
            checked={filters.category.includes("Sport")}
            onChange={() => handleCheckboxChange("category", "Sport")}
          />
          <CheckboxItem
            label="Rainbow"
            count={getCategoryCount("Rainbow")}
            checked={filters.category.includes("Rainbow")}
            onChange={() => handleCheckboxChange("category", "Rainbow")}
          />
        </FilterSection>

        {/* Ratings Filter */}
        <FilterSection
          title="Ratings"
          isExpanded={expandedSections.ratings}
          onToggle={() => toggleSection("ratings")}
        >
          <RatingFilter
            rating={4}
            count={getRatingCount(4)}
            selected={filters.ratings === "4.0 & up"}
            onChange={() =>
              setFilters((prev) => ({ ...prev, ratings: "4.0 & up" }))
            }
          />
          <RatingFilter
            rating={3}
            count={getRatingCount(3)}
            selected={filters.ratings === "3.0 & up"}
            onChange={() =>
              setFilters((prev) => ({ ...prev, ratings: "3.0 & up" }))
            }
          />
          <RatingFilter
            rating={2}
            count={getRatingCount(2)}
            selected={filters.ratings === "2.0 & up"}
            onChange={() =>
              setFilters((prev) => ({ ...prev, ratings: "2.0 & up" }))
            }
          />
          <RatingFilter
            rating={1}
            count={getRatingCount(1)}
            selected={filters.ratings === "1.0 & up"}
            onChange={() =>
              setFilters((prev) => ({ ...prev, ratings: "1.0 & up" }))
            }
          />
        </FilterSection>

        {/* Brand Filter */}
        <FilterSection
          title="Brand"
          isExpanded={expandedSections.brand}
          onToggle={() => toggleSection("brand")}
        >
          <CheckboxItem
            label="Adidas"
            count={getBrandCount("Adidas")}
            checked={filters.brand.includes("Adidas")}
            onChange={() => handleCheckboxChange("brand", "Adidas")}
          />
          <CheckboxItem
            label="Nick"
            count={getBrandCount("Nick")}
            checked={filters.brand.includes("Nick")}
            onChange={() => handleCheckboxChange("brand", "Nick")}
          />
          <CheckboxItem
            label="Jenck & Co"
            count={getBrandCount("Jenck & Co")}
            checked={filters.brand.includes("Jenck & Co")}
            onChange={() => handleCheckboxChange("brand", "Jenck & Co")}
          />
          <CheckboxItem
            label="My Shooed"
            count={getBrandCount("My Shooed")}
            checked={filters.brand.includes("My Shooed")}
            onChange={() => handleCheckboxChange("brand", "My Shooed")}
          />
          <CheckboxItem
            label="Florida Fox"
            count={getBrandCount("Florida Fox")}
            checked={filters.brand.includes("Florida Fox")}
            onChange={() => handleCheckboxChange("brand", "Florida Fox")}
          />
        </FilterSection>

        {/* Price Filter */}
        <FilterSection
          title="Price"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection("price")}
        >
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[0]}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: [parseInt(e.target.value), prev.priceRange[1]],
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)],
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{filters.priceRange[0] * 100}</span>
              <span>₹{filters.priceRange[1] * 100}</span>
            </div>
          </div>
        </FilterSection>

        {/* Size Filter */}
        <FilterSection
          title="Size"
          isExpanded={expandedSections.size}
          onToggle={() => toggleSection("size")}
        >
          <div className="space-y-3">
            <input
              type="range"
              min="5"
              max="15"
              value={filters.sizeRange[1]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sizeRange: [prev.sizeRange[0], parseInt(e.target.value)],
                }))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{filters.sizeRange[0]}</span>
              <span>{filters.sizeRange[1]}</span>
            </div>
          </div>
        </FilterSection>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Mobile filter bar */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-2">
            <select
              className="border border-gray-300 rounded px-3 py-2 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Header - Desktop */}
        <div className="hidden md:flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">View as</span>
            <div className="flex border border-gray-300 rounded">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-gray-100" : ""}`}
              >
                <List className="w-4 h-4" />
              </button>
              <button className="p-2">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort By</span>
            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4">
          <span className="text-sm text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </span>
        </div>

        {/* Products Grid */}
        <div
          className={`grid ${
            viewMode === "grid"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-4 md:gap-6`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <div
                className={`${
                  viewMode === "list" ? "md:w-1/3 h-48 md:h-auto" : "h-48"
                } rounded-t-lg overflow-hidden`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300/f0f0f0/999999?text=No+Image";
                  }}
                />
              </div>
              <div className={`p-4 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                <div className="flex items-center mb-2">
                  <StarRating rating={product.rating} />
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews} Reviews)
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-gray-900">
                    ₹{product.salePrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Grid className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
