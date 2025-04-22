import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full pt-0 pb-10">
      <Image
        src="/hero-image.png"
        alt="Hero image"
        width={1600}
        height={900}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
