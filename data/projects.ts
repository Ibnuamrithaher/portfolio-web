// data/projects.ts

// 1. Ini adalah Interface untuk menyelesaikan Error Parameter 'p' (Error ke-3)
export interface ProjectData {
  id: number;
  title: string;
  role?: string; // Tanda tanya berarti opsional
  background: string;
  techStack: string[];
  image?: string;
}

// 2. Ini adalah data proyek Anda
export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Game Top-Up & Premium Subscription Service",
    role: "Backend Developer",
    background: "A comprehensive digital marketplace and transaction ecosystem developed to facilitate seamless top-ups for a diverse catalog of mobile games and premium entertainment subscriptions.",
    techStack: ["Vue.js", "Nest.js", "PostgreSQL", "Tokopay", "Uniplay", "CekatAI"],
  },
  {
    id: 2,
    title: "Dropshipedia",
    role: "Leader Tim Web Developer",
    background: "A dedicated platform and ecosystem developed specifically for small and medium-sized enterprises (SMEs) to foster their business growth.",
    techStack: ["Laravel", "React.js", "Node.js", "MariaDB", "Bootstrap 5"],
  },
  // Anda bisa tambahkan proyek lainnya (Museum Profile, POS, dll) di sini nanti
];