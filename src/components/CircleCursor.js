'use client'

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const CircleCursor = () => {
  const innerCircleRef = useRef(null);
  const outerCircleRef = useRef(null);
  const pathname = usePathname();

  // Store GSAP animation references
  const animations = useRef({
    inner: null,
    outer: null
  });

  // Store mouse position
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const innerCircle = innerCircleRef.current;
    const outerCircle = outerCircleRef.current;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Attach mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // GSAP animation loop
    const updateCursorPosition = () => {
      if (!innerCircle || !outerCircle) return;

      const { x, y } = mousePos.current;

      // Inner circle position
      animations.current.inner = gsap.to(innerCircle, {
        x: x - 4, // Adjust for circle radius
        y: y - 4,
        duration: 0.5,
        ease: "back.out"
      });

      // Outer circle position
      animations.current.outer = gsap.to(outerCircle, {
        x: x - 16, // Adjust for circle radius
        y: y - 16,
        duration: 0.7,
        ease: "back.out"
      });
    };

    // Start animation loop
    const animationId = gsap.ticker.add(updateCursorPosition);

    // Hover handlers
    const handleHover = () => {
      gsap.to(innerCircle, { scale: 1.5, duration: 0.3 });
      gsap.to(outerCircle, { scale: 0.7, borderWidth: '2px', duration: 0.3 });
    };

    const handleUnhover = () => {
      gsap.to(innerCircle, { scale: 1, duration: 0.3 });
      gsap.to(outerCircle, { scale: 1, borderWidth: '1px', duration: 0.3 });
    };

    const handleParaHover = () => {
      gsap.to(innerCircle, { scale: 1, duration: 0.3 });
      gsap.to(outerCircle, { scale: 1.6, borderWidth: '1px', duration: 0.3 });
    };

    // Function to attach hover listeners
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [data-hover]');
      const paraElements = document.querySelectorAll('p, h1, [data-hover]');

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });

      paraElements.forEach(el => {
        el.addEventListener('mouseenter', handleParaHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };

    // Initial attachment
    attachHoverListeners();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(animationId);

      if (animations.current.inner) animations.current.inner.kill();
      if (animations.current.outer) animations.current.outer.kill();
    };
  }, [pathname]); // Re-run effect when path changes

  return (
    <>
      <div
        ref={innerCircleRef}
        className="hidden md:block fixed w-2 h-2 bg-red-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={outerCircleRef}
        className="hidden md:block fixed w-8 h-8 border-2 border-[#97badd] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ left: 0, top: 0 }}
      />
    </>
  );
};

export default CircleCursor;