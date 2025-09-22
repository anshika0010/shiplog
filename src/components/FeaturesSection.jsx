import {
  ShoppingCart,
  Truck,
  CheckCircle,
  Headphones,
  IndianRupee,
  RotateCcw,
} from "lucide-react";
import Heading from "./common/Heading";
export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-purple-800" />,
      title: "Order Management",
      desc: "Auto-synchronise orders across multiple channels and ship them effortlessly",
    },
    {
      icon: <Truck className="h-8 w-8 text-purple-800" />,
      title: "Next-day Deliveries",
      desc: "Convert more website visitors into customers and level up your delivery experience",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-800" />,
      title: "Order Verification",
      desc: "Verify orders and addresses before shipping to optimise your delivery rate",
    },
    {
      icon: <Headphones className="h-8 w-8 text-purple-800" />,
      title: "Dedicated Shipping Advisors",
      desc: "Streamline your shipping strategies and swiftly resolve any shipping-related issues",
    },
    {
      icon: <IndianRupee className="h-8 w-8 text-purple-800" />,
      title: "RapidCOD",
      desc: "Maintain regular cash flow with 2-day COD remittance and scale your operations faster",
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-purple-800" />,
      title: "Reduced RTO",
      desc: "Say goodbye to costly RTOs. Save significantly with reduced RTO losses by up to 45%",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Section Header */}
      <div className="mb-12">
        <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">
          Features
        </span>

        <Heading
          text={"Explore the excellence"}
          className="text-4xl  text-center items-baseline justify-center font-bold text-gray-900 mb-4 md:mb-0"
        />
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Enhance customer experience with features that help your brand stay
          ahead of the competition
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="bg-purple-100 p-4 rounded-xl">{feature.icon}</div>
            <h3 className="font-semibold text-black text-lg">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
            <a
              href="#"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12">
        <button className="px-6 py-2 bg-gray-200 rounded-full text-sm font-medium hover:bg-gray-300">
          View More
        </button>
      </div>
    </section>
  );
}
