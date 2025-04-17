import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex justify-center py-10">
      <Image
        src="/hero-image.svg"
        alt="Hero image"
        width={800}
        height={400}
        priority
      />
    </div>
  );
}
