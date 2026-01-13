import { Wind, Droplets, Home, Bug, Layers, Shield } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      icon: Wind,
      title: "Carpet Cleaning",
      description:
        "Advanced deep-cleaning technologies that remove dirt, stains, and allergens to prolong carpet life.",
    },
    {
      icon: Droplets,
      title: "Dry Cleaning",
      description:
        "Professional-grade dry cleaning solutions for fabrics, upholstery, and sensitive materials.",
    },
    {
      icon: Home,
      title: "Housekeeping Services",
      description:
        "Daily, weekly, and customized housekeeping programs designed for spotless, well-maintained environments.",
    },
    {
      icon: Bug,
      title: "Pest Control",
      description:
        "Safe, certified, and effective pest management services to protect your property and people.",
    },
    {
      icon: Layers,
      title: "Floor Maintenance & Polishing",
      description:
        "Expert floor care including scrubbing, polishing, grinding, and restoration for all floor types.",
    },
    {
      icon: Shield,
      title: "Sanitization & Disinfection",
      description:
        "Hospital-grade sanitization services to safeguard workplaces, communities, and public areas.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            High-performance facility solutions built for efficiency and
            long-term care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref: itemRef, isVisible: itemVisible } =
              useScrollAnimation(0.1);
            return (
              <div
                key={index}
                ref={itemRef}
                className={`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-700 delay-${
                  index * 100
                } ${
                  itemVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-teal-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-teal-500 hover:text-teal-600 font-medium inline-flex items-center"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-9 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            View All Services
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
