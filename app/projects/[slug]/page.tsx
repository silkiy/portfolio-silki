import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projectsData } from "@/data/projectsData";
import { FaGithub, FaArrowLeft, FaCheckCircle, FaLayerGroup } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return {};

  const title = `${project.title} | Case Study — Wildan Silki`;
  const description = project.tagline;
  const siteUrl = "https://wildansilki.xyz";
  const url = `${siteUrl}/projects/${slug}`;

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
          url: project.heroImage,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) notFound();

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
            "name": "Projects",
            "item": "https://wildansilki.xyz/#projects",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://wildansilki.xyz/projects/${slug}`,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.overview,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "author": {
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
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          <span>SYS.ROUTER // BACK TO PROJECTS</span>
        </Link>

        {/* Hero Header */}
        <header className="border-b border-border/50 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 bg-foreground/10 text-foreground border border-border/50 uppercase font-semibold">
              {project.role}
            </span>
            <span className="text-xs px-2.5 py-1 border border-border/50 text-foreground/60">
              {project.timeline}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
            {project.tagline}
          </p>
        </header>

        {/* Project Image Banner */}
        <div className="relative w-full aspect-video border border-border/50 bg-background/50 overflow-hidden mb-12">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Meta Stats Bar */}
        <div className="border border-border/60 bg-background/40 mb-12 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
            <div className="p-4 flex flex-col justify-center min-w-0">
              <span className="text-[10px] font-mono text-foreground/50 tracking-widest uppercase block">
                ROLE
              </span>
              <span className="text-sm font-bold text-foreground break-words mt-1">
                {project.role}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-center min-w-0">
              <span className="text-[10px] font-mono text-foreground/50 tracking-widest uppercase block">
                TIMELINE
              </span>
              <span className="text-sm font-bold text-foreground break-words mt-1">
                {project.timeline}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-center min-w-0">
              <span className="text-[10px] font-mono text-foreground/50 tracking-widest uppercase block">
                STATUS
              </span>
              <span className="text-sm font-bold text-emerald-400 break-words mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                COMPLETED
              </span>
            </div>
            <div className="p-4 flex flex-col justify-center min-w-0">
              <span className="text-[10px] font-mono text-foreground/50 tracking-widest uppercase block">
                SOURCE CODE
              </span>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-foreground hover:underline inline-flex items-center gap-1.5 mt-1"
                >
                  GitHub <FaGithub className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-sm text-foreground/50 mt-1">Private Enterprise</span>
              )}
            </div>
          </div>
        </div>

        {/* Overview & Problem Statements */}
        <div className="space-y-12 mb-12">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4 flex items-center gap-2">
              <FaLayerGroup className="w-4 h-4 text-foreground/70" />
              Overview & Objectives
            </h2>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              {project.overview}
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border/50 p-6 bg-background/30">
              <h3 className="text-sm uppercase tracking-wider text-red-400 font-bold mb-3">
                [!] Problem Statement
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="border border-border/50 p-6 bg-background/30">
              <h3 className="text-sm uppercase tracking-wider text-green-400 font-bold mb-3">
                [✓] Engineering Solution
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Architecture Components */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              System Architecture
            </h2>
            <div className="space-y-3">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border border-border/40 bg-background/20"
                >
                  <span className="text-xs px-2 py-0.5 border border-border/60 text-foreground/50 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-foreground/90">{arch}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Challenges */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Key Engineering Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((c, idx) => (
                <div key={idx} className="border border-border/50 p-5 bg-background/40">
                  <h4 className="text-sm text-red-400/90 font-semibold mb-2">
                    Challenge {idx + 1}: {c.problem}
                  </h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <strong className="text-green-400 font-semibold">Resolution: </strong>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Results / Metrics */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Key Results & Verification
            </h2>
            <ul className="space-y-3">
              {project.keyResults.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                  <FaCheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech Stack Matrix */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b border-border/50 pb-3 mb-4">
              Technologies Utilized
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
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
            href="/#projects"
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground inline-flex items-center gap-2"
          >
            <FaArrowLeft className="w-3 h-3" /> Back to All Projects
          </Link>
          <a
            href="mailto:contact.wildansilki@gmail.com"
            className="px-4 py-2 border border-border/80 bg-foreground text-background text-xs uppercase font-bold hover:bg-background hover:text-foreground transition-colors"
          >
            Inquire About Collaboration
          </a>
        </footer>
      </div>
    </div>
  );
}
