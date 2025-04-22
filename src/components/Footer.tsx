import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#3E2723] text-[#F6E7D7] text-xs text-center py-4">
      <p className="!text-[#F6E7D7]">
        &copy; {new Date().getFullYear()} Kelly Clark Coaching. All rights reserved.
      </p>

      <nav className="flex flex-wrap justify-center gap-4 mt-2 text-[11px]">
        <Link href="/about">About</Link>
        <Link href="/coaching">Coaching</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/#story">My Story</Link>
        <Link href="/#coaching">Recovery Support</Link>
      </nav>

      <p className="mt-2 text-[11px] max-w-md mx-auto opacity-80">
        Faith-based recovery coaching for women and families overcoming addiction, trauma, and life transitions — guided by lived experience.
      </p>
    </footer>
  );
}
