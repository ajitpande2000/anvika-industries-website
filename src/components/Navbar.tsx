"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contactus" },
  ];

  return (
    <>
      {/* Simple Contact Bar - Clean */}
      <div className="hidden lg:flex bg-gray-50 border-b border-gray-100 text-xs py-2.5 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8 text-gray-600">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              +91 98765 43210
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" />
              info@anvikaindustries.com
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-gray-600">
            <MapPin className="w-3 h-3" />
            Nashik, Maharashtra
          </span>
        </div>
      </div>

      {/* Clean E-commerce Style Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-sm border-b border-gray-200" 
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo - Clean & Simple */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-200">
                <Image
                  src="/favicon.ico"
                  alt="Anvika Logo"
                  fill
                  sizes="2.75rem"
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                  Anvika Industries
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - E-commerce Style */}
            <ul className="hidden md:flex items-center gap-1 md:gap-2 lg:gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600 shadow-sm"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Section - E-commerce Standard */}
            <div className="flex items-center gap-3 lg:gap-4">
          
           

              {/* CTA Button */}
              <Link
                href="/contactus"
                className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-xl font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                   Get In Touch
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Width */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-3 ${
                        isActive(link.href)
                          ? "text-blue-600 bg-blue-50 border-2 border-blue-200 shadow-sm"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        isActive(link.href) ? "bg-blue-600" : "bg-gray-300"
                      }`} />
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4 mt-4 border-t border-gray-200">
                  <Link
                    href="/contactus"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-200"
                
                  >
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
