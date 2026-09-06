import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { blogData } from "@/data/blogData";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return {};

  const title = `${post.title} — Wildan Silki`;
  const description = post.summary;
  const siteUrl = "https://wildansilki.xyz";
  const url = `${siteUrl}/blog/${slug}`;
  const ogImage = `${siteUrl}/logo/wildan-silki-software-engineer-logo.png`;

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
      publishedTime: post.date,
      authors: ["Wildan Silki Sawabiqil Abroor"],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: `${post.title} — Wildan Silki`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function renderFormattedParagraph(text: string) {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      elements.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-semibold underline underline-offset-4 decoration-border hover:decoration-green-400 hover:text-green-400 inline-flex items-center gap-1.5 transition-colors"
        >
          <span>{match[1]}</span>
          <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-70" />
        </a>
      );
    } else if (match[3]) {
      elements.push(
        <a
          key={match.index}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-semibold underline underline-offset-4 decoration-border hover:decoration-green-400 hover:text-green-400 inline-flex items-center gap-1.5 transition-colors"
        >
          <span>{match[3]}</span>
          <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-70" />
        </a>
      );
    }

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) notFound();

  const siteUrl = "https://wildansilki.xyz";
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
            "item": siteUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Engineering Journal",
            "item": `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `${siteUrl}/blog/${slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.summary,
        "image": `${siteUrl}/logo/wildan-silki-software-engineer-logo.png`,
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": `${siteUrl}/blog/${slug}`,
        "author": {
          "@type": "Person",
          "name": "Wildan Silki Sawabiqil Abroor",
          "url": siteUrl,
        },
        "publisher": {
          "@type": "Person",
          "name": "Wildan Silki",
          "url": siteUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/logo/wildan-silki-software-engineer-logo.png`,
          },
        },
        "keywords": post.tags.join(", "),
      },
    ],
  };

  return (
    <article className="min-h-screen bg-background text-foreground font-mono pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        {/* Navigation Breadcrumb */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          <span>SYS.ROUTER // BACK TO ARTICLES</span>
        </Link>

        {/* Post Header */}
        <header className="border-b border-border/50 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/50 mb-4">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FaClock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed border-l-2 border-foreground/30 pl-4">
            {post.summary}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-6">
            <FaTag className="w-3 h-3 text-foreground/40" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 border border-border/50 bg-background/50 text-foreground/80 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <div className="space-y-10 text-foreground/80 leading-relaxed text-base">
          {post.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-foreground tracking-tight border-b border-border/40 pb-2">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-foreground/85">
                  {renderFormattedParagraph(paragraph)}
                </p>
              ))}

              {section.code && (
                <div className="mt-4 border border-border/60 bg-[#0c0c0e] rounded overflow-hidden">
                  <div className="px-4 py-2 bg-background/80 border-b border-border/40 flex items-center justify-between text-xs text-foreground/50 uppercase">
                    <span>CODE BLOCK // {section.code.language}</span>
                  </div>
                  <pre className="p-4 text-xs sm:text-sm overflow-x-auto text-green-400 font-mono">
                    <code>{section.code.snippet}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Post Author Box */}
        <div className="mt-16 p-6 border border-border/50 bg-background/40">
          <span className="text-xs text-foreground/50 uppercase block mb-1">AUTHOR PROFILE</span>
          <h3 className="text-lg font-bold text-foreground">Wildan Silki Sawabiqil Abroor</h3>
          <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
            Software Engineer & Web3 Specialist from Indonesia specializing in Full-Stack development (Next.js, Node.js), Smart Contracts (Solidity, Rust), and algorithmic trading systems.
          </p>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-12 pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground inline-flex items-center gap-2"
          >
            <FaArrowLeft className="w-3 h-3" /> All Articles
          </Link>
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground"
          >
            Back to Home Portfolio →
          </Link>
        </footer>
      </div>
    </article>
  );
}
