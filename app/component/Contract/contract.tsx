"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#111111] px-5 py-16 sm:px-8 md:px-[6%] md:py-20"
    >
      <h2 className="mb-10 text-center text-3xl font-semibold text-white sm:text-[2.2rem] md:mb-12">
        Contact <span className="text-[#00ffaa]">Information</span>
      </h2>

      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left: info + map */}
        <div className="flex flex-col rounded-[15px] border border-[#00ffaa]/30 bg-[#141414]/88 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <Mail className="h-5 w-5 shrink-0 text-[#00ffaa]" />
            <p className="text-sm text-[#cccccc] sm:text-[0.95rem]">
              jonathan.avibd24@gmail.com
            </p>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-[#00ffaa]" />
            <p className="text-sm text-[#cccccc] sm:text-[0.95rem]">
              +880 1768454858
            </p>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-[#00ffaa]" />
            <p className="text-sm text-[#cccccc] sm:text-[0.95rem]">
              Khulna, Bangladesh
            </p>
          </div>

          <div className="mt-2 min-h-[200px] flex-1 overflow-hidden rounded-[10px] border border-[#00ffaa]/20">
            <iframe
              title="Location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.7198972586118!2d89.51010000735491!3d22.897143889842535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9b00351fd4a3%3A0xb91ffe2261c0fc48!2z4Kar4KeB4Kay4Kas4Ka-4Kec4Ka_4KaX4KeH4KafIOCmruCni-CnnA!5e0!3m2!1sen!2sbd!4v1787913860703!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: contact form */}
        <div className="rounded-[15px] bg-[#00ffaa] p-6 sm:p-8">
          <h3 className="mb-5 text-[1.3rem] font-semibold text-[#0a0a0a]">
            Send a Message
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-[15px]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-lg border-none bg-[#0a0a0a]/90 px-[15px] py-3 text-[0.95rem] text-white
                         placeholder:text-[#aaaaaa] focus:outline focus:outline-2 focus:outline-[#0a0a0a]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-lg border-none bg-[#0a0a0a]/90 px-[15px] py-3 text-[0.95rem] text-white
                         placeholder:text-[#aaaaaa] focus:outline focus:outline-2 focus:outline-[#0a0a0a]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="rounded-lg border-none bg-[#0a0a0a]/90 px-[15px] py-3 text-[0.95rem] text-white
                         placeholder:text-[#aaaaaa] focus:outline focus:outline-2 focus:outline-[#0a0a0a]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="resize-none rounded-lg border-none bg-[#0a0a0a]/90 px-[15px] py-3 text-[0.95rem] text-white
                         placeholder:text-[#aaaaaa] focus:outline focus:outline-2 focus:outline-[#0a0a0a]"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-start rounded-lg bg-[#1d1c1c] px-[30px] py-3 text-[1rem] font-semibold text-[#00ffaa]
                         transition-transform duration-200 ease-out hover:-translate-y-[3px]
                         disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-[15px] text-[0.9rem] font-semibold text-[#0a0a0a]">
              Message sent — thanks for reaching out!
            </p>
          )}
          {status === "error" && (
            <p className="mt-[15px] text-[0.9rem] font-semibold text-[#7a1a1a]">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}