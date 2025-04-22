"use client";

import React from "react";

export default function Book() {
  return (
    <section
      id="book"
      className="py-12 px-4 md:px-8 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">

        {/* Book Cover */}
        <div className="w-full md:w-1/3">
          <img
            src="/book-cover.png"
            alt="Between Monsters and Mercy - Addiction Recovery Memoir by Kelly Clark"
            className="w-full rounded shadow-lg"
          />
        </div>

        {/* Book Description */}
        <article className="w-full md:w-2/3 space-y-5">
          <h1
            className="text-3xl font-semibold"
            style={{ fontFamily: "'Alike', serif" }}
          >
            Between Monsters and Mercy
          </h1>

          <h2 className="text-xl font-semibold">
            A true story of faith, addiction, redemption, and recovery
          </h2>

          <p>
            In a world where addiction has become the epidemic of despair,{" "}
            <em>Between Monsters and Mercy</em> is an incredible story of hope.
            It follows the difficult journey of my life as a heroin and
            meth-addicted prostitute and my path to God and recovery.{" "}
            <em>Between Monsters and Mercy</em> gives a unique insight into the
            inner workings of the confusing, and often misunderstood, disease of
            addiction. It illuminates the power of surrender, the reality of
            divine intervention, and the possibility for real change.
          </p>

          <p>
            When it appears all is lost, the miraculous power of the Atonement
            of Jesus Christ can heal in the most unlikely of places. This book
            offers raw honesty, spiritual hope, and a testimony that recovery is
            possible through faith, community, and grace.
          </p>

          {/* Buy Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://www.amazon.com/Between-Monsters-Mercy-Inspiring-Story/dp/1462136966"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#FF9900] text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              Buy on Amazon
            </a>

            <a
              href="https://www.cedarfort.com/products/between-monsters-and-mercy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              Cedar Fort Publishing
            </a>

            <a
              href="https://www.audible.com/pd/Between-Monsters-and-Mercy-Audiobook/B08FRKS1Q9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#4d7aef] text-white font-semibold rounded hover:bg-gray-800 transition"
            >
              Listen on Audible
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
