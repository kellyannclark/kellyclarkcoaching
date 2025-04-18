import Image from "next/image";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="w-full px-4 mt-4 sm:mt-6 md:mt-10 flex justify-center">
          <div className="w-full max-w-[600px]">
            <Image
              src="/message1.svg"
              alt="Message below hero"
              width={900}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
}
