"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import PlantCard from "./plants/PlantCard";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";

const Hero = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [plantType, setPlantType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Office Plants",
    "Succulents",
    "Tropical Plants",
    "Rare Plants",
  ];

  const fetchPlants = async (
    search = "",
    type = "",
    minP = "",
    maxP = "",
    rat = "",
  ) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        limit: 4,
        search: search,
        category: type,
        minPrice: minP,
        maxPrice: maxP,
        rating: rat,
      });

      // Remove empty filters
      if (!search) queryParams.delete("search");
      if (!type) queryParams.delete("category");
      if (!minP) queryParams.delete("minPrice");
      if (!maxP) queryParams.delete("maxPrice");
      if (!rat) queryParams.delete("rating");

      const res = await fetch(
        `https://plantify-server-one.vercel.app/plants?${queryParams}`,
      );
      const data = await res.json();
      if (data.plants) {
        setPlants(data.plants);
      }
    } catch (error) {
      console.error("Failed to fetch plants:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setHasSearched(true);
    fetchPlants(searchQuery, plantType, minPrice, maxPrice, rating);
  };

  return (
    <div className="max-w-[1600px] mx-auto relative w-full bg-[#FCFCFC] pb-10">
      {/* Hero Content Area */}
      <div className="relative w-full py-4 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 opacity-80"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/dJkKY74N/pattern.png')",
            backgroundSize: "1000px auto",
            backgroundPosition: "top center",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10 mx-auto px-4 xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col gap-4 text-center lg:text-left z-20 ml-10 mt-10 lg:mt-0">
              <h1 className="font-serif text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-[#1A1A1A] tracking-tight">
                Grow Your Own{" "}
                <span className="text-green-600">Little Paradise</span>
              </h1>
              <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed max-w-[400px] mx-auto lg:mx-0 font-medium">
                From living rooms to workspaces, make every corner bloom with
                life.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-5 mt-5 mx-auto lg:mx-0">
                <Link href="/plants">
                  <Button
                    variant="secondary"
                    icon={ArrowRight}
                    className="px-6 py-2.5"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link
                  href="/pots-and-accessories"
                  className="text-[#1A1A1A] text-[14px] font-semibold underline underline-offset-4 hover:text-green-700 transition-colors"
                >
                  View Other Products
                </Link>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative w-full lg:w-1/2 h-[260px] md:h-[360px] lg:h-[400px] flex items-end justify-center lg:justify-end lg:mt-0">
              {/* Plant 1 (Left) */}
              <div className="absolute left-2 md:left-[15%] lg:left-[20%] bottom-6 lg:bottom-2 w-[180px] md:w-[220px] z-20 translate-y-[5%]">
                <img
                  src="https://i.ibb.co.com/qtG6cPQ/Plant-15.png"
                  alt="Plant 1"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Plant 2 (Middle - Fiddle Leaf) */}
              <div className="absolute left-[50%] -translate-x-1/2 md:left-[50%] md:-translate-x-1/2 lg:left-[40%] lg:translate-x-0 -bottom-4 lg:-bottom-5 w-[200px] md:w-[280px] z-10 translate-y-[0%]">
                <img
                  src="https://i.ibb.co.com/zWDLRHFX/Plant-14.png"
                  alt="Plant 2"
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Plant 3 (Right) */}
              <div className="absolute right-2 md:right-[15%] lg:right-[-5%] bottom-4 lg:bottom-0 w-[140px] md:w-[200px] z-20 translate-y-[10%]">
                <img
                  src="https://i.ibb.co.com/fVtC9Z1J/Plant-16.png"
                  alt="Plant 3"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="relative z-30 px-4 -mt-8 md:-mt-12 lg:-mt-14 mb-16">
        <div className="mx-8 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-end">
            {/* Search Input Section */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#1A1A1A] block pl-1">
                Find your Plant
              </label>
              <div className="flex items-center gap-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus-within:border-green-500 transition-colors">
                <Search size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent outline-none text-[13px] placeholder:text-gray-400 text-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
            </div>

            {/* Type Dropdown Section */}
            <div className="flex-1 flex flex-col gap-2 relative">
              <label className="text-[13px] font-bold text-[#1A1A1A] block pl-1">
                Choose Type Plant
              </label>
              <div
                className="flex items-center justify-between w-full border border-gray-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer hover:border-green-500 transition-colors group"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid size={18} className="text-gray-400" />
                  <span className="text-[13px] text-gray-500 group-hover:text-green-600 transition-colors">
                    {plantType || "All Type Product"}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div
                    className="px-4 py-2 hover:bg-green-50 text-[13px] text-gray-600 cursor-pointer transition-colors"
                    onClick={() => {
                      setPlantType("");
                      setIsDropdownOpen(false);
                    }}
                  >
                    All Type Product
                  </div>
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="px-4 py-2 hover:bg-green-50 text-[13px] text-gray-600 cursor-pointer transition-colors"
                      onClick={() => {
                        setPlantType(cat);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons Section */}
            <div className="w-full lg:w-auto flex items-center gap-3">
              <button
                className={`p-2.5 rounded-lg transition-all duration-300 border ${
                  isAdvancedOpen
                    ? "bg-green-600 text-white border-green-600 shadow-md"
                    : "bg-[#F9F9F9] hover:bg-gray-100 text-gray-800 border-transparent hover:border-gray-200"
                }`}
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                title="Advanced Filters"
              >
                <SlidersHorizontal size={20} className="transform rotate-90" />
              </button>
              <Button
                variant="primary"
                className="flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-[13px] font-bold"
                onClick={handleSearch}
              >
                Find Product
              </Button>
            </div>
          </div>

          {/* Advanced Filters Row */}
          {isAdvancedOpen && (
            <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                <label className="text-[12px] font-bold text-[#1A1A1A] block pl-1">
                  Min Price ($)
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-green-500 transition-colors"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                <label className="text-[12px] font-bold text-[#1A1A1A] block pl-1">
                  Max Price ($)
                </label>
                <input
                  type="number"
                  placeholder="1000"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-green-500 transition-colors"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 min-w-[150px]">
                <label className="text-[12px] font-bold text-[#1A1A1A] block pl-1">
                  Min Rating
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-green-500 transition-colors bg-white cursor-pointer pr-10"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Any Rating</option>
                    <option value="4">4.0 & Up</option>
                    <option value="4.5">4.5 & Up</option>
                    <option value="4.8">4.8 & Up</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <Button
                  variant="secondary"
                  className="text-sm font-bold py-[9px]"
                  onClick={() => {
                    setMinPrice("");
                    setMaxPrice("");
                    setRating("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {hasSearched && (
        <div className="max-w-[1600px] mx-auto px-4 xl:px-20 mt-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">
              Search Results
            </h2>
            <Link
              href="/plants"
              className="text-green-600 font-semibold hover:underline"
            >
              See More
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-[300px] bg-gray-100 animate-pulse rounded-[32px]"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {plants.length > 0 ? (
                plants.map((plant) => (
                  <PlantCard key={plant._id} plant={plant} />
                ))
              ) : (
                <div className="col-span-full py-10 px-4 text-center bg-white rounded-[40px] border border-gray-100 shadow-sm">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-600 mb-3 animate-pulse">
                    <Search size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-3">
                    No Plants Found
                  </h3>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setPlantType("");
                      setMinPrice("");
                      setMaxPrice("");
                      setRating("");
                      handleSearch();
                    }}
                    variant="primary"
                    className="px-8"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
