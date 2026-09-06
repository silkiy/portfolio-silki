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
    default: "Wildan Silki | Software Engineer & Web3 Specialist",
    template: "%s | Wildan Silki",
  },
  description:
    "Official portfolio of Wildan Silki Sawabiqil Abroor — Professional Software Engineer from Indonesia specializing in Full-Stack development (Next.js, Node.js), Smart Contracts (Solidity, Rust), and algorithmic trading. International award winner, available for projects, consulting, and remote engineering worldwide.",
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
    "Software Engineer Portfolio",
    "Remote Software Projects",
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
    "Wildan Silki Logo",
    "Wildan Silki Software Engineer Logo",
    "Wildan Silki Official Logo",
    "Silki Logo",
  ],
  authors: [{ name: "Wildan Silki Sawabiqil Abroor", url: siteUrl }],
  creator: "Wildan Silki",
  publisher: "Wildan Silki",
  category: "technology",
  icons: {
    icon: [
      { url: "/logo/wildan-silki-logo.svg", type: "image/svg+xml" },
      { url: "/logo/wildan-silki-logo.png", sizes: "512x512", type: "image/png" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo/wildan-silki-logo.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo/wildan-silki-logo.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Wildan Silki | Software Engineer & Web3 Specialist",
    description:
      "Portfolio of Wildan Silki Sawabiqil Abroor — Full-Stack Developer & Smart Contract Engineer. International award winner, available for projects and remote collaboration worldwide.",
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
        width: 730,
        height: 973,
        type: "image/jpeg",
        alt: "Wildan Silki Sawabiqil Abroor - Professional Software Engineer Profile Picture",
      },
      {
        url: "/logo/wildan-silki-software-engineer-logo.png",
        width: 512,
        height: 512,
        type: "image/png",
        alt: "Wildan Silki Official Engineering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wildan Silki | Software Engineer & Web3 Specialist",
    description:
      "Portfolio of Wildan Silki Sawabiqil Abroor — Full-Stack Developer & Smart Contract Engineer. International award winner, available for projects and remote collaboration worldwide.",
    images: ["/images/wildan-silki-profile.jpeg"],
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
    "llms-full-txt": "https://wildansilki.xyz/llms-full.txt",
    "ai-intent": "portfolio, resume, biography, projects, software engineering skills, research",
    "ai-agent-ready": "true",
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
        "@type": "Person",
        "@id": "https://wildansilki.xyz/#person",
        "name": "Wildan Silki Sawabiqil Abroor",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wildansilki.xyz/logo/wildan-silki-software-engineer-logo.png",
          "caption": "Wildan Silki Official Brand Logo",
          "width": 512,
          "height": 512
        }
      },
      "inLanguage": "en",
    },
    {
      "@type": "Brand",
      "@id": "https://wildansilki.xyz/#brand",
      "name": "Silki",
      "alternateName": "Wildan Silki",
      "url": "https://wildansilki.xyz",
      "logo": "https://wildansilki.xyz/logo/wildan-silki-software-engineer-logo.png"
    },
    {
      "@type": "ProfilePage",
      "@id": "https://wildansilki.xyz/#profilepage",
      "url": "https://wildansilki.xyz",
      "name": "Wildan Silki | Software Engineer & Web3 Specialist Portfolio",
      "headline": "Wildan Silki Sawabiqil Abroor — Professional Software Engineer & Web3 Specialist",
      "isPartOf": {
        "@id": "https://wildansilki.xyz/#website",
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "@id": "https://wildansilki.xyz/#profileimage",
        "url": "https://wildansilki.xyz/images/wildan-silki-profile.jpeg",
        "contentUrl": "https://wildansilki.xyz/images/wildan-silki-profile.jpeg",
        "caption": "Wildan Silki Sawabiqil Abroor",
        "width": 730,
        "height": 973,
      },
      "image": "https://wildansilki.xyz/images/wildan-silki-profile.jpeg",
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
      "image": {
        "@type": "ImageObject",
        "@id": "https://wildansilki.xyz/#profileimage",
        "url": "https://wildansilki.xyz/images/wildan-silki-profile.jpeg",
        "caption": "Wildan Silki Sawabiqil Abroor",
        "width": 730,
        "height": 973,
      },
      "logo": {
        "@type": "ImageObject",
        "url": "https://wildansilki.xyz/logo/wildan-silki-software-engineer-logo.png",
        "caption": "Wildan Silki Official Brand Logo",
        "width": 512,
        "height": 512
      },
      "jobTitle": [
        "Software Engineer",
        "Researcher",
        "Full-Stack Developer",
        "Smart Contract Developer",
        "Web3 Specialist",
        "Quantitative Trader",
      ],
      "description":
        "Wildan Silki is a Software Engineer from Indonesia specializing in Full-Stack development (Next.js, Node.js), Smart Contracts (Solidity, Rust), and algorithmic trading systems. International award winner, available for projects, consulting, and remote engineering worldwide.",
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
        "Educational Research",
        "Capital Market Analysis",
        "IT Trend Research",
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
      "worksFor": [
        {
          "@type": "EmployeeRole",
          "roleName": "Researcher (Internship)",
          "startDate": "2025-11",
          "endDate": "2026-09",
          "worksFor": {
            "@type": "Organization",
            "name": "Galeri Investasi BEI UISI",
            "address": "Gresik, East Java, Indonesia",
          },
        },
        {
          "@type": "EmployeeRole",
          "roleName": "Software Engineer & Research Staff (Internship)",
          "startDate": "2026-02",
          "endDate": "2026-09",
          "worksFor": {
            "@type": "Organization",
            "name": "Divisi Riset dan Teknologi, HMSI UISI",
            "address": "Gresik, East Java, Indonesia",
          },
        },
        {
          "@type": "EmployeeRole",
          "roleName": "Backend Engineer (Internship)",
          "startDate": "2024-11",
          "endDate": "2025-08",
          "worksFor": {
            "@type": "Organization",
            "name": "Merkle Innovation (PT Merkle Inovasi Teknologi)",
            "address": "Jakarta (Hybrid)",
          },
        },
      ],
      "seeks": [
        {
          "@type": "Demand",
          "name": "Software Engineering Projects & Consulting",
          "description":
            "Available for software engineering projects, freelance consulting, and remote collaborations worldwide.",
        },
        {
          "@type": "Demand",
          "name": "Web3 & Smart Contract Architecture",
          "description":
            "Available for Solidity, Rust, DeFi, and blockchain architecture project consulting.",
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
          "Next.js, React, Node.js, TypeScript, Solidity, Rust, Python, Smart Contracts, Ethereum, Algorithmic Trading, Educational Research, Flutter",
        "responsibilities": [
          "Full-Stack web application architecture and development",
          "Educational research and capital market analysis at Galeri Investasi BEI UISI",
          "Technology research, IT trend exploration, and internal software development at HMSI UISI",
          "Backend engineering and RESTful API design at PT Merkle Inovasi Teknologi",
          "Smart contract development and blockchain security",
          "Algorithmic trading bot engineering and quantitative analysis",
          "Cross-platform mobile application development with Flutter",
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://wildansilki.xyz/#sitenav",
      "name": "Site Navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Projects",
          "description": "Featured software engineering case studies, full-stack applications, and blockchain solutions.",
          "url": "https://wildansilki.xyz/#projects",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Technical Blog",
          "description": "In-depth engineering journals, smart contract security patterns, and quantitative systems engineering.",
          "url": "https://wildansilki.xyz/blog",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Experience",
          "description": "Professional engineering background, capital market research at Galeri Investasi BEI UISI, and software roles.",
          "url": "https://wildansilki.xyz/#experience",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Achievements",
          "description": "International code olympiad awards, provincial honors by East Java Governor, and recognized credentials.",
          "url": "https://wildansilki.xyz/#achievements",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Resume & Education",
          "description": "Academic background, certified technical competencies, and full-stack skill matrix.",
          "url": "https://wildansilki.xyz/#resume",
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Contact",
          "description": "Contact Wildan Silki for project collaborations, software consulting, and remote engineering worldwide.",
          "url": "https://wildansilki.xyz/#contact",
        },
      ],
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
            "url": "https://wildansilki.xyz/projects/blayu-mobile",
            "image": "https://wildansilki.xyz/images/project-blayu-mobile-flutter-tracking.png",
            "description": "Football academy management & player performance tracking mobile application built with Flutter and Firebase.",
            "applicationCategory": "MobileApplication",
            "operatingSystem": "Android, iOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Absensi RSUD Mangusada Bali",
            "url": "https://wildansilki.xyz/projects/absensi-rsd",
            "image": "https://wildansilki.xyz/images/project-absensi-rsd-face-recognition.png",
            "description": "High-security automated hospital attendance mobile application with live biometric face recognition and GPS geofencing.",
            "applicationCategory": "MobileApplication",
            "operatingSystem": "Android, iOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "SoftwareApplication",
            "name": "MIT Profiling",
            "url": "https://wildansilki.xyz/projects/mit-profiling",
            "image": "https://wildansilki.xyz/images/project-mit-profiling-backend-api.png",
            "description": "Enterprise LinkedIn-style talent profiling and portfolio platform built with Node.js, Express, and TypeScript.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser, Cloud",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Token Vendor",
            "url": "https://wildansilki.xyz/projects/token-vendor",
            "image": "https://wildansilki.xyz/images/project-token-vendor-smart-contract.png",
            "description": "Decentralized automated token vendor and smart contract on Ethereum using Solidity and Hardhat.",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Ethereum, EVM Blockchain",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Simple NFT",
            "url": "https://wildansilki.xyz/projects/simple-nft",
            "image": "https://wildansilki.xyz/images/project-simple-nft-ethereum-erc721.png",
            "description": "Decentralized NFT minting system and smart contract on Ethereum adhering to the ERC-721 standard.",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Ethereum, EVM Blockchain",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "SoftwareApplication",
            "name": "MaYPI Platform",
            "url": "https://wildansilki.xyz/projects/maypi-platform",
            "image": "https://wildansilki.xyz/images/project-maypi-platform-meter-analysis.jpeg",
            "description": "Cloud-based digital utility water meter reading and telemetry tracking platform using React.js and Node.js.",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "Web Browser, Cloud",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": { "@id": "https://wildansilki.xyz/#person" },
          },
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Tani Cerdas",
            "url": "https://wildansilki.xyz/projects/tani-cerdas",
            "image": "https://wildansilki.xyz/images/project-tani-cerdas-agricultural-nextjs.png",
            "description": "Digital agriculture data and cooperative management platform built with Next.js and MongoDB to empower farmers.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser, Cloud",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
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
        <link rel="help" type="text/plain" href="/llms-full.txt" title="Full LLM & AI Agent Knowledge Base" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM & AI Agent Knowledge Base (Markdown)" />
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
