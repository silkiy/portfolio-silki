export interface ExperienceDetail {
  slug: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
}

export const experienceData: Record<string, ExperienceDetail> = {
  "galeri-investasi-bei-uisi": {
    slug: "galeri-investasi-bei-uisi",
    role: "Researcher (Internship)",
    company: "Galeri Investasi BEI UISI",
    companyUrl: "https://uisi.ac.id",
    location: "Gresik, East Java, Indonesia",
    period: "Nov 2025 – Sep 2026 · 11 mos",
    type: "Internship (Completed)",
    summary: "Conducted comprehensive educational research on capital market instruments, investment behavior, and financial literacy. Analyzed capital market data, formulated data-driven educational curricula, and published insights for academic and public investment communities.",
    responsibilities: [
      "Conducted analytical research on domestic capital market instruments (IDX/BEI equities, mutual funds, and structured warrants).",
      "Formulated educational modules and quantitative market study presentations for undergraduate students and public investors.",
      "Tracked financial market telemetry, macro indicators, and sector trends to support data-informed research initiatives.",
      "Participated as an institutional delegate representing Galeri Investasi UISI in the national Virtual Trading Competition 2026 powered by IDX Mobile (OJK, IDX, IDClear, KSEI).",
      "Collaborated with faculty mentors and financial experts to organize investment seminars and academic workshops."
    ],
    achievements: [
      "Represented Galeri Investasi UISI and earned official Certificate of Appreciation in the national Virtual Trading Competition 2026 organized by Pasar Modal Indonesia.",
      "Successfully authored and delivered multiple educational research reports on capital market dynamics.",
      "Enhanced investment literacy metrics across student participant cohorts through structured curriculum delivery.",
      "Bridged theoretical academic finance concepts with real-time exchange order book data and quantitative metrics."
    ],
    techStack: ["Capital Market Analysis", "Virtual Trading (IDX Mobile)", "Educational Research", "Financial Literacy", "Data Analysis", "Market Telemetry"],
  },
  "hmsi-uisi-ristek": {
    slug: "hmsi-uisi-ristek",
    role: "Software Engineer — Engineering & Research Staff (Ristek)",
    company: "HMSI UISI (Himpunan Mahasiswa Sistem Informasi)",
    companyUrl: "https://uisi.ac.id",
    location: "Gresik, East Java, Indonesia",
    period: "Feb 2026 – Sep 2026 · 8 mos",
    type: "Internship (Completed)",
    summary: "Actively contributed within the Research and Technology (Ristek) division to explore cutting-edge IT trends, evaluate modern digital solutions, and engineer internal departmental software architectures and platforms.",
    responsibilities: [
      "Evaluated emerging software engineering frameworks, cloud architectures, and developer productivity tools.",
      "Designed and developed responsive web solutions and digital tools for departmental operations and student initiatives.",
      "Spearheaded technical research sessions, code reviews, and technology onboarding for junior division members.",
      "Maintained internal software repositories, ensuring clean coding standards and deployment reliability."
    ],
    achievements: [
      "Engineered reliable internal tools streamlining student information dissemination and department workflows.",
      "Published research briefings on Web3 adoption, full-stack design patterns, and modern software architectures.",
      "Demonstrated consistent technical leadership in bridging academic theory with production software practices."
    ],
    techStack: ["Next.js", "TypeScript", "React", "Node.js", "Software Architecture", "IT Trend Research"],
  },
  "merkle-innovation": {
    slug: "merkle-innovation",
    role: "Backend Engineer (Internship)",
    company: "Merkle Innovation (PT Merkle Inovasi Teknologi)",
    companyUrl: "https://merkleinnovation.com",
    location: "Jakarta Office / Remote (Hybrid)",
    period: "Nov 2024 – Aug 2025 · 10 mos",
    type: "Internship (Completed)",
    summary: "Architected scalable backend data models, built high-throughput RESTful API endpoints, and optimized server infrastructure for enterprise solutions, specifically including the MIT Profiling employee intelligence system.",
    responsibilities: [
      "Engineered high-performance RESTful API microservices using Node.js, Express, and TypeScript.",
      "Designed normalized relational database schemas with complex indexing strategies for rapid analytics queries.",
      "Implemented secure authentication and authorization systems utilizing JSON Web Tokens (JWT) and Role-Based Access Control (RBAC).",
      "Collaborated closely with cross-functional product managers, frontend engineers, and QA teams in an agile delivery cycle.",
      "Authored automated integration test suites and Postman API contract documentation."
    ],
    achievements: [
      "Significantly reduced database query latencies on core profiling endpoints from >1.5s to <65ms through query optimization.",
      "Zero critical production API incidents across the deployment period of the MIT Profiling platform.",
      "Commended by engineering leadership for rigorous code quality, comprehensive documentation, and proactive architectural solutions."
    ],
    techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "RESTful API Design", "Postman", "JWT", "Docker"],
  },
};
