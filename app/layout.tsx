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
  title: {
    default: "Wildan Silki | Professional Software Engineer & Web3 Specialist",
    template: "%s | Wildan Silki"
  },
  description:
    "Official portfolio of Wildan Silki Sawabiqil Abroor, a Professional Software Engineer specializing in Full-Stack development (Next.js, React, Node.js) and Web3. International award winner from Indonesia, available for Remote Work and dedicated to building scalable digital solutions.",
  keywords: [
    "Wildan Silki",
    "Wildan Silki Sawabiqil Abroor",
    "Remote Software Engineer",
    "Remote Full-Stack Developer Indonesia",
    "Web3 Specialist Remote",
    "Next.js Developer Remote",
    "Blockchain Engineer Remote",
    "Available for Remote Work",
    "Professional Developer Portfolio",
    "Software Engineer Indonesia Remote",
  ],
  authors: [{ name: "Wildan Silki Sawabiqil Abroor", url: "https://wildansilki.xyz" }],
  creator: "Wildan Silki",
  openGraph: {
    title: "Wildan Silki | Full-Stack & Smart Contract Developer",
    description: "Explore the professional portfolio of Wildan Silki, specializing in cutting-edge web and blockchain solutions.",
    url: "https://wildansilki.xyz",
    siteName: "Wildan Silki Portfolio",
    images: [
      {
        url: "/images/s8.jpg",
        width: 1200,
        height: 630,
        alt: "Wildan Silki Sawabiqil Abroor - Software Engineer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildan Silki | Full-Stack & Smart Contract Developer",
    description: "Professional portfolio of Wildan Silki, a passionate developer specializing in Next.js, React, Smart Contracts, and Quantitative Trading.",
    images: ["/images/s8.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': 'https://wildansilki.xyz/sitemap.xml',
    },
  },
  other: {
    "google-site-verification": "KODE_DARI_SEARCH_CONSOLE", // Masukkan kode jika ada
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // User can replace this later
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Wildan Silki Sawabiqil Abroor",
    "alternateName": "Wildan Silki",
    "jobTitle": "Professional Software Engineer (Remote-Ready)",
    "description": "Wildan Silki is a highly skilled Software Engineer from Indonesia, currently studying at UISI and specializing in Full-Stack development and Web3 technology. International award winner, available for Remote Work global opportunities.",
    "url": "https://wildansilki.xyz",
    "image": "https://wildansilki.xyz/images/s8.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Malang",
      "addressRegion": "East Java",
      "addressCountry": "Indonesia"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "SMK Telkom Malang"
      }
    ],
    "memberOf": [
      {
        "@type": "EducationalOrganization",
        "name": "UISI - Universitas Internasional Semen Indonesia"
      }
    ],
    "sameAs": [
      "https://github.com/silkiy",
      "https://www.linkedin.com/in/wildan-silki-69768a272/",
      "https://www.instagram.com/project_silki"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full-Stack Development",
      "Smart Contracts",
      "Blockchain Development",
      "Quantitative Trading",
      "Next.js",
      "Solidity",
      "React",
      "Algorithmic Trading",
      "Mobile App Development"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wildan Silki Portfolio",
    "url": "https://wildansilki.xyz",
    "author": "Wildan Silki Sawabiqil Abroor",
    "description": "The professional portfolio website of Wildan Silki Sawabiqil Abroor."
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
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
