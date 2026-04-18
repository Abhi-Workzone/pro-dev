import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalBackground } from "@/components/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRODEV | High-Converting Websites & Booking Systems",
  description: "Senior Full-Stack Developer specializing in business solutions, automated booking systems, and scalable e-commerce platforms.",
  keywords: ["Full-Stack Developer", "MERN Stack", "Booking Systems", "Business Automation", "Web Development", "Next.js"],
  authors: [{ name: "PRODEV" }],
  openGraph: {
    title: "PRODEV | High-Converting Websites & Booking Systems",
    description: "I build websites that drive ROI and automate your business.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-blue-500/30 overflow-x-hidden`}
      >
        <GlobalBackground />
        {children}
      </body>
    </html>
  );
}
