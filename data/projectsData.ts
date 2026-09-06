export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: { problem: string; solution: string }[];
  keyResults: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Record<string, ProjectCaseStudy> = {
  "absensi-rsd": {
    slug: "absensi-rsd",
    title: "Absensi RSUD Mangusada Bali — Biometric Face Recognition & Geofencing",
    tagline: "High-reliability mobile attendance system featuring on-device facial recognition and anti-spoofing geofencing for RSUD Mangusada Bali.",
    role: "Lead Mobile Developer",
    timeline: "2024",
    heroImage: "/images/project-absensi-rsd-face-recognition.png",
    overview: "Absensi RSUD Mangusada Bali is an enterprise mobile attendance platform engineered to guarantee precise hospital staff presence through real-time on-device facial recognition and polygon geofencing coordinate verification around RSUD Mangusada Bali.",
    problem: "Conventional hospital attendance methods caused physical bottleneck lines during medical shift handovers, while standard mobile attendance apps remained vulnerable to mock GPS spoofing and camera photo replay exploits.",
    solution: "Engineered a streamlined Flutter application with real-time on-device biometric vector inference, verified against hospital polygon geofencing boundaries and cryptographically signed payload timestamps.",
    architecture: [
      "Flutter Mobile Client with Custom Camera Controller",
      "On-Device Face Detection & Biometric Vector Extraction",
      "Cryptographic Payload Signer (HMAC-SHA256)",
      "Secure RESTful Backend with Anti-Spoofing Geofence Validation",
    ],
    challenges: [
      {
        problem: "Inference latency on entry-level Android hardware caused camera preview stuttering.",
        solution: "Decoupled image frame acquisition from inference pipeline by running vector embeddings inside dedicated Dart background isolates with frame throttling."
      },
      {
        problem: "Fake GPS tools circumventing native OS location reporting.",
        solution: "Implemented multi-layer root detection, mock location provider verification, and cell tower triangulation cross-checking."
      }
    ],
    keyResults: [
      "99.4% biometric verification accuracy under standard lighting conditions",
      "Under 450ms total verification and checkout latency",
      "Zero reported proxy attendances across hospital operational deployment"
    ],
    techStack: ["Flutter", "Dart", "TensorFlow Lite", "RESTful API", "Firebase", "Geofencing"],
    githubUrl: "https://github.com/silkiy",
  },
  "token-vendor": {
    slug: "token-vendor",
    title: "Token Vendor — Decentralized Automated Vending Smart Contract",
    tagline: "Trustless EVM automated token vending and liquidity distribution machine on Ethereum.",
    role: "Smart Contract Engineer",
    timeline: "2024",
    heroImage: "/images/project-token-vendor-smart-contract.png",
    overview: "Token Vendor is an autonomous decentralized vending protocol built on Ethereum that allows trustless token purchasing, automated fractional reserve pricing, and programmatic vendor liquidity withdrawals without intermediaries.",
    problem: "Centralized exchange token sales introduce custodial risks, counterparty liabilities, and human approval bottlenecks for small-scale token mints and community distributions.",
    solution: "Designed and implemented an immutable Solidity smart contract suite adhering to OpenZeppelin security standards, featuring reentrancy guards, automated exchange rates, and safe math primitives.",
    architecture: [
      "Solidity Smart Contracts (ERC-20 Token & Vendor Contract)",
      "Hardhat Testing Suite with Gas Profiling",
      "Ethers.js Client Interface Integration",
      "Sepolia Testnet Deployment & Etherscan Verification",
    ],
    challenges: [
      {
        problem: "Vulnerability to reentrancy attacks during ETH withdrawals by the vendor owner.",
        solution: "Applied the Checks-Effects-Interactions (CEI) design pattern combined with OpenZeppelin's ReentrancyGuard nonReentrant modifier."
      },
      {
        problem: "High gas consumption during sequential buy and sell operations.",
        solution: "Optimized storage slot packing and state variable caching to reduce transaction execution costs by 23%."
      }
    ],
    keyResults: [
      "100% test coverage with automated Hardhat unit and fuzzing tests",
      "Zero critical vulnerabilities discovered during static analysis audit",
      "Fully verifiable on EVM block explorers"
    ],
    techStack: ["Solidity", "Hardhat", "Ethereum", "Ethers.js", "OpenZeppelin", "Chai / Mocha"],
    githubUrl: "https://github.com/silkiy",
  },
  "mit-profiling": {
    slug: "mit-profiling",
    title: "MIT Profiling — LinkedIn-Style Professional Talent Profiling Platform",
    tagline: "LinkedIn-style professional web platform for corporate talent profiling, organizational capability directory, and portfolio tracking at PT Merkle Inovasi Teknologi.",
    role: "Backend Engineer (Internship)",
    timeline: "2024 – 2025",
    heroImage: "/images/project-mit-profiling-backend-api.png",
    overview: "MIT Profiling is a LinkedIn-style corporate talent profiling platform developed for PT Merkle Inovasi Teknologi. The system enables company talents and employees to showcase verified skills, build professional portfolios, track certifications, and streamline internal resource allocation and staffing.",
    problem: "Internal employee competencies, project experiences, and certifications were previously scattered across disconnected spreadsheets, making resource allocation for enterprise client projects slow and inaccurate.",
    solution: "Constructed a high-throughput backend architecture with Node.js, Express, and TypeScript, featuring a LinkedIn-style multi-criteria talent directory, structured profile search, and optimized relational data models.",
    architecture: [
      "Node.js & Express RESTful API Services",
      "Relational Database Modeling with Index Optimization",
      "Role-Based Access Control (RBAC) with JWT Bearer Authentication",
      "Automated Postman Collection & Integration Test Suite",
    ],
    challenges: [
      {
        problem: "N+1 query bottlenecks when aggregating multidimensional skill assessments across hundreds of employees.",
        solution: "Restructured SQL queries with materialized aggregations and indexed foreign keys, reducing query execution time from 1.8s to 42ms."
      }
    ],
    keyResults: [
      "Centralized professional talent directory deployed across all corporate divisions",
      "Average talent search and profile query response latency under 65ms",
      "Significantly accelerated project staffing velocity and skill portfolio transparency"
    ],
    techStack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "JWT", "Postman", "Docker"],
    githubUrl: "https://github.com/silkiy",
  },
  "blayu-mobile": {
    slug: "blayu-mobile",
    title: "Blayu Mobile — Football Academy Management & Telemetry System",
    tagline: "Mobile application for football academies to manage student academic records, training schedules, and young athlete development.",
    role: "Mobile App Developer",
    timeline: "2023 – 2024",
    heroImage: "/images/project-blayu-mobile-flutter-tracking.png",
    overview: "Blayu Mobile is a cross-platform Flutter mobile application engineered specifically for football academy management. It enables coaches, student athletes, and administrators to manage training curriculums, match schedules, pitch attendance, and longitudinal athletic development within a centralized mobile environment.",
    problem: "Managing student athlete academic evaluations, training regimens, and pitch attendance was handled through manual paper logs and fragmented chat groups, making progress tracking difficult.",
    solution: "Developed a unified Flutter mobile application integrated with Firebase, providing pitch geofencing attendance, athletic progress reporting, and automated training schedule synchronization.",
    architecture: [
      "Flutter UI with BLoC State Management",
      "Football Academy Student & Training Curriculum Module",
      "Pitch Coordinate Bounds & Attendance Verification",
      "Push Notification Dispatcher via FCM",
    ],
    challenges: [
      {
        problem: "Intermittent network connectivity in remote training grounds causing sync dropouts.",
        solution: "Architected an offline-first SQLite cache with automatic reconciliation queue that syncs whenever network connectivity is restored."
      },
      {
        problem: "Diverse athletic evaluation metrics varying across different age groups.",
        solution: "Engineered a flexible schema model supporting dynamic technical, physical, and academic performance grading."
      }
    ],
    keyResults: [
      "100% digital transition of football academy student records and training curriculums",
      "Instant on-pitch attendance check-in under 1 second",
      "Enhanced transparency for coaches and parents tracking youth athlete development"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Firestore", "Google Maps API", "BLoC"],
    githubUrl: "https://github.com/silkiy",
  },
  "simple-nft": {
    slug: "simple-nft",
    title: "Simple NFT — ERC-721 Smart Contract Architecture",
    tagline: "Secure, gas-optimized non-fungible token smart contract on Ethereum blockchain.",
    role: "Smart Contract Developer",
    timeline: "2024",
    heroImage: "/images/project-simple-nft-ethereum-erc721.png",
    overview: "A comprehensive implementation of the ERC-721 non-fungible token standard on Ethereum, complete with on-chain metadata pointers, role-based minting permissions, and royalty management protocols.",
    problem: "Many NFT contracts suffer from excessive gas costs during batch minting and lack standardized access control mechanisms.",
    solution: "Engineered an audited ERC-721 contract utilizing OpenZeppelin contracts with optimized storage layouts, IPFS decentralized asset pinning, and EIP-2981 royalty support.",
    architecture: [
      "Solidity ERC-721 Smart Contract",
      "IPFS Distributed Asset Storage via Pinata",
      "Hardhat Automated Deployment Scripts",
      "Comprehensive Gas Profiling Suite",
    ],
    challenges: [
      {
        problem: "Gas fees during mint transactions exceeding user budgets.",
        solution: "Utilized custom event indexing and internal counter optimizations to minimize storage writes."
      }
    ],
    keyResults: [
      "Fully compliant with ERC-721 and ERC-165 interface detection standards",
      "Demonstrated 18% lower gas cost compared to vanilla ERC-721 implementations",
      "Seamless integration with OpenSea and other major marketplaces"
    ],
    techStack: ["Solidity", "ERC-721", "Hardhat", "IPFS", "OpenZeppelin", "TypeScript"],
    githubUrl: "https://github.com/silkiy",
  },
  "maypi-platform": {
    slug: "maypi-platform",
    title: "MaYPI Platform — Digital Water Meter Reading & Monitoring Platform",
    tagline: "Web platform for digital water meter reading, real-time consumption volume monitoring, and automated utility billing telemetry.",
    role: "Full-Stack Web Developer",
    timeline: "2024",
    heroImage: "/images/project-maypi-platform-meter-analysis.jpeg",
    overview: "MaYPI Platform is an industrial web platform engineered specifically for digital water meter reading, client consumption volume tracking, and utility flow analytics to prevent water losses (Non-Revenue Water) and streamline billing reconciliation.",
    problem: "Manual field meter reading was prone to transcription errors, delayed billing updates, and late detection of pipe leakages.",
    solution: "Constructed a responsive React.js dashboard paired with a Node.js data pipeline that ingests water meter numbers, verifies consumption tolerances, and renders real-time consumption trend charts.",
    architecture: [
      "React.js Frontend with Interactive Data Visualizations",
      "Node.js Ingestion Pipeline for Water Telemetry & Reading Records",
      "Time-Series Relational Database Schema",
      "Automated Anomaly Detection Threshold Engine",
    ],
    challenges: [
      {
        problem: "High-volume water meter record submissions during month-end billing cycles.",
        solution: "Implemented in-memory write buffering and batch database transactions to maintain sub-second response times."
      }
    ],
    keyResults: [
      "Complete elimination of manual physical water meter transcription errors",
      "Real-time daily and monthly water consumption charting with instant updates",
      "Integrated automated water billing report generation and export"
    ],
    techStack: ["React.js", "Node.js", "Express", "Chart.js", "Tailwind CSS", "MySQL"],
    githubUrl: "https://github.com/silkiy",
  },
  "tani-cerdas": {
    slug: "tani-cerdas",
    title: "Tani Cerdas — Digital Agricultural Management Platform",
    tagline: "Empowering farmers and agricultural cooperatives to manage agricultural data digitally to improve productivity and welfare.",
    role: "Full-Stack Developer",
    timeline: "2024",
    heroImage: "/images/project-tani-cerdas-agricultural-nextjs.png",
    overview: "Tani Cerdas is a modern agricultural management platform engineered to help farmers and agricultural cooperatives manage farming data digitally to improve productivity and welfare. It provides planting cycle tracking, fertilizer input planning, harvest yield projections, and transparent market commodity price access.",
    problem: "Smallholder farmers and farming collectives often operate without structured logs, lacking visibility into input expenses, harvest schedules, and fair market commodity pricing.",
    solution: "Built a lightweight, responsive Next.js web application utilizing React Server Components and MongoDB, enabling farmers to document crop life cycles, project harvest yields, and optimize collective farm production.",
    architecture: [
      "Next.js App Router (React Server Components)",
      "MongoDB Document Store for Flexible Agronomic Schemas",
      "Tailwind CSS Dark/Light Adaptive Interface",
      "NextAuth.js Multi-Role Authentication",
    ],
    challenges: [
      {
        problem: "Diverse crop categories requiring highly dynamic agronomic attributes.",
        solution: "Designed polymorphic MongoDB schemas with flexible attribute maps, enabling farmers to define custom metrics per crop type."
      }
    ],
    keyResults: [
      "End-to-end digital lifecycle recording from planting to distribution",
      "Fast, mobile-first interface optimized for rural low-bandwidth connections",
      "Improved input cost planning efficiency by up to 20% for agricultural cooperatives"
    ],
    techStack: ["Next.js", "React", "MongoDB", "Tailwind CSS", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/silkiy",
  },
};
