"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-50 to-blue-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/shiploglogo.jpg" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>About Us</span>
            <ChevronDown size={16} />
          </li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Services</span>
            <ChevronDown size={16} />
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer">Partners</li>
          <li className="hover:text-blue-600 cursor-pointer">Track Orders</li>
          <li className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
            <span>Resources</span>
            <ChevronDown size={16} />
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">
            Login
          </button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Try for Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 space-y-3 bg-white border-t">
          <a href="#" className="block hover:text-blue-600">About Us</a>
          <a href="#" className="block hover:text-blue-600">Services</a>
          <a href="#" className="block hover:text-blue-600">Pricing</a>
          <a href="#" className="block hover:text-blue-600">Partners</a>
          <a href="#" className="block hover:text-blue-600">Track Orders</a>
          <a href="#" className="block hover:text-blue-600">Resources</a>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Try for Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
