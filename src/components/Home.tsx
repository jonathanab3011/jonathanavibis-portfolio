"use client";

export default function Home() {
    return (
        <section
            id="home"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(/assets/bg2.jpg)`,
            }}
            className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed px-5 pt-[100px] pb-10 md:px-[6%] md:pt-[120px] md:pb-[60px]"
        >
            <div className="box-border grid w-full max-w-[1100px] grid-cols-1 items-center gap-6 rounded-[20px] border border-[rgba(0,255,170,0.3)] bg-[rgba(20,20,20,0.88)] p-6 md:grid-cols-[1.5fr_1fr] md:gap-10 md:p-[60px]">
                {/* Text + Description */}
                <div className="text-center text-white md:text-left">
                    <p className="text-[1.2rem] text-[#00ffaa]">
                        Hello, I'm
                    </p>

                    <h1 className="my-[10px] text-3xl font-bold md:text-5xl">
                        Jonathan Avi Biswas
                    </h1>

                    <h3 className="mb-5 text-[1.3rem]">
                        <span className="text-[rgba(15,182,126,0.76)]">
                            Web
                        </span>{" "}
                        Developer
                    </h3>

                    {/* Mobile Image */}
                    <div className="my-6 flex justify-center md:hidden">
                        <img
                            src="/assets/profile.jpeg"
                            alt="Jonathan"
                            className="h-[300px] w-[240px] rounded-[15px] border-[3px] border-[#00ffaa] object-cover shadow-[0_0_25px_rgba(0,255,170,0.25)]"
                        />
                    </div>

                    <p className="mx-auto max-w-[500px] leading-[1.7] text-[#cccccc] md:mx-0">
                        I am finding a job as a web developer. I have
                        experience in{" "}
                        <span className="font-semibold text-[rgba(15,182,126,0.76)]">
                            HTML, CSS, JavaScript, React, Node.js, and other
                            web development technologies
                        </span>
                        . I am passionate about creating beautiful and
                        functional websites that provide a great user
                        experience.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            document
                                .getElementById("projects")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-[25px] cursor-pointer rounded-[7px] border-none bg-[#00ffaa] px-[25px] py-3 text-base text-[#111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#063c2a] hover:text-white"
                    >
                        View Projects
                    </button>
                </div>

                {/* Desktop Image */}
                <div className="hidden items-center justify-center md:flex">
                    <img
                        src="/assets/profile.jpeg"
                        alt="Jonathan"
                        className="h-[350px] w-[280px] rounded-[15px] border-[3px] border-[#00ffaa] object-cover shadow-[0_0_25px_rgba(0,255,170,0.25)]"
                    />
                </div>
            </div>
        </section>
    );
}