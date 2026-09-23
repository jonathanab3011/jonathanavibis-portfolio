"use client";

import { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
];

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
    return (
        <>
            {NAV_LINKS.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    onClick={onLinkClick}
                    className="
                        inline-block
                        rounded-full
                        border
                        border-[#00ffaa]/40
                        px-5
                        py-1.5
                        text-center
                        text-sm
                        text-white
                        transition-colors
                        duration-200
                        hover:border-[#00ffaa]
                        hover:text-[#00ffaa]
                    "
                >
                    {link.label}
                </a>
            ))}
            <a
                href="#contact"
                onClick={onLinkClick}
                className="
                    inline-block
                    rounded-full
                    bg-[#00ffaa]
                    px-5
                    py-1.5
                    text-center
                    text-sm
                    font-semibold
                    text-[#111111]
                    transition-opacity
                    hover:opacity-90
                "
            >
                Contact
            </a>
        </>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-[72px] w-full items-center justify-between border-b border-[#00ffaa]/10 bg-[#0a0a0a]/90 px-5 backdrop-blur-md md:px-[6%]">
            <a href="#home" className="flex items-center">
                <img
                    src="/assets/logo3.png"
                    alt="Jonathan Avi Biswas"
                    className="w-40 object-contain sm:w-52"
                />
            </a>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-4 md:flex">
                <NavLinks />
            </div>

            {/* Mobile toggle button */}
            <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00ffaa] text-[#00ffaa] transition-colors hover:bg-[#00ffaa]/10 md:hidden"
            >
                {isOpen ? <X className="h-5 w-5" /> : <EllipsisVertical className="h-5 w-5" />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute left-0 right-0 top-full flex flex-col gap-3 border-b border-[#00ffaa]/20 bg-[#0a0a0a]/95 p-5 backdrop-blur-md md:hidden">
                    <NavLinks onLinkClick={() => setIsOpen(false)} />
                </div>
            )}
        </header>
    );
}