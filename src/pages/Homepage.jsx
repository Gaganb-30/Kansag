import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  Calendar,
  Building2,
  Users,
  Award,
  Wind,
  Droplets,
  Home,
  Bug,
  Layers,
  Shield,
  CheckCircle,
  Building,
  ShoppingBag,
  Heart,
  Warehouse,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Shirt,
  ArrowRight,
} from "lucide-react";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const carouselSlides = [
  {
    id: 1,
    title: "Carpet Cleaning",
    image:
      "https://bns.co.uk/wp-content/uploads/2023/12/Five-Benefits-of-Professional-Carpet-Cleaning.jpg",
    icon: Sparkles,
    link: "/services/commercial",
  },
  {
    id: 2,
    title: "Dry Cleaning",
    image:
      "https://black-and-white.co.in/wp-content/uploads/2024/04/what-is-dry-cleaning.jpg",
    icon: Shirt,
    link: "/services/sports-entertainment",
  },
  {
    id: 3,
    title: "Housekeeping Services",
    image:
      "https://media.licdn.com/dms/image/v2/C5612AQG6nQx-Bd6JcQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1623991533132?e=2147483647&v=beta&t=azUiqW3gJjt8ICdEZ6ISZw-YrWJvCUd4XD9wkk59dzY",
    icon: Home,
    link: "/services/sports-entertainment",
  },
  {
    id: 4,
    title: "Pest Control",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/11/363792242/TF/WA/IK/2553956/pest-control-services-in-gurgaon.jpeg",
    icon: Bug,
    link: "/services/retail",
  },
  {
    id: 5,
    title: "Floor Maintenance & Polishing",
    image: "https://www.reminetwork.com/wp-content/uploads/PG.jpg",
    icon: Layers,
    link: "/services/special-services",
  },
  {
    id: 6,
    title: "Sanitization & Disinfection",
    image: "https://safaiwale.in/wp-content/uploads/2021/04/image.png",
    icon: ShieldCheck,
    link: "/services/sanitization/",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[550px] overflow-hidden">
      {/* Slides */}
      {carouselSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-950/70 to-blue-950/50"></div>

            {/* Text content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-2 w-full">
                <div
                  className="max-w-3xl"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
                    {slide.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-blue-950 rounded-full flex items-center justify-center shadow-xl shadow-blue-950 hover:opacity-100 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-blue-950 rounded-full flex items-center justify-center shadow-xl shadow-blue-950 hover:opacity-100 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-10 h-2 bg-blue-950 rounded-full shadow-md shadow-blue-950/50"
                : "w-2 h-2 bg-white/70 hover:bg-white rounded-full hover:shadow-sm hover:shadow-blue-950"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-blue-950">
        <div
          className="h-full bg-blue-950 transition-all duration-1000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / carouselSlides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: Calendar, value: 10, suffix: "+", label: "Years Experience" },
    { icon: Building2, value: 25, suffix: "+", label: "Facilities Managed" },
    { icon: Users, value: 50, suffix: "+", label: "Skilled Workforce" },
    { icon: Award, value: 100, suffix: "%", label: "Service Guarantee" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-r from-blue-950 via-blue-900 to-blue-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={3 * 100}>
              <div className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-950">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300 group border border-white/20 hover:border-white/40">
                    <stat.icon
                      className="text-white group-hover:scale-110 transition-transform duration-300"
                      size={20}
                    />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                  <CountUp
                    start={0}
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={3}
                    separator=","
                    className="hover:text-gray-300 transition-colors duration-300"
                  />
                </div>
                <div className="text-white/90 hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Carpet Cleaning",
      image:
        "https://bns.co.uk/wp-content/uploads/2023/12/Five-Benefits-of-Professional-Carpet-Cleaning.jpg",
      description:
        "Advanced deep-cleaning technologies that remove dirt, stains, and allergens to prolong carpet life.",
    },
    {
      icon: Droplets,
      title: "Dry Cleaning",
      image:
        "https://black-and-white.co.in/wp-content/uploads/2024/04/what-is-dry-cleaning.jpg",
      description:
        "Professional-grade dry cleaning solutions for fabrics, upholstery, and sensitive materials.",
    },
    {
      icon: Home,
      title: "Housekeeping Services",
      image:
        "https://media.licdn.com/dms/image/v2/C5612AQG6nQx-Bd6JcQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1623991533132?e=2147483647&v=beta&t=azUiqW3gJjt8ICdEZ6ISZw-YrWJvCUd4XD9wkk59dzY",
      description:
        "Daily, weekly, and customized housekeeping programs designed for spotless, well-maintained environments.",
    },
    {
      icon: Bug,
      title: "Pest Control",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/363792242/TF/WA/IK/2553956/pest-control-services-in-gurgaon.jpeg",
      description:
        "Safe, certified, and effective pest management services to protect your property and people.",
    },
    {
      icon: Layers,
      title: "Floor Maintenance & Polishing",
      image: "https://www.reminetwork.com/wp-content/uploads/PG.jpg",
      description:
        "Expert floor care including scrubbing, polishing, grinding, and restoration for all floor types.",
    },
    {
      icon: Shield,
      title: "Sanitization & Disinfection",
      image: "https://safaiwale.in/wp-content/uploads/2021/04/image.png",
      description:
        "Hospital-grade sanitization services to safeguard workplaces, communities, and public areas.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-blue-900/80 max-w-2xl mx-auto text-sm sm:text-base">
            High-performance facility solutions built for efficiency and
            long-term care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-white border border-blue-950 rounded-xl p-0 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 group cursor-pointer overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/10 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-950/90 rounded-lg flex items-center justify-center group-hover:bg-blue-950 group-hover:text-white transition-colors duration-300">
                    <service.icon className="text-white" size={20} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 mb-2 sm:mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-900/70 mb-3 sm:mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-950 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base hover:text-blue-800"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12" data-aos="fade-up">
          <div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 sm:h-12 bg-linear-to-r from-blue-950 to-blue-800 hover:from-blue-900 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base shadow-lg shadow-blue-950 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group">
              View All Services
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Advantage = () => {
  const guaranteeItems = [
    {
      number: "10",
      label: "Minutes",
      description: "Issue acknowledged and response initiated",
    },
    {
      number: "1",
      label: "Hour",
      description: "Resolution plan shared with timeline",
    },
    {
      number: "24",
      label: "Hours",
      description: "Issue completely resolved and verified",
    },
  ];

  const advantages = [
    {
      title: "Integrated Facility Management",
      description:
        "We don't just deliver services—we create operational ecosystems.",
    },
    {
      title: "Flexible & Customizable Solutions",
      description:
        "Tailored programs for residential, commercial, and industrial facilities.",
    },
    {
      title: "Trained Workforce & Modern Tools",
      description:
        "Every team member is trained, certified, and equipped with industry-grade tools.",
    },
    {
      title: "100% Compliance Rate",
      description:
        "Commitment to quality, safety, and excellence in every project.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3 sm:mb-4">
            The KANSAG Advantage
          </h2>
          <p className="text-blue-900/80 text-sm sm:text-base">
            10-1-24 Service Guarantee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          {guaranteeItems.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration={700}
              data-aos-easing="ease-out-cubic"
            >
              <div className="bg-white border border-blue-950 rounded-xl p-5 sm:p-6 md:p-8 text-center transition-all duration-700 hover:shadow-2xl hover:shadow-blue-950 hover:border-2 hover:border-blue-950 transform hover:-translate-y-2">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-r from-blue-950 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-blue-950/40 transform transition-transform duration-300 hover:scale-110`}
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-2">
                  {item.label}
                </h3>
                <p className="text-blue-900/70 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {advantages.map((item, index) => (
            <div key={index} data-aos="fade-right" data-aos-delay={index * 150}>
              <div className="flex items-start space-x-3 sm:space-x-4 transition-all duration-300 hover:bg-white p-3 sm:p-4 rounded-xl hover:shadow-lg hover:shadow-blue-950/10 hover:border hover:border-blue-950 group">
                <CheckCircle
                  className="text-blue-950 shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-blue-950 mb-1 sm:mb-2 group-hover:text-blue-800 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-blue-900/70 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  const leaders = [
    {
      name: "Sagar Kapruwan",
      role: "Co-Founder & Director",
      experience: "10+ years Experience",
      description:
        "Finance, Operations, and Management. Expert in systems design, resource optimization, and business growth.",
      gradient: "from-blue-950 to-blue-800",
    },
    {
      name: "Kanish Aji",
      role: "Co-Founder & Director",
      experience: "12+ years Experience",
      description:
        "Global experience in facility management. Worked with Walmart, Skights, Marshalls, including projects with autonomous cleaning robots.",
      gradient: "from-blue-900 to-blue-700",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3 sm:mb-4">
            Leadership You Can Trust
          </h2>
          <p className="text-blue-900/80 max-w-2xl mx-auto text-sm sm:text-base">
            Decades of combined expertise in facility management and operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {leaders.map((leader, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="bg-white border border-blue-950 rounded-xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 group cursor-pointer">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br ${leader.gradient} shrink-0 transform transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-950`}
                  ></div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-1 group-hover:text-blue-800 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-blue-900 font-medium mb-1 text-sm sm:text-base">
                      {leader.role}
                    </p>
                    <p className="text-sm text-blue-900/60 mb-3 sm:mb-4">
                      {leader.experience}
                    </p>
                    <p className="text-blue-900/70 text-sm sm:text-base">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: Building, label: "Corporate Offices" },
    { icon: Home, label: "Residential Societies" },
    { icon: ShoppingBag, label: "Retail Chains" },
    { icon: Heart, label: "Hospitals & Clinics" },
    { icon: Users, label: "Clubs & Community Centers" },
    { icon: Warehouse, label: "Warehouses & Industrial Units" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3 sm:mb-4">
            Industries We Serve
          </h2>
          <p className="text-blue-900/80 text-sm sm:text-base">
            Trusted across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="bg-white border border-blue-950 rounded-xl p-4 sm:p-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 group cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-linear-to-r group-hover:from-blue-950 group-hover:to-blue-800 shadow-sm shadow-blue-950/10">
                  <industry.icon
                    className="text-blue-950 group-hover:text-white transition-colors duration-300"
                    size={20}
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-blue-950 group-hover:text-blue-800 transition-colors duration-300">
                  {industry.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 bg-white"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-900/80 text-sm sm:text-base">
            Trusted by leading organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white border border-blue-950 rounded-xl p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:border-2 hover:border-blue-950 hover:shadow-blue-950">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-300 mx-1 hover:drop-shadow-md hover:shadow-blue-950"
                    size={20}
                  />
                ))}
              </div>

              <Quote
                className="text-blue-950 mx-auto mb-4 sm:mb-6 hover:text-blue-950/30 transition-colors duration-300"
                size={40}
              />

              <p className="text-blue-900/80 text-base sm:text-lg text-center italic mb-6 sm:mb-8">
                "KANSAG transformed our facility management operations. Their
                10-1-24 guarantee is not just a promise - they actually deliver
                on it. Zero downtime, exceptional service quality, and a team
                that truly understands our needs. Highly recommended!"
              </p>

              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-blue-950 to-blue-800 rounded-full hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-950"></div>
                <div className="text-left">
                  <h4 className="font-semibold text-blue-950 text-sm sm:text-base">
                    Rajesh Kumar
                  </h4>
                  <p className="text-sm text-blue-900/60">Facility Manager</p>
                  <p className="text-sm text-blue-900 font-medium">
                    TechVista Corporate Park
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8" data-aos="fade-up">
            <div>
              <button className="border-2 border-blue-950 text-blue-950 px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950 inline-flex items-center text-sm sm:text-base font-medium group">
                View All Testimonials
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-linear-to-r from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-4xl mx-auto text-center">
        <div data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Facility?
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get a free consultation and customized facility management plan
            today
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
              className="bg-white text-blue-950 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950 font-medium inline-flex items-center justify-center text-sm sm:text-base group"
              onClick={() => navigate("/contact")}
            >
              Request a Quote
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950 font-medium text-sm sm:text-base">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <Services />
      <Advantage />
      <Leadership />
      <Industries />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Homepage;
