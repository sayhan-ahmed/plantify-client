"use client";
import React from "react";
import PlantCard from "./PlantCard";

const PlantGrid = ({ plants, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-[400px] bg-gray-100 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (!plants || plants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <span className="text-4xl">🌱</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          No plants found
        </h3>
        <p className="text-gray-500">
          Try adjusting your filters or checking back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantGrid;
