"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

function Arrow({ destination, text }) {
  useGSAP(() => {
    gsap.to(".arrow", {
      x: 20,
      duration: 0.6,
      delay: 0,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div>
      <Link href={`${destination}`}>
        <div>
          <div className=" relative z-20 flex next mt-8 pt-4 text-gray-300">
            <p className="mr-5 hover:underline">{text}</p>
            <MoveRight className="arrow " size={27} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Arrow;
