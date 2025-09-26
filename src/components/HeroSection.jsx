"use client";
import React, { useState, useEffect } from "react";
import { Zap, Shield, Globe, BarChart3, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Shipment", "Delivery", "Package", "Order"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: "AI-Powered Routing" },
    { icon: Shield, text: "Secure Tracking" },
    { icon: Globe, text: "Global Network" },
    { icon: BarChart3, text: "Real-time Analytics" },
  ];

  return (
    <section className="relative bg-orange-400 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              <span className="bg-black  bg-clip-text text-transparent">
                {words[currentWord]}
              </span>{" "}
              Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-200 leading-relaxed max-w-lg">
              Fast, reliable, and AI-enabled logistics tailored for modern
              e-commerce businesses.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-white text-sm"
                >
                  <feature.icon className="w-4 h-4 mr-2 text-blue-900" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                src="/shipping1.jpg"
                alt="AI-Powered Logistics"
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
