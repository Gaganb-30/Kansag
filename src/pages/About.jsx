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
    <section className="py-16 sm:py-20 px-4 bg-linear-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Leadership You Can Trust
          </h2>
          <p className="text-blue-900/80">
            Decades of combined expertise driving excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {leaders.map((leader, index) => (
            <div key={index} data-aos="flip-left" data-aos-delay={index * 200}>
              <div className="bg-white border border-blue-950/20 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 group cursor-pointer h-full  flex flex-col">
                <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6 grow">
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br ${leader.gradient} shrink-0 transform transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-950`}
                  ></div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-950 mb-1 group-hover:text-blue-800 transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-blue-900 font-medium mb-1">
                      {leader.role}
                    </p>
                    <p className="text-sm text-blue-900/60 mb-4">
                      {leader.experience}
                    </p>
                    <p className="text-blue-900/70 grow">
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
      <section className="bg-linear-to-br from-blue-50 via-white to-blue-50 overflow-hidden py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 mb-6">
              About
              <span className="bg-linear-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent">
                {` `}KANSAG
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-900/80 max-w-3xl mx-auto">
              Service You Trust. Excellence You Experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-blue-900/70 leading-relaxed">
                <p>
                  <strong className="text-blue-950">
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
                  <strong className="text-blue-800 font-semibold">
                    Integrated Facility Management
                  </strong>{" "}
                  — the silent force that ensures comfort, safety,
                  functionality, and efficiency behind every well-managed
                  facility.
                </p>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl shadow-blue-950/50 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-blue-950 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-blue-950">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-6">
                Our Mission
              </h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-blue-950/20 hover:border-blue-950/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950 transform hover:-translate-y-1">
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="space-y-4 text-base sm:text-lg text-blue-900/70 leading-relaxed">
                    <p>
                      At KANSAG Building Services, our mission goes beyond
                      maintaining presentable spaces. We create environments
                      that are{" "}
                      <strong className="text-blue-950">
                        safe, efficient, comfortable, and uplifting
                      </strong>
                      . Our focus is on long-term facility performance, not just
                      surface-level cleanliness.
                    </p>
                    <p>
                      We listen, understand, and adapt to each client's needs,
                      ensuring seamless support and dependable service. We
                      elevate commercial and residential facilities by
                      integrating skilled workforce, smart processes, and modern
                      techniques.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8">
                      {mission.map((m, index) => {
                        const Icon = m.icon;
                        return (
                          <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                          >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-950 to-blue-800 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md hover:shadow-blue-950">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <p className="text-sm text-center font-semibold text-blue-950">
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
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-blue-900/80">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {mission.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="h-full"
                >
                  <div className="bg-white border border-blue-950/20 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 hover:border-2 hover:border-blue-950 transform hover:-translate-y-2 group h-full flex flex-col">
                    <div className="p-6 text-center flex flex-col h-full">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-950 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-blue-950 shrink-0">
                        <Icon className="text-white" size={30} />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-950 mb-3 shrink-0">
                        {value.title}
                      </h3>
                      <p className="text-blue-900/70 leading-relaxed grow">
                        {value.description}
                      </p>
                    </div>
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
              Why Choose KANSAG?
            </h2>
            <p className="text-lg sm:text-xl text-blue-900/80">
              The difference that sets us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
            ].map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="h-full"
              >
                <div className="bg-white border border-blue-950/20 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 hover:border-2 hover:border-blue-950 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="flex items-start space-x-4 grow">
                    <div className="shrink-0">
                      <div className="w-10 h-10 bg-linear-to-br from-blue-950 to-blue-800 rounded-lg flex items-center justify-center shadow-sm shadow-blue-950">
                        <CheckCircle className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-950 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-blue-900/70 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
