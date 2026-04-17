"use client";

import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from '../data/projects';

interface ProjectSliderProps {
  projects: ProjectData[];
  lang: 'id' | 'en';
  dict: {
    public: string;
    private: string;
    swipe: string;
    title: string;
    desc: string;
    back: string;
    background: string;
    role: string;
    achievements: string;
    stack: string;
    live: string;
  };
}

export default function ProjectSlider({ projects, lang, dict }: ProjectSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' }); // 24 is gap-6
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Tombol Kiri */}
      <button 
        onClick={scrollLeft}
        className="absolute hidden md:flex md:-left-5 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 items-center justify-center hover:scale-105"
        aria-label={lang === 'id' ? "Geser ke kiri" : "Scroll left"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Kontainer Slider */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-4 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth px-4 xl:px-0"
      >
        {projects.map((p, index) => (
          <div key={p.id} className="w-[85vw] md:w-[350px] lg:w-[360px] flex-none snap-start flex">
            <ProjectCard project={p} index={index} lang={lang} dict={dict} />
          </div>
        ))}
      </div>

      {/* Tombol Kanan */}
      <button 
        onClick={scrollRight}
        className="absolute hidden md:flex md:-right-5 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 items-center justify-center hover:scale-105"
        aria-label={lang === 'id' ? "Geser ke kanan" : "Scroll right"}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
