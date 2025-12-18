import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
