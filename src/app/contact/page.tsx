// src/app/contact/page.tsx

"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_2invn1y",     // ← replace with your actual ID
        "template_fel2r8q",    // ← replace with your actual ID
        form.current,
        "-vxuNq-JNxVMHz6g_"      // ← replace with your actual key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
            setStatus("Something went wrong. Please try again.");
            console.error("EmailJS Error:", error);
          }
          
      );
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-8 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6" style={{ fontFamily: "'Alike', serif" }}>
        Contact Kelly 
      </h1>
      <p className="mb-8">
        Have questions or want to work together? Fill out the form below and I’ll get back to you shortly. I can also be reached directly at (208) 315-2901.
      </p>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-green-600">{status}</p>}
      </form>
    </div>
  );
}
