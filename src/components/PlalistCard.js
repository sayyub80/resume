import { Timeline } from 'gsap/gsap-core';
import React from 'react'
import Link from "next/link";
function PlaylistCard({title,description,link}) {
  return (
    
       <div className="relative ">
              <div className="absolute -left-[2.35rem] top-2 w-4 h-4 bg-[#061B23] border-2 rounded-full" />
              <div className=" flex  md:justify-between md:items-start">
                <div className="flex-1 w-full  md:pr-4">
                  <h3 className=" text-lg md:text-xl font-semibold">{title}</h3>
                  <p className="text-[12px] md:text-sm mt-2">
                   {description}
                  </p>
                </div>
                <Link href={link} target="_blank" rel="noopener noreferrer"><span className="underline text-[12px] md:text-sm">View Plalist</span></Link> 
              </div>
            </div>
    
  )
}

export default PlaylistCard;
