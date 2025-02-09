'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // Get the router instance

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <Link href="/">MyPortfolio</Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <Link
                  href={link.path}
                  className={`relative text-white hover:text-gray-200 font-medium transition-colors duration-300 ${router.pathname === link.path ? 'text-red-400' : ''}`} // Apply active class
                >
                  {link.name}
                  {/* Hover Effect - Line Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md w-full py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  <Link
                    href={link.path}
                    className={`relative text-white hover:text-gray-200 font-medium transition-colors duration-300 ${router.pathname === link.path ? 'text-red-400' : ''}`} // Apply active class
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
