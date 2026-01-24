import { useEffect } from "react";
import { PlayIcon, Quote, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const testimonialsData = [
    {
      id: 1,
      quote:
        "KANSAG transformed our facility management operations. Their 10-1-24 guarantee is not just a promise - they actually deliver on it. Zero downtime, exceptional professionalism.",
      name: "Rajesh Kumar",
      designation: "Facility Manager",
      organization: "TechVista Corporate Park",
      avatar: "",
    },
    {
      id: 2,
      quote:
        "The consistency and reliability KANSAG provides are unmatched. Our residents have noticed a significant improvement in cleanliness and maintenance standards.",
      name: "Priya Sharma",
      designation: "Property Manager",
      organization: "Green Valley Residential Society",
      avatar: "",
    },
    {
      id: 3,
      quote:
        "Their pest control and sanitization services are top-notch. We have seen a complete elimination of pest issues across all our stores.",
      name: "Amit Verma",
      designation: "Operations Head",
      organization: "Metro Retail Chain",
      avatar: "",
    },
    {
      id: 4,
      quote:
        "Hospital-grade sanitization is crucial for us, and KANSAG delivers beyond expectations. Their team is professional, punctual, and thorough.",
      name: "Sunita Desai",
      designation: "Administrative Manager",
      organization: "Sunrise Hospital",
      avatar: "",
    },
    {
      id: 5,
      quote:
        "From carpet cleaning to floor polishing, every service is executed with precision. Our members constantly compliment the pristine conditions.",
      name: "Vikram Singh",
      designation: "Owner",
      organization: "Heritage Club & Resort",
      avatar: "",
    },
    {
      id: 6,
      quote:
        "Their housekeeping staff is well-trained, courteous, and efficient. It is rare to find such dedicated service providers.",
      name: "Neha Kapoor",
      designation: "HR Director",
      organization: "InnoTech Solutions",
      avatar: "",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div data-aos="fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 mb-6">
                Client{" "}
                <span className="bg-linear-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-900/80 max-w-3xl mx-auto">
                Trusted by leading organisations across NCR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white border border-blue-950/20 rounded-xl hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 group h-full">
                  <div className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="flex mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-300 mr-0.5"
                          size={24}
                        />
                      ))}
                    </div>
                    <div className="mb-4 sm:mb-6 grow">
                      <Quote className="text-blue-950 mb-4 sm:mb-6" size={28} />
                      <p className="text-blue-900/80 leading-relaxed italic -mt-4 text-sm sm:text-base">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 pt-4 sm:pt-6 border-t border-blue-950/10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"
                      />
                      <div>
                        <h4 className="font-semibold text-blue-950 text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-blue-900/60">
                          {testimonial.designation}
                        </p>
                        <p className="text-sm text-blue-900 font-medium">
                          {testimonial.organization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 sm:py-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
              Client Satisfaction
            </h2>
            <p className="text-lg sm:text-xl text-blue-900/80">
              Numbers that reflect our commitment
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "98%", label: "Client Satisfaction Rate" },
              { value: "95%", label: "Repeat Client Rate" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "100%", label: "On-Time Service Delivery" },
            ].map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="bg-white border border-blue-950/20 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950">
                  <div className="p-4 sm:p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3">
                      {stat.value}
                    </div>
                    <div className="text-blue-900/70 text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-blue-900/80">
              Hear directly from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div data-aos="fade-right" data-aos-delay="100">
              <div className="bg-white border border-blue-950/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950">
                <div className="relative h-48 sm:h-56 bg-linear-to-br from-blue-950 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group cursor-pointer hover:scale-110 transition-transform duration-300">
                      <PlayIcon size={28} />
                    </div>
                    <p className="text-lg font-semibold">Video Testimonial 1</p>
                    <p className="text-sm text-blue-200">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <div className="bg-white border border-blue-950/20 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950">
                <div className="relative h-48 sm:h-56 bg-linear-to-br from-blue-950 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group cursor-pointer hover:scale-110 transition-transform duration-300">
                      <PlayIcon size={28} />
                    </div>
                    <p className="text-lg font-semibold">Video Testimonial 2</p>
                    <p className="text-sm text-blue-200">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 bg-linear-to-r from-blue-950 via-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Our Satisfied Clients
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Experience the KANSAG difference and transform your facility today
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                className="group bg-white text-blue-950 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950 font-medium inline-flex items-center justify-center text-sm sm:text-base"
                onClick={() => navigate("/contact")}
              >
                Get Started
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
              <button className="group border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950 font-medium text-sm sm:text-base">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
