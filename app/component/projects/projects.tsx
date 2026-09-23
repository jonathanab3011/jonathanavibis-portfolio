"use client";

import { useEffect, useState } from "react";

interface Project {
    title: string;
    desc: string;
    longDesc: string;
    img: string;
    link: string;
}

const PROJECTS: Project[] = [
    {
        title: "Portfolio Website",
        desc: "A responsive personal portfolio website built with HTML, CSS, JavaScript and TypeScript.",
        longDesc:
            "A longer description of Project One goes here — what it does, what problems it solves, and what makes it worth showing off.",
        img: "/project-1.png",
        link: "https://webjonathan.netlify.app/",
    },
    {
        title: "Dev-Stack",
        desc: "A modern, scalable web development stack leveraging React for component-driven interfaces, Tailwind CSS and DaisyUI for responsive styling",
        longDesc:
            "The Dev Stack Builder application is constructed using a robust and production-ready modern web stack designed for optimal developer experience and user performance. At its core, React drives a modular, component-based UI architecture, ensuring seamless dynamic rendering and state management. Styling is handled via Tailwind CSS alongside DaisyUI,",
        img: "/project-2.png",
        link: "https://dev-stack-silk.vercel.app/",
    },
    {
        title: "Expense Tracker",
        desc: "An application for recording expenses and keeping track of personal spending.",
        longDesc:
            "A longer description of Project Three goes here — what it does, what problems it solves, and what makes it worth showing off.",
        img: "/project-3.png",
        link: "#",
    },
    {
        title: "Quiz Application",
        desc: "An interactive quiz app with multiple questions, answers and a final score.",
        longDesc:
            "A longer description of Project Four goes here — what it does, what problems it solves, and what makes it worth showing off.",
        img: "/project-4.png",
        link: "#",
    },
    {
        title: "Blog Website",
        desc: "A responsive blog platform with article cards, categories and individual post pages.",
        longDesc:
            "A longer description of Project Five goes here — what it does, what problems it solves, and what makes it worth showing off.",
        img: "/project-5.png",
        link: "#",
    },
];

function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const [visible, setVisible] = useState(false);
    const [showUnavailable, setShowUnavailable] = useState(false);

    const hasLink =
        Boolean(project.link) && project.link !== "#";

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setVisible(true);
        });

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", onKey);

        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    return (
        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                overflow-y-auto
                bg-black/75
                p-4
                sm:p-5
            "
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative
                    my-4
                    w-full
                    max-w-[500px]
                    rounded-[15px]
                    border
                    border-[#00ffaa]/30
                    bg-[#141414]
                    p-5
                    sm:p-8
                    transition-all
                    duration-200
                    ease-out
                    ${
                        visible
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-0"
                    }
                `}
            >
                {/* Close Button */}
                <button
                    type="button"
                    aria-label="Close"
                    onClick={onClose}
                    className="
                        absolute
                        right-3
                        top-3
                        z-10
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        text-2xl
                        text-white
                        transition-colors
                        hover:text-[#00ffaa]
                    "
                >
                    &times;
                </button>

                {/* Project Image */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="
                        mb-5
                        h-[180px]
                        w-full
                        rounded-[10px]
                        object-cover
                        sm:h-[220px]
                    "
                />

                {/* Title */}
                <h3
                    className="
                        mb-2.5
                        pr-8
                        text-lg
                        font-semibold
                        text-[#00ffaa]
                        sm:text-xl
                    "
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p
                    className="
                        mb-5
                        text-sm
                        leading-relaxed
                        text-[#cccccc]
                        sm:text-base
                    "
                >
                    {project.longDesc}
                </p>

                {/* View Project */}
                {hasLink ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-block
                            rounded-[7px]
                            bg-[#00ffaa]
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-[#111111]
                            transition-opacity
                            hover:opacity-90
                            sm:text-base
                        "
                    >
                        View Project
                    </a>
                ) : (
                    <div>
                        <button
                            type="button"
                            onClick={() =>
                                setShowUnavailable(true)
                            }
                            className="
                                inline-block
                                rounded-[7px]
                                bg-[#00ffaa]/40
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-[#111111]
                                transition-opacity
                                hover:opacity-90
                                sm:text-base
                            "
                        >
                            View Project
                        </button>

                        {showUnavailable && (
                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-relaxed
                                    text-[#ff8a8a]
                                "
                            >
                                This project isn't available to
                                view right now — check back soon.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function SectionTitle({ children }: { children: string }) {
    return (
        <div className="mb-8 flex justify-center md:mb-10">
            <h2 className="relative pb-3 text-3xl font-semibold text-white sm:text-[2.2rem]">
                {children}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#00ffaa]" />
            </h2>
        </div>
    );
}

export default function ProjectsSection() {
    const [selected, setSelected] =
        useState<Project | null>(null);

    return (
        <section
            id="projects"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.75),
                        rgba(0, 0, 0, 0.85)
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
                <SectionTitle>Project</SectionTitle>

            {/* Project Grid */}
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1000px]
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                    lg:gap-6
                "
            >
                {PROJECTS.map((project) => (
                    <button
                        key={project.title}
                        type="button"
                        onClick={() =>
                            setSelected(project)
                        }
                        className="
                            group
                            flex
                            min-w-0
                            flex-col
                            overflow-hidden
                            rounded-[15px]
                            border
                            border-[#00ffaa]/30
                            bg-[#141414]/80
                            p-0
                            text-left
                            backdrop-blur-sm
                            transition-all
                            duration-200
                            ease-out
                            hover:-translate-y-1.5
                            hover:border-[#00ffaa]
                            hover:shadow-[0_10px_25px_rgba(0,255,170,0.15)]
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[#00ffaa]
                        "
                    >
                        {/* Project Image */}
                        <div className="overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="
                                    h-[190px]
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-300
                                    group-hover:scale-105
                                    sm:h-[200px]
                                "
                            />
                        </div>

                        {/* Project Content */}
                        <div className="flex flex-1 flex-col p-4 sm:p-[15px]">
                            <h3
                                className="
                                    mb-2
                                    text-base
                                    font-semibold
                                    text-[#00ffaa]
                                    sm:text-[1.1rem]
                                "
                            >
                                {project.title}
                            </h3>

                            <p
                                className="
                                    mt-0
                                    text-sm
                                    leading-relaxed
                                    text-[#cccccc]
                                "
                            >
                                {project.desc}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
            </div>

            {/* Modal */}
            {selected && (
                <ProjectModal
                    key={selected.title}
                    project={selected}
                    onClose={() =>
                        setSelected(null)
                    }
                />
            )}
        </section>
    );
}