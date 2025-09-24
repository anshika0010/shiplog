"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import React from "react";

const navLink = [
  {
    name: "About Us",
    link: "about-us",
    color: "after:bg-red-500 hover:bg-red-600 hover:text-white",
  },
  {
    name: "Services",
    link: "services",
    color: "after:bg-[#672ba9] hover:bg-[#672ba9] hover:text-white",
  },
  {
    name: "Pricing",
    link: "pricing",
    color: "after:bg-[#df7300] hover:bg-[#df7300] hover:text-white",
  },
  {
    name: "Partners",
    link: "partners",
    color: "after:bg-[#003f5c] hover:bg-[#003f5c] hover:text-white",
  },
  {
    name: "Track Orders",
    link: "track-orders",
    color: "after:bg-[#f55f3e] hover:bg-[#f55f3e] hover:text-white",
  },
  {
    name: "Resources",
    link: "resources",
    color: "after:bg-green-900 hover:bg-green-900 hover:text-white",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  const toggleMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const redirect_Page = (page) => {
    setIsOpen(false);
    router.push(page);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md">
      {/* Info Section */}
      <div className="border-b border-gray-300 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between py-2">
          <div className="hidden md:block"></div>
          <div className="flex flex-col md:flex-row md:items-center text-sm md:text-base text-gray-600 font-medium">
            <p className="flex items-center gap-1 mb-1 md:mb-0 md:mr-6">
              <MdOutlineMailOutline className="text-lg" /> www.shiplog.com
            </p>
            <p className="flex items-center gap-1">
              <FaWhatsapp className="text-green-600 text-lg" /> +91 8008-0008-41
            </p>
          </div>
        </div>
      </div>

      {/* Navbar Main */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src={"/ShiplogLink.png"}
              alt="logo"
              width={500}
              height={500}
              className="w-auto h-10 md:h-[55px]"
            />
          </Link>

          {/* Right Icons on Mobile */}
          <div className="flex gap-4 md:hidden">
            <button
              onClick={toggleMenuHandler}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center" ref={dropdownRef}>
            {navLink.map((item, index) => (
              <Link
                key={index}
                href={`/${item.link}`}
                className={`px-4 py-2 text-gray-600 font-semibold border-r border-gray-300 nav-link navitem relative text-sm lg:text-base ${item.color}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenuHandler}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white h-screen shadow-lg transition-all duration-300 ease-in-out z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="px-4 pt-3 pb-3 bg-white flex justify-between border-b border-gray-300">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image
              src={"/logo1.png"}
              width={200}
              height={200}
              className="w-auto h-10"
              alt="logo"
            />
          </Link>
          <button
            onClick={toggleMenuHandler}
            className="text-gray-800 hover:text-gray-600"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col divide-y divide-gray-200">
          {navLink.map((item, index) => (
            <p
              key={index}
              onClick={() => redirect_Page(`/${item.link}`)}
              className="text-sm md:text-base py-3 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </nav>
  );
}
