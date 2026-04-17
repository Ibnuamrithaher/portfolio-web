// app/[lang]/projects/[id]/page.tsx
import { projects } from '../../../../data/projects';
import { notFound } from 'next/navigation';
import ImageSlider from '../../../../components/ImageSlider';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Link from 'next/link';
import { getDictionary } from '../../../../get-dictionary';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string, lang: 'id' | 'en' }> }) {
  const { id, lang } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  const dict = await getDictionary(lang);

  if (!project) notFound();

  // Pagination Logic
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  const currentIndex = sortedProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  return (
    <>
    <Navbar lang={lang} dict={dict.navbar} />
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0B1120] transition-colors duration-300 pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href={`/${lang}`} className="inline-flex items-center text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 group">
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          {dict.projects_sec.back}
        </Link>
        
        {/* Judul Proyek */}
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">{project.title}</h1>

        {/* Metadata Row: Role & Privacy */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {project.role && (
            <span className="inline-flex px-3 py-1 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-wider border border-indigo-100 dark:border-indigo-800/50">
              {project.role[lang]}
            </span>
          )}
          
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-black uppercase tracking-wider border shadow-sm ${
            project.isPublic 
              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800' 
              : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800'
          }`}>
            <span className={`w-2 h-2 rounded-full ${project.isPublic ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            {project.isPublic ? dict.projects_sec.public : dict.projects_sec.private}
          </span>
        </div>

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
                  {project.metadata.type[lang]}
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
            <div className="text-slate-500 dark:text-slate-400 text-sm">{dict.projects_sec.title}</div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* GitHub Button */}
            <a 
              href={project.github || "#"} 
              target={project.github ? "_blank" : undefined} 
              rel={project.github ? "noopener noreferrer" : undefined} 
              className={`inline-flex items-center justify-center text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-lg transition-all ${
                !project.github ? 'opacity-40 cursor-not-allowed pointer-events-none grayscale' : 'hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>

            {/* GitLab Button */}
            <a 
              href={project.gitlab || "#"} 
              target={project.gitlab ? "_blank" : undefined} 
              rel={project.gitlab ? "noopener noreferrer" : undefined} 
              className={`inline-flex items-center justify-center text-sm font-bold bg-[#E24329]/10 text-[#E24329] px-5 py-3 rounded-lg transition-all ${
                !project.gitlab ? 'opacity-40 cursor-not-allowed pointer-events-none grayscale' : 'hover:bg-[#E24329]/20'
              }`}
            >
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0l-2.664 8.189H7.574l-2.664-8.189c-.135-.417-.724-.417-.859 0L1.387 9.452.045 13.587c-.114.352.016.74.321.961l11.634 8.45 11.633-8.45c.306-.221.436-.609.322-.961z"/></svg>
              GitLab
            </a>

            {/* Live Link Button */}
            <a 
              href={project.link || "#"} 
              target={project.link ? "_blank" : undefined} 
              rel={project.link ? "noopener noreferrer" : undefined} 
              className={`inline-flex items-center justify-center text-sm font-bold bg-indigo-600 dark:bg-indigo-500 text-white px-5 py-3 rounded-lg transition-all shadow-sm ${
                !project.link ? 'opacity-40 cursor-not-allowed pointer-events-none grayscale' : 'hover:bg-indigo-700 dark:hover:bg-indigo-600'
              }`}
            >
              <span className="truncate">{dict.projects_sec.live}</span>
              <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>

        {/* Gallery Slider */}
        {project.images && project.images.length > 0 && (
          <ImageSlider images={project.images} title={project.title} />
        )}

        {/* Konten Detail */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">{dict.projects_sec.background}</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-loose mb-10 break-words">{project.background[lang]}</p>
          
          {/* Bagian Job Desk */}
          {project.jobDesk && project.jobDesk[lang] && project.jobDesk[lang].length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">{dict.projects_sec.role}</h3>
              <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed marker:text-indigo-500 dark:marker:text-indigo-400">
                {project.jobDesk[lang].map((task: string, idx: number) => (
                  <li key={idx}>
                    {task.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Key Achievements */}
          {project.achievements && project.achievements[lang] && project.achievements[lang].length > 0 && (
            <div className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                {dict.projects_sec.achievements}
              </h3>
              <ul className="space-y-4">
                {project.achievements[lang].map((achievement: string, idx: number) => (
                  <li key={idx} className="flex text-indigo-800 dark:text-indigo-200 leading-relaxed font-medium">
                    <span className="mr-3 font-bold text-indigo-500 dark:text-indigo-400 text-lg">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">{dict.projects_sec.stack}</h3>
          <div className="flex flex-wrap gap-2 mb-20">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-sm text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Navigation (Pagination) */}
        <div className="mt-8 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between gap-6">
          {prevProject ? (
            <Link 
              href={`/${lang}/projects/${prevProject.id}`} 
              className="flex-1 group flex flex-col p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/80"
            >
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center group-hover:text-indigo-500 transition-colors">
                <svg className="w-3 h-3 mr-1.5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
                {dict.projects_sec.prev_project}
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1 hidden sm:block"></div>
          )}

          {nextProject && (
            <Link 
              href={`/${lang}/projects/${nextProject.id}`} 
              className="flex-1 group flex flex-col p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all text-right hover:bg-slate-50 dark:hover:bg-slate-800/80"
            >
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-end group-hover:text-indigo-500 transition-colors">
                {dict.projects_sec.next_project}
                <svg className="w-3 h-3 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
    <Footer dict={dict.footer} />
    </>
  );
}