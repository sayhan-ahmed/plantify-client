"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const SpecialDiscount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Helper to pad numbers with zero
  const formatNumber = (num) => num.toString().padStart(2, "0");

  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="flex gap-1 mb-2">
        <div className="bg-white rounded-md w-8 h-10 flex items-center justify-center text-lg font-bold text-gray-800 shadow-sm">
          {formatNumber(value)[0]}
        </div>
        <div className="bg-white rounded-md w-8 h-10 flex items-center justify-center text-lg font-bold text-gray-800 shadow-sm">
          {formatNumber(value)[1]}
        </div>
      </div>
      <span className="text-gray-500 text-xs uppercase tracking-wide font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="max-w-[1600px] mx-auto bg-[#F2F2F2] overflow-hidden my-16">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[300px] mx-10">
        {/* Left Images */}
        <div className="hidden lg:block w-[300px] xl:w-[400px] h-[300px] relative">
          {/* Plant 15 */}
          <img
            src="https://i.ibb.co.com/qtG6cPQ/Plant-15.png"
            alt="Plant Decor"
            className="absolute -bottom-16 xl:-bottom-24 left-0 w-2/3 object-contain z-10"
          />
          {/* Plant 14 */}
          <img
            src="https://i.ibb.co.com/zWDLRHFX/Plant-14.png"
            alt="Plant Decor"
            className="absolute -bottom-16 xl:-bottom-24 right-0 w-2/3 object-contain"
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center text-center px-6 py-12 lg:py-0 z-20">
          <h2 className="text-xl sm:text-3xl md:text-2xl xl:text-3xl font-serif font-bold text-[#1A1A1A] mb-3">
            Nature's <span className="text-green-600">Special Discount</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base font-medium mb-4">
            Get 60% off - Limited Time Offer
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center mb-10">
            <TimerBox value={timeLeft.days} label="Days" />
            <span className="text-2xl font-bold text-gray-400 -mt-6 mx-1">
              :
            </span>
            <TimerBox value={timeLeft.hours} label="Hours" />
            <span className="text-2xl font-bold text-gray-400 -mt-6 mx-1">
              :
            </span>
            <TimerBox value={timeLeft.minutes} label="Minutes" />
            <span className="text-2xl font-bold text-gray-400 -mt-6 mx-1">
              :
            </span>
            <TimerBox value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* CTA Button */}
          <Button variant="secondary" icon={ArrowRight} className="px-8">
            Shop now
          </Button>
        </div>

        {/* Right Images*/}
        <div className="hidden lg:block w-[300px] xl:w-[400px] h-[300px] relative">
          {/* Plant 14 */}
          <img
            src="https://i.ibb.co.com/zWDLRHFX/Plant-14.png"
            alt="Plant Decor"
            className="absolute -bottom-16 xl:-bottom-24 left-0 w-2/3 object-contain z-10"
          />
          {/* Plant 15 */}
          <img
            src="https://i.ibb.co.com/qtG6cPQ/Plant-15.png"
            alt="Plant Decor"
            className="absolute -bottom-16 xl:-bottom-24 right-0 w-2/3 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialDiscount;
