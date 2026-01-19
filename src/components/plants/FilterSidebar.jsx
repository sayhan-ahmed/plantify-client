"use client";
import React from "react";
import Button from "@/components/ui/Button";

const FilterSidebar = ({ filters, setFilters }) => {
  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Bedroom Plants",
    "Office Plants",
    "Bathroom Plants",
    "Floor Plants",
    "Artificial Plants",
    "Succulents",
    "Hanging Plants",
    "Tropical Plants",
    "Pet Friendly",
    "Air Purifying",
    "Modern Minimalist",
    "Urban Jungle",
    "Boho Chic",
    "Rare Plants",
    "Ferns",
    "Cacti",
  ];

  const potSizes = ["Small", "Medium", "Large"];

  const handleCategoryChange = (category) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === category ? "" : category, // Toggle
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? "" : rating,
    }));
  };

  const handleSizeChange = (size) => {
    setFilters((prev) => ({
      ...prev,
      size: prev.size === size ? "" : size,
    }));
  };

  const handleAvailabilityChange = (status) => {
    setFilters((prev) => ({
      ...prev,
      availability: prev.availability === status ? "" : status,
    }));
  };

  return (
    <div className="w-full lg:w-[280px] flex-shrink-0 space-y-10">
      {/* Filter Options Header */}
      <div>
        <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6">
          Filter Options
        </h3>

        {/* Category */}
        <div className="mb-8">
          <h4 className="font-semibold text-[#1A1A1A] mb-4">Category</h4>
          <div className="space-y-3 max-h-[160px] overflow-y-scroll pr-2 custom-scrollbar">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.category === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-600 transition-colors flex-shrink-0"
                />
                <span
                  className={`text-[#666666] group-hover:text-green-700 transition-colors ${filters.category === cat ? "font-medium text-green-700" : ""}`}
                >
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-xl font-bold font-serif text-[#1A1A1A]">
              Price
            </h4>
            <span className="text-lg font-medium text-[#1A1A1A] font-serif">
              ${filters.minPrice || 0} - ${filters.maxPrice || 100}
            </span>
          </div>

          {/* Custom Range Input */}
          <div className="relative w-full h-8 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              className="w-full h-3 rounded-full appearance-none cursor-pointer focus:outline-none"
              style={{
                background: `linear-gradient(to right, #16a34a ${filters.maxPrice || 100}%, #e5e7eb ${filters.maxPrice || 100}%)`,
              }}
              value={filters.maxPrice || 100}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
              }
            />
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 28px;
                height: 28px;
                background: #16a34a;
                border: 4px solid white;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                transition:
                  transform 0.1s,
                  box-shadow 0.1s;
              }
              input[type="range"]::-webkit-slider-thumb:hover {
                transform: scale(1.1);
                box-shadow: 0 0 15px rgba(22, 163, 74, 0.3);
              }
              input[type="range"]::-moz-range-thumb {
                width: 28px;
                height: 28px;
                background: #16a34a;
                border: 4px solid white;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
            `}</style>
          </div>
        </div>

        {/* Review */}
        <div className="mb-8">
          <h4 className="font-semibold text-[#1A1A1A] mb-4">Review</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div
                key={star}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleRatingChange(star)}
              >
                <input
                  type="checkbox"
                  checked={filters.rating === star}
                  onChange={() => {}}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < star ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{star} Stars</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pot Size */}
        <div className="mb-8">
          <h4 className="font-semibold text-[#1A1A1A] mb-4">Pot Size</h4>
          <div className="space-y-3">
            {potSizes.map((size) => (
              <label
                key={size}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.size === size}
                  onChange={() => handleSizeChange(size)}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
                <span className="text-[#666666]">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <h4 className="font-semibold text-[#1A1A1A] mb-4">Availability</h4>
          <div className="space-y-3">
            {["In Stock", "Out of Stock"].map((status) => (
              <label
                key={status}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={filters.availability === status}
                  onChange={() => handleAvailabilityChange(status)}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-600"
                />
                <span className="text-[#666666]">{status}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
