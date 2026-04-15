// app/page.tsx
import { projects, ProjectData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <main className="min-h-screen p-8 lg:p-24 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Portfolio Proyek</h1>
        
        {/* Grid layout untuk kartu proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Di sinilah tipe ProjectData dipasang pada parameter 'p' untuk menghilangkan Error baris 72 */}
          {projects.map((p: ProjectData) => (
            <ProjectCard key={p.id} project={p} />
          ))}

        </div>
      </div>
    </main>
  );
}