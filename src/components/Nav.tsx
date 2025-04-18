"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-5 w-full shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Desktop Nav Centered */}
        <ul className="hidden sm:flex gap-4 sm:gap-6 text-[10px] sm:text-xs md:text-sm font-condensed font-bold uppercase absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
        <li><Link href="#story">Kelly&apos;s Story</Link></li>
        <li><Link href="#consult">Free Consult</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>



        {/* Hamburger Icon aligned right */}
        <button
          className="sm:hidden text-white ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center gap-4 mt-4 px-2 text-sm font-medium">
          <li><Link href="#consult" onClick={() => setIsOpen(false)}>Free Consult</Link></li>
          <li><Link href="#story" onClick={() => setIsOpen(false)}>Kelly's Story</Link></li>
          <li><Link href="#services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
