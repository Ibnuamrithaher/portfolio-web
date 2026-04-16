// app/projects/[id]/page.tsx
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ImageSlider from '@/components/ImageSlider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) notFound();

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0B1120] transition-colors duration-300 pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group">
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          KEMBALI KE BERANDA
        </Link>
        
        {/* Judul dan Header Proyek */}
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6">{project.title}</h1>

        {/* Metadata & Links Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
          {project.metadata ? (
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.metadata.year && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  {project.metadata.year}
                </div>
              )}
              {project.metadata.type && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  {project.metadata.type}
                </div>
              )}
              {project.metadata.client && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  {project.metadata.client}
                </div>
              )}
            </div>
          ) : (
            <div className="text-slate-500 dark:text-slate-400 text-sm">Informasi Proyek</div>
          )}

          <div className="flex items-center gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Source Code
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold bg-indigo-600 dark:bg-indigo-500 text-white px-5 py-2.5 rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-sm">
                Lihat Sistem Live
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            )}
          </div>
        </div>

        {/* Gallery Slider: Menampilkan Gambar Screenshot  */}
        {project.images && project.images.length > 0 && (
          <ImageSlider images={project.images} title={project.title} />
        )}

        {/* Konten Detail */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Project Background</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-loose mb-10 break-words">{project.background}</p>
          
          {/* Bagian Job Desk (ditampilkan hanya jika datanya ada) */}
          {project.jobDesk && project.jobDesk.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Role & Responsibilities</h3>
              <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed marker:text-indigo-500 dark:marker:text-indigo-400">
                {project.jobDesk.map((task, idx) => (
                  <li key={idx}>
                    {task.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Key Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                Key Achievements & Impact
              </h3>
              <ul className="space-y-4">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex text-indigo-800 dark:text-indigo-200 leading-relaxed font-medium">
                    <span className="mr-3 font-bold text-indigo-500 dark:text-indigo-400 text-lg">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-sm text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}