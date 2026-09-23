import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["jonathan.avibd24@gmail.com"], // আপনার ইমেইল এড্রেস
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}