import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-white px-6 py-20 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight lg:text-6xl">
            Ibnu Amri Thaher, <span className="text-blue-600">M.Sc.</span>
          </h1>
          <p className="mb-8 text-xl text-slate-600 leading-relaxed">
            Full Stack Engineer & Team Leader dengan keahlian dalam membangun arsitektur web yang terukur, 
            sistem transaksi otomatis, dan manajemen proyek berbasis Agile/Scrum.
          </p>
          <div className="flex gap-4">
            <a href="mailto:ibnuamrithaher@gmail.com" className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-700">
              Hubungi Saya
            </a>
            <a href="#projects" className="rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-700 transition-all hover:bg-slate-50">
              Lihat Proyek
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 lg:px-24 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold">Keahlian Teknis & Manajemen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-blue-600">Backend</h4>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>Nest.js & Express.js</li>
                <li>Laravel</li>
                <li>PostgreSQL & MongoDB</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-blue-600">Frontend</h4>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>React.js & Next.js</li>
                <li>Vue.js (Nuxt 3)</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-blue-600">DevOps & AI</h4>
              <li>Docker & CI/CD</li>
              <li>VPS Management</li>
              <li>Python (Model Tuning)</li>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-blue-600">Management</h4>
              <ul className="text-sm space-y-2 text-slate-600">
                <li>Agile & Scrum</li>
                <li>Team Leadership</li>
                <li>Task Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="px-6 py-20 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold">Portofolio Pilihan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-6 text-center">
        <p className="text-slate-500">© 2026 Ibnu Amri Thaher. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}