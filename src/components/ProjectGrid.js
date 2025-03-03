'use client'
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Arrow from "./Arrow";
import { projects } from '../lib/common';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Projects() {
  const card = useRef();
  const mainContainer = useRef();
  const [showAllProjects, setShowAllProjects] = useState(true);

  // Filter projects based on the current state
  const filteredProjects = showAllProjects ? projects : projects.filter(project => project.currentlyWorking);

  useGSAP(() => {
    // Main container animation
    gsap.from(mainContainer.current, {
      opacity: -1,
      duration: 1.3,
      ease: 'power4.out'
    });

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
        delay: 0
      });
    });
  });

  return (
    <div ref={mainContainer} className="min-h-screen bg-gray-90 text-white py-6 pl-6 md:px-10 w-[92vw] md:w-[60vw]">
      <h1 className="text-4xl md:text-5xl font-bold  mb-6">Projects.</h1>

      {/* Buttons for filtering projects */}
      <div className="flex md:justify-center space-x-4 mb-12">
       
        <button
          onClick={() => setShowAllProjects(true)}
          className={`text-sm md:text-[16px] px-4 md:px-6 py-2 rounded font-semibold transition-colors ${
            showAllProjects ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setShowAllProjects(false)}
          className={` px-4 text-sm md:text-[16px] md:px-6 md:py-2 rounded font-semibold transition-colors ${
            !showAllProjects ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
        >
          In Progress
        </button>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-12 gap-6 auto-rows-[minmax(100px, auto)] min-h-[100vh]">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`h-96 relative card group rounded-xl overflow-hidden col-span-12 md:col-span-6 ${
              index / 2 === 0 ? "md:row-span-5" : // First card spans 5 rows
              index === 1 ? "md:row-span-7" : // Second card spans 7 rows
              index === 2 ? "md:row-span-7" : // Third card spans 7 rows
              "md:row-span-5" // Fourth card spans 5 rows
            }`}
          >
            <Link target="_blank" href={project.src}>
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
                <div className="flex space-x-1 mt-4">
                  {project.tech.map((tech, i) => (
                    <p key={i} className="font-semibold text-[9px] rounded-full py-2 px-4 bg-gray-600">
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Arrow destination={'/resume'} text="Let's Go To My Resume." />

      <div className='text-[5rem]  sm:text-[8rem] md:text-[12rem] font-title opacity-[0.03] left-0 font-extrabold fixed sm:bottom-0 bottom-20 -z-1'>Projects.</div>
    </div>
  );
}