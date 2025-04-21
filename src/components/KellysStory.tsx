"use client";
import Image from "next/image";

export default function KellysStory() {
  return (
    <section id="story" className="px-4 sm:px-8 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image - left side on desktop */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/kelly-story.png" // your actual image path
            alt="Kelly Clark"
            width={700}
            height={500}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Text - right side on desktop, below on mobile */}
        <div className="md:w-2/3 w-full text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 space-y-6">
          <p>
            For 27 years, I struggled with addiction—drugs, alcohol, food, depression, anxiety, and deep-rooted trauma. These battles brought me to the lowest point in my life. I became homeless and lost everything, including my sense of worth and identity. I carried a broken belief that I was uniquely broken—too damaged, too different, and ultimately unworthy of being saved.
          </p>
          <p>
            But after hitting rock bottom, something within me shifted. In the depths of my despair, I finally turned to my loving and merciful Creator—a Higher Power I didn’t trust or even believe in before. Over the past decade, God has lovingly restored my soul.
          </p>
          <p>
            Addiction was my Goliath. And I could not have overcome it on my own.
          </p>
          <p>
            Along this journey, I discovered that change doesn't happen by accident. It comes through connection, using recovery tools, acts of faith, and intentional access to the power that makes true transformation possible. I've learned tools that helped me reconnect with my Higher Power—and I've created others that have become pillars of my daily recovery.
          </p>
          <p>
            These tools include spiritual practices, mindset shifts, daily accountability, and moments of surrender—small, consistent acts of faith that open the door to miracles. I now live to share these tools with others, to walk alongside them as they discover that same power for themselves.
          </p>
          <p>
            Miracles are real. Change is possible. And I’m living proof.
          </p>
        </div>
      </div>
    </section>
  );
}
