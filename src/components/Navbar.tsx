"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkStyle = (path: string) =>
    pathname === path
      ? "text-white font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r from-red-500 to-green-500"
      : "text-white hover:text-green-300 transition duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white text-red-600 flex justify-center items-center rounded-full shadow-lg">
            <span className="text-xl font-bold">A</span>
          </div>
          <Link href="/">
            <h1 className="ml-3 text-white text-2xl font-bold">
              Anvika Industries
            </h1>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className={getLinkStyle("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className={getLinkStyle("/aboutus")}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contactus" className={getLinkStyle("/contactus")}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white flex flex-col space-y-4 p-4 shadow-md">
          <li>
            <Link
              href="/"
              className="text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="text-red-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contactus"
              className="text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
