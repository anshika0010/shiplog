import { Instagram, Linkedin, Facebook, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Section */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/shiplog.svg" alt="shiplog" className="h-12" />
          </div>
          <p className="text-sm leading-relaxed">
            An eCommerce shipping platform offering logistics automation,
            multi-carrier shipping, real-time tracking, and NDR management,
            ensuring efficient order fulfillment and reduced costs.
          </p>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us On:</h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-purple-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-purple-600">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-purple-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-purple-600">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* App Links */}
          <div className="flex space-x-4 mt-4">
            <img src="/google-play.png" alt="Google Play" className="h-12" />
            <img src="/app-store.png" alt="App Store" className="h-12" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Cargo+ <span className="text-green-500 text-xs">New</span>
            </li>
            <li>Order Management System</li>
            <li>SmartSelect</li>
            <li>NDR Management</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Order Verification <span className="text-green-500 text-xs">New</span>
            </li>
            <li>Next Day Delivery</li>
            <li>Dedicated Shipping Advisors</li>
            <li>RapidCOD</li>
            <li>Multi-Carrier Access</li>
            <li>RTO Reduction</li>
            <li>Shipment Security</li>
          </ul>
        </div>

        {/* Resources + Contact */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>Help Centre</li>
            <li>Newsroom</li>
          </ul>

          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="text-gray-500" size={18} />
              <span>Support: support@example.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-gray-500" size={18} />
              <span>Sales: connect@example.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="text-gray-500 mt-1" size={18} />
              <span>
                Shiplog Head Office <br />
                3rd Floor, Unitech Trade Centre <br />
                Sushant Lok Phase-1, Sector 43 <br />
                Gurgaon, Haryana -122002
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
