import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";

const font = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#09090b" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const siteUrl = "https://wildansilki.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wildan Silki | Software Engineer & Web3 Specialist (Open to Work)",
    template: "%s | Wildan Silki",
  },
  description:
    "Official portfolio of Wildan Silki Sawabiqil Abroor — Professional Software Engineer from Indonesia specializing in Full-Stack development (Next.js, Node.js), Smart Contracts (Solidity, Rust), and algorithmic trading. International award winner, open to work and available for remote roles globally.",
  keywords: [
    "Wildan Silki",
    "Wildan Silki Sawabiqil Abroor",
    "Wildan",
    "Silki",
    "Sawabiqil",
    "Abroor",
    "silkiy",
    "Wildan Silki Portfolio",
    "Wildan Silki Prestasi",
    "Wildan Silki Penghargaan",
    "Wildan Silki Code Olympiad",
    "Wildan Silki SMK Telkom Malang",
    "Wildan Silki UISI",
    "Software Engineer Open to Work",
    "Available for Remote Work",
    "Remote Software Engineer Indonesia",
    "Full-Stack Developer Indonesia",
    "Web3 Specialist Indonesia",
    "Smart Contract Developer Malang",
    "Solidity Developer Remote",
    "Next.js Developer Remote",
    "Blockchain Engineer Indonesia",
    "Quant Trader Indonesia",
    "Algorithmic Trading Developer",
    "Software Engineer Malang",
    "Full-Stack Developer Malang",
    "React Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Wildan Silki Sawabiqil Abroor", url: siteUrl }],
  creator: "Wildan Silki",
  publisher: "Wildan Silki",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Wildan Silki | Software Engineer & Web3 Specialist (Open to Work)",
    description:
      "Portfolio of Wildan Silki Sawabiqil Abroor — Full-Stack Developer & Smart Contract Engineer. International award winner, available for remote work worldwide.",
    url: siteUrl,
    siteName: "Wildan Silki Portfolio",
    locale: "en_US",
    type: "profile",
    firstName: "Wildan Silki",
    lastName: "Sawabiqil Abroor",
    username: "silkiy",
    gender: "male",
    images: [
      {
        url: "/images/wildan-silki-profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Wildan Silki Sawabiqil Abroor - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildan Silki | Software Engineer & Web3 Specialist (Open to Work)",
    description:
      "Portfolio of Wildan Silki Sawabiqil Abroor — Full-Stack Developer & Smart Contract Engineer. International award winner, available for remote work worldwide.",
    images: ["/images/wildan-silki-profile.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "51cdf27750d73bce",
  },
  other: {
    "llms-txt": "https://wildansilki.xyz/llms.txt",
    "ai-intent": "portfolio, resume, biography, projects, software engineering skills",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://wildansilki.xyz/#website",
      "url": "https://wildansilki.xyz",
      "name": "Wildan Silki Portfolio",
      "description":
        "The official portfolio website of Wildan Silki Sawabiqil Abroor, Software Engineer & Web3 Specialist.",
      "publisher": {
        "@id": "https://wildansilki.xyz/#person",
      },
      "inLanguage": "en",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://wildansilki.xyz/#profilepage",
      "url": "https://wildansilki.xyz",
      "name": "Wildan Silki | Software Engineer & Web3 Specialist Portfolio",
      "headline": "Wildan Silki Sawabiqil Abroor — Professional Software Engineer & Web3 Specialist (Open to Work)",
      "isPartOf": {
        "@id": "https://wildansilki.xyz/#website",
      },
      "mainEntity": {
        "@id": "https://wildansilki.xyz/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://wildansilki.xyz/#person",
      "name": "Wildan Silki Sawabiqil Abroor",
      "alternateName": ["Wildan Silki", "Silki", "silkiy", "Sawabiqil Abroor"],
      "url": "https://wildansilki.xyz",
      "image": "https://wildansilki.xyz/images/wildan-silki-profile.jpeg",
      "jobTitle": [
        "Software Engineer",
        "Full-Stack Developer",
        "Smart Contract Developer",
        "Web3 Specialist",
        "Quantitative Trader",
      ],
      "description":
        "Wildan Silki is a Software Engineer from Indonesia specializing in Full-Stack development (Next.js, Node.js), Smart Contracts (Solidity, Rust), and algorithmic trading systems. International award winner, open to work and available for remote opportunities worldwide.",
      "gender": "https://schema.org/Male",
      "nationality": {
        "@type": "Country",
        "name": "Indonesia",
      },
      "email": "mailto:contact.wildansilki@gmail.com",
      "telephone": "+6281232522276",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malang",
        "addressRegion": "East Java",
        "addressCountry": "ID",
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Universitas Internasional Semen Indonesia (UISI)",
          "url": "https://uisi.ac.id",
        },
        {
          "@type": "EducationalOrganization",
          "name": "SMK Telkom Malang",
          "url": "https://smktelkom-mlg.sch.id",
        },
        {
          "@type": "EducationalOrganization",
          "name": "SMP Negeri 3 Tulungagung",
        },
      ],
      "sameAs": [
        "https://github.com/silkiy",
        "https://www.linkedin.com/in/wildan-silki-69768a272/",
        "https://www.instagram.com/project_silki",
      ],
      "knowsAbout": [
        "Software Engineering",
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Solidity",
        "Smart Contracts",
        "Blockchain Technology",
        "Ethereum",
        "Web3 Architecture",
        "Rust",
        "Python",
        "Quantitative Trading",
        "Algorithmic Trading",
        "Flutter",
        "Tailwind CSS",
        "PostgreSQL",
        "MongoDB",
        "Database Architecture",
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Blockchain Basics",
          "credentialCategory": "Certificate",
          "identifier": "BBCC-HZNRP 1N3ASIQ",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Cyfrin Updraft",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Learn OpenUSD: Understanding Model Kinds",
          "credentialCategory": "Certificate",
          "identifier": "V6pNHAdeTbOWM5YRxSE0Gg",
          "recognizedBy": {
            "@type": "Organization",
            "name": "NVIDIA",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Getting Started with AI on Jetson Nano",
          "credentialCategory": "Certificate",
          "identifier": "_SMMCkJuTvGTGRZ4HPswog",
          "recognizedBy": {
            "@type": "Organization",
            "name": "NVIDIA",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Seleksi Kompetensi Dasar (SKD) – Sekolah Kedinasan",
          "credentialCategory": "State Certification",
          "identifier": "4FE0C82626C781FFD56A8F54EE8D0BFF",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Badan Kepegawaian Negara (BKN)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Code Olympiad 2023 - 2nd Place Game Development (Group 1D)",
          "credentialCategory": "Olympiad Award",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Coding Bee Academy",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Sertifikat Uji Kompetensi Keahlian – Fullstack Developer",
          "credentialCategory": "Certificate of Competency",
          "recognizedBy": {
            "@type": "Organization",
            "name": "SMK Telkom Malang",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DOT Certificate of Competency",
          "credentialCategory": "Certificate of Competency",
          "recognizedBy": {
            "@type": "Organization",
            "name": "DOT Indonesia",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Rapid Developer Certification",
          "credentialCategory": "Certification",
          "identifier": "85382",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Mendix",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Junior Mobile Programmer",
          "credentialCategory": "BNSP Certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Telkom Indonesia",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Pelatihan Cyber Security Awareness",
          "credentialCategory": "Certificate of Attendance",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Telkom Indonesia & Yayasan Pendidikan Telkom",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Indie Game Ignite - COMPFEST 15",
          "credentialCategory": "Competition Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "COMPFEST Universitas Indonesia & Agate",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MANIAC XII Informatics Competition",
          "credentialCategory": "Competition Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Universitas Surabaya (UBAYA)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Workshop Game Concept Design & Game Asset Design",
          "credentialCategory": "Workshop Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "MANIAC XII Universitas Surabaya (UBAYA)",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Modular Design in Low-Code Development",
          "credentialCategory": "Webinar Certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Merkle Academy & Mendix",
          },
        },
      ],
      "award": [
        "2nd Place International Game Development - Coding Bee Academy Code Olympiad 2023",
        "Provincial Recognition by the Acting Governor of East Java (Adhi Karyono) for International Achievement",
        "Outstanding Graduate Award at SMK Telkom Malang",
        "Selected for Executive Presentation to Telkom Education Foundation Leadership",
      ],
      "worksFor": {
        "@type": "EmployeeRole",
        "roleName": "Backend Engineer (Internship)",
        "startDate": "2025-05-19",
        "worksFor": {
          "@type": "Organization",
          "name": "PT. Merkle Inovasi Teknologi",
          "address": "SOHO Capital at Podomoro City, 30th Fl, Jakarta Barat",
        },
      },
      "seeks": [
        {
          "@type": "Demand",
          "name": "Remote Software Engineer",
          "description":
            "Open to work for remote software engineering contracts, full-time positions, and consulting worldwide.",
        },
        {
          "@type": "Demand",
          "name": "Web3 & Smart Contract Developer",
          "description":
            "Available for Solidity, Rust, DeFi, and blockchain architecture development.",
        },
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Software Engineer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Remote Worldwide",
        },
        "skills":
          "Next.js, React, Node.js, TypeScript, Solidity, Rust, Python, Smart Contracts, Ethereum, Algorithmic Trading, Flutter",
        "responsibilities": [
          "Full-Stack web application architecture and development",
          "Backend engineering and RESTful API design at PT Merkle Inovasi Teknologi",
          "Smart contract development and blockchain security",
          "Algorithmic trading bot engineering and quantitative analysis",
          "Cross-platform mobile application development with Flutter",
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://wildansilki.xyz/#projects",
      "name": "Wildan Silki Software Engineering Portfolio Projects",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Blayu Mobile",
            "description": "Academic data & location tracking using Flutter and Firebase.",
            "applicationCategory": "MobileApplication",
            "operatingSystem": "Android, iOS",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Absensi RSD",
            "description": "Face recognition & geofenced location tracking mobile application with Flutter.",
            "applicationCategory": "MobileApplication",
            "operatingSystem": "Android, iOS",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "MIT Profiling",
            "description": "Scalable backend & RESTful APIs built with Node.js, Express, and TypeScript.",
            "applicationCategory": "WebApplication",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Token Vendor",
            "description": "Decentralized smart contract-based token vendor on Ethereum using Solidity and Hardhat.",
            "applicationCategory": "BlockchainApplication",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Simple NFT",
            "description": "NFT smart contract on Ethereum adhering to the ERC-721 standard.",
            "applicationCategory": "BlockchainApplication",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "SoftwareApplication",
            "name": "MaYPI Platform",
            "description": "Platform for IoT meter reading & real-time analytics using React.js and Node.js.",
            "applicationCategory": "WebApplication",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Tani Cerdas",
            "description": "Agricultural management platform using Next.js and MongoDB.",
            "applicationCategory": "WebApplication",
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://github-readme-stats-fast.vercel.app" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github-readme-stats-fast.vercel.app" />
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM & AI Agent Context" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM & AI Agent Context (Markdown)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${font.className} antialiased bg-background text-foreground min-h-[100dvh] flex flex-col overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ResponsiveNav />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
