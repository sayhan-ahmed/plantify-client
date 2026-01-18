import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FaXTwitter, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="max-w-[1600px] mx-auto w-full">
      {/* Footer Section */}
      <div className="w-full bg-[#FCFCFC] py-16 xl:py-24 relative overflow-hidden">
        {/* Background Pattern with Opacity */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/dJkKY74N/pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="mx-auto px-4 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Column 1: Brand & Socials */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <Logo />
              <p className="text-[#666666] text-[15px] leading-relaxed max-w-[350px]">
                Your destination for premium plants. Discover nature's beauty,
                delivered to your doorstep.
              </p>
              <div className="flex items-center gap-1 -ml-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300"
                >
                  <FaXTwitter size={22} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300"
                >
                  <FaTiktok size={22} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all duration-300"
                >
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>
            {/* Column 2: Company */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-bold text-[#1A1A1A]">Company</h3>
              <ul className="flex flex-col gap-4 text-[#666666] text-[15px]">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-green-700 transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-green-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/carrers"
                    className="hover:text-green-700 transition-colors"
                  >
                    Carrer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Service */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-bold text-[#1A1A1A]">
                Customer Service
              </h3>
              <ul className="flex flex-col gap-4 text-[#666666] text-[15px]">
                <li>
                  <Link
                    href="/my-account"
                    className="hover:text-green-700 transition-colors"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/track-order"
                    className="hover:text-green-700 transition-colors"
                  >
                    Track your Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="hover:text-green-700 transition-colors"
                  >
                    Return
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-green-700 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Our Information */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-bold text-[#1A1A1A]">
                Our Information
              </h3>
              <ul className="flex flex-col gap-4 text-[#666666] text-[15px]">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-green-700 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-green-700 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[18px] font-bold text-[#1A1A1A]">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-6 text-[#666666] text-[15px]">
                <li>(603) 555-0123</li>
                <li>Los Angeles, USA</li>
                <li>
                  <a
                    href="mailto:tanya.hill@example.com"
                    className="hover:text-green-700 transition-colors"
                  >
                    tanya.hill@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="w-full bg-green-700 text-white py-4 md:py-6">
        <div className="mx-auto px-4 xl:px-12 text-[14px] font-normal">
          © {new Date().getFullYear()} Plantify. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
