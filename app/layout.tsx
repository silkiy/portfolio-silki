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
    "Wildan Silki Sawabiqil Abroor",
    "Silki",
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
    images: [
      {
        url: "/images/s8.jpg",
        width: 1200,
        height: 630,
        alt: "Wildan Silki - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildan Silki | Full-Stack & Smart Contract Developer",
    description: "Professional portfolio of Wildan Silki, a passionate developer specializing in Next.js, React, Smart Contracts, and Quantitative Trading.",
    images: ["/images/s8.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wildan Silki Sawabiqil Abroor",
  jobTitle: "Software Engineer",
  url: "https://wildansilki.xyz",
  image: "https://wildansilki.xyz/images/s8.jpg",
  sameAs: [
    "https://github.com/silkiy",
    "https://www.linkedin.com/in/wildan-silki-69768a272/",
    "https://www.instagram.com/project_silki"
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Smart Contracts",
    "Quantitative Trading",
    "Next.js",
    "Solidity",
    "React"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
