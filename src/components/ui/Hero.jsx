// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// //<div className="min-h-screen">
// // <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
// //   <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"></div>

// const Hero = () => {
//   const { ref, isVisible } = useScrollAnimation(0.2);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ">
//         <div
//           ref={ref}
//           className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//           }`}
//         >
//           <div className="mb-4">
//             <span className="inline-flex items-center text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
//               <span className="mr-2">🏆</span>
//               Trusted by 25+ Facilities Across NCR
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
//             Redefining Facility
//             <br />
//             <span className="text-teal-500">Management</span>
//           </h1>

//           <p className="text-2xl text-gray-600 mb-4 max-w-2xl mx-auto">
//             Service You Trust. Excellence You Experience.
//           </p>

//           <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
//             We deliver integrated facility management solutions that enhance
//             operational efficiency, improve hygiene standards, and create
//             environments that are cleaner, safer, and more productive.
//           </p>

//           <div className="flex justify-center space-x-4">
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-primary/90 h-9 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
//               Get Free Consultation
//               <span className="ml-2">→</span>
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:text-accent-foreground h-9 px-8 py-6 text-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-50 transition-all duration-300">
//               Explore Services
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;
