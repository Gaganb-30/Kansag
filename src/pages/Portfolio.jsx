import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Commercial",
    "Residential",
    "Retail",
    "Healthcare",
    "Industrial",
    "Hospitality",
  ];

  const portfolioData = [
    {
      id: 1,
      title: "Corporate Office Deep Clean",
      category: "Commercial",
      description:
        "Complete office sanitization and carpet restoration for a 50,000 sq. ft. corporate facility",
      beforeImageUrl:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      afterImageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w-800",
    },
    {
      id: 2,
      title: "Residential Society Maintenance",
      category: "Residential",
      description:
        "Monthly housekeeping and pest control for 200+ apartment residential complex",
      beforeImageUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      afterImageUrl:
        "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=800",
    },
    {
      id: 3,
      title: "Retail Store Floor Restoration",
      category: "Retail",
      description:
        "Marble polishing and restoration for premium retail showroom",
      beforeImageUrl:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      afterImageUrl:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
    },
    {
      id: 4,
      title: "Hospital Sanitization",
      category: "Healthcare",
      description:
        "Hospital-grade disinfection and deep cleaning for multi-specialty hospital",
      beforeImageUrl:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      afterImageUrl:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800",
    },
    {
      id: 5,
      title: "Warehouse Pest Control",
      category: "Industrial",
      description:
        "Complete pest elimination and prevention for 100,000 sq. ft. warehouse",
      beforeImageUrl:
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800",
      afterImageUrl:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    },
    {
      id: 6,
      title: "Club & Resort Upholstery",
      category: "Hospitality",
      description:
        "Fabric dry cleaning and upholstery restoration for luxury resort",
      beforeImageUrl:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      afterImageUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    },
  ];

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

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
                  Portfolio
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-900/80 max-w-3xl mx-auto">
                Transforming facilities across industries with proven excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-blue-950 to-blue-800 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-950 hover:scale-105"
                    : "border-2 border-blue-950/20 text-blue-950/80 hover:border-blue-950 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPortfolio.map((project, index) => (
              <div key={project.id}>
                <div className="bg-white border border-blue-950/20 rounded-xl group overflow-hidden hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-2 hover:border-2 hover:border-blue-950 h-full">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    {/* Before Image */}
                    <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                      <img
                        src={project.beforeImageUrl}
                        alt={`${project.title}-Before`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                          Before
                        </span>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img
                        src={project.afterImageUrl}
                        alt={`${project.title}-After`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                          After
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-blue-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-2 sm:mb-3 group-hover:text-blue-800 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-blue-900/70 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                    <p className="text-sm text-blue-800 mt-4 font-medium flex items-center">
                      <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                      Hover to see transformation
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {filteredPortfolio.length === 0 && (
              <div className="text-center py-12 col-span-1 md:col-span-2 lg:col-span-3">
                <p className="text-xl text-blue-900/80">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-blue-900/80">
              Numbers that speak for our excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "25+", label: "Active Clients" },
              { value: "500k+", label: "Sq. Ft. Maintained" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="text-center bg-white border border-blue-950/20 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-950/40">
                  <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-950 to-blue-800 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-900/70 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-linear-to-r from-blue-950 via-blue-900 to-blue-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Want to See Your Facility Transformed?
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss how we can deliver the same excellence for your
              facility
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <button className="group bg-white text-blue-950 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-950 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center">
              Schedule a Facility Audit
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

export default Portfolio;
