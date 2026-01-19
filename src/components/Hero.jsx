import React from "react";
import Button from "./ui/Button";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="max-w-[1600px] mx-auto relative w-full bg-[#FCFCFC]">
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
                <Button
                  variant="secondary"
                  icon={ArrowRight}
                  className="px-6 py-2.5"
                >
                  Shop Now
                </Button>
                <button className="text-[#1A1A1A] text-[14px] font-semibold underline underline-offset-4 hover:text-green-700 transition-colors">
                  View All Product
                </button>
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
      <div className="relative z-30 px-4 -mt-8 md:-mt-12 lg:-mt-14">
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
                />
              </div>
            </div>

            {/* Type Dropdown Section */}
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[13px] font-bold text-[#1A1A1A] block pl-1">
                Choose Type Plant
              </label>
              <div className="flex items-center justify-between w-full border border-gray-200 rounded-lg px-3 py-2.5 bg-white cursor-pointer hover:border-green-500 transition-colors group">
                <div className="flex items-center gap-2">
                  <LayoutGrid size={18} className="text-gray-400" />
                  <span className="text-[13px] text-gray-500 group-hover:text-green-600 transition-colors">
                    All Type Product
                  </span>
                </div>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>

            {/* Buttons Section */}
            <div className="w-full lg:w-auto flex items-center gap-3">
              <button className="p-2.5 rounded-lg bg-[#F9F9F9] hover:bg-gray-100 text-gray-800 transition-colors border border-transparent hover:border-gray-200">
                <SlidersHorizontal size={20} className="transform rotate-90" />
              </button>
              <Button
                variant="primary"
                className="flex-1 lg:flex-none px-6 py-2.5 rounded-lg text-[13px] font-bold"
              >
                Find Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
