import React from "react";
import {
  Sparkles,
  Shirt,
  Home,
  Bug,
  Layers,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 mb-6">
                Our{" "}
                <span className="bg-linear-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-900/80 max-w-3xl mx-auto">
                High-performance facility solutions built for efficiency and
                long-term care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="bg-white border border-blue-950/20 rounded-xl hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 group cursor-pointer overflow-hidden h-full"
                    onClick={() => navigate(`/services/${service.id}`)}
                  >
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-blue-950/30 to-transparent"></div>
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-950/80 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <p className="text-blue-900/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-blue-950 mb-2">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {service.keyBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-blue-900/70 flex items-start"
                              >
                                <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center mr-2 shrink-0">
                                  <div className="w-2 h-2 bg-blue-950 rounded-full"></div>
                                </div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button className="group/btn w-full mt-4 sm:mt-6 bg-linear-to-r from-blue-950 to-blue-800 hover:from-blue-900 hover:to-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950 flex items-center justify-center">
                        Learn More
                        <ArrowRight
                          className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                          size={16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services? */}
      <section className="py-16 sm:py-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg sm:text-xl text-blue-900/80">
              Excellence in every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
            ].map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white border border-blue-950/20 rounded-xl hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 h-full">
                  <div className="p-6 sm:p-8 text-center h-full flex flex-col">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-blue-950 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shrink-0">
                      <span className="text-xl sm:text-2xl font-bold text-white">
                        {item.id}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-blue-900/70 leading-relaxed grow text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need a Custom Solution? */}
      <section className="py-16 sm:py-20 bg-linear-to-r from-blue-950 via-blue-900 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Need a Custom Solution?
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us for a free facility audit and personalized service plan
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <button
              className="group bg-white text-blue-950 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-950 inline-flex items-center"
              onClick={() => navigate("/contact")}
            >
              Get Free Consultation
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
