"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Coaching() {
  return (
    <section id="coaching" className="px-4 sm:px-8 py-12 max-w-6xl mx-auto">
      {/* Page Title */}
      <h1
        className="text-3xl sm:text-4xl font-bold mb-10 text-[#3E2723]"
        style={{ fontFamily: "'Alike', serif" }}
      >
        Faith-Based Coaching for Addiction Recovery and Personal Transformation
      </h1>

      {/* Text and Image Layout */}
      <div className="flex flex-col md:flex-row items-start md:gap-8 gap-y-10 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div id="consult">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ fontFamily: "'Alike', serif" }}
            >
              What is Recovery Coaching?
            </h2>
            <div className="space-y-6">
              <p>
                Recovery coaching is real, personalized support from someone
                who’s walked through the darkness of addiction and come out the
                other side. It’s not about checking boxes or reciting clinical
                advice—it’s about being met exactly where you are, by someone
                who understands the chaos, the shame, the cycles, and the quiet
                desperation that often comes with substance use and damaging
                behaviors.
              </p>
              <p>
                <strong>
                  With over ten years of experience working one-on-one with
                  individuals overcoming addiction as well as leading group
                  recovery meetings
                </strong>
                , I understand that recovery isn’t one-size-fits-all. Together,
                we’ll create a roadmap tailored to you—one that honors your
                story, your pace, and your vision for the future. This is your
                journey, but you don’t have to do it alone.
              </p>
              <p>
                As your recovery coach, I bring lived experience. I’ve known the
                weight of addiction, the pain of isolation, and the fear of
                change. I’ve also experienced the miracle of transformation, and
                I believe deeply that it’s possible for you too.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
          <Image
            src="/support1.png"
            alt="Faith-based support and coaching for addiction recovery"
            width={600}
            height={400}
            className="w-full h-auto rounded shadow-md"
          />
        </div>
      </div>

      {/* Coaching Session Description */}
      <div className="mt-10 text-left space-y-6 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontFamily: "'Alike', serif" }}
        >
          What Happens in a Coaching Session?
        </h2>
        <p>
          I’ll help you recognize patterns that no longer serve you, uncover
          your strengths, and rebuild from a place of honesty and hope. Whether
          you’re just beginning to question your behaviors or you’ve already
          taken your first steps toward healing, coaching is a safe,
          judgment-free space to explore what’s next.
        </p>
      </div>

      {/* Who It's For */}
      <div className="mt-10 space-y-6 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontFamily: "'Alike', serif" }}
        >
          Who Is Recovery Coaching For?
        </h2>
        <p>
          Whether you’re sober curious, actively using, newly sober, or walking
          through a relapse—I'll meet you where you are. I work with
          individuals, couples, and families looking to create healthier, more
          connected lives.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-10 space-y-6 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontFamily: "'Alike', serif" }}
        >
          Let’s Connect — Start Your Recovery Journey Today
        </h2>
        <p>
          I know how scary it is to admit there’s a problem. But the path
          forward becomes clearer with the right guide.
        </p>
        <p>
          <strong>
            Kelly Clark offers coaching to clients in Utah and across the U.S.
          </strong>{" "}
          All consultations are confidential and judgment-free.
        </p>
        <p>
          If you're unsure where to begin, I offer a free consultation for
          anyone who wants to talk about their own substance use—or a loved
          one's. It's a safe, confidential space to ask questions, get clarity,
          and explore your options. There's absolutely no pressure to make a
          decision.{" "}
          <strong>Sometimes, the first step is simply having a conversation.</strong>
        </p>

        {/* Buttons */}
        <div className="flex items-center space-x-4 mt-6">
          <a
            href="https://calendly.com/mrs-kellyannclark/20-min-free-consultation-with-kelly-clark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#5d7466] text-white font-semibold rounded border border-black hover:bg-white transition"
          >
            Book a Free Consultation
          </a>
          <a
            href="https://calendly.com/mrs-kellyannclark/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#5d7466] text-white font-semibold rounded border border-black hover:bg-white transition"
          >
            Schedule Coaching Session
          </a>
        </div>
      </div>
    </section>
  );
}
