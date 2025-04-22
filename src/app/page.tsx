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

export default function Home() {
  return (
    <>
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
<div className="w-full bg-[#EEF1F1] py-10">
  <div className="relative w-full">
    <div className="relative z-10">

      <div className="mt-1">
        {/* Top Header Image */}
        <div className="w-full px-4 mt-1 flex justify-center">
          <Image
            src="/header1.png"
            alt="Header below message"
            width={200}
            height={80}
            className="w-auto h-auto"
          />
        </div>

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
          <div className="w-full px-4 mt-3 flex justify-center">
            <Image
              src="/header2.png"
              alt="Header below Kelly's Story"
              width={200}
              height={80}
              className="w-auto h-auto"
            />
          </div>

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
<div className="w-full bg-[#EEF1F1] py-10">
  
  {/* Media Carousel Section */}
  <div className="relative w-full py-6">
    <div className="relative z-10">
      <div className="w-full px-4 mt-3 flex justify-center">
        <Image
          src="/header3.png"
          alt="Header below Recovery Coaching"
          width={200}
          height={80}
          className="w-auto h-auto"
        />
      </div>

      <div className="mt-6">
        <Carousel />
      </div>
    </div>
  </div>

  {/* Book Section */}
  <div className="w-full py-6">
    <div className="w-full px-4 mt-10 flex justify-center">
      <Image
        src="/header4.png"
        alt="Header below Recovery Coaching"
        width={200}
        height={80}
        className="w-auto h-auto"
      />
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-6">
      <Book />
    </div>
  </div>

</div>

      </main>
      <Footer />
    </>
  );
}
