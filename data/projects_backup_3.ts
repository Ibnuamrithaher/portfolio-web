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
    id: 12,
    title: "Mini Lemon Ice Cream & Tea",
    role: { id: "Full Stack Web Developer", en: "Full Stack Web Developer" },
    background: {
      id: "Situs korporat dinamis untuk brand F&B yang berkembang guna menampilkan identitas kuliner dan memperluas jangkauan pasar. Menampilkan katalog produk dan mempromosikan peluang kemitraan waralaba.",
      en: "A dynamic corporate website developed for a growing F&B brand to showcase its culinary identity and expand market presence, featuring product catalogs and franchise opportunities."
    },
    metadata: {
      year: "2024",
      type: { id: "Web Korporat", en: "Corporate Website" },
      client: "Mini Lemon"
    },
    techStack: ["Vue.js", "Tailwind CSS", "Vite"],
    image: "/projects/image1.png",
    images: ["/projects/image2.png", "/projects/image3.png", "/projects/image4.png"]
  },
  {
    id: 11,
    title: "Survive in the Crossfire",
    role: { id: "Game Developer", en: "Game Developer" },
    background: {
      id: "Game pertempuran multiplayer FFA yang dikembangkan untuk platform Roblox. Dilengkapi mekanik tempur dinamis, sistem spawn acak, dan papan peringkat real-time.",
      en: "A fast-paced, multiplayer Free-For-All (FFA) combat game developed specifically for the Roblox platform using Luau scripting and robust client-server architecture."
    },
    metadata: {
      year: "2023",
      type: { id: "Pengembangan Game", en: "Game Development" }
    },
    techStack: ["Luau", "Roblox Studio", "3D Modeling", "Client-Server"],
    image: "/projects/image5.png",
    images: ["/projects/image6.png", "/projects/image7.png", "/projects/image8.png", "/projects/image9.png", "/projects/image10.png", "/projects/image11.png", "/projects/image12.png", "/projects/image13.png", "/projects/image14.png", "/projects/image15.png", "/projects/image16.png"]
  },
  {
    id: 10,
    title: "Museum Profile",
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    background: {
      id: "Profil digital imersif untuk menampilkan koleksi sejarah dan warisan budaya museum. Mengarahkan pengunjung untuk mengeksplorasi sejarah dan mengunduh aplikasi AR.",
      en: "An immersive digital profile developed to showcase a museum's historical collections, featuring interactive elements and directing visitors to an Augmented Reality (AR) app."
    },
    metadata: {
      year: "2023",
      type: { id: "Web Interaktif", en: "Interactive Website" }
    },
    techStack: ["React JS", "Tailwind CSS", "Vite", "AR Integration"],
    image: "/projects/image17.png",
    images: ["/projects/image18.png", "/projects/image19.png"]
  },
  {
    id: 9,
    title: "Game Top-Up & Subscription",
    role: { id: "Backend Developer", en: "Backend Developer" },
    background: {
      id: "Ekosistem pasar digital untuk top-up game dan langganan hiburan premium yang mulus. Terintegrasi dengan payment gateway Uniplay dan Tokopay.",
      en: "A comprehensive digital marketplace for seamless top-ups of mobile games and premium subscriptions, integrated with Uniplay and Tokopay gateways."
    },
    metadata: {
      year: "2024",
      type: { id: "E-Commerce", en: "E-Commerce" }
    },
    techStack: ["Vue.js", "NestJS", "PostgreSQL", "Tokopay", "Uniplay"],
    image: "/projects/image13.png", // Note: The extraction showed some overlap, but we'll use sequential mapping logic
    images: ["/projects/image14.png", "/projects/image15.png", "/projects/image16.png"]
  },
  {
    id: 1, // DevCraft was 5th in doc
    title: "DevCraft",
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    background: {
      id: "Landing page yang dirancang secara profesional untuk memasarkan layanan pengembangan web dengan desain menarik dan animasi interaktif.",
      en: "A professionally crafted landing page designed to showcase web development services with engaging design and interactive animations."
    },
    metadata: {
      year: "2023",
      type: { id: "Landing Page", en: "Landing Page" }
    },
    techStack: ["React.js", "Wow.js", "Tailwind CSS"],
    image: "/projects/image17.png",
    images: ["/projects/image18.png", "/projects/image19.png"]
  },
  {
    id: 8,
    title: "Dropshipedia",
    role: { id: "Leader Tim Web Developer", en: "Web Developer Team Lead" },
    background: {
      id: "Platform ekosistem untuk UMKM yang menghubungkan produsen dengan profesional pemasaran guna mendorong pertumbuhan bisnis.",
      en: "A dedicated platform for SMEs that connects producers with marketing professionals to foster business growth and synergistic partnerships."
    },
    metadata: {
      year: "2022 - 2023",
      type: { id: "Platform SaaS", en: "SaaS Platform" },
      client: "Dropshipedia"
    },
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Nicpay"],
    image: "/projects/image20.png",
    images: ["/projects/image21.jpeg", "/projects/image22.jpeg", "/projects/image23.png"]
  },
  {
    id: 7,
    title: "Nafaya Skincare",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Pasar digital kustom untuk produk skincare premium, mencakup manajemen stok, analitik penjualan, sistem reward, dan program reseller.",
      en: "A custom-built digital marketplace for premium skincare products, featuring inventory tracking, sales analytics, and a reseller program."
    },
    metadata: {
      year: "2023",
      type: { id: "E-Commerce", en: "E-Commerce" }
    },
    techStack: ["Laravel", "MySQL", "Bootstrap 4"],
    image: "/projects/image24.png",
    images: ["/projects/image25.png", "/projects/image26.png", "/projects/image27.png"]
  },
  {
    id: 6,
    title: "POS Pro",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Solusi kasir komprehensif untuk merampingkan operasional ritel, mulai dari toko kecil hingga perusahaan besar dengan sistem peran berlapis.",
      en: "A comprehensive point-of-sale solution designed to streamline retail operations with integrated sales management and inventory control."
    },
    metadata: {
      year: "2023",
      type: { id: "Sistem Manajemen", en: "Management System" }
    },
    techStack: ["Laravel", "SQL", "Bootstrap"],
    image: "/projects/image28.png",
    images: ["/projects/image29.png", "/projects/image30.png", "/projects/image31.png"]
  },
  {
    id: 5,
    title: "Point of Sales (SME)",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Sistem kasir yang dirampingkan untuk membantu bisnis kecil mengelola operasional penjualan harian secara efisien.",
      en: "A streamlined point-of-sale solution designed to help small businesses manage daily sales operations with ease and core functionality."
    },
    metadata: {
      year: "2022",
      type: { id: "Sistem Manajemen", en: "Management System" }
    },
    techStack: ["Laravel", "SQL", "Tailwind", "DashLite"],
    image: "/projects/image32.png",
    images: ["/projects/image33.png", "/projects/image34.png", "/projects/image35.png"]
  },
  {
    id: 4,
    title: "Digiknown",
    role: { id: "Backend Developer", en: "Backend Developer" },
    background: {
      id: "Platform manajemen pengetahuan internal untuk Telkomsel, diciptakan selama program Magang MSIB untuk dokumentasi dan berbagi ilmu antar karyawan.",
      en: "An internal knowledge management system for Telkomsel, created during an internship to facilitate employee knowledge sharing and documentation."
    },
    metadata: {
      year: "2021",
      type: { id: "Sistem Internal", en: "Internal System" },
      client: "Telkomsel"
    },
    techStack: ["Laravel", "SQL", "Bootstrap"],
    image: "/projects/image36.png",
    images: ["/projects/image37.png"]
  },
  {
    id: 3,
    title: "EvaBPS",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Aplikasi web evaluasi kinerja karyawan BPS Samarinda menggunakan algoritma K-Means untuk pelaporan dan analisis data otomatis.",
      en: "A web-based application for employee performance evaluation at BPS Samarinda, utilizing the K-Means algorithm for automated reporting."
    },
    metadata: {
      year: "2022",
      type: { id: "Analisis Data", en: "Data Analysis" },
      client: "BPS Samarinda"
    },
    techStack: ["Laravel", "SQL", "K-Means", "Bootstrap"],
    image: "/projects/image38.png",
    images: ["/projects/image39.png"]
  },
  {
    id: 2,
    title: "EmpRise",
    role: { id: "Full Stack Developer", en: "Full Stack Developer" },
    background: {
      id: "Sistem pendukung keputusan spesialis menggunakan metode Simple Additive Weighting (SAW) untuk menentukan prioritas kenaikan gaji karyawan.",
      en: "A specialized decision support system implementing the SAW method to prioritize employee salary increases based on predefined criteria."
    },
    metadata: {
      year: "2022",
      type: { id: "Sistem Pendukung Keputusan", en: "Decision Support System" }
    },
    techStack: ["Laravel", "Bootstrap", "SAW Method"],
    image: "/projects/image40.png",
    images: []
  }
];
