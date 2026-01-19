"use client";
import React from "react";
import Button from "./ui/Button";

const Newsletter = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 xl:px-16 pb-12">
      <div className="relative w-full rounded-[32px] overflow-hidden flex items-center py-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/ksv8g0RY/chuttersnap-564281-unsplash-780x400-v2-1110x570-c.jpg')",
            filter: "brightness(0.6)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 md:px-16 py-5 w-full">
          <div className="max-w-[600px]">
            <h2 className="text-2xl md:text-[32px] font-serif text-white mb-4 leading-tight">
              Bring The Serenity Of Nature <br className="hidden sm:block" /> Into Your Home.
            </h2>
            <p className="text-white/90 text-xs md:text-sm mb-6 font-medium">
              Discover The Perfect Plants To Transform Your Living Space.
            </p>

            <form
              className="flex flex-col sm:flex-row items-center gap-4 w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full sm:w-[340px]">
                <input
                  type="email"
                  placeholder="Enter Email For Subcribe New Product"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-2 text-white placeholder:text-white/80 outline-none focus:bg-white/20 transition-all font-serif text-sm md:text-base text-center"
                  required
                />
              </div>
              <button className="px-10 py-2 rounded-2xl bg-white text-[#1A1A1A] hover:bg-gray-100 border-none h-auto font-serif font-medium text-sm md:text-base transition-transform hover:scale-105">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
