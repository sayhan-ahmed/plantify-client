"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Where can I get complete information?",
    answer:
      "You can find comprehensive details about our plants, care instructions, and shipping policies on our dedicated documentation page or by contacting our support team directly.",
  },
  {
    question: "Where can I track my order?",
    answer:
      "Once your order is shipped, you'll receive an email with a tracking number. You can also track your order directly through your account dashboard on our website.",
  },
  {
    question: "How can I get promotions?",
    answer:
      "Stay updated on our latest offers and seasonal promotions by subscribing to our newsletter and following our social media channels.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 14-day return policy for most of our products. If your plant arrives in poor condition, please contact us within 48 hours for a replacement.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Our customer support team is available via email at support@plantify.com or through our live chat feature from Monday to Friday, 9 AM to 6 PM.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, and Google Pay for a secure and seamless checkout experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="max-w-[1600px] mx-auto px-10 sm:px-4 md:px-8 xl:px-16 py-10 lg:py-16 bg-[#FCFCFC]">
      <div className="flex flex-col sm:flex-row items-stretch gap-8 lg:gap-10">
        {/* Left Side: Image */}
        <div className="w-full lg:w-[35%]">
          <div className="relative h-full rounded-3xl overflow-hidden group shadow-xl">
            <img
              src="https://i.ibb.co.com/YBnTmt05/About-Us.jpg"
              alt="Plantify Office"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-serif font-bold text-[#1A1A1A] mb-3">
              Questions About Plantify
            </h2>
            <p className="text-[#666666] text-sm md:text-base font-medium">
              Questions About Plantify We Answer Here:
            </p>
          </div>
          {/* Questions & Answers */}
          <div className="space-y-2">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`border-b border-gray-100 transition-all duration-300 ${openIndex === index ? "pb-4" : "pb-0"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span
                    className={`text-sm lg:text-base font-medium transition-colors ${
                      openIndex === index
                        ? "text-green-600"
                        : "text-[#2d2d2d] group-hover:text-green-600"
                    }`}
                  >
                    {index + 1}. {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "bg-green-600 text-white rotate-180"
                        : "bg-gray-50 text-gray-800 group-hover:bg-green-50 group-hover:text-green-600"
                    }`}
                  >
                    <ChevronDown size={32} strokeWidth={3} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-[200px] opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#666666] leading-relaxed pl-6 lg:pl-8 text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
