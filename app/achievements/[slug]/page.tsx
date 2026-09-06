import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { achievementsData } from "@/data/achievementsData";
import { FaArrowLeft, FaTrophy, FaCalendarAlt, FaCheckCircle, FaAward } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(achievementsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = achievementsData[slug];
  if (!item) return {};

  const title = `${item.title} — Wildan Silki`;
  const description = item.summary.slice(0, 160);
  const siteUrl = "https://wildansilki.xyz";
  const url = `${siteUrl}/achievements/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: `${siteUrl}${item.image}`,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${item.image}`],
    },
  };
}

export default async function AchievementDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = achievementsData[slug];

  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://wildansilki.xyz",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Achievements",
            "item": "https://wildansilki.xyz/#achievements",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": item.title,
            "item": `https://wildansilki.xyz/achievements/${slug}`,
          },
        ],
      },
      {
        "@type": "Award",
        "name": item.title,
        "description": item.summary,
        "recipient": {
          "@type": "Person",
          "name": "Wildan Silki Sawabiqil Abroor",
          "url": "https://wildansilki.xyz",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-mono pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <Link
          href="/#achievements"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          <span>SYS.ROUTER // BACK TO ACHIEVEMENTS</span>
        </Link>

        {/* Hero Header */}
        <header className="border-b border-border/50 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 bg-foreground/10 text-foreground border border-border/50 uppercase font-semibold">
              {item.category}
            </span>
            <span className="text-xs px-2.5 py-1 border border-border/50 text-foreground/60">
              {item.date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            {item.title}
          </h1>
          <p className="mt-3 text-lg text-foreground/80 font-semibold flex items-center gap-2">
            <FaAward className="w-4 h-4 text-foreground/50" />
            Issued by {item.issuer}
          </p>
        </header>

        {/* Image Documentation */}
        <div className="relative w-full aspect-video sm:aspect-[21/9] border border-border/50 bg-background/50 overflow-hidden mb-12">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Credential & Institutional Verification Card */}
        <div className="border border-border/60 bg-background/40 mb-12 overflow-hidden">
          {/* Top Row: Date Conferred & Classification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40 border-b border-border/40">
            <div className="p-4 sm:p-5 flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 border border-border/50 bg-background/80 flex items-center justify-center shrink-0">
                <FaCalendarAlt className="w-4 h-4 text-foreground/60" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-foreground/50 tracking-widest block uppercase">
                  DATE CONFERRED
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground break-words">
                  {item.date}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 border border-border/50 bg-background/80 flex items-center justify-center shrink-0">
                <FaTrophy className="w-4 h-4 text-foreground/60" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-foreground/50 tracking-widest block uppercase">
                  CLASSIFICATION
                </span>
                <span className="text-sm sm:text-base font-bold text-foreground break-words">
                  {item.category}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Issuing Body (Full width shelf, strictly inside box) */}
          <div className="p-4 sm:p-5 flex items-start sm:items-center gap-3.5 min-w-0 bg-background/20">
            <div className="w-10 h-10 border border-border/50 bg-background/80 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <FaAward className="w-4 h-4 text-foreground/60" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono text-foreground/50 tracking-widest block uppercase">
                ISSUING BODY // ACCREDITING AUTHORITY
              </span>
              <span className="text-sm sm:text-base md:text-lg font-bold text-foreground break-words leading-snug">
                {item.issuer}
              </span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-12 mb-12">
          {/* Summary */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Overview & Recognition
            </h2>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base border-l-2 border-foreground/30 pl-4">
              {item.summary}
            </p>
          </section>

          {/* Significance */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Institutional & Professional Significance
            </h2>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              {item.significance}
            </p>
          </section>

          {/* Key Highlights */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Key Highlights & Milestones
            </h2>
            <ul className="space-y-3">
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#achievements"
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground inline-flex items-center gap-2"
          >
            <FaArrowLeft className="w-3 h-3" /> Back to All Achievements
          </Link>
          <a
            href="mailto:contact.wildansilki@gmail.com"
            className="px-4 py-2 border border-border/80 bg-foreground text-background text-xs uppercase font-bold hover:bg-background hover:text-foreground transition-colors"
          >
            Connect with Wildan
          </a>
        </footer>
      </div>
    </div>
  );
}
