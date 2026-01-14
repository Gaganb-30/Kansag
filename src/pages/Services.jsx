import React from "react";
import {
  Sparkles,
  Shirt,
  Home,
  Bug,
  Layers,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const servicesData = [
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning",
      image:
        "https://bns.co.uk/wp-content/uploads/2023/12/Five-Benefits-of-Professional-Carpet-Cleaning.jpg",
      icon: Sparkles,
      description:
        "Advanced deep-cleaning technologies that remove dirt, stains, and allergens to prolong carpet life.",
      keyBenefits: [
        "Healthier indoor air",
        "Longer carpet lifespan",
        "Odor removal",
      ],
    },
    {
      id: "dry-cleaning",
      title: "Dry Cleaning",
      image:
        "https://black-and-white.co.in/wp-content/uploads/2024/04/what-is-dry-cleaning.jpg",
      icon: Shirt,
      description:
        "Professional-grade dry cleaning solutions for fabrics, upholstery, and sensitive materials.",
      keyBenefits: [
        "Zero-shrinkage cleaning",
        "Protects fabrics",
        "Removes deep stains",
      ],
    },
    {
      id: "housekeeping",
      title: "Housekeeping Services",
      image:
        "https://media.licdn.com/dms/image/v2/C5612AQG6nQx-Bd6JcQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1623991533132?e=2147483647&v=beta&t=azUiqW3gJjt8ICdEZ6ISZw-YrWJvCUd4XD9wkk59dzY",
      icon: Home,
      description:
        "Daily, weekly, and customized housekeeping programs designed for spotless, well-maintained environments.",
      keyBenefits: [
        "24/7 spotless environment",
        "Trained staff",
        "Reduced operational burden",
      ],
    },
    {
      id: "pest-control",
      title: "Pest Control",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/363792242/TF/WA/IK/2553956/pest-control-services-in-gurgaon.jpeg",
      icon: Bug,
      description:
        "Safe, certified, and effective pest management services to protect your property and people.",
      keyBenefits: [
        "Non-toxic, odorless chemicals",
        "Long-term protection",
        "Safe for kids & pets",
      ],
    },
    {
      id: "floor-maintenance",
      title: "Floor Maintenance & Polishing",
      image: "https://www.reminetwork.com/wp-content/uploads/PG.jpg",
      icon: Layers,
      description:
        "Expert floor care including scrubbing, polishing, grinding, and restoration for all floor types.",
      keyBenefits: [
        "Shiny, smooth surfaces",
        "Removes stains, scratches",
        "Extends floor lifespan",
      ],
    },
    {
      id: "sanitization",
      title: "Sanitization & Disinfection",
      image: "https://safaiwale.in/wp-content/uploads/2021/04/image.png",
      icon: ShieldCheck,
      description:
        "Hospital-grade sanitization services to safeguard workplaces, communities, and public areas.",
      keyBenefits: [
        "Eliminates 99.9% viruses/bacteria",
        "Ideal for offices, societies, hospitals",
        "Safe & government-approved chemicals",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              High-performance facility solutions built for efficiency and
              long-term care
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  className="rounded-xl bg-card text-card-foreground shadow group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-500 overflow-hidden"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                          <Icon className="lucide lucide-sparkles w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {service.keyBenefits.map((benefit) => (
                            <li className="text-sm text-gray-600 flex items-start">
                              <span className="text-teal-600 mr-2">•</span>{" "}
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href="/" className="">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-primary/90 h-9 px-4 py-2 w-full mt-6 bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white group/btn">
                        Learn More
                        <ArrowRight className="lucide lucide-arrow-right ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services? */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600">Excellence in every detail</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Industry-Grade Equipment",
                description:
                  "We use professional, modern tools and eco-safe products for superior results",
              },
              {
                id: 2,
                title: "Certified Professionals",
                description:
                  "Every team member is trained, certified, and experienced in their domain",
              },
              {
                id: 3,
                title: "Customizable Plans",
                description:
                  "Flexible service packages tailored to your specific needs and schedule",
              },
              {
                id: 4,
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support and emergency response services",
              },
              {
                id: 5,
                title: "Quality Assurance",
                description:
                  "Regular audits and inspections to maintain the highest standards",
              },
              {
                id: 6,
                title: "Competitive Pricing",
                description:
                  "Premium quality services at transparent and competitive rates",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="rounded-xl text-card-foreground shadow bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-500"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {item.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need a Custom Solution? */}
      <section className="py-20 bg-linear-to-r from-teal-600 to-cyan-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact us for a free facility audit and personalized service plan
          </p>
          <a href="/contact" data-discover="true">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation{" "}
              <ArrowRight className="lucide lucide-arrow-right ml-2 w-5 h-5" />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
