"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoreVertical, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", isPrimary: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[72px] w-full items-center justify-between border-b border-[#00ffaa]/10 bg-[#0a0a0a]/90 px-5 backdrop-blur-md md:px-[6%]">
      {/* Brand Logo */}
      <Link href="#home" onClick={closeMenu} className="flex items-center">
        <Image
          src="/logo3.png"
          alt="Jonathan Avi Biswas"
          width={208}
          height={50}
          priority
          className="h-auto w-40 object-contain sm:w-52"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-4 md:flex">
        {NAV_LINKS.map((link) =>
          link.isPrimary ? (
            <Link
              key={link.label}
              href={link.href}
              className="inline-block rounded-full bg-[#00ffaa] px-5 py-1.5 text-center text-sm font-semibold text-[#111111] transition-opacity hover:opacity-90"
            >
              {link.label}
            </Link>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="inline-block rounded-full border border-[#00ffaa]/40 px-5 py-1.5 text-center text-sm text-white transition-colors duration-200 hover:border-[#00ffaa] hover:text-[#00ffaa]"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00ffaa] text-[#00ffaa] transition-colors hover:bg-[#00ffaa]/10 md:hidden"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MoreVertical className="h-5 w-5" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] bottom-0 flex flex-col gap-4 border-b border-[#00ffaa]/20 bg-[#0a0a0a]/95 p-6 backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) =>
            link.isPrimary ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="w-full rounded-full bg-[#00ffaa] py-3 text-center text-sm font-semibold text-[#111111] transition-opacity hover:opacity-90"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="w-full rounded-full border border-[#00ffaa]/40 py-3 text-center text-sm text-white transition-colors duration-200 hover:border-[#00ffaa] hover:text-[#00ffaa]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}