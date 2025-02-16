'use client'
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Arrow from "./Arrow";
import {projects} from '../lib/common'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function Projects() {
  const card=useRef()
  const mainContainer = useRef()

  useGSAP(()=>{
   
    // Main container animation
    gsap.from(mainContainer.current, {
      opacity: -1,
      duration: 1.3,
      ease: 'power4.out'
    })
    

    gsap.utils.toArray('.card').forEach((card, index) => {
      const directions = [
        { x: -130, y: 0 }, // From left
        { x: 130, y: 0 },  // From right
        { x: 0, y: -130 }, // From top
        { x: 0, y: 130 },  // From bottom
      ];
    
      const direction = directions[index % directions.length]; // Loop through the directions
    
      gsap.from(card, {
        duration: 1,
        x: direction.x,
        y: direction.y,
        opacity: 0,
        delay:0
        
      });
    });
    
  })

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div ref={mainContainer} className="min-h-screen w-[60vw] bg-gray-90 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects.</h1>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, index) => (
           <div
            projects
            key={index}
           className={`relative card group h-96 rounded-lg overflow-hidden ${
             index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"
           }`}
           onMouseEnter={() => setHoveredProject(project.id)}
           onMouseLeave={() => setHoveredProject(null)}
         >
         <Link  href={project.src}>
           
            {/* Dynamic Background Image */}
            <div
           
              className="absolute  inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url(${
                  hoveredProject === project.id ? project.images[1] : project.images[0]
                })`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-center">{project.description}</p>
              <div className="flex space-x-4 mt-4 ">
                {project.tech.map((tech, i) => (
                  <img
                    key={i}
                    src={tech} 
                    alt={tech}
                    className="w-10 h-8"
                  />
                ))}
              </div>
            </div>
         
         </Link> </div>
        ))}
      </div>
<Arrow destination={'/resume'} text="Let's Go To My Resume."/>

<div className='text-[12rem] font-title opacity-5 left-0 font-extrabold fixed bottom-0 -z-1'>Projects.</div>

    </div>
  );
}







// 'use client'
// import { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { projects } from '../lib/common';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Projects() {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   useEffect(() => {
//     // Select all card elements
//     const cards = document.querySelectorAll('.card');

//     // Loop through each card and create a ScrollTrigger animation
//     cards.forEach((card, index) => {
//       const direction = index % 2 === 0 ? 1 : -1; // Alternate direction for each card

//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 80%", // Trigger animation when the card is 80% from the top of the viewport
//           end: "bottom 20%", // End animation when the card is 20% from the bottom of the viewport
//           scrub: true, // Smoothly animate the transition
//         },
//         x: direction * 100, // Move card from left or right
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//       });
//     });

//     // Cleanup ScrollTriggers on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="min-h-screen w-[60vw] bg-gray-90 text-white p-8">
//       <h1 className="text-4xl font-bold text-center mb-12">My Projects.</h1>

//       {/* Grid Layout */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className={`relative card group h-96 rounded-lg overflow-hidden ${
//               index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"
//             }`}
//             onMouseEnter={() => setHoveredProject(project.id)}
//             onMouseLeave={() => setHoveredProject(null)}
//           >
//             <Link href={project.src}>
//               {/* Dynamic Background Image */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center transition-all duration-500"
//                 style={{
//                   backgroundImage: `url(${
//                     hoveredProject === project.id ? project.images[1] : project.images[0]
//                   })`,
//                 }}
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
//                 <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
//                 <p className="text-center">{project.description}</p>
//                 <div className="flex space-x-4 mt-4">
//                   {project.tech.map((tech, i) => (
//                     <img
//                       key={i}
//                       src={tech}
//                       alt={tech}
//                       className="w-10 h-8"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="flex mt-8 pt-4 relative z-20">
//         <p className="mr-5">Let's Go to my Resume.</p>
//         <Arrow destination={'/resume'} />
//       </div>

//       <div className='text-[12rem] font-title opacity-5 left-0 font-extrabold fixed bottom-0 -z-1'>
//         Projects.
//       </div>
//     </div>
//   );
// }
