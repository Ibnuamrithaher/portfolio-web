"use client";

import { useRef } from 'react';

export interface OrgData {
  role: string;
  org: string;
  period: string;
  icon: string;
}

export default function OrgSlider({ organizations }: { organizations: OrgData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Potong/Chunk data menjadi beberapa bagian. 
  // 1 Chunk menampung 6 organisasi (3 kolom x 2 baris)
  const chunkSize = 6;
  const chunks: OrgData[][] = [];
  for (let i = 0; i < organizations.length; i += chunkSize) {
    chunks.push(organizations.slice(i, i + chunkSize));
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.firstElementChild?.clientWidth || 800;
      scrollRef.current.scrollBy({ left: -(slideWidth + 24), behavior: 'smooth' }); // +24px gap
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.firstElementChild?.clientWidth || 800;
      scrollRef.current.scrollBy({ left: slideWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {chunks.length > 1 && (
        <button 
          onClick={scrollLeft}
          className="absolute hidden md:flex md:-left-5 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 items-center justify-center hover:scale-105"
          aria-label="Geser ke kiri"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}

      {/* Kontainer Slider Pagination (Setiap Slide mengandung Grid 6 item) */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-4 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth px-1"
      >
        {chunks.map((chunk, slideIdx) => (
          <div key={slideIdx} className="w-full flex-none snap-start grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
            {chunk.map((item, idx) => (
              <div
                key={idx}
                className="group/card relative p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-2xl pt-1 opacity-70 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-300">{item.icon}</span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 group-hover/card:border-slate-200 dark:group-hover/card:border-slate-600 transition-colors">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-[15px] mb-2">{item.role}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {chunks.length > 1 && (
        <button 
          onClick={scrollRight}
          className="absolute hidden md:flex md:-right-5 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2.5 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 items-center justify-center hover:scale-105"
          aria-label="Geser ke kanan"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
    </div>
  );
}
