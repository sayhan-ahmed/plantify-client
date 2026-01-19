"use client";
import React from "react";
import { Heart } from "lucide-react";
import { FaStar } from "react-icons/fa6";

const PlantCard = ({ plant }) => {
  // Calculate discount percentage
  const discount = plant.isSale
    ? Math.round(((plant.salePrice - plant.price) / plant.salePrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-[32px] p-3 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-[180px] w-full bg-[#F3F4F6] rounded-[24px] overflow-hidden group">
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#8C8C8C] text-white text-[11px] font-medium px-3 py-1.5 rounded-full capitalize">
            {plant.category ? plant.category.split(" ")[0] : "Indoor"}
          </span>
        </div>

        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="pt-4 px-1 pb-2">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-[#1A1A1A] font-serif leading-tight">
            {plant.name}
          </h3>
          <button className="text-[#1A1A1A] hover:text-red-500 transition-colors pt-1">
            <Heart size={22} strokeWidth={2} />
          </button>
        </div>

        {/* Rating & Sold */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center text-yellow-400">
            <FaStar />
          </div>
          <span className="text-sm font-semibold text-gray-500">
            {plant.rating} ({plant.reviews || 125})
          </span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-500">{plant.sold} sold</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          {plant.isSale && (
            <span className="bg-[#FFD4D4] text-[#E44A4A] text-xs font-bold px-2 py-1 rounded-[6px]">
              {discount}%
            </span>
          )}

          <span className="text-lg font-semibold text-[#1A1A1A]">
            $
            {plant.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          {plant.isSale && (
            <span className="text-gray-400 line-through text-sm font-medium">
              $
              {plant.salePrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
