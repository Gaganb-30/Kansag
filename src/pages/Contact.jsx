import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  PhoneIcon,
  Clock4,
  MailIcon,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.default.init({
          duration: 800,
          once: true,
          offset: 100,
        });
      });
    }
  }, []);

  // Effect to hide status message after 2 seconds
  useEffect(() => {
    if (showStatus) {
      const timer = setTimeout(() => {
        setShowStatus(false);
        setStatus("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showStatus, status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // Email to YOU
      await emailjs.send(
        "service_t6eg0gh",
        "template_zjsg7if",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.service,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        "vhxv67rKURbemsbl6",
      );

      setStatus("✅ Message sent successfully!");
      setShowStatus(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again.");
      setShowStatus(true);
    } finally {
      setLoading(false);
    }
  };

  // Manually close status message
  const closeStatus = () => {
    setShowStatus(false);
    setStatus("");
  };

  const contactDetails = [
    {
      id: 1,
      icon: PhoneIcon,
      label: "Phone",
      value: "+91 88605 25209",
      ref: "tel:+918860525209",
      grad: "from-blue-700 to-blue-900",
    },
    {
      id: 2,
      icon: MailIcon,
      label: "Email",
      value: "contact@kansag.com",
      ref: "mailto:contact@kansag.com",
      grad: "from-blue-600 to-blue-800",
    },
    {
      id: 3,
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, NCR",
      ref: "#",
      grad: "from-blue-700 to-blue-950",
    },
    {
      id: 4,
      icon: Clock4,
      label: "Business Hours",
      value: "Mon-Sat: 9AM-7PM",
      ref: "#",
      grad: "from-blue-800 to-blue-950",
    },
  ];

  const serviceAreas = [
    "Ghaziabad",
    "Delhi",
    "Noida",
    "Greater Noida",
    "Gurgaon",
    "Faridabad",
    "NCR Region",
  ];

  return (
    <div className="pt-16 bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Floating Status Message */}
      {showStatus && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4">
          <div
            className={`rounded-xl shadow-2xl p-4 flex items-center justify-between ${
              status.includes("✅")
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            <span className="font-medium text-sm sm:text-base">{status}</span>
            <button
              onClick={closeStatus}
              className="ml-4 p-1 rounded-full hover:bg-white/50 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue-950/[0.02] bg-size-[20px_20px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950 mb-6 leading-tight">
              Get In{" "}
              <span className="bg-linear-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-blue-900/80 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can transform your facility
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Cards */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 -mt-16 md:-mt-32 relative z-10 mb-16">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.id}
                  className="h-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="h-full rounded-2xl text-card-foreground bg-white hover:shadow-xl hover:shadow-blue-950 transition-all duration-300 border border-blue-950/20 hover:border-blue-950 group hover:-translate-y-2">
                    <div className="p-6 md:p-8 text-center">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 bg-linear-to-br ${detail.grad} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-blue-950 mb-2">
                        {detail.label}
                      </h3>
                      <a
                        href={detail.ref}
                        className="text-sm md:text-base text-blue-900/80 hover:text-blue-800 transition-colors duration-200 hover:underline"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-blue-950 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-blue-950/20 focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/20 transition-all duration-200 bg-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-blue-950 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-blue-950/20 focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/20 transition-all duration-200 bg-white"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-blue-950 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-blue-950/20 focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/20 transition-all duration-200 bg-white"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-blue-950 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-blue-950/20 focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/20 transition-all duration-200 bg-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-blue-950 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-blue-950/20 focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/20 transition-colors duration-200 bg-white"
                  >
                    <option value="">Select a Service</option>
                    <option value="carpet-cleaning">Carpet Cleaning</option>
                    <option value="dry-cleaning">Dry Cleaning</option>
                    <option value="house-cleaning">House Cleaning</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="floor-maintenance">
                      Floor Maintenance & Polishing
                    </option>
                    <option value="sanitization">
                      Sanitization & Disinfection
                    </option>
                    <option value="all">
                      All Services / Facility Management
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-blue-950 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-blue-950/20 focus:border-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/20 transition-all duration-200 bg-white resize-none min-h-[120px]"
                    placeholder="Tell us about your facility and requirements..."
                    rows={6}
                    required
                  ></textarea>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-linear-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-950 text-white rounded-xl font-medium text-lg hover:shadow-xl hover:shadow-blue-950 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                {/* Removed the old status display from here */}
              </form>
            </div>

            {/* Side Information */}
            <div className="space-y-8">
              {/* Service Areas Card */}
              <div data-aos="fade-left" data-aos-delay="300">
                <div className="rounded-2xl bg-white border border-blue-950/20 hover:border-blue-950 hover:shadow-xl hover:shadow-blue-950 hover:-translate-y-2 transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-6">
                      Service Areas
                    </h3>
                    <div className="space-y-4">
                      {serviceAreas.map((city, index) => (
                        <div
                          key={city}
                          className="flex items-center space-x-4"
                          data-aos="fade-left"
                          data-aos-delay={400 + index * 50}
                        >
                          <div className="w-2 h-2 bg-blue-800 rounded-full shrink-0"></div>
                          <span className="text-blue-900/80 text-base">
                            {city}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Card */}
              <div data-aos="fade-left" data-aos-delay="400">
                <div className="rounded-2xl bg-linear-to-br from-blue-900 to-blue-950 hover:shadow-xl hover:shadow-blue-950 hover:-translate-y-2 transition-all duration-300">
                  <div className="p-8 text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      10 - 1 - 24
                    </h3>
                    <p className="text-lg md:text-xl font-medium mb-3">
                      Service Guarantee
                    </p>
                    <p className="text-sm md:text-base text-blue-100/90 leading-relaxed">
                      Your issues resolved within 24 hours or we work for free
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div data-aos="fade-left" data-aos-delay="500">
                <div className="rounded-2xl bg-white border border-blue-950/20 hover:border-blue-950 hover:shadow-xl hover:shadow-blue-950 hover:-translate-y-2 transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-6">
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-blue-800" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-900/60">
                            Call us anytime
                          </p>
                          <a
                            href="tel:+918860525209"
                            className="text-blue-950 font-medium hover:text-blue-800 transition-colors"
                          >
                            +91 88605 25209
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-blue-800" />
                        </div>
                        <div>
                          <p className="text-sm text-blue-900/60">Email us</p>
                          <a
                            href="mailto:contact@kansag.com"
                            className="text-blue-950 font-medium hover:text-blue-800 transition-colors"
                          >
                            contact@kansag.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-8 md:mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg md:text-xl text-blue-900/80">
              We're located in the heart of NCR
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-950 transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0128252696187!2d77.41927021508313!3d28.669882782409618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb7c7e7b77%3A0x1f7a24e8a1c2b8f!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1693912345678!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kansag Services Office Location"
              className="w-full h-64 md:h-[400px] lg:h-[450px]"
            ></iframe>
          </div>

          {/* Additional Info below map */}
          <div
            className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-950/10">
              <h4 className="text-lg font-semibold text-blue-950 mb-2">
                Office Hours
              </h4>
              <p className="text-blue-900/80">Mon-Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-blue-900/60 text-sm mt-1">Sunday: Closed</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-950/10">
              <h4 className="text-lg font-semibold text-blue-950 mb-2">
                Response Time
              </h4>
              <p className="text-blue-900/80">Within 1 Hour</p>
              <p className="text-blue-900/60 text-sm mt-1">
                For urgent inquiries
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-950/10">
              <h4 className="text-lg font-semibold text-blue-950 mb-2">
                Emergency Service
              </h4>
              <p className="text-blue-900/80">24/7 Available</p>
              <p className="text-blue-900/60 text-sm mt-1">
                For critical situations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
