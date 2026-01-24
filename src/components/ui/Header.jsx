import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  // Set active tab based on current URL
  useEffect(() => {
    const path = window.location.pathname;
    const pathToTab = {
      "/": "home",
      "/about": "about",
      "/services": "services",
      "/portfolio": "portfolio",
      "/testimonials": "testimonials",
      "/contact": "contact",
    };

    setActiveTab(pathToTab[path] || "home");
  }, []);

  // Handle scroll effect for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(".mobile-nav");
      const menuButton = document.querySelector(".menu-button");
      if (
        nav &&
        !nav.contains(event.target) &&
        !menuButton?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "testimonials", label: "Testimonials", href: "/testimonials" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen ? "bg-white shadow-md py-2" : "bg-white py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="https://i.postimg.cc/rwyTXsV3/favicon.png"
                alt="KANSAG Logo"
                className="transition-all duration-300 w-10 sm:w-12 h-10 sm:h-12 object-contain hover:scale-105"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                  KANSAG
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 -mt-1">
                  Building Services
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className="relative font-medium transition-all duration-200 group"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      activeTab === item.id
                        ? "text-gray-900 font-semibold"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full transition-all duration-300 transform ${
                      activeTab === item.id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100 origin-left"
                    }`}
                  ></span>

                  {/* Hover glow effect */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full blur-sm transition-all duration-300 ${
                      activeTab === item.id
                        ? "opacity-50 scale-x-100"
                        : "opacity-0 group-hover:opacity-30 group-hover:scale-x-100 origin-left"
                    }`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* Contact and CTA */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="tel:+918860525209">
                <div className="hidden sm:flex items-center space-x-2 text-blue-950">
                  <Phone size={16} />
                  <span className="text-sm">+91 88605 25209</span>
                </div>
              </a>
              <button
                onClick={() => navigate("/contact")}
                className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 sm:px-5 bg-linear-to-r from-blue-950 to-blue-950 hover:from-gray-800 hover:to-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Free Quote
              </button>

              {/* Mobile Menu Button */}
              <button
                className="menu-button md:hidden w-10 h-10 rounded-lg flex flex-col items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-nav md:hidden fixed inset-x-0 top-[72px] bg-white shadow-2xl transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`block py-3 px-4 rounded-lg transition-all duration-200 transform hover:translate-x-1 ${
                  activeTab === item.id
                    ? "text-gray-900 bg-gray-50 border-l-4 border-gray-900 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-gray-900"
                        : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  ></div>
                  {item.label}
                </div>
              </a>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-6 border-t border-gray-100 mt-2 px-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="tel:+918860525209"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call us now</p>
                    <p className="text-sm font-medium text-gray-900">
                      +91 88605 25209
                    </p>
                  </div>
                </a>
                <button
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-12 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                  onClick={() => {
                    navigate("/contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Get Free Quote
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
