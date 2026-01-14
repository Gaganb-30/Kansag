import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-tight">
                  KANSAG
                </span>
                <span className="text-teal-400 text-xs">Building Services</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Service You Trust. Excellence You Experience.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering integrated facility management solutions that enhance
              operational efficiency and create cleaner, safer environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Housekeeping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Pest Control
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Floor Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  Sanitization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-teal-400 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-gray-400 text-sm">
                  Ghaziabad, NCR Region
                  <br />
                  Delhi, Noida, Gurgaon
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-teal-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 88605 25209</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-teal-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">
                  contact@kansagservices.com
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-teal-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KANSAG Building Services Pvt. Ltd. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
