import React from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

function ResumeComponent() {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Resume.</h1>
      <p>Here is a brief summary of my experience and skills.</p>
      <div className="bg-black w-[50vw] h-screen">
        <img className="" src=""></img>
      </div>
      <div className="mt-9">
        <h3 className="text-3xl font-bold my-2">
          Let's Create Something Extraordinary
        </h3>
        <p className="text-lg text-gray-300 mb-8 w-3/4">
          If my work resonates with you and you're looking for a passionate
          developer to bring your ideas to life, I'd love to hear from you.
          Whether it's a potential project, collaboration opportunity, or even
          just tech talk over coffee - let's connect and explore how we can push
          boundaries together.
        </p>
      </div>
      <div className="flex mt-8 pt-4 relative z-20">
<p className="mr-5">Are you convinced to contact me now?</p>
<Link href={'/contact'}> <ArrowRight/> </Link>
</div>
<div className='text-[12rem] font-title opacity-[0.03] -left-[18.5rem] bottom-52 font-extrabold fixed  -z-1 rotate-90'>Resume.</div>

    </div>
  );
}

export default ResumeComponent;
