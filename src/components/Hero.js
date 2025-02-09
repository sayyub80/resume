import React from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import SocialMedia from "./SocialMedia";
import Link from "next/link";


export function Hero() {
  return (
    <div className=" w-[60vw]  pt-20 pl-8 ">
      <h1 className="mb-5 md:text-5xl sm:text-3xl tracking-[0.15em] ">I'M MD SAYYUB ANSARI</h1>

<p className="text-md leading-8 mb-8">
  "I’m a Fullstack Developer with a passion for creating cutting-edge web
  experiences. I design and develop custom websites that are fast,
  scalable, and user-friendly.
</p>
<p className="text-md leading-8">
  From clean code to stunning visuals, I bring a blend of creativity and
  technical expertise to every project. With a focus on performance and
  design, I make sure your website not only looks great but also works
  seamlessly. Let’s work together to turn your web ideas into reality."
</p>
<div className="flex mt-8 pt-4">
<p className="mr-5">See More About Me.</p>
<Link href={'/about'}> <ArrowRight/> </Link>
</div>
 <SocialMedia/>
    </div>
    
    
  );
}
