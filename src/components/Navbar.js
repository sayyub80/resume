'use client'
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from '../lib/common';
import gsap from "gsap";
import { AlignLeft , AlignRight } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // Get the router instance

  // GSAP animation for hover effect
  const handleMouseEnter = (index) => {
    gsap.to(`.nav-item-${index} span`, {
      width: '120%', // Expand the underline to full width
      duration: 0.4,
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(`.nav-item-${index} span`, {
      width: '0%',    // Collapse the underline
      duration: 0.4,
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute -top-32 pt-5 w-full md:w-[80vw] md:-left-36 bg-transparent z-50">
      <div className="max-w-7xl mx-auto pl-6 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <Link href="/">
              <img className=" w-8 md:w-12" src="/code.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <Link
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  href={link.path}
                  className={`relative inline-block  overflow-hidde nav-item-${index}`}
                >
                  {link.name}
                  <span className="absolute left-[50%] w-0 -translate-x-[50%] top-5 h-[2px] bg-white"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <AlignRight />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed flex flex-col justify-center items-center  top-0 left-0 md:hidden min-h-screen w-[100vw] bg-black">
            <div className=" right-7 top-14 absolute md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <AlignLeft /> 
            </button>
          </div>
            <div className="flex flex-col gap-10 space-y-4 px-4">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  <Link
                    href={link.path}
                    className={`relative text-white hover:text-gray-200 font-medium transition-colors duration-300 ${router.pathname === link.path ? 'text-red-400' : ''}`}
                    onClick={toggleMobileMenu} // Close menu on link click
                  >
                    {link.name}
                    {/* Hover Effect - Line Animation */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
