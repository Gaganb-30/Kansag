import { Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Advantage = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The KANSAG Advantage
          </h2>
          <p className="text-gray-600">10-1-24 Service Guarantee</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              number: "10",
              label: "Minutes",
              description: "Issue acknowledged and response initiated",
              color: "teal",
            },
            {
              number: "1",
              label: "Hour",
              description: "Resolution plan shared with timeline",
              color: "blue",
            },
            {
              number: "24",
              label: "Hours",
              description: "Issue completely resolved and verified",
              color: "orange",
            },
          ].map((item, index) => {
            const { ref: itemRef, isVisible: itemVisible } =
              useScrollAnimation(0.2);
            return (
              <div
                key={index}
                ref={itemRef}
                className={`bg-white border border-gray-200 rounded-lg p-8 text-center transition-all duration-1000 delay-${
                  index * 200
                } ${
                  itemVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <div
                  className={`w-20 h-20 bg-${item.color}-500 rounded-lg flex items-center justify-center mx-auto mb-4`}
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
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Integrated Facility Management",
              description:
                "We don't just deliver services—we create operational ecosystems.",
            },
            {
              title: "Trained Workforce & Modern Tools",
              description:
                "Every team member is trained, certified, and equipped with industry-grade tools.",
            },
            {
              title: "Flexible & Customizable Solutions",
              description:
                "Tailored programs for residential, commercial, and industrial facilities.",
            },
            {
              title: "100% Compliance Rate",
              description:
                "Commitment to quality, safety, and excellence in every project.",
            },
          ].map((item, index) => {
            const { ref: itemRef, isVisible: itemVisible } =
              useScrollAnimation(0.2);
            return (
              <div
                key={index}
                ref={itemRef}
                className={`flex items-start space-x-4 transition-all duration-1000 delay-${
                  index * 150
                } ${
                  itemVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                <CheckCircle
                  className="text-teal-500 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
