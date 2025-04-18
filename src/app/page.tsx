import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="w-full px-4 mt-2 sm:mt-3 md:mt-6 flex justify-center">
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
      </main>
      <Footer />
    </>
  );
}
