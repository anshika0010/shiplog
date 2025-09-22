"use client";
import {
  FaMoneyBillWave,
  FaSlidersH,
  FaRobot,
  FaShippingFast,
} from "react-icons/fa";
import Heading from "./common/Heading";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Affordable",
      description:
        "Fship offers logistic solutions designed to be budget-friendly without compromising on quality. We offer competitive rates to ensure you get the best value for your money.",
      icon: <FaMoneyBillWave className="text-4xl text-red-600" />,
    },
    {
      id: 2,
      title: "Customized Filters",
      description:
        "Tailor your e-commerce logistic operations with our customizable filters, ensuring each shipment meets your specific needs. Our shipping solutions adapt to your business requirements seamlessly.",
      icon: <FaSlidersH className="text-4xl text-blue-600" />,
    },
    {
      id: 3,
      title: "AI Courier Allocation",
      description:
        "Optimize your e-commerce delivery routes and reduce costs with our AI-driven courier allocation system. Experience faster, smarter deliveries with advanced technology.",
      icon: <FaRobot className="text-4xl text-green-600" />,
    },
    {
      id: 4,
      title: "Branded Tracking Page",
      description:
        "Enhance your customer experience with a seamless, white-labeled tracking page that reflects your brand’s identity. Keep customers informed and engaged throughout the delivery process.",
      icon: <FaShippingFast className="text-4xl text-orange-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
         <Heading
          text={"Why Choose Us !"}
          className="text-4xl  text-center items-baseline justify-center font-bold text-gray-900 mb-4 md:mb-0"
        />
        <p className="text-lg text-gray-600 mb-12">
          Best ecommerce logistics courier aggregator service provider
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left flex flex-col items-start"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Image (for branding) */}
        <div className="mt-16 flex justify-center">
          <img
            src="/shipping.jpg"
            alt="Why Choose Us Illustration"
            className="max-w-lg w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
