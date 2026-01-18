"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Data for different categories
const categoriesData = [
  {
    id: "rooms",
    title: "Shop by Rooms",
    items: [
      {
        id: "indoor",
        name: "Indoor Room",
        image: "https://i.ibb.co.com/V0TBzg7T/image-14.jpg",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[300px]",
      },
      {
        id: "outdoor",
        name: "Outdoor Room",
        image: "https://i.ibb.co.com/DDcZZYzR/image-15.jpg",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[260px]",
      },
      {
        id: "bedroom",
        name: "Bedroom",
        image: "https://i.ibb.co.com/8DK7PJdw/image-16.jpg",
        className: "col-span-1 lg:row-span-2 h-[300px] lg:h-full",
      },
      {
        id: "workspace",
        name: "Workspace",
        image: "https://i.ibb.co.com/v48vvp0r/image-17.jpg",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[300px]",
      },
      {
        id: "bathroom",
        name: "Bathroom",
        image: "https://i.ibb.co.com/78v0kgR/image-18.jpg",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[260px]",
      },
    ],
  },
  {
    id: "types",
    title: "Shop by Plant Types",
    items: [
      {
        id: "floor-plants",
        name: "Floor Plants",
        image: "https://images.unsplash.com/photo-1649460681436-46a7fde6ef08",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[300px]",
      },
      {
        id: "succulents",
        name: "Succulents",
        image: "https://i.ibb.co.com/wD8tJ4J/image-19.jpg",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[260px]",
      },
      {
        id: "tropical",
        name: "Tropical",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
        className: "col-span-1 lg:row-span-2 h-[300px] lg:h-full",
      },
      {
        id: "pet-friendly",
        name: "Pet Friendly",
        image: "https://images.unsplash.com/photo-1606146350176-804f4c84fb30",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[300px]",
      },
      {
        id: "hanging",
        name: "Hanging Plants",
        image: "https://images.unsplash.com/photo-1550074930-5d91cddbf0cc",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[260px]",
      },
    ],
  },
  {
    id: "sizes",
    title: "Shop by Styles",
    items: [
      {
        id: "modern",
        name: "Modern Minimalist",
        image:
          "https://images.unsplash.com/photo-1593768409671-0d68c6255a48",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[300px]",
      },
      {
        id: "boho",
        name: "Boho Chic",
        image:
          "https://images.unsplash.com/photo-1630533041902-fda9ef0af9b4",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[260px]",
      },
      {
        id: "jungle",
        name: "Urban Jungle",
        image:
          "https://hisforhomeblog.com/wp-content/uploads/urban-jungle.jpg",
        className: "col-span-1 lg:row-span-2 h-[300px] lg:h-full",
      },
      {
        id: "office",
        name: "Office Ready",
        image:
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[300px]",
      },
      {
        id: "rare",
        name: "Rare Finds",
        image:
          "https://images.unsplash.com/photo-1630862094032-a44d79e63e2d",
        className: "col-span-1 row-span-1 h-[240px] lg:h-[260px]",
      },
    ],
  },
];

const ShopByCategory = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev + 1) % categoriesData.length);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex(
      (prev) => (prev - 1 + categoriesData.length) % categoriesData.length,
    );
  };

  const currentCategory = categoriesData[currentCategoryIndex];
  const progress = ((currentCategoryIndex + 1) / categoriesData.length) * 100;

  // Split title for coloring
  const titleParts = currentCategory.title.split(" ");
  const lastWord = titleParts.pop();
  const firstPart = titleParts.join(" ");

  return (
    <section className="bg-[#FAFAF6] transition-colors duration-500 pb-10">
      <div className="mx-10 px-4 xl:px-10">
        {/* Header */}
        <div className="text-center mb-6 animate-fade-in key={currentCategory.id}">
          <p className="text-gray-500 text-md mb-2 font-medium">
            Our Categories
          </p>
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">
            {firstPart} <span className="text-green-600">{lastWord}</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div
          key={currentCategory.id}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up"
        >
          {/* Column 1 (Left) */}
          <div className="flex flex-col gap-6 sm:order-2 lg:order-1">
            <PlantCard plant={currentCategory.items[0]} />
            <PlantCard plant={currentCategory.items[1]} />
          </div>

          {/* Column 2 (Center Tall) */}
          <div className="flex flex-col gap-6 h-full sm:order-1 sm:col-span-2 lg:order-2 lg:col-span-1">
            <PlantCard plant={currentCategory.items[2]} isCenter={true} />
          </div>

          {/* Column 3 (Right) */}
          <div className="flex flex-col gap-6 sm:order-3 lg:order-3">
            <PlantCard plant={currentCategory.items[3]} />
            <PlantCard plant={currentCategory.items[4]} />
          </div>
        </div>

        {/* Navigation / Progress Bar */}
        <div className="pt-5 flex items-center justify-between">
          <div className="relative w-full max-w-4xl h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-green-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex gap-3 ml-6">
            <button
              onClick={prevCategory}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-500 hover:text-green-600 transition-colors active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextCategory}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 text-gray-800 hover:text-green-600 transition-colors active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// Reusable Card Component
const PlantCard = ({ plant, isCenter = false }) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl group cursor-pointer ${
        isCenter
          ? "h-[320px] lg:h-full"
          : plant.className
              .split(" ")
              .filter((c) => c.startsWith("h-"))
              .join(" ")
      }`}
    >
      <img
        src={plant.image}
        alt={plant.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 z-10">
        <h3 className="text-white text-2xl font-serif font-medium tracking-wide">
          {plant.name}
        </h3>
      </div>
    </div>
  );
};

export default ShopByCategory;
