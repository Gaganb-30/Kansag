// import { Star, Quote } from "lucide-react";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const Testimonials = () => {
//   const { ref, isVisible } = useScrollAnimation(0.2);

//   return (
//     <section className="py-20 px-4 bg-white" id="testimonials">
//       <div className="max-w-7xl mx-auto">
//         <div
//           ref={ref}
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//           }`}
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-gray-600">Trusted by leading organizations</p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div
//             className={`bg-white border border-gray-200 rounded-lg p-12 transition-all duration-1000 delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-20"
//             }`}
//           >
//             <div className="flex justify-center mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="text-yellow-400 fill-current"
//                   size={24}
//                 />
//               ))}
//             </div>

//             <Quote className="text-gray-300 mx-auto mb-6" size={48} />

//             <p className="text-gray-700 text-lg text-center italic mb-8">
//               KANSAG transformed our facility management operations. Their
//               10-1-24 guarantee is not just a promise - they actually deliver on
//               it. Zero downtime, exceptional service quality, and a team that
//               truly understands our needs. Highly recommended!
//             </p>

//             <div className="flex items-center justify-center space-x-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
//               <div className="text-left">
//                 <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
//                 <p className="text-sm text-gray-600">Facility Manager</p>
//                 <p className="text-sm text-teal-500">
//                   TechVista Corporate Park
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-8">
//             <button className="border-2 border-teal-500 text-teal-500 px-6 py-3 rounded hover:bg-teal-50 transition-colors inline-flex items-center">
//               View All Testimonials
//               <span className="ml-2">→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
