// components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { ProjectData } from '../data/projects';
import Link from 'next/link';

export default function ProjectCard({ project, index, lang, dict }: { 
  project: ProjectData, 
  index: number, 
  lang: 'id' | 'en', 
  dict: { 
    public: string; 
    private: string;
    title: string;
    desc: string;
    swipe: string;
    back: string;
    background: string;
    role: string;
    achievements: string;
    stack: string;
    live: string;
  } 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 h-full w-full"
    >
      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Project Title */}
        <div className="h-14 mb-3 w-full">
          <h3 className="text-xl leading-7 font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-words line-clamp-2" title={project.title}>
            {project.title}
          </h3>
        </div>

        {/* Metadata Row: Role & Privacy */}
        <div className="flex flex-col items-start gap-2 mb-4">
          {project.role && (
            <span className="inline-flex px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[9px] font-black uppercase tracking-wider border border-indigo-100 dark:border-indigo-800/50">
              {project.role[lang]}
            </span>
          )}
          
          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${
            project.isPublic 
              ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/30' 
              : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/30'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.isPublic ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            {project.isPublic ? dict.public : dict.private}
          </span>
        </div>
        
        {/* Static description container */}
        <div className="h-[63px] mb-8 w-full overflow-hidden">
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal line-clamp-3 break-words">
            {project.background[lang]}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase">
              #{tech}
            </span>
          ))}
        </div>

        <Link 
          href={`/${lang}/projects/${project.id}`} 
          className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-xs hover:underline"
        >
          {lang === 'id' ? 'DETAIL' : 'DETAILS'}
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}