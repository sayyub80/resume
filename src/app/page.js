import { GridBackground, Hero } from "@/components/Hero"; // Corrected import path
import Image from "next/image";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
       <div className="relative">
        
          <Navbar/>
          <Hero/>
       </div>
  ); // Corrected the return statement
}
