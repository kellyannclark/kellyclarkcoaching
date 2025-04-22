"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3E2723] text-[#F6E7D7] px-5 py-4 w-full shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Logo on the left */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Kelly Clark Coaching Logo"
            width={160}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Centered */}
        <ul className="hidden md:flex gap-9 custom:gap-6 text-[12px] custom:text-xs md:text-lg font-condensed font-bold uppercase absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          <li>
            <a
              href="https://calendly.com/mrs-kellyannclark/20-min-free-consultation-with-kelly-clark"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-[#F6E7D7] hover:text-kelly transition duration-200 ease-in-out"
            >
              Free Consult
            </a>
          </li>

          <Link
            href="#coaching"
            className="text-[#F6E7D7] hover:text-kelly transition duration-200 ease-in-out"
          >
            Services
          </Link>

          <li>
            <Link
              href="#media"
              className="text-[#F6E7D7] hover:text-kelly transition duration-200 ease-in-out"
            >
              Media / Book
            </Link>
          </li>
          <li>
            <Link
              href="#story"
              className="text-[#F6E7D7] hover:text-kelly transition duration-200 ease-in-out"
            >
              Kelly&apos;s Story
            </Link>
          </li>
        </ul>

        {/* Contact Me Button (Right side) */}
        <div className="hidden md:block ml-auto">
          <Link
            href="/contact"
            className="bg-[#F6E7D7] text-[#3E2723] px-4 py-2 rounded font-semibold text-lg custom:text-sm uppercase hover:bg-gray-200 transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Hamburger Icon aligned right */}
        <button
          className="md:hidden text-[#F6E7D7] ml-auto"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 px-2 text-sm font-medium uppercase">
          <li>
            <Link href="#story" onClick={() => setIsOpen(false)}>
              Kelly&apos;s Story
            </Link>
          </li>
          <li>
            <a
              href="https://calendly.com/mrs-kellyannclark/20-min-free-consultation-with-kelly-clark"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-kelly transition duration-200 ease-in-out"
            >
              Free Consult
            </a>
          </li>
          <li>
            <Link href="#coaching" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#media" onClick={() => setIsOpen(false)}>
              Media / Book
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-white text-black px-4 py-2 rounded font-bold shadow hover:bg-gray-200 transition"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
