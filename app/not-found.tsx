import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Sector Not Found | Wildan Silki",
  description: "The requested route or sector does not exist on this system.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center font-mono">
      <div className="border border-border/50 bg-background/50 backdrop-blur-sm p-8 md:p-12 max-w-lg w-full">
        <span className="text-xs text-foreground/50 tracking-widest uppercase block mb-2">
          SYS.ERR // 404
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter uppercase mb-4">
          NOT FOUND
        </h1>
        <p className="text-sm text-foreground/70 mb-8 leading-relaxed">
          The requested data stream or route does not exist or has been relocated within the network.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-border/50 bg-foreground text-background hover:bg-background hover:text-foreground transition-colors uppercase tracking-widest text-xs font-bold"
        >
          &lt; Return to Matrix
        </Link>
      </div>
    </div>
  );
}
