import AOS from "aos";
import "aos/dist/aos.css";
import { PlayIcon, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        "KANSAG transformed our facility management operations. Their 10-1-24 guarantee is not just a promise - they actually deliver on it. Zero downtime, exceptional professionalism.",
      name: "Rajesh Kumar",
      designation: "Facility Manager",
      organization: "TechVista Corporate Park",
    },
    {
      id: 2,
      quote:
        "The consistency and reliability KANSAG provides are unmatched. Our residents have noticed a significant improvement in cleanliness and maintenance standards.",
      name: "Priya Sharma",
      designation: "Property Manager",
      organization: "Green Valley Residential Society",
    },
    {
      id: 3,
      quote:
        "Their pest control and sanitization services are top-notch. We have seen a complete elimination of pest issues across all our stores.",
      name: "Amit Verma",
      designation: "Operations Head",
      organization: "Metro Retail Chain",
    },
    {
      id: 4,
      quote:
        "Hospital-grade sanitization is crucial for us, and KANSAG delivers beyond expectations. Their team is professional, punctual, and thorough.",
      name: "Sunita Desai",
      designation: "Administrative Manager",
      organization: "Sunrise Hospital",
    },
    {
      id: 5,
      quote:
        "From carpet cleaning to floor polishing, every service is executed with precision. Our members constantly compliment the pristine conditions.",
      name: "Vikram Singh",
      designation: "Owner",
      organization: "Heritage Club & Resort",
    },
    {
      id: 6,
      quote:
        "Their housekeeping staff is well-trained, courteous, and efficient. It is rare to find such dedicated service providers.",
      name: "Neha Kapoor",
      designation: "HR Director",
      organization: "InnoTech Solutions",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Client{" "}
              <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organisations across NCR
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay="100"
                className="rounded-xl bg-card text-card-foreground shadow hover:shadow-2xl transition-all duration-300 border-2 hover:border-teal-500 group"
              >
                <div className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map(() => (
                      <Star
                        className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-300"
                        size={24}
                      />
                    ))}
                  </div>
                  <div className="mb-6">
                    <Quote className="text-teal-500 mb-6" size={32} />
                    <p className="text-gray-600 leading-relaxed italic -mt-4">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 pt-6 border-t">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full ring-2 ring-teal-100 group-hover:ring-teal-300 transition-all duration-300"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.designation}
                      </p>
                      <p className="text-sm text-teal-600 font-medium">
                        {testimonial.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Satisfaction
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Client Satisfaction Rate" },
              { value: "95%", label: "Repeat Client Rate" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "100%", label: "On-Time Service Delivery" },
            ].map((stat, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                key={index}
                className="rounded-xl text-card-foreground shadow bg-white hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-500"
              >
                <div className="p-8 text-center">
                  <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl bg-card text-card-foreground shadow overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-500">
              <div className="relative h-64 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <PlayIcon size={40} />
                  </div>
                  <p className="text-lg font-semibold">Video Testimonial 1</p>
                  <p className="text-sm text-teal-100">Coming Soon</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-card text-card-foreground shadow overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-500">
              <div className="relative h-64 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <PlayIcon size={40} />
                  </div>
                  <p className="text-lg font-semibold">Video Testimonial 1</p>
                  <p className="text-sm text-teal-100">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-linear-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-4">
            Join Our Satisfied Clients
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white/90 text-lg mb-8"
          >
            Experience the KANSAG difference and transform your facility today
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-white text-teal-600 px-8 py-3 rounded hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium inline-flex items-center">
              Get Started
              <span className="ml-2 animate-pulse">→</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
