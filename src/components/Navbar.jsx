"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Clock,
  Phone,
  Heart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { BiCart } from "react-icons/bi";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Plants", href: "/plants" },
    { name: "Pots & Accessories", href: "/pots-and-accessories" },
    { name: "Seeds", href: "/seeds" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="w-full sticky top-[-40px] z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-green-700 text-white">
        <div className="mx-auto px-4 xl:px-12 h-[40px] flex justify-end items-center text-[12px] font-normal tracking-wide">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} strokeWidth={1.5} />
              <span>Los Angeles, USA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} strokeWidth={1.5} />
              <span>Everyday from 10.00 AM to 09.00 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} strokeWidth={1.5} />
              <span>(603) 555-0123</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-white shadow-[0_1px_0_#E6E6E6]">
        <div className="mx-0 xl:mx-auto px-4 xl:px-12 h-[88px] flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-2 ml-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1 rounded-[13px] text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-green-700 shadow-sm"
                      : "text-[#666666] hover:text-green-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative cursor-pointer hover:opacity-75 transition-opacity">
                <BiCart size={24} color="#1A1A1A" />
              </div>
              <div className="relative cursor-pointer hover:opacity-75 transition-opacity">
                <Heart size={24} strokeWidth={2} color="#1A1A1A" />
              </div>

              {/* User Avatar */}
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden cursor-pointer border border-gray-100 hover:opacity-90 transition-opacity">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Language Selector*/}
              <div className="flex items-center gap-1.5 text-[#1A1A1A] text-[13px] font-medium cursor-pointer ml-1 hover:opacity-75 transition-opacity">
                <ChevronDown
                  size={12}
                  strokeWidth={3.5}
                  className="text-gray-500"
                />
                <span className="mr-0.5">EN</span>
                <div className="w-[36px] h-[36px] rounded-full overflow-hidden border border-gray-100 relative">
                  <img
                    src="https://flagcdn.com/gb.svg"
                    alt="UK Flag"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-green-700 transition-colors ml-4"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-green-800">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-green-700 shadow-sm"
                        : "text-[#666666] hover:bg-gray-50 hover:text-green-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Icons */}
            {/* Mobile Menu Icons / User */}
            <div className="flex flex-col gap-6 mt-6 px-2">
              {/* Row 1: Icons & Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative cursor-pointer hover:opacity-75 transition-opacity">
                    <BiCart size={24} color="#1A1A1A" />
                  </div>
                  <div className="relative cursor-pointer hover:opacity-75 transition-opacity">
                    <Heart size={24} strokeWidth={2} color="#1A1A1A" />
                  </div>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-1.5 text-[#1A1A1A] text-[13px] font-medium cursor-pointer hover:opacity-75 transition-opacity">
                  <div className="w-[28px] h-[28px] rounded-full overflow-hidden border border-gray-100 relative">
                    <img
                      src="https://flagcdn.com/gb.svg"
                      alt="UK Flag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mr-0.5">EN</span>
                  <ChevronDown
                    size={12}
                    strokeWidth={3.5}
                    className="text-gray-500"
                  />
                </div>
              </div>

              {/* Row 2: User Profile */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">
                    John Doe
                  </span>
                  <span className="text-xs text-gray-500">View Profile</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="flex flex-col gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>(603) 555-0123</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>Los Angeles, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
