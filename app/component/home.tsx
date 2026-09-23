import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-[100px] pb-10 md:px-[6%] md:pt-[120px] md:pb-[60px]"
    >
      {/* Optimized Background Image */}
      <Image
        src="/bg2.jpg"
        alt="Hero Background"
        fill
        priority
        quality={75}
        className="object-cover -z-20"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="box-border grid w-full max-w-[1100px] grid-cols-1 items-center gap-6 rounded-[20px] border border-[#00ffaa]/30 bg-[#141414]/90 p-6 md:grid-cols-[1.5fr_1fr] md:gap-10 md:p-[60px]">
        {/* Text + Description */}
        <div className="text-center text-white md:text-left">
          <p className="text-[1.2rem] text-[#00ffaa]">Hello, I&apos;m</p>

          <h1 className="my-[10px] text-3xl font-bold md:text-5xl">
            Jonathan Avi Biswas
          </h1>

          <h2 className="mb-5 text-[1.3rem]">
            <span className="text-[#0fb67e]">Web</span> Developer
          </h2>

          {/* Mobile Profile Image */}
          <div className="my-6 flex justify-center md:hidden">
            <Image
              src="/profile.jpeg"
              alt="Jonathan Avi Biswas"
              width={240}
              height={300}
              priority
              className="h-[300px] w-[240px] rounded-[15px] border-[3px] border-[#00ffaa] object-cover shadow-[0_0_25px_rgba(0,255,170,0.25)]"
            />
          </div>

          <p className="mx-auto max-w-[500px] leading-[1.7] text-[#cccccc] md:mx-0">
            I am a dedicated web developer seeking new opportunities. I specialize in building responsive, modern web applications using{" "}
            <span className="font-semibold text-[#0fb67e]">
              HTML, CSS, JavaScript, React, Next.js, Node.js
            </span>
            , and modern web development technologies to deliver impactful user experiences.
          </p>

          <Link
            href="#projects"
            className="mt-[25px] inline-block rounded-[7px] bg-[#00ffaa] px-[25px] py-3 text-base text-[#111] transition duration-300 hover:-translate-y-0.5 hover:bg-[#063c2a] hover:text-white"
          >
            View Projects
          </Link>
        </div>

        {/* Desktop Profile Image */}
        <div className="hidden items-center justify-center md:flex">
          <Image
            src="/profile.jpeg"
            alt="Jonathan Avi Biswas"
            width={280}
            height={350}
            priority
            className="h-[350px] w-[280px] rounded-[15px] border-[3px] border-[#00ffaa] object-cover shadow-[0_0_25px_rgba(0,255,170,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}