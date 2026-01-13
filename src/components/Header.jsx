import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">KANSAG</h1>
              <p className="text-xs text-teal-600 -mt-1">Building Services</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">
              Portfolio
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-gray-900"
            >
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+91 99999 99999</span>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-9 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
