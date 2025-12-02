import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Authentic Plumbing Services | #1 Plumber in Miami",
  description: "Expert residential and commercial plumbing services in Miami, FL. Available 24/7 for emergencies. Licensed, insured, and trusted. Book a free quote today!",
  openGraph: {
    title: "Authentic Plumbing Services | #1 Plumber in Miami",
    description: "24/7 Emergency Plumbing, Leak Repair, Drain Cleaning & More.",
    type: "website",
    locale: "en_US",
    siteName: "Authentic Plumbing Services",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
