'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    src:'/projects',
    title: "Imaginify",
    description: "A photo editor with AI-powered features for enhancing and transforming images.",
    tech: ["react", "nodejs", "tailwind", "ai"],
    images: ["https://minimal-portfolio-swart.vercel.app/p3.svg", "https://minimal-portfolio-swart.vercel.app/p2.svg"],
  },
  {
    id: 2,
    src:'/projects',
    title: "ShadeChat",
    description: "A platform for anonymous chatting with end-to-end encryption and privacy-focused features.",
    tech: ["flutter", "firebase", "encryption"],
    images: ["/shadechat-1.jpg", "/shadechat-2.jpg"],
  },
  {
    id: 3,
    src:'/projects',
    title: "Job Portal",
    description: "A job search platform connecting employers and job seekers with advanced filtering and matching algorithms.",
    tech: ["nextjs", "nodejs", "mongodb", "tailwind"],
    images: ["/jobportal-1.jpg", "/jobportal-2.jpg"],
  },
  {
    id: 4,
    src:'/projects',
    title: "NetflixGPT",
    description: "A Netflix-like streaming platform with AI integration for personalized recommendations and content discovery.",
    tech: ["https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png", "https://th.bing.com/th/id/OIP.290Zrd7jUMmV94wZhwmjkAHaEv?rs=1&pid=ImgDetMain", "https://pc-tablet.com/wp-content/uploads/2023/12/gemini-logo.webp", "https://sujanbyanjankar.com.np/wp-content/uploads/2018/09/firebase_logo_shot.png"],
    images: ["https://www.whats-on-netflix.com/wp-content/uploads/2024/05/netflix-app-on-windows-getting-major-refresh.jpg", "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg"],
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen w-[60vw] bg-gray-90 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects.</h1>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((project, index) => (
           <div
            projects
           className={`relative group h-96 rounded-lg overflow-hidden ${
             index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"
           }`}
           onMouseEnter={() => setHoveredProject(project.id)}
           onMouseLeave={() => setHoveredProject(null)}
         >
         <Link  href={project.src}>
           
            {/* Dynamic Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
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
      <div className="flex mt-8 pt-4 relative z-20">
<p className="mr-5">Let's Go to my Resume.</p>
<Link href={'/resume'}> <ArrowRight/> </Link>
</div>
<div className='text-[12rem] font-title opacity-5 left-0 font-extrabold fixed bottom-0 -z-1'>Projects.</div>

    </div>
  );
}

