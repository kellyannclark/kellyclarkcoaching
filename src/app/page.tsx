"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import KellysStory from "@/components/KellysStory";
import Coaching from "@/components/Coaching";
import Intro from "@/components/Intro";
import Carousel from "@/components/Carousel";
import Book from "@/components/Book";
import Head from "next/head";


export default function Home() {
  return (
    <>
          <Head>
        {/* Primary Meta Tags */}
        <title>Kelly Clark Coaching | Faith-Based Recovery & Transformational Coaching</title>
        <meta name="title" content="Kelly Clark Coaching | Faith-Based Recovery & Transformational Coaching" />
        <meta name="description" content="Transform your life with personalized, faith-based recovery coaching. Work one-on-one with Kelly Clark to heal from addiction, trauma, and find your purpose." />
        <meta name="keywords" content="recovery coaching, Christian recovery, addiction support, trauma healing, faith-based coaching, Kelly Clark, LDS recovery, women in recovery, spiritual healing, transformational coaching" />
        <meta name="author" content="Kelly Clark" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kellyclarkcoaching.com" />

        {/* ✅ Schema.org JSON-LD for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kelly Clark Coaching",
              image: "https://www.kellyclarkcoaching.com/logo.png", // replace with your full image URL
              url: "https://www.kellyclarkcoaching.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Spanish Fork",
                addressRegion: "UT",
                postalCode: "84660",
                addressCountry: "US"
              },
              description:
                "Faith-based addiction recovery coaching from Kelly Clark, serving individuals in Utah and across the U.S.",
              sameAs: [
                "https://www.instagram.com/YOUR_USERNAME", // optional
                "https://www.facebook.com/YOUR_USERNAME"
              ]
            })
          }}
        />
      </Head>
      <Nav />
      <main>
        <div className="relative z-0">
          <Hero />
        </div>

        <section className="relative z-10">
          <Intro />
        </section>

        {/* Top Image – full width within a max container */}
        <div className="w-full px-4 mt-2 sm:mt-3 md:mt-6 flex justify-center mb-5">
          <div className="w-full max-w-[600px]">
            <Image
              src="/message1.png"
              alt="Message below hero"
              width={900}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Kelly's Story Section with Background */}
<div className="w-full bg-[#F6E7D7] py-10">
  <div className="relative w-full">
    <div className="relative z-10">

      <div className="mt-1">

        {/* Kelly's Story */}
        <KellysStory />
      </div>

      {/* Bottom Message Image */}
      <div className="w-full px-4 mt-4 flex justify-center">
        <div className="w-full max-w-[600px]">
          <Image
            src="/message2.png"
            alt="Second message below hero"
            width={900}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  </div>
</div>


        {/* Coaching Section */}
        <div className="w-full py-6">

          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <Coaching />
          </div>

          {/* Centered message3.png image */}
          <div className="w-full px-4 mt-6 flex justify-center">
            <div className="w-full max-w-[600px]">
              <Image
                src="/message3.png"
                alt="Message below coaching"
                width={900}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
      
        </div>

        

    {/* Media + Book Section with Background */}
<div className="w-full bg-[#F6E7D7] py-10">
  
  {/* Media Carousel Section */}
  <div className="relative w-full py-6">
    <div className="relative z-10">

      <div className="mt-3">
        <Carousel />
      </div>
    </div>
  </div>

  {/* Book Section */}
  <div className="w-full py-6">


    <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-1">
      <Book />
    </div>
  </div>

</div>

      </main>
      <Footer />
    </>
  );
}
