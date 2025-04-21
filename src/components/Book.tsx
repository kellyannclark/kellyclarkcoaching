"use client";

import React from "react";

const Book = () => {
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
            alt="Between Monsters and Mercy Book Cover"
            className="w-full rounded shadow-lg"
          />
        </div>

        {/* Book Content */}
        <div className="w-full md:w-2/3 space-y-5">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "'Alike', serif" }}
          >
            Between Monsters and Mercy
          </h2>

          <p>
            In a world where addiction has become the epidemic of despair,{" "}
            <em>Between Monsters and Mercy</em> is an incredible story of hope.
            It follows the difficult journey of my life as a heroin and
            meth-addicted prostitute and my path to God and recovery.{" "}
            <em>Between Monsters and Mercy</em> gives a unique insight on the
            inner workings of the confusing, and often misunderstood, disease of
            addiction. It illuminates the power of surrender, the reality of
            divine intervention, and the possibility for real change. When it
            appears all is lost, the miraculous power of the Atonement of Jesus
            Christ can heal in the most unlikely of places.
          </p>

          <blockquote className="italic border-l-4 border-[#d79877] pl-4 text-gray-600 dark:text-gray-400">
            “I used to believe I was uniquely broken — beyond repair, beyond
            redemption. But I’ve come to know a Savior who specializes in
            impossible stories.”
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://www.amazon.com/Between-Monsters-Mercy-Inspiring-Story/dp/1462136966/ref=sr_1_1?crid=1UAPRC0URZRVN&dib=eyJ2IjoiMSJ9.hXzfE2pp236_PpYFhq3UYt_dYuqqs5bcqXEH_f4xXJy6fUrInxlefOwLkoxEhOq4wJhBjFzGjlttFOU0kvp3YJROU8qMetJKy-jhAHyy56nbva6D2WFZlo7yiGnM_qV-fZok86AfpqwHGGd1Ug3lsvyFFuukQsM7pYn4851sabs.5s0QDoJZxpHwDDr9O6gTL77FyVmW47rhA9v11U3tAVg&dib_tag=se&keywords=between+monsters+and+mercy&qid=1745270883&sprefix=between+monsters+and+mercy%2Caps%2C154&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF9900] text-white font-semibold px-5 py-2 rounded hover:bg-[#e68a00] transition"
            >
              Buy on Amazon
            </a>
            <a
              href="https://www.cedarfort.com/products/between-monsters-and-mercy?srsltid=AfmBOoqJVwM5l_-zzJ-rO_NuZ5wpQVz4JcTWH4ETxgXnGqdTcK59-e9_"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6c757d] text-white font-semibold px-5 py-2 rounded hover:bg-[#5a6268] transition"
            >
              Cedar Fort Publishing
            </a>
            <a
              href="https://www.audible.com/pd/Between-Monsters-and-Mercy-Audiobook/B08FRKS1Q9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A9E0] text-white font-semibold px-5 py-2 rounded hover:bg-[#008ec0] transition"
            >
              Listen on Audible
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
