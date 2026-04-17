// data/projects.ts

export interface ProjectData {
  id: number;
  title: string;
  role?: { id: string; en: string };
  background: { id: string; en: string };
  jobDesk?: { id: string[]; en: string[] };
  achievements?: { id: string[]; en: string[] };
  metadata?: {
    year?: string;
    type?: { id: string; en: string };
    client?: string;
  };
  link?: string;
  github?: string;
  techStack: string[];
  image?: string;
  images?: string[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Game Top-Up & Premium Subscription Service",
    role: { id: "Backend Developer", en: "Backend Developer" },
    background: {
      id: "Ekosistem pasar digital dan transaksi komprehensif yang dikembangkan untuk memfasilitasi top-up mulus bagi berbagai katalog game seluler dan langganan hiburan premium.",
      en: "A comprehensive digital marketplace and transaction ecosystem developed to facilitate seamless top-ups for a diverse catalog of mobile games and premium entertainment subscriptions."
    },
    jobDesk: {
      id: [
        "Mengembangkan arsitektur backend utama untuk memproses ribuan transaksi pengguna secara real-time.",
        "Mengintegrasikan layanan API Payment Gateway pihak ketiga beserta sistem keamanan enkripsi webhook.",
        "Merancang dan melakukan optimasi kueri database (PostgreSQL) agar performa API tetap di bawah 200ms saat traffic puncak."
      ],
      en: [
        "Developing the core backend architecture to process thousands of user transactions in real-time.",
        "Integrating third-party Payment Gateway API services along with webhook encryption security systems.",
        "Designing and optimizing database queries (PostgreSQL) to keep API performance below 200ms during peak traffic."
      ]
    },
    achievements: {
      id: [
        "Meningkatkan kecepatan respon rata-rata API sebesar 65% melalui implementasi integrasi dan Redis Caching.",
        "Menjamin stabilitas sistem (99.9% uptime) dengan volume lebih dari 50,000+ transaksi di bulan pertama peluncuran."
      ],
      en: [
        "Increased average API response speed by 65% through implementation of integration and Redis Caching.",
        "Guaranteed system stability (99.9% uptime) with a volume of over 50,000+ transactions in the first launch month."
      ]
    },
    metadata: {
      year: "2023 - 2024",
      type: { id: "Layanan Web / B2C", en: "B2C / Web Service" },
      client: "Confidential Enterprise"
    },
    link: "https://example-production-website.com",
    techStack: ["Vue.js", "Nest.js", "PostgreSQL", "Tokopay", "Uniplay", "Redis"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 2,
    title: "Dropshipedia",
    role: { id: "Leader Tim Web Developer", en: "Web Developer Team Lead" },
    background: {
      id: "Platform dan ekosistem khusus yang dikembangkan secara spesifik untuk Usaha Mikro, Kecil, dan Menengah (UMKM) guna mendorong pertumbuhan bisnis mereka.",
      en: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth."
    },
    jobDesk: {
      id: [
        "Memimpin tim yang terdiri dari Frontend, Backend, dan UI/UX dalam menyelesaikan target sprint di setiap minggu.",
        "Merancang dan mendelegasikan arsitektur micro-frontend dan repository struktur dasar platform.",
        "Bertanggung jawab akhir dalam proses deployment, CI/CD pipeline, dan code review sebelum perilisan production."
      ],
      en: [
        "Leading a team consisting of Frontend, Backend, and UI/UX in completing weekly sprint targets.",
        "Designing and delegating micro-frontend architecture and the platform's basic repository structure.",
        "Final responsibility in the deployment process, CI/CD pipeline, and code review prior to production release."
      ]
    },
    achievements: {
      id: [
        "Mengurangi kepadatan bug (technical debt) hingga 40% dengan merekonstruksi modul legacy Laravel.",
        "Sukses mendukung rilis perdana aplikasi yang membantu operasional 1,200+ pengguna UMKM lokal."
      ],
      en: [
        "Reduced bug density (technical debt) by up to 40% by reconstructing legacy Laravel modules.",
        "Successfully supported the initial app release helping 1,200+ local SME users' operations."
      ]
    },
    metadata: {
      year: "2022 - 2023",
      type: { id: "Platform SaaS B2B", en: "B2B SaaS Platform" },
      client: "PT Dropshipedia Nusantara"
    },
    github: "https://github.com/ibnuamrithaher/dropshipedia",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  }
];