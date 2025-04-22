import Image from "next/image";

export default function Hero() {
  return (
    <header className="w-full pt-0 pb-10 text-center">
      <h1 className="sr-only">
        Kelly Clark Coaching – Faith-Based Recovery & Addiction Support for Women and Families
      </h1>
      <Image
        src="/hero-image.png?v=2"
        alt="Kelly Clark Coaching - Faith-Based Recovery and Addiction Support"
        width={1600}
        height={1100}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1600px"
        priority
      />
    </header>
  );
}
