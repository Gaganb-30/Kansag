import React from "react";
import { CheckCircle, Target, Award, Users, TrendingUp } from "lucide-react";

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
    <section className="py-20 px-4 bg-linear-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership You Can Trust
          </h2>
          <p className="text-gray-600">
            Decades of combined expertise driving excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 200}
              className="bg-white border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group cursor-pointer ease-in-out"
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`w-24 h-24 rounded-full bg-linear-to-br ${leader.color} shrink-0 transform transition-transform duration-300 group-hover:scale-105 ease-in-out`}
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

const About = () => {
  const mission = [
    {
      title: "Commitment",
      icon: Award,
      description:
        "Dedicated to delivering excellence in every service, every time.",
    },
    {
      title: "Integrity",
      icon: CheckCircle,
      description:
        "Transparent operations and honest communication with all stakeholders.",
    },
    {
      title: "Reliability",
      icon: Users,
      description:
        "Consistent performance and dependable service you can count on.",
    },
    {
      title: "Continuous Improvement",
      icon: TrendingUp,
      description:
        "Always evolving, learning, and enhancing our service delivery.",
    },
  ];
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {` `}KANSAG
            </span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Service You Trust. Excellence You Experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong class="text-gray-900">
                    KANSAG Building Services Pvt. Ltd.
                  </strong>{" "}
                  is a leading facility management company delivering solutions
                  that drive sustainability, enhance operational efficiency, and
                  significantly reduce operating costs.
                </p>
                <p>
                  With deep expertise across carpet cleaning, dry cleaning,
                  housekeeping, pest control, floor maintenance & polishing, and
                  sanitization services, KANSAG ensures best-in-class service
                  powered by unwavering commitment and integrity.
                </p>
                <p>
                  We believe in{" "}
                  <strong className="text-teal-600">
                    Integrated Facility Management
                  </strong>{" "}
                  — the silent force that ensures comfort, safety,
                  functionality, and efficiency behind every well-managed
                  facility.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="Team collaboration"
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="text-teal-600 mb-6 mx-auto w-16" size={56} />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
            </div>

            <div className="rounded-xl text-card-foreground bg-white/80 backdrop-blur-sm shadow-xl border-2 border-teal-200">
              <div className="p-10">
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    At KANSAG Building Services, our mission goes beyond
                    maintaining presentable spaces. We create environments that
                    are{" "}
                    <strong className="text-gray-900">
                      safe, efficient, comfortable, and uplifting
                    </strong>
                    . Our focus is on long-term facility performance, not just
                    surface-level cleanliness.
                  </p>
                  <p>
                    We listen, understand, and adapt to each client's needs,
                    ensuring seamless support and dependable service. We elevate
                    commercial and residential facilities by integrating skilled
                    workforce, smart processes, and modern techniques.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                    {mission.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div className="text-center">
                          <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-sm font-semibold text-gray-900">
                            {m.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mission.map((value) => {
              const Icon = value.icon;
              return (
                <div className="rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-500 group">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-linear-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={48} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <Leadership />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose KANSAG?
            </h2>
            <p className="text-xl text-gray-600">
              The difference that sets us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Proven Track Record",
                description:
                  "10+ years of excellence with 25+ facilities managed across NCR region",
              },
              {
                title: "Skilled Workforce",
                description:
                  "50+ trained professionals equipped with modern tools and techniques",
              },
              {
                title: "10-1-24 Guarantee",
                description:
                  "Rapid response system ensuring issues resolved within 24 hours",
              },
              {
                title: "Integrated Solutions",
                description:
                  "Comprehensive facility management under one trusted partner",
              },
              {
                title: "Safety First",
                description:
                  "Certified processes and eco-safe products for all services",
              },
              {
                title: "Customized Approach",
                description:
                  "Tailored solutions designed for your specific facility needs",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-500"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <CheckCircle className="text-teal-600" size={32} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
