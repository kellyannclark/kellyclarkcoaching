import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import KellysStory from "@/components/KellysStory"
import Coaching from "@/components/Coaching";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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

      {/* Bottom Image – smaller, independent, centered */}
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
                {/* Second Image – same size and style as message1.png */}
                <div className="w-full px-4 mt-4 flex justify-center mb-10">
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
        <div className="w-full px-4 mt-3 flex justify-center">
      <Image
        src="/header2.png"
        alt="Header below Kelly's Story"
        width={250}
        height={200}
        className="w-auto h-auto"
      />
    </div>
    <Coaching />
      </main>
      <Footer />
    </>
  );
}
