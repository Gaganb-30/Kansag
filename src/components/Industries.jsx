import {
  Building,
  Home,
  ShoppingBag,
  Heart,
  Users,
  Warehouse,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Industries = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const industries = [
    { icon: Building, label: "Corporate Offices" },
    { icon: Home, label: "Residential Societies" },
    { icon: ShoppingBag, label: "Retail Chains" },
    { icon: Heart, label: "Hospitals & Clinics" },
    { icon: Users, label: "Clubs & Community Centers" },
    { icon: Warehouse, label: "Warehouses & Industrial Units" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600">Trusted across diverse sectors</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const { ref: itemRef, isVisible: itemVisible } =
              useScrollAnimation(0.2);
            return (
              <div
                key={index}
                ref={itemRef}
                className={`bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-1000 delay-${
                  index * 100
                } ${
                  itemVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="text-teal-500" size={32} />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {industry.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
