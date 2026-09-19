import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonathan Avi Biswas — Web Developer",
  icons: {
    icon: "/favicon.ico", 
  },
  description:
    "Full Stack Web Developer building clean, functional, and user-friendly websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
