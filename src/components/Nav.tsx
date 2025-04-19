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
          <li>
            <Link href="#story" className="text-white hover:text-kelly transition duration-200 ease-in-out">
              Free Consult
            </Link>
          </li>
          <li>
            <Link href="#consult" className="text-white hover:text-kelly transition duration-200 ease-in-out">
            Services
            </Link>
          </li>
          <li>
            <Link href="#media" className="text-white hover:text-kelly transition duration-200 ease-in-out">
              Media
            </Link>
          </li>
          <li>
            <Link href="#book" className="text-white hover:text-kelly transition duration-200 ease-in-out">
              Book
            </Link>
          </li>         
          <li>
            <Link href="#services" className="text-white hover:text-kelly transition duration-200 ease-in-out">
            Kelly&apos;s Story
            </Link>
          </li>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center gap-4 mt-4 px-2 text-sm font-medium uppercase">
          <li><Link href="#story" onClick={() => setIsOpen(false)}>Kelly&apos;s Story</Link></li>
          <li><Link href="#consult" onClick={() => setIsOpen(false)}>Free Consult</Link></li>
          <li><Link href="#services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="#media" onClick={() => setIsOpen(false)}>Media</Link></li>
          <li><Link href="#book" onClick={() => setIsOpen(false)}>Book</Link></li>
        </ul>
      )}
    </nav>
  );
}
