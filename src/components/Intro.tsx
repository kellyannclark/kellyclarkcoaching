import React from "react";

export default function Intro() {
  return (
    <section
    className="relative z-10 w-full px-4 sm:px-8 py-10 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed"
    style={{ color: "#3E2723" }}
  >
    <h1 className="text-3xl sm:text-4xl mb-4 font-bold" style={{ fontFamily: "'Alike', serif" }}>
      Substance Use & Addiction Recovery Coaching with Faith and Purpose
    </h1>
  
    <p>
      Perhaps you’ve found yourself drinking, eating, using substances, or engaging in damaging behaviors more frequently than you ever intended. Maybe the impact is subtle—your routines feel off, your relationships strained, or your peace disturbed. Or maybe it’s more severe, and life as you know it feels like it’s slipping out of control.
    </p>
    <p className="mt-8">
      Whether you're standing at the edge, unsure how you got here, or you’ve already hit what feels like rock bottom, please know this: you are not alone.{" "}
      <strong>You don’t have to carry the weight of change by yourself.</strong>{" "}
      There is a path forward—and there is support available to walk it with you.
    </p>
  
    {/* Stacked buttons */}
    <div className="flex flex-col items-start space-y-4 mt-6">
      <a
        href="https://calendly.com/mrs-kellyannclark/20-min-free-consultation-with-kelly-clark"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#5d7466] text-white font-semibold rounded border border-black hover:bg-white hover:text-black transition"
      >
        Book a Free Consultation
      </a>
      <a
        href="https://calendly.com/mrs-kellyannclark/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-[#5d7466] text-white font-semibold rounded border border-black hover:bg-white hover:text-black transition"
      >
        Schedule Coaching Session
      </a>
    </div>

      </section>
  
  );
}
