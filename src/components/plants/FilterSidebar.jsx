"use client";
import React from "react";
import Button from "@/components/ui/Button";

const FilterSidebar = ({ filters, setFilters }) => {
  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Bedroom Plants",
    "Workspace Plants",
    "Bathroom Plants",
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
          <div className="space-y-3">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.category === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-600 transition-colors"
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
          <h4 className="font-semibold text-[#1A1A1A] mb-4">Price</h4>
          <div className="flex items-center justify-between text-sm text-[#1A1A1A] font-medium mb-4">
            <span>$0.00</span>
            <span>$100.00</span>
          </div>
          {/* Range Input */}
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            value={filters.maxPrice || 100}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
            }
          />
          <div className="mt-2 text-right text-sm text-green-600 font-semibold">
            Max: ${filters.maxPrice || 100}
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
