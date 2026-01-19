"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "https://i.ibb.co.com/TMyJktT1/photo-1615835624010-93a0138bfc10.jpg",
    quote:
      "I am very satisfied with My Plant's service. The delivery was fast and safe, and the variety of houseplants was impressive. I will definitely come back to buy more plants for my home!",
    name: "Kristin Watson",
    role: "Plant Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co.com/V0TBzg7T/image-14.jpg",
    quote:
      "The plants arrived in perfect condition. I was worried about shipping fragile greenery, but the packaging was eco-friendly and protective. Highly recommended for any plant lover!",
    name: "Esther Howard",
    role: "Interior Designer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co.com/78v0kgR/image-18.jpg",
    quote:
      "Customer service was incredibly helpful in guiding me to choose the right plants for my low-light apartment. They are thriving, and my space feels so much more alive.",
    name: "Cameron Williamson",
    role: "Architect",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsAnimating(false);
    }, 300);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="bg-[#FAFAF6] py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
            Testimonial From <span className="text-green-600">Customers</span>
          </h2>
        </div>

        {/* Content Card */}
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Interactive Image */}
          <div className="w-full lg:w-1/2">
            <div
              className="relative h-[250px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-full rounded-[30px] overflow-hidden shadow-lg transition-opacity duration-300 ease-in-out"
              style={{ opacity: isAnimating ? 0.8 : 1 }}
            >
              <img
                src={current.image}
                alt="Interior with plants"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Review Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-xl">
            <div
              className={`transition-all duration-300 ease-in-out transform ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              {/* Quote Icon */}
              <div className="mb-6 text-[#1A1A1A]">
                <Quote size={32} fill="currentColor" className="opacity-80" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-normal mb-8">
                "{current.quote}"
              </p>

              {/* User Info & Navigation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* User Profile */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white shadow-md">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#1A1A1A] font-bold font-serif text-base">
                      {current.name}
                    </h4>
                    <span className="text-gray-500 text-xs">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300 shadow-sm active:scale-95"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
