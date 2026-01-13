import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-teal-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KANSAG</h3>
                <p className="text-xs text-gray-400">Building Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Service You Trust. Excellence You Experience.
            </p>
            <p className="text-gray-400 text-sm">
              Delivering integrated facility management solutions that enhance
              operational efficiency and create cleaner, safer environments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Carpet Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Housekeeping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Pest Control
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Floor Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Sanitization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <span>Ghaziabad, NCR Region, Delhi, Noida, Gurgaon</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" size={16} />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0" size={16} />
                <span>contact@kansagservices.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} KANSAG Building Services Pvt. Ltd.
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
