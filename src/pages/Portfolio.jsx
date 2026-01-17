import { useState } from "react";

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
      beforeImageUrl: "",
      afterImageUrl: "",
    },
    {
      id: 2,
      title: "Residential Society Maintenance",
      category: "Residential",
      description:
        "Monthly housekeeping and pest control for 200+ apartment residential complex",
      beforeImageUrl: "",
      afterImageUrl: "",
    },
    {
      id: 3,
      title: "Retail Store Floor Restoration",
      category: "Retail",
      description:
        "Marble polishing and restoration for premium retail showroom",
      beforeImageUrl: "",
      afterImageUrl: "",
    },
    {
      id: 4,
      title: "Hospital Sanitization",
      category: "Healthcare",
      description:
        "Hospital-grade disinfection and deep cleaning for multi-specialty hospital",
      beforeImageUrl: "",
      afterImageUrl: "",
    },
    {
      id: 5,
      title: "Warehouse Pest Control",
      category: "Industrial",
      description:
        "Complete pest elimination and prevention for 100,000 sq. ft. warehouse",
      beforeImageUrl: "",
      afterImageUrl: "",
    },
    {
      id: 6,
      title: "Club & Resort Upholstery",
      category: "Hospitality",
      description:
        "Fabric dry cleaning and upholstery restoration for luxury resort",
      beforeImageUrl: "",
      afterImageUrl: "",
    },
  ];

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Transforming facility across industries with proven excillence
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:bg-accent h-9 px-4 py-2 
                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white transition-all duration-200"
                      : "border-2 border-gray-300 text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-all duration-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project) => (
              <div
                key="{project.id}"
                className="rounded-xl bg-card text-card-foreground shadow group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-teal-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                    <img
                      src={project.beforeImageUrl}
                      alt={`${project.title}-Before`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={project.afterImageUrl}
                      alt={`${project.title}-After`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-teal-600 mt-4 font-medium">
                    Hover to see transformation
                  </p>
                </div>
              </div>
            ))}
            {filteredPortfolio.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "25+", label: "Active Clients" },
              { value: "500k+", label: "Sq. Ft. Maintained" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to See Your Facility Transformed?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver the same excellence for your
            facility
          </p>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            Schedule a Facility Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
