import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  PhoneIcon,
  Clock4,
  MailIcon,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Mock form submission
  //   toast({
  //     title: "Message Sent!",
  //     description:
  //       "Thank you for contacting us. We'll get back to you within 24 hours.",
  //   });
  //   setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      id: 1,
      icon: PhoneIcon,
      label: "Phone",
      value: "+91 88605 25209",
      ref: "tel:+918860525209",
      grad: "from-teal-500 to-cyan-600",
    },
    {
      id: 2,
      icon: MailIcon,
      label: "Email",
      value: "contact@kansagservices.com",
      ref: "mailto:contact@kansagservices.com",
      grad: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      icon: MapPin,
      label: "Location",
      value: "Ghaziabad, NCR",
      ref: "#",
      grad: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      icon: Clock4,
      label: "Business Hours",
      value: "Mon-Sat: 9AM-7PM",
      ref: "#",
      grad: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get In{" "}
              <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can transform your facility
            </p>
          </div>
        </div>
      </section>

      {/* Deatials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10 mb-16">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.id}
                  className="rounded-xl text-card-foreground shadow bg-white hover:shadow-2xl transition-all duration-300 border-2 hover:border-teal-500 group"
                >
                  <div className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${detail.grad} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="lucide lucide-phone w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {detail.label}
                    </h3>
                    <a
                      href={detail.ref}
                      className="text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form action="" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="flex h-9 rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-2 focus:border-teal-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="flex h-9 rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-2 focus:border-teal-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="flex h-9 rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-2 focus:border-teal-500"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="flex h-9 rounded-md border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-2 focus:border-teal-500"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    name="service"
                    id="service"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Select a Service</option>
                    <option value="carpet-cHouse Cleaningleaning">
                      Carpet Cleaning
                    </option>
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
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="flex min-[60px] rounded-md border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-2 focus:border-teal-500 resize-none"
                    placeholder="Tell us about your facility and requirements..."
                    rows={6}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-9 px-4 w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Send Message
                  <Send className="lucide lucide-send ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-teal-500 transition-colors duration-200">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Service Areas
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Ghaziabad",
                      "Delhi",
                      "Noida",
                      "Greater Noida",
                      "Gurgaon",
                      "Faridabad",
                      "NCR Region",
                    ].map((city) => (
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        <span className="text-gray-600">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-xl text-card-foreground shadow bg-gradient-to-br from-teal-600 to-cyan-600 border-0">
                <div className="p-8 text-center text-white">
                  <h3 className="text-3xl font-bold mb-3">10 - 1 - 24</h3>
                  <p className="text-lg mb-2">Service Guarantee</p>
                  <p className="text-sm text-teal-100">
                    Your issues resolved within 24 hours or we work for free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              We're located in the heart of NCR
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129888443!2d77.04417!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
