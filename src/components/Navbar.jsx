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
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md`}
      >
        {/* Info Section */}
        <div className="Info-section border-b border-gray-300">
          <div className="container mx-auto px-4 md:px-0 gap-3 items-center flex justify-between">
            <div></div>
            <div className="flex px-6">
              <p className="flex gap-1 items-center font-semibold text-gray-500 mr-4">
                <MdOutlineMailOutline /> www.gloedgevisas.com
              </p>
              <p className="flex gap-1 items-center font-semibold text-gray-500 mr-4">
                <FaWhatsapp style={{ color: "var(--color-green-700)" }} /> +91
                8878-8878-41
              </p>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="relative">
              <Image
                src={"/ShiplogLink.png"}
                alt="logo"
                width={500}
                height={500}
                className="w-auto h-[40px] md:h-[55px]"
              />
            </Link>

            {/* Right Icons on Mobile */}
            <div className="flex gap-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600"
              >
                <svg
                  className="h-6 w-6"
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
              {navLink.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={`/${item.link}`}
                    className={`
                      ${item.color}
                      nav-link px-4 py-2 text-gray-600 border-r border-gray-400 font-semibold navitem relative
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-[110vh] bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
            isOpen ? "opacity-60 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenuHandler}
        ></div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 w-64 bg-white h-[110vh] shadow-lg transition-all duration-300 ease-in-out z-50 ${
            isOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          {/* Sidebar Header */}
          <div className="px-4 pt-3 pb-3 bg-white flex justify-between border-b border-zinc-400">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src={"/logo1.png"}
                width={1000}
                height={1000}
                className="w-auto h-[40px]"
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
          <div className="pb-3 space-y-1 bg-white flex flex-col">
            <p
              onClick={() => redirect_Page("/about-us")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              About Us
            </p>
            <p
              onClick={() => redirect_Page("/services")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Services
            </p>
            <p
              onClick={() => redirect_Page("/pricing")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Pricing
            </p>
            <p
              onClick={() => redirect_Page("/partners")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Partners
            </p>
            <p
              onClick={() => redirect_Page("/track-orders")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Track Orders
            </p>
            <p
              onClick={() => redirect_Page("/resources")}
              className="text-sm border-b border-zinc-200 py-2 px-4 text-gray-600"
            >
              Resources
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
