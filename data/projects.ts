// data/projects.ts

// 1. Ini adalah Interface untuk menyelesaikan Error Parameter 'p' (Error ke-3)
export interface ProjectData {
  id: number;
  title: string;
  role?: string; // Tanda tanya berarti opsional
  background: string;
  jobDesk?: string[]; // Ditambahkan untuk menyimpan daftar tugas spesifik pada proyek ini
  achievements?: string[]; // Metrik keberhasilan proyek
  metadata?: {
    year?: string;
    type?: string;
    client?: string;
  };
  link?: string; // URL ke website live
  github?: string; // URL ke source code
  techStack: string[];
  image?: string;
  images?: string[];
}

// 2. Ini adalah data proyek Anda
export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Game Top-Up & Premium Subscription Service",
    role: "Backend Developer",
    background: "A comprehensive digital marketplace and transaction ecosystem deveqdwqwddwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqloped to facilitate seamless top-ups for a diverse catalog of mobile games and premium entertainment subscriptions.",
    jobDesk: [
      "Mengembangkan arsitektur backend utama untuk memproses ribuan transaksi pengguna secara real-time.",
      "Mengintegrasikan layanan API Payment Gateway pihak ketiga beserta sistem keamanan enkripsi webhook.",
      "Merancang dan melakukan optimasi kueri database (PostgreSQL) agar performa API tetap di bawah 200ms saat traffic puncak."
    ],
    achievements: [
      "Meningkatkan kecepatan respon rata-rata API sebesar 65% melalui implementasi integrasi dan Redis Caching.",
      "Menjamin stabilitas sistem (99.9% uptime) dengan volume lebih dari 50,000+ transaksi di bulan pertama peluncuran."
    ],
    metadata: {
      year: "2023 - 2024",
      type: "B2C / Web Service",
      client: "Confidential Enterprise"
    },
    link: "https://example-production-website.com",
    techStack: ["Vue.js", "Nest.js", "PostgreSQL", "Tokopay", "Uniplay", "CekatAI", "CekatAI", "CekatAI", "CekatAI", "CekatAI", "CekatAI", "CekatAI", "CekatAI", "CekatAI"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg", "/projects/apple.jpg", "/projects/apple.jpg", "/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 2,
    title: "Dropshipediaqwdqwdsadas dasdsasdaqwdwqdqwdqwdwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    jobDesk: [
      "Memimpin tim yang terdiri dari Frontend, Backend, dan UI/UX dalam menyelesaikan target sprint di setiap minggu.",
      "Merancang dan mendelegasikan arsitektur micro-frontend dan repository struktur dasar platform.",
      "Bertanggung jawab akhir dalam proses deployment, CI/CD pipeline, dan code review sebelum perilisan production."
    ],
    achievements: [
      "Mengurangi kepadatan bug (technical debt) hingga 40% dengan merekonstruksi modul *legacy* Laravel.",
      "Sukses mendukung rilis perdana aplikasi yang membantu operasional 1,200+ pengguna UMKM lokal."
    ],
    metadata: {
      year: "2022 - 2023",
      type: "B2B SaaS Platform",
      client: "PT Dropshipedia Nusantara"
    },
    github: "https://github.com/ibnuamrithaher/dropshipedia",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 3,
    title: "Dropshipedia",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 4,
    title: "Dropshipedia",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 5,
    title: "Dropshipedia",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 6,
    title: "Dropshipedia",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  {
    id: 7,
    title: "Dropshipedia",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
    image: "/projects/download (7).jpeg",
    images: ["/projects/apple.jpg", "/projects/apple.jpg"]
  },
  // Anda bisa tambahkan proyek lainnya (Museum Profile, POS, dll) di sini nanti
];