import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { experienceData } from "@/data/experienceData";
import { FaArrowLeft, FaBriefcase, FaCheckCircle, FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(experienceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = experienceData[slug];
  if (!exp) return {};

  const title = `${exp.role} at ${exp.company} — Wildan Silki`;
  const description = exp.summary.slice(0, 160);
  const siteUrl = "https://wildansilki.xyz";
  const url = `${siteUrl}/experience/${slug}`;

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
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const exp = experienceData[slug];

  if (!exp) notFound();

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
            "name": "Experience",
            "item": "https://wildansilki.xyz/#experience",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${exp.role} - ${exp.company}`,
            "item": `https://wildansilki.xyz/experience/${slug}`,
          },
        ],
      },
      {
        "@type": "Organization",
        "name": exp.company,
        "url": exp.companyUrl,
        "employee": {
          "@type": "Person",
          "name": "Wildan Silki Sawabiqil Abroor",
          "jobTitle": exp.role,
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
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          <span>SYS.ROUTER // BACK TO EXPERIENCE</span>
        </Link>

        {/* Hero Header */}
        <header className="border-b border-border/50 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 bg-foreground/10 text-foreground border border-border/50 uppercase font-semibold">
              {exp.type}
            </span>
            <span className="text-xs px-2.5 py-1 border border-border/50 text-foreground/60">
              {exp.period}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            {exp.role}
          </h1>
          <p className="mt-3 text-lg text-foreground/80 font-semibold flex items-center gap-2">
            <FaBuilding className="w-4 h-4 text-foreground/50" />
            {exp.company}
          </p>
        </header>

        {/* Meta Credential Bar */}
        <div className="border border-border/60 bg-background/40 mb-12 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
            <div className="p-4 sm:p-5 flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 border border-border/50 bg-background/80 flex items-center justify-center shrink-0">
                <FaCalendarAlt className="w-4 h-4 text-foreground/60" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-foreground/50 tracking-widest block uppercase">
                  TIMELINE
                </span>
                <span className="text-sm font-bold text-foreground break-words">
                  {exp.period}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 border border-border/50 bg-background/80 flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="w-4 h-4 text-foreground/60" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-foreground/50 tracking-widest block uppercase">
                  LOCATION
                </span>
                <span className="text-sm font-bold text-foreground break-words">
                  {exp.location}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 border border-border/50 bg-background/80 flex items-center justify-center shrink-0">
                <FaBriefcase className="w-4 h-4 text-foreground/60" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono text-foreground/50 tracking-widest block uppercase">
                  CLASSIFICATION
                </span>
                <span className="text-sm font-bold text-foreground break-words">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-12 mb-12">
          {/* Executive Summary */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Executive Summary & Scope
            </h2>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base border-l-2 border-foreground/30 pl-4">
              {exp.summary}
            </p>
          </section>

          {/* Key Responsibilities */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Core Responsibilities & Deliverables
            </h2>
            <div className="space-y-3">
              {exp.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 border border-border/40 bg-background/20"
                >
                  <span className="text-xs px-2 py-0.5 border border-border/60 text-foreground/50 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-foreground/90 leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact & Key Achievements */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Key Achievements & Impact
            </h2>
            <ul className="space-y-3">
              {exp.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Skills & Technologies */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Focus Disciplines & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 border border-border/60 bg-background/50 text-xs font-semibold uppercase text-foreground/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#experience"
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground inline-flex items-center gap-2"
          >
            <FaArrowLeft className="w-3 h-3" /> Back to Resume & Experience
          </Link>
          <a
            href="mailto:contact.wildansilki@gmail.com"
            className="px-4 py-2 border border-border/80 bg-foreground text-background text-xs uppercase font-bold hover:bg-background hover:text-foreground transition-colors"
          >
            Contact Wildan
          </a>
        </footer>
      </div>
    </div>
  );
}
