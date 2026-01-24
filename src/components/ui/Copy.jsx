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
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const carouselSlides = [
    {
      id: 1,
      title: "Carpet Cleaning",
      titleFr: "NETTOYAGE COMMERCIAL DE VITRES",
      image: "https://images.unsplash.com/photo-1482449609509-eae2a7ea42b7",
      link: "/services/commercial",
    },
    {
      id: 2,
      title: "Dry Cleaning",
      titleFr: "SALLES D'ENTRAÎNEMENT",
      image: "https://images.unsplash.com/photo-1437326300822-01d8f13c024f",
      link: "/services/sports-entertainment",
    },
    {
      id: 3,
      title: "Housekeeping Services",
      titleFr: "SPORTS ET DIVERTISSEMENTS",
      image: "https://images.unsplash.com/photo-1669101602124-f5b78895d91c",
      link: "/services/sports-entertainment",
    },
    {
      id: 4,
      title: "Pest Control",
      titleFr: "SERVICES DE DÉTAIL",
      image: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f",
      link: "/services/retail",
    },
    {
      id: 5,
      title: "Floor Maintenance & Polishing",
      titleFr: "SOUTIEN À LA CLIENTÈLE INNOVATEUR",
      image: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738",
      link: "/services/special-services",
    },
  ];
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

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {carouselSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-62 left-45 inset-0 h-25 w-100 bg-black overflow-hidden opacity-40 rounded-lg" />
            <div className="absolute inset-0 flex top-63 left-45 overflow-hidden">
              <div className="text-center text-white px-4 overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 tracking-wide">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">{slide.titleFr}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute rounded-r-md top-1/2 -translate-y-1/2 bg-white opacity-30 hover:opacity-50 text-white px-2 py-3 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon size={40} className="text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 rounded-l-md top-1/2 -translate-y-1/2 bg-white opacity-30 hover:opacity-50 text-white px-2 py-3 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRightIcon size={40} className="text-black" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gray-600 w-4"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
    <section className="py-20 bg-linear-to-r from-teal-600 to-cyan-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  separator=","
                  className="hover:text-teal-200 transition-colors duration-300"
                />
              </div>
              <div className="text-white/90 hover:text-white transition-colors duration-300">
                {stat.label}
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
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            High-performance facility solutions built for efficiency and
            long-term care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-teal-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                <service.icon
                  className="text-teal-500 group-hover:text-white"
                  size={24}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-teal-500 hover:text-teal-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More
                <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-9 bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
            View All Services
            <span className="ml-2">→</span>
          </button>
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
      linear: "from-teal-500 to-cyan-600",
    },
    {
      number: "1",
      label: "Hour",
      description: "Resolution plan shared with timeline",
      linear: "from-cyan-500 to-blue-600",
    },
    {
      number: "24",
      label: "Hours",
      description: "Issue completely resolved and verified",
      linear: "from-orange-500 to-red-500",
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
    <section className="py-20 px-4 bg-linear-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The KANSAG Advantage
          </h2>
          <p className="text-gray-600">10-1-24 Service Guarantee</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guaranteeItems.map((item, index) => (
            <div
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 200}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
            >
              <div
                className={`w-20 h-20 bg-linear-to-r ${item.linear} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 hover:scale-110`}
              >
                <span className="text-4xl font-bold text-white">
                  {item.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.label}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 150}
              className="flex items-start space-x-4 transition-all duration-300 hover:bg-white p-4 rounded-lg hover:shadow-md"
            >
              <CheckCircle
                className="text-teal-500 shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                size={24}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
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
      color: "from-green-400 to-emerald-500",
    },
    {
      name: "Kanish Aji",
      role: "Co-Founder & Director",
      experience: "12+ years Experience",
      description:
        "Global experience in facility management. Worked with Walmart, Skights, Marshalls, including projects with autonomous cleaning robots.",
      color: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership You Can Trust
          </h2>
          <p className="text-gray-600">
            Decades of combined expertise in facility management and operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 200}
              className="bg-white border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`w-24 h-24 rounded-full bg-linear-to-br ${leader.color} shrink-0 transform transition-transform duration-300 group-hover:scale-105`}
                ></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-teal-500 font-medium mb-1">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {leader.experience}
                  </p>
                  <p className="text-gray-600">{leader.description}</p>
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
    <section className="py-20 px-4 bg-linear-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600">Trusted across diverse sectors</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-teal-500">
                <industry.icon
                  className="text-teal-500 group-hover:text-white"
                  size={32}
                />
              </div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">Trusted by leading organizations</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            data-aos="flip-up"
            data-aos-delay="300"
            className="bg-white border border-gray-200 rounded-lg p-12 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-300"
                  size={24}
                />
              ))}
            </div>

            <Quote className="text-gray-300 mx-auto mb-6" size={48} />

            <p className="text-gray-700 text-lg text-center italic mb-8">
              KANSAG transformed our facility management operations. Their
              10-1-24 guarantee is not just a promise - they actually deliver on
              it. Zero downtime, exceptional service quality, and a team that
              truly understands our needs. Highly recommended!
            </p>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full hover:scale-110 transition-transform duration-300"></div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                <p className="text-sm text-gray-600">Facility Manager</p>
                <p className="text-sm text-teal-500">
                  TechVista Corporate Park
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8" data-aos="fade-up">
            <button className="border-2 border-teal-500 text-teal-500 px-6 py-3 rounded hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center">
              View All Testimonials
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-linear-to-r from-teal-500 to-teal-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Facility?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white/90 text-lg mb-8"
        >
          Get a free consultation and customized facility management plan today
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-white text-teal-600 px-8 py-3 rounded hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium inline-flex items-center">
            Request a Quote
            <span className="ml-2 animate-pulse">→</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium">
            Call Us Now
          </button>
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
    <div>
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
