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
      <main className="bg-white">

        <Hero />
        <Intro />

        {/* Top Image – full width within a max container */}
        <div className="w-full px-4 mt-2 sm:mt-3 md:mt-6 flex justify-center mb-10">
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

        {/* Kelly's Story Section with background */}
        <div className="w-full bg-[#eef1f1] py-6">
          <div className="w-full px-4 mt-3 flex justify-center">
            <Image
              src="/header1.png"
              alt="Header below message"
              width={250}
              height={200}
              className="w-auto h-auto"
            />
          </div>

          <div className="mt-1">
            <KellysStory />
          </div>

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

        {/* Coaching Section in white background */}
        <div className="w-full bg-white py-6">
          <div className="w-full px-4 mt-3 flex justify-center">
            <Image
              src="/header2.png"
              alt="Header below Kelly's Story"
              width={250}
              height={200}
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


        {/* Media Carousel Section with eef1f1 background */}
        <div className="w-full bg-[#eef1f1] py-6">
          <div className="w-full px-4 mt-3 flex justify-center">
            <Image
              src="/header3.png"
              alt="Header below Recovery Coaching"
              width={250}
              height={200}
              className="w-auto h-auto"
            />
          </div>

          <div className="mt-6">
            <Carousel />
          </div>
        </div>

        {/* Book Section in white background */}
        <div className="w-full bg-white py-6">
          <div className="w-full px-4 mt-10 flex justify-center">
            <Image
              src="/header4.png"
              alt="Header below Recovery Coaching"
              width={250}
              height={200}
              className="w-auto h-auto"
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-6">
            <Book />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
