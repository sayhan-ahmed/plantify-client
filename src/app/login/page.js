"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Button from "@/components/ui/Button";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      // Hardcoded Mock Credentials
      if (
        formData.email === "admin@plantify.com" &&
        formData.password === "123456"
      ) {
        // Successful login
        Cookies.set("authToken", "mock-token-123456", { expires: 1 }); // Expires in 1 day
        router.push("/"); // Redirect to Home
      } else {
        // Failed login
        setError("Invalid email or password");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF6] px-4">
      <div className="bg-white p-8 md:p-10 rounded-[30px] shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm">
            Please sign in to your accounts
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all text-gray-800"
              placeholder="admin@plantify.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all text-gray-800"
              placeholder="123456"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            variant="primary"
            type="submit"
            className="w-full py-3.5 mt-2 justify-center"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Footer Hint */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Mock Credentials:</p>
          <p>Email: admin@plantify.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
