import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wildansilki.xyz"),
  title: "Wildan Silki | Full-Stack & Smart Contract Developer",
  description:
    "Professional portfolio of Wildan Silki, a passionate developer specializing in Next.js, React, Smart Contracts, and Quantitative Trading.",
  keywords: [
    "Wildan Silki",
    "Portfolio",
    "Full-Stack Developer",
    "Smart Contract Developer",
    "Algo Trader",
    "Next.js",
    "React",
    "Solidity",
  ],
  openGraph: {
    title: "Wildan Silki | Developer Portfolio",
    description: "Explore the projects and skills of Wildan Silki.",
    url: "https://wildansilki.xyz",
    siteName: "Wildan Silki Portfolio",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
