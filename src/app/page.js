import Hero from '@/components/Hero'
import Image from "next/image";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import Navbar from "@/components/Navbar"; // Original import

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
    </div>
  ); // Corrected the return statement
}
