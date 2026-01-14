// import { Calendar, Building2, Users, Award } from "lucide-react";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const Stats = () => {
//   const { ref, isVisible } = useScrollAnimation(0.2);

//   const stats = [
//     { icon: Calendar, value: "10+", label: "Years Experience" },
//     { icon: Building2, value: "25+", label: "Facilities Managed" },
//     { icon: Users, value: "50+", label: "Skilled Workforce" },
//     { icon: Award, value: "100%", label: "Service Guarantee" },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
//       <div ref={ref} className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className={`text-center transition-all duration-1000 delay-${
//                 index * 150
//               } ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-20"
//               }`}
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
//                   <stat.icon className="text-white" size={32} />
//                 </div>
//               </div>
//               <div className="text-4xl font-bold text-white mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-white/90">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;
