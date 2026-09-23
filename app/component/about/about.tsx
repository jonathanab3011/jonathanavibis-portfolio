"use client";

import { useEffect, useRef, useState } from "react";

const ABOUT_TEXT = `Hey, I'm Jonathan Avi Biswas, a passionate web developer with a strong foundation in both front-end and back-end technologies. My journey into web development started with curiosity — I wanted to understand how the websites I used every day actually worked, and that curiosity grew into a genuine love for building things from scratch.

I have a keen eye for design and a deep commitment to creating seamless, user-friendly experiences. I enjoy the balance between crafting clean, responsive interfaces and writing solid, efficient code that powers them behind the scenes — whether it's structuring layouts with HTML and CSS or adding interactivity with JavaScript. I'm always learning new tools and staying curious about the latest trends, pushing myself to grow with every project.

I'm currently looking for opportunities to contribute as a web developer, collaborate with a team, and keep building innovative solutions that make a difference.`;

const SKILLS = [
    "HTML, CSS, JavaScript",
    "React, Node.js",
    "Python",
    "Graphics Design",
    "Photography",
];

const LANGUAGES = [
    "English",
    "Bengali",
    "Hindi",
];

const CERTS: { icon: string; label: string }[] = [
    {
        icon: "🏆",
        label: "Full Stack Web Development — Programming Hero (2026)",
    },
    {
        icon: "🏆",
        label: "Certification (2026)",
    },
    {
        icon: "🏆",
        label: "Certification (2026)",
    },
];

function useTypewriter(text: string, speed = 12) {
    const [output, setOutput] = useState("");
    const ref = useRef<HTMLParagraphElement | null>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;

        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;

                        let i = 0;

                        const tick = () => {
                            if (i <= text.length) {
                                setOutput(text.slice(0, i));
                                i++;
                                setTimeout(tick, speed);
                            }
                        };

                        tick();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [text, speed]);

    return {
        output,
        ref,
    };
}

function CertCard({
    icon,
    label,
}: {
    icon: string;
    label: string;
}) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        const el = cardRef.current;

        if (!el) return;

        const rect = el.getBoundingClientRect();

        el.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
        );

        el.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
        );
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-[#00ffaa]/20
                bg-[#00ffaa]/5
                px-4
                py-3
                transition-transform
                duration-200
                ease-out
                hover:-translate-y-1.5
                hover:border-[#00ffaa]
                hover:shadow-[0_10px_25px_rgba(0,255,170,0.25)]
                cursor-pointer
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    h-[150px]
                    w-[150px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
                style={{
                    top: "var(--y, 50%)",
                    left: "var(--x, 50%)",
                    background:
                        "radial-gradient(circle, rgba(0,255,170,0.25), transparent 70%)",
                }}
            />

            <div className="relative flex items-start gap-2.5">
                <span className="shrink-0 text-lg leading-none">
                    {icon}
                </span>

                <p className="m-0 text-sm leading-snug text-white">
                    {label}
                </p>
            </div>
        </div>
    );
}

function SectionTitle({ children }: { children: string }) {
    return (
        <div className="mb-10 flex justify-center md:mb-12">
            <h2 className="relative pb-3 text-3xl font-semibold text-white sm:text-[2.2rem]">
                {children}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#00ffaa]" />
            </h2>
        </div>
    );
}

export default function AboutSection() {
    const { output, ref: typedRef } =
        useTypewriter(ABOUT_TEXT, 12);

    return (
        <section
            id="about"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.65),
                        rgba(0, 0, 0, 0.75)
                    ),
                    url(/bg2.jpg)
                `,
            }}
            className="
                min-h-screen
                bg-cover
                bg-center
                bg-fixed
                bg-no-repeat
                px-5
                py-16
                sm:px-8
                md:px-[6%]
                md:py-20
            "
        >
            {/* Outer neon-bordered glass container */}
            <div
                className="
                    relative
                    mx-auto
                    max-w-[1100px]
                    rounded-[2rem]
                    border-2
                    border-[#00ffaa]
                    bg-[#141414]/90
                    p-5
                    backdrop-blur-md
                    shadow-[0_0_30px_rgba(0,255,170,0.15)]
                    sm:p-8
                    sm:rounded-[2.5rem]
                    sm:border-4
                    md:p-10
                "
            >
                <SectionTitle>About</SectionTitle>

            {/* Main Grid */}
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1100px]
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                    md:gap-6
                "
            >
                {/* About Text */}
                <div
                    className="
                        rounded-[15px]
                        border
                        border-[#00ffaa]/30
                        bg-[#141414]/80
                        p-5
                        backdrop-blur-sm
                        sm:p-7
                        md:row-span-2
                        md:p-8
                    "
                >
                    <p
                        ref={typedRef}
                        className="
                            whitespace-pre-line
                            text-sm
                            leading-[1.8]
                            text-[#cccccc]
                            sm:text-base
                            after:ml-0.5
                            after:text-[#00ffaa]
                            after:content-['|']
                            after:animate-pulse
                        "
                    >
                        {output}
                    </p>
                </div>

                {/* Certifications */}
                <div
                    className="
                        rounded-[15px]
                        border
                        border-[#00ffaa]/30
                        bg-[#141414]/80
                        p-5
                        backdrop-blur-sm
                        sm:p-7
                        md:p-8
                    "
                >
                    <h3
                        className="
                            mb-5
                            text-lg
                            font-semibold
                            text-[#00ffaa]
                        "
                    >
                        Certifications &amp; Achievements
                    </h3>

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-3
                            sm:grid-cols-2
                        "
                    >
                        {CERTS.map((cert, index) => (
                            <CertCard
                                key={index}
                                icon={cert.icon}
                                label={cert.label}
                            />
                        ))}
                    </div>
                </div>

                {/* Skills + Languages */}
                <div
                    className="
                        rounded-[15px]
                        border
                        border-[#00ffaa]/30
                        bg-[#141414]/80
                        p-5
                        backdrop-blur-sm
                        sm:p-7
                        md:p-8
                    "
                >
                    <h3
                        className="
                            mb-4
                            text-lg
                            font-semibold
                            text-[#00ffaa]
                        "
                    >
                        Skills
                    </h3>

                    <ul
                        className="
                            mb-2
                            space-y-2
                            text-sm
                            text-[#cccccc]
                            sm:text-base
                        "
                    >
                        {SKILLS.map((skill) => (
                            <li
                                key={skill}
                                className="
                                    before:mr-2
                                    before:text-[#00ffaa]
                                    before:content-['▹']
                                "
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>

                    <h3
                        className="
                            mb-4
                            mt-7
                            text-lg
                            font-semibold
                            text-[#00ffaa]
                        "
                    >
                        Language
                    </h3>

                    <ul
                        className="
                            space-y-2
                            text-sm
                            text-[#cccccc]
                            sm:text-base
                        "
                    >
                        {LANGUAGES.map((language) => (
                            <li
                                key={language}
                                className="
                                    before:mr-2
                                    before:text-[#00ffaa]
                                    before:content-['▹']
                                "
                            >
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </section>
    );
}