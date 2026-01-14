// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// const Leadership = () => {
//   const { ref, isVisible } = useScrollAnimation(0.2);

//   const leaders = [
//     {
//       name: "Sagar Kapruwan",
//       role: "Co-Founder & Director",
//       experience: "10+ years Experience",
//       description:
//         "Finance, Operations, and Management. Expert in systems design, resource optimization, and business growth.",
//       color: "from-green-400 to-emerald-500",
//     },
//     {
//       name: "Kanish Ajj",
//       role: "Co-Founder & Director",
//       experience: "12+ years Experience",
//       description:
//         "Global experience in facility management. Worked with Walmart, Staples, Marshalls, Sobeys, including projects with autonomous cleaning robots (Autobots).",
//       color: "from-pink-400 to-rose-500",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div
//           ref={ref}
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//           }`}
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Leadership You Can Trust
//           </h2>
//           <p className="text-gray-600">
//             Decades of combined expertise in facility management and operations
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {leaders.map((leader, index) => {
//             const { ref: itemRef, isVisible: itemVisible } =
//               useScrollAnimation(0.2);
//             return (
//               <div
//                 key={index}
//                 ref={itemRef}
//                 className={`bg-white border border-gray-200 rounded-lg p-8 transition-all duration-1000 delay-${
//                   index * 200
//                 } ${
//                   itemVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-20"
//                 }`}
//               >
//                 <div className="flex items-start space-x-6">
//                   <div
//                     className={`w-24 h-24 rounded-full bg-gradient-to-br ${leader.color} flex-shrink-0`}
//                   ></div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-1">
//                       {leader.name}
//                     </h3>
//                     <p className="text-teal-500 font-medium mb-1">
//                       {leader.role}
//                     </p>
//                     <p className="text-sm text-gray-500 mb-4">
//                       {leader.experience}
//                     </p>
//                     <p className="text-gray-600">{leader.description}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Leadership;
