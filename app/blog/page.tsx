import Link from "next/link";
import type { Metadata } from "next";
import { blogData } from "@/data/blogData";
import { FaArrowLeft, FaClock, FaCalendarAlt, FaTag, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Engineering Journal & Technical Articles — Wildan Silki",
  description:
    "Technical writings, architecture blueprints, smart contract security patterns, and quantitative systems engineering by Wildan Silki.",
  alternates: {
    canonical: "https://wildansilki.xyz/blog",
  },
  openGraph: {
    title: "Engineering Journal & Technical Articles — Wildan Silki",
    description:
      "Technical writings, architecture blueprints, smart contract security patterns, and quantitative systems engineering by Wildan Silki.",
    url: "https://wildansilki.xyz/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = Object.values(blogData);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-8 group"
        >
          <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          <span>SYS.ROUTER // BACK TO PORTFOLIO</span>
        </Link>

        {/* Header */}
        <header className="border-b border-border/50 pb-8 mb-12">
          <div className="inline-block text-xs px-2.5 py-1 bg-foreground/10 text-foreground border border-border/50 uppercase font-semibold mb-3">
            TECHNICAL LOG // ARTICLES
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">
            Engineering Journal
          </h1>
          <p className="mt-3 text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl">
            In-depth engineering logs, smart contract security analyses, algorithmic system blueprints, and full-stack performance patterns.
          </p>
        </header>

        {/* Articles List */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border border-border/50 bg-background/40 hover:bg-background/80 p-6 md:p-8 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/50 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaClock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground group-hover:underline mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40">
                <div className="flex flex-wrap items-center gap-2">
                  <FaTag className="w-3 h-3 text-foreground/40" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 border border-border/50 bg-background/40 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs uppercase font-bold text-foreground inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  Read Article <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border/50 flex items-center justify-between">
          <span className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Wildan Silki Sawabiqil Abroor
          </span>
          <Link
            href="/"
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5"
          >
            Portfolio Home
          </Link>
        </footer>
      </div>
    </div>
  );
}
