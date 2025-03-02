'use client'
import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import {  MoveRight } from 'lucide-react';
import SocialMedia from "./SocialMedia";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "./Arrow";
import Heading from "./Heading";



export default function Hero() {
  useGSAP(()=>{
    const t1=gsap.timeline()
    t1.from('.heading',{
      duration:0.3,
      delay:0,
      y:20,
      opacity:0,
      
    })
    .from(".para",{
      y: 20,
      opacity: 0,
      duration: 0.3,
      delay:0
    })
    .from('.p2',{
      y: 20,
      delay:0,
      opacity: 0,
      duration: 0.3,
    })
    .from('.next',{
      y: 20,
      delay:0,
      opacity: 0,
      duration: 0.3,
    })
    .from(".Social",{
      y: 20,
      delay:0,
      opacity: 0,
      duration: 0.3,
    })

   
  })
  
  return (
    <div className="w-[92vw] md:w-[60vw]  pt-20 pl-8 ">
      <Heading/>

<p className="mt-5 text-sm md:text-[15px] para leading-8 mb-6 text-gray-300">
  "I’m a <span className="text-white font-semibold">Full Stack Developer</span>  with a passion for creating cutting-edge web
  experiences. I design and develop custom websites that are fast,
  scalable, and user-friendly.
</p>
<p className=" text-sm md:text-[15px] p2 leading-8 text-gray-300">
  From clean code to stunning visuals, I bring a blend of creativity and
  technical expertise to every project. With a focus on <span className="text-white font-semibold">performance</span> and
  <span className="text-white font-semibold"> design</span>, I make sure your website not only looks great but also works
  seamlessly. Let’s work together to turn your web ideas into reality."
</p>
<Arrow destination={'/about'} text="See More About Me."/>
 <div className='Social'><SocialMedia/></div>
<div className='text-[6rem] md:text-[12rem] cursor-default font-title opacity-[0.02] left-0 font-extrabold fixed bottom-20 md:bottom-0 -z-1'>SA.</div>
</div>  
  );
}
