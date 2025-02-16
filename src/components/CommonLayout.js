
import * as React from "react";
import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import CircleCursor from "./CircleCursor";


function CommonLayout({children}){
     return (
    <>
     
    <div className=" text-white">  
    <div className="min-h-screen  w-full dark:bg-[#07171B] bg-white    dark:bg-grid-white/[0.017] bg-grid-black/[0.02]  fixed flex flex-col items-center justify-center">
    
      {/* Radial gradient for the container to give a faded look */}
       <div className="dark:bg-gradient-to-tr from-[#020A13] via-[#061B23] to-[#15111E] absolute flex-row pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      
    </div>
     
    <div className="absolute pb-48 min-height-[60vh] top-[20vh]   md:left-[18.2vw] ">{children}</div>
   </div>
   
    </>
    

      
  );
}
 
export default CommonLayout;
