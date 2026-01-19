"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";
import FilterSidebar from "@/components/plants/FilterSidebar";
import PlantGrid from "@/components/plants/PlantGrid";

const PlantsPage = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: 100,
    rating: "",
    size: "",
    availability: "",
    sort: "default",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 1,
  });

  const fetchPlants = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        ...filters,
      });

      // Remove empty filters
      for (const [key, value] of queryParams.entries()) {
        if (!value) queryParams.delete(key);
      }

      const res = await fetch(`http://localhost:5001/plants?${queryParams}`);
      const data = await res.json();

      if (data.plants) {
        setPlants(data.plants);
        setPagination((prev) => ({
          ...prev,
          total: data.total,
          totalPages: data.totalPages,
        }));
      }
    } catch (error) {
      console.error("Failed to fetch plants:", error);
    } finally {
      setLoading(false);
    }
  };

  // Re-fetch when filters or page changes
  useEffect(() => {
    fetchPlants();
  }, [filters, pagination.page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSortChange = (e) => {
    setFilters((prev) => ({ ...prev, sort: e.target.value }));
  };

  return (
    <div className="bg-[#FAFAF6] min-h-screen pb-20">
      {/* Header / Breadcrumb */}
      <div
        className="bg-white py-12 mb-10 border-b border-gray-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/dJkKY74N/pattern.png')",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-4 xl:px-20 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] mb-4">
            Plants
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span className="text-green-700">Plants</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 xl:px-20 flex flex-col lg:flex-row gap-8 xl:gap-16">
        {/* Sidebar */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Product Grid Area */}
        <div className="flex-1">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-gray-500 text-sm font-medium">
              Showing {(pagination.page - 1) * pagination.limit + 1}-
              {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
              of {pagination.total} results
            </p>

            <div className="flex items-center gap-3">
              <span className="text-base font-semibold font-serif text-[#1A1A1A]">
                Sort by:
              </span>
              <div className="relative">
                <select
                  className="appearance-none bg-white border border-green-600 rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium text-[#1A1A1A] focus:outline-none cursor-pointer"
                  value={filters.sort}
                  onChange={handleSortChange}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#1A1A1A]">
                  <ChevronDown size={16} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <PlantGrid plants={plants} loading={loading} />

          {/* Pagination */}
          {!loading && pagination.totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-green-50 hover:text-green-700 disabled:opacity-50 disabled:hover:bg-white transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              {[...Array(pagination.totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    pagination.page === i + 1
                      ? "bg-green-600 text-white"
                      : "bg-white border border-gray-200 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-green-50 hover:text-green-700 disabled:opacity-50 disabled:hover:bg-white transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantsPage;
