"use client";
import Image from "next/image";

export default function KellysStory() {
  return (
    <section id="story" className="px-4 sm:px-8 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image - left side on desktop */}
        <div className="md:w-1/3 w-full">
          <Image
            src="/kelly-story.png" // your actual image path
            alt="Kelly Clark"
            width={600}
            height={400}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Text - right side on desktop, below on mobile */}
        <div className="md:w-2/3 w-full text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 space-y-6">
          <p>
          For 27 years, I struggled with addiction—drugs, alcohol, food, depression, anxiety,
           and deep-rooted trauma. These battles brought me to the lowest point in my life. 
           I became homeless and I lost everything, including my sense of worth and identity. 
           I carried a broken belief that I was uniquely broken—too damaged, too different,
            and ultimately unworthy of being saved.

            But after hitting rock bottom, something within me shifted. In the depths of my 
            despair, I finally turned to my loving and merciful Creator—a Higher Power 
            I didn’t trust or even believe in before. What followed was nothing short of a miracle. 
            Over the past decade, God has lovingly restored my soul.
        </p>
          <p>
          Addiction was my Goliath. And I could not have overcome it on my own. Only 
          through divine strength—through the power of God have I able to rise. 
          That persistent, lying voice in my head, the one that told me I was beyond 
          hope? It wasn’t telling the truth. I’ve learned that we are never too 
          far gone, never too broken for healing.

          </p>
          <p>Miracles are real. Change is possible. And I’m living proof.</p>
        </div>
      </div>
    </section>
  );
}
