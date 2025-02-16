'use client'
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const GlitchHeading = () => {
//   const headingRef = useRef(null);
//   const glitch1Ref = useRef(null);
//   const glitch2Ref = useRef(null);
//   const glitch3Ref = useRef(null);

//   useEffect(() => {
//     const heading = headingRef.current;
//     const glitch1 = glitch1Ref.current;
//     const glitch2 = glitch2Ref.current;
//     const glitch3 = glitch3Ref.current;

//     // GSAP timeline for glitch effect
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

//     // Glitch effect for the main text
//     tl.to([glitch1, glitch2, glitch3], {
//       duration: 0.1,
//       x: () => Math.random() * 10 - 5, // Random horizontal shift
//       y: () => Math.random() * 10 - 5, // Random vertical shift
//       opacity: 1,
//       ease: 'power1.inOut',
//     })
//       .to([glitch1, glitch2, glitch3], {
//         duration: 0.1,
//         x: 0,
//         y: 0,
//         opacity: 0,
//         ease: 'power1.inOut',
//       })
//       // Color shifts for the main text
//       .to(heading, { color: '#eb3702', duration: 0.1 }) // Red
//       .to(heading, { color: 'white', duration: 0.1 }) // Cyan
//       .to(heading, { color: '#ffffff', duration: 0.1 }); // Reset to white

//     // Add a clipping effect for more realism
//     gsap.to([glitch1, glitch2, glitch3], {
//       duration: 0.1,
//       clipPath: () =>
//         `polygon(${Math.random() * 100}% 0%, ${Math.random() * 100}% 100%, 0% ${Math.random() * 100}%, 100% ${Math.random() * 100}%)`,
//       repeat: -1,
//       yoyo: true,
//       ease: 'power1.inOut',
//     });
//   }, []);

//   return (
//     <div className="relative inline-block">
//       {/* Main Heading */}
//       <h1
//         ref={headingRef}
//         className="text-6xl font-bold text-white relative z-10"
//       >
//         I'M WEBDEVELOPER
//       </h1>

//       {/* Glitch Layers */}
//       <h1
//         ref={glitch1Ref}
//         className="text-6xl font-bold absolute top-0 left-0 z-0 opacity-0 pointer-events-none"
//         style={{ color: 'white', clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }} // Red layer
//       >
//         I'M WEBDEVELOPER
//       </h1>
//       <h1
//         ref={glitch2Ref}
//         className="text-6xl font-bold absolute top-0 left-0 z-0 opacity-0 pointer-events-none"
//         style={{ color: 'black', clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} // Cyan layer
//       >
//         I'M WEBDEVELOPER
//       </h1>
//       <h1
//         ref={glitch3Ref}
//         className="text-6xl font-bold absolute top-0 left-0 z-0 opacity-0 pointer-events-none"
//         style={{ color: 'white', clipPath: 'polygon(0 25%, 100% 25%, 100% 75%, 0 75%)' }} // White layer
//       >
//         I'M WEBDEVELOPER
//       </h1>
//     </div>
//   );
// };

// export default GlitchHeading;

import React from 'react';

const GlitchHeading = () => {
  return (
    <div className="relative inline-block">
      <h1
        className="glitch-text text-4xl md:text-5xl font-bold text-white tracking-wider md:tracking-[0.5rem] "
        data-text=" I'M MD SAYYUB ANSARI"
      >
        I'M MD SAYYUB ANSARI
      </h1>
      <style jsx global>{`
        /* Glitch animation keyframes */
        @keyframes glitch-anim {
          0% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
            transform: translate(0);
          }
          2% {
            clip-path: polygon(0 25%, 100% 15%, 100% 35%, 0 45%);
            transform: translate(-2px, 2px);
          }
          4% {
            clip-path: polygon(0 50%, 100% 60%, 100% 70%, 0 80%);
            transform: translate(2px, -2px);
          }
          6% {
            clip-path: polygon(0 75%, 100% 85%, 100% 95%, 0 100%);
            transform: translate(-2px, 2px);
          }
          8% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
            transform: translate(0);
          }
          100% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
            transform: translate(0);
          }
        }

        @keyframes glitch-anim-2 {
          0% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
            transform: translate(0);
          }
          2% {
            clip-path: polygon(0 15%, 100% 25%, 100% 35%, 0 25%);
            transform: translate(2px, -2px);
          }
          4% {
            clip-path: polygon(0 60%, 100% 50%, 100% 70%, 0 80%);
            transform: translate(-2px, 2px);
          }
          6% {
            clip-path: polygon(0 85%, 100% 75%, 100% 95%, 0 100%);
            transform: translate(2px, -2px);
          }
          8% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
            transform: translate(0);
          }
          100% {
            clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
            transform: translate(0);
          }
        }

        /* Glitch text styling */
        .glitch-text {
          position: relative;
          animation: glitch-anim 2.5s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 110%;
          height: 100%;
          background: black;
          color: white;
          clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff3355; /* Red shadow */
          animation: glitch-anim 2.5s infinite;
          clip-path: polygon(0 0%, 100% 0%, 100% 50%, 0% 50%);
        }

        .glitch-text::after {
          left: -2px;
          animation: glitch-anim-2 2s infinite;
          clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
};

export default GlitchHeading;