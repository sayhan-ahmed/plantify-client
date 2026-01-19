"use client";
import React from "react";
import { Heart } from "lucide-react";
import { BiCart } from "react-icons/bi";
import Button from "@/components/ui/Button";

const PlantCard = ({ plant }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-[280px] w-full bg-[#FAFAF6] overflow-hidden">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {plant.isSale && (
            <span className="bg-red-50 text-red-500 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider">
              {Math.round(
                ((plant.salePrice - plant.price) / plant.price) * 100,
              ) * -1}
              %
            </span>
          )}
          {/* Tag Badges */}
          {plant.tags && plant.tags.includes("indoor") && (
            <span className="bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
              Indoor
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 transition-colors shadow-sm">
          <Heart size={18} />
        </button>

        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick Add Overlay */}
        <div className="absolute bottom-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors">
            <BiCart size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-[#1A1A1A] mb-1 font-serif">
          {plant.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400 text-sm">
            {"★".repeat(Math.round(plant.rating))}
            <span className="text-gray-200">
              {"★".repeat(5 - Math.round(plant.rating))}
            </span>
          </div>
          <span className="text-xs text-gray-400 font-medium">
            ({plant.rating}) • {plant.sold} sold
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center gap-2">
          {plant.isSale ? (
            <>
              <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded text-sm font-bold">
                ${plant.price.toFixed(2)}
              </span>
              <span className="text-gray-400 line-through text-sm">
                ${plant.salePrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#1A1A1A] font-bold">
              ${plant.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
