import React from "react";

const instagramImages = {
  col1Top: "https://i.ibb.co.com/kg2BYndf/image-2.jpg",
  col1Bottom: "https://i.ibb.co.com/p5chNww/image-3.jpg",
  col2Tall: "https://i.ibb.co.com/Fbr6tqxv/image-4.jpg",
  col3Tall: "https://i.ibb.co.com/2YvTys0g/image-5.jpg",
  col4Top: "https://i.ibb.co.com/yc9kzbjS/image-6.jpg",
  col4BottomLeft: "https://i.ibb.co.com/j9Js6j0p/image-7.jpg",
  col4BottomRight: "https://i.ibb.co.com/hx7tbT04/image-8.jpg",
};

const InstagramFeed = () => {
  return (
    <section className="bg-[#FAFAF6] py-16 lg:py-10 lg:pb-28">
      <div className="max-w-[1600px] mx-auto px-4 xl:px-16">
        {/* Header */}
        <div className="text-center mb-9">
          <p className="text-gray-500 font-medium text-lg mb-2">Follow Us</p>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A]">
            Follow Us On <span className="text-green-600">Instagram</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.25fr_1fr_1fr_1.75fr] gap-3 md:gap-4 lg:h-[400px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-3 md:gap-4 h-full">
            <div className="relative h-[200px] md:h-auto flex-1 overflow-hidden rounded-[20px] group">
              <img
                src={instagramImages.col1Top}
                alt="Instagram 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative h-[200px] md:h-auto flex-1 overflow-hidden rounded-[20px] group">
              <img
                src={instagramImages.col1Bottom}
                alt="Instagram 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative h-[300px] md:h-full overflow-hidden rounded-[20px] group">
            <img
              src={instagramImages.col2Tall}
              alt="Instagram 3"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Column 3 */}
          <div className="relative h-[300px] md:h-full overflow-hidden rounded-[20px] group">
            <img
              src={instagramImages.col3Tall}
              alt="Instagram 4"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3 md:gap-4 h-full md:col-span-3 lg:col-span-1">
            {/* Top Wide */}
            <div className="relative h-[200px] md:h-1/2 overflow-hidden rounded-[20px] group">
              <img
                src={instagramImages.col4Top}
                alt="Instagram 5"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Bottom Split */}
            <div className="flex gap-3 md:gap-4 h-[200px] md:h-1/2">
              <div className="relative w-1/2 overflow-hidden rounded-[20px] group">
                <img
                  src={instagramImages.col4BottomLeft}
                  alt="Instagram 6"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative w-1/2 overflow-hidden rounded-[20px] group">
                <img
                  src={instagramImages.col4BottomRight}
                  alt="Instagram 7"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
