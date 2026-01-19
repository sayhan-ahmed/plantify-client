import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#FAFAF6] py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-4 xl:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative right-10 rounded-tr-3xl rounded-br-3xl overflow-hidden h-[300px] lg:h-[500px] w-full shadow-sm">
              <img
                src="https://i.ibb.co.com/Pstf7hd1/Plan-1.jpg"
                alt="Rubber Plant - Bringing Nature Closer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Header Tag */}
            <p className="text-gray-500 text-md mb-2 font-medium">About Us</p>

            {/* Main Headline */}
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1A1A] mb-5">
              <span className="text-green-600">Bringing Nature</span> Closer
              <br/>
              to Your Doorstep
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
              Discover plants that brighten your home and boost your lifestyle.
            </p>

            {/* Stats Card */}
            <div className="bg-[#2F7D31] rounded-[24px] p-8 w-full max-w-xl shadow-lg">
              <div className="grid grid-cols-3 gap-1">
                {/* Stat 1 */}
                <div className="flex flex-col items-left text-left gap-2 px-2">
                  <span className="text-[#EBC85B] text-3xl lg:text-4xl font-bold">
                    25+
                  </span>
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Categories
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-left text-left gap-2 px-2">
                  <span className="text-[#EBC85B] text-3xl lg:text-4xl font-bold">
                    500+
                  </span>
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Products
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-left text-left gap-2 px-2">
                  <span className="text-[#EBC85B] text-3xl lg:text-4xl font-bold">
                    99%
                  </span>
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Satisfied Customers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
