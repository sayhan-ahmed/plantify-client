import React from "react";

const NatureQuote = () => {
  return (
    <div className="w-full relative my-12 lg:my-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative w-full h-[180px] md:h-[240px] lg:h-[300px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531156992292-d36397ee9184?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nature Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="text-white text-[16px] md:text-[22px] lg:text-[28px] font-medium leading-relaxed tracking-wide font-serif text-center">
              🌿 It’s time to upgrade your home’s comfort—starting
              <br className="hidden md:block" /> with the natural beauty and
              freshness of plants 🌱.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureQuote;
