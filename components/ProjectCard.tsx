// components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { ProjectData } from '../data/projects';
import Link from 'next/link'; // Import Link dari Next.js

export default function ProjectCard({ project, index }: { project: ProjectData, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 shadow-sm transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 h-full w-full"
    >
      <div className="relative z-10 flex flex-col w-full">
        {/* Kontainer statis untuk Judul (Max 2 baris = 56px / h-14) */}
        <div className="h-14 mb-3 w-full">
          <h3 className="text-xl leading-7 font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-words line-clamp-2" title={project.title}>
            {project.title}
          </h3>
        </div>
        
        {/* Kontainer statis untuk Role/Badge */}
        <div className="h-6 mb-5 w-full">
          {project.role && (
            <span className="inline-block px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">
              {project.role}
            </span>
          )}
        </div>
        
        {/* Kontainer statis untuk Deskripsi (Max 3 baris = 63px) mengubah ke leading-normal */}
        <div className="h-[63px] mb-8 w-full overflow-hidden">
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal line-clamp-3 break-words">
            {project.background}
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

        {/* Gunakan Link di sini agar bisa diklik */}
        <Link 
          href={`/projects/${project.id}`} 
          className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-xs hover:underline"
        >
          DETAIL 
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}