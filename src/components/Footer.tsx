"use client";

import { Mail, ArrowUp } from "lucide-react";
import {
    FaGithub,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa6";

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/jonathanavibisawas10",
        icon: FaGithub,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/jonathan.ab3011?igsi=eWtubm0wMXJmdHY0",
        icon: FaInstagram,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/share/1BbpLsCyD7/",
        icon: FaFacebookF,
    },
    {
        label: "Email",
        href: "mailto:jonathan.avi30@hotmail.com",
        icon: Mail,
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="
                border-t
                border-[#00ffaa]/20
                bg-[#0a0a0a]
                px-5
                pb-5
                pt-12
                sm:px-8
                sm:pt-14
                md:px-[6%]
                md:pb-[25px]
                md:pt-[60px]
            "
        >
            {/* Main Footer */}
            <div
                className="
                    mx-auto
                    mb-8
                    grid
                    w-full
                    max-w-[1100px]
                    grid-cols-1
                    gap-8
                    sm:gap-10
                    md:grid-cols-[1.5fr_1fr_1fr]
                    md:gap-10
                "
            >
                {/* Brand */}
                <div className="min-w-0">
                    <h3
                        className="
                            mb-3
                            font-serif
                            text-xl
                            text-white
                            sm:text-[1.3rem]
                        "
                    >
                        <span className="text-[#00ffaa]">
                            jonathan
                        </span>
                        _avibis
                    </h3>

                    <p
                        className="
                            max-w-[280px]
                            text-sm
                            leading-relaxed
                            text-[#999999]
                        "
                    >
                        Full Stack Web Developer building
                        clean, functional, and user-friendly
                        websites.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h4
                        className="
                            mb-4
                            text-base
                            font-semibold
                            text-[#00ffaa]
                        "
                    >
                        Quick Links
                    </h4>

                    {QUICK_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="
                                mb-3
                                w-fit
                                text-sm
                                text-[#cccccc]
                                transition-all
                                duration-200
                                hover:pl-[5px]
                                hover:text-[#00ffaa]
                            "
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Social */}
                <div>
                    <h4
                        className="
                            mb-4
                            text-base
                            font-semibold
                            text-[#00ffaa]
                        "
                    >
                        Connect
                    </h4>

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-3
                        "
                    >
                        {SOCIALS.map(
                            ({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={
                                        href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-label={label}
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#00ffaa]/25
                                        bg-[#00ffaa]/[0.08]
                                        text-[#00ffaa]
                                        transition-all
                                        duration-200
                                        hover:-translate-y-1
                                        hover:border-[#00ffaa]
                                        hover:bg-[#00ffaa]/15
                                        sm:h-[42px]
                                        sm:w-[42px]
                                    "
                                >
                                    <Icon
                                        className="
                                            h-[17px]
                                            w-[17px]
                                            sm:h-[18px]
                                            sm:w-[18px]
                                        "
                                        aria-hidden="true"
                                    />
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1100px]
                    flex-col
                    gap-5
                    border-t
                    border-white/[0.08]
                    pt-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-4
                    sm:pt-[25px]
                "
            >
                {/* Copyright */}
                <p
                    className="
                        text-center
                        text-xs
                        leading-relaxed
                        text-[#888888]
                        sm:text-left
                        sm:text-[0.85rem]
                    "
                >
                    &copy; {new Date().getFullYear()} Jonathan
                    Avi Biswas. All rights reserved.
                </p>

                {/* Back To Top */}
                <button
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="
                        mx-auto
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#00ffaa]
                        bg-[#00ffaa]/[0.08]
                        text-[#00ffaa]
                        transition-all
                        duration-200
                        hover:-translate-y-1
                        hover:bg-[#00ffaa]
                        hover:text-[#0a0a0a]
                        sm:mx-0
                        sm:h-[42px]
                        sm:w-[42px]
                    "
                >
                    <ArrowUp
                        className="h-[18px] w-[18px]"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </footer>
    );
}