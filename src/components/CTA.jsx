import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-teal-500 to-teal-600">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Facility?
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Get a free consultation and customized facility management plan today
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-teal-600 px-8 py-3 rounded hover:bg-gray-50 transition-colors font-medium inline-flex items-center">
            Request a Quote
            <span className="ml-2">→</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-colors font-medium">
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
