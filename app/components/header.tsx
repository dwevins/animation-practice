"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex px-8 py-4 gap-8 sm:px-20">
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          href="secondary"
          className={`link ${pathname === "/secondary" ? "active" : ""}`}
        >
          Secondary
        </Link>
      </nav>
    </header>
  );
}
