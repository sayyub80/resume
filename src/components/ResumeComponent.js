'use client'
import { useState,useRef } from 'react';
import { Download } from 'lucide-react';
import Arrow from './Arrow';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ResumeViewer() {

  const mainContainer = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline()
    // Main container animation
    tl.from(mainContainer.current, {
      opacity: -1,
      duration: 1.3,
      ease: 'power4.out'
    })
    
  })


  const [isLoading, setIsLoading] = useState(false);
  const resumeUrl = '/resumed.pdf';
  const downloadFileName = 'resume.pdf';

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div ref={mainContainer} className='pl-7 w-[92vw] md:w-[60vw]'>
    <h1 className="text-4xl md:text-5xl font-bold  mb-6">Resume.</h1>
    <div className=" md:min-h-screen bg-gray-100 p-4">
      <div className="relative ">
        {/* resume Viewer */}
        <div className="md:h-[100vh] overflow-auto">
          <img src='/resume1.svg'></img>
        </div>

        {/* Download Button */}
        <div className="">
          <div className="max-w-4xl mx-auto md:pt-2 flex justify-end">
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className="flex items-center gap-2 mt-2  px-2 md:px-6 py-1 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
            >
              <Download className="w-5 h-5 " />
              {isLoading ? 'Downloading...' : 'Download'}
            </button>
          </div>
        </div>
      </div>
     
    </div>
    <div className="mt-9">
         <h3 className="text-xl md:text-3xl font-bold my-2">
           Let's Create Something Extraordinary
         </h3>
         <p className="text-[11px] md:text-sm text-gray-300 mb-8 w-3/4">
           If my work resonates with you and you're looking for a passionate
           developer to bring your ideas to life, I'd love to hear from you.
           Whether it's a potential project, collaboration opportunity, or even
           just tech talk over coffee - let's connect and explore how we can push
           boundaries together.
         </p>
       </div>
  <Arrow destination={'/contact'} text="Are you convinced to contact me now?"/>

  <div className='text-[5rem] md:text-[12rem] font-title opacity-[0.03] left-0 md:-left-[18.5rem] bottom-20 md:bottom-52 font-extrabold fixed  -z-1 md:rotate-90'>Resume.</div>
    </div>
    
  );
}




















