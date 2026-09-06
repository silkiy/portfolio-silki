export interface AchievementDetail {
  slug: string;
  title: string;
  issuer: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  significance: string;
  highlights: string[];
}

export const achievementsData: Record<string, AchievementDetail> = {
  "code-olympiad-2023": {
    slug: "code-olympiad-2023",
    title: "2nd Place International Game Development — Code Olympiad 2023",
    issuer: "Coding Bee Academy",
    category: "International Competition",
    date: "January 2023",
    image: "/images/wildan-silki-provincial-award-east-java.jpeg",
    summary: "Awarded 2nd Place internationally in the prestigious Game Development category (Group 1D) at the Code Olympiad 2023 organized by Coding Bee Academy, competing against international student developers.",
    significance: "Demonstrated creative game architecture, physics engine programming, and interactive storytelling capabilities on a global competitive stage, leading to provincial state honors.",
    highlights: [
      "Designed and coded complete interactive gameplay mechanics, player physics, and level progression.",
      "Presented the technical architecture and game design document to an international panel of industry judges.",
      "Achieved 2nd Place podium finish among hundreds of international entrants."
    ],
  },
  "provincial-recognition": {
    slug: "provincial-recognition",
    title: "Provincial Recognition by Acting Governor of East Java",
    issuer: "East Java Provincial Government",
    category: "Government Honor",
    date: "2023",
    image: "/images/wildan-silki-provincial-award-east-java.jpeg",
    summary: "Honored directly by the Acting Governor of East Java, Adhi Karyono, in recognition of outstanding international achievement representing East Java in global technology competitions.",
    significance: "Formal government commendation highlighting technical excellence, digital innovation, and youth contribution to regional technology achievements in East Java.",
    highlights: [
      "Personally commended by Acting Governor of East Java, Adhi Karyono.",
      "Featured in regional media and government educational achievement roundups.",
      "Served as an inspirational milestone for STEM education in vocational institutions."
    ],
  },
  "outstanding-graduate": {
    slug: "outstanding-graduate",
    title: "Outstanding Graduate Award — SMK Telkom Malang",
    issuer: "SMK Telkom Malang",
    category: "Academic & Institutional Honor",
    date: "2025",
    image: "/images/wildan-silki-smk-telkom-malang-graduate.jpg",
    summary: "Recognized as an Outstanding Graduate of SMK Telkom Malang Class of 2025 for exceptional coding competition achievements and dedication to software engineering excellence.",
    significance: "Acknowledges students who excel beyond the academic curriculum through national and international technical competitions and professional leadership.",
    highlights: [
      "Honored during official graduation ceremonies among the top software engineering cohort.",
      "Recognized for multi-disciplinary expertise spanning Web3, mobile development, and backend architectures.",
      "Maintained top-tier practical software examination results (UKK Fullstack Developer certification)."
    ],
  },
  "executive-presentation": {
    slug: "executive-presentation",
    title: "Executive Presentation — Telkom Education Foundation",
    issuer: "Telkom Education Foundation",
    category: "Executive Showcase",
    date: "2024",
    image: "/images/wildan-silki-executive-presentation-telkom.jpg",
    summary: "Selected to present an original software and game development project directly to the Executive Board and Senior Leadership of the Telkom Education Foundation.",
    significance: "Demonstrated advanced technical communication, executive stakeholder pitching, and live project demonstration under high-stakes institutional scrutiny.",
    highlights: [
      "Delivered live demonstration of game architecture, design choices, and technical execution.",
      "Fielded strategic technical questions from senior educational and corporate directors.",
      "Received commendations for technical maturity, presentation poise, and software craftsmanship."
    ],
  },
};
