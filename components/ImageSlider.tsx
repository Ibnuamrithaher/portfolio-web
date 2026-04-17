"use client";

import { useRef } from 'react';
import Image from 'next/image';

export default function ImageSlider({ images, title }: { images: string[], title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const imgWidth = scrollRef.current.firstElementChild?.clientWidth || 500;
      scrollRef.current.scrollBy({ left: -(imgWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const imgWidth = scrollRef.current.firstElementChild?.clientWidth || 500;
      scrollRef.current.scrollBy({ left: imgWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group mb-16">
      {/* Left Arrow */}
      <button 
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center hover:scale-105"
        aria-label="Geser ke kiri"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
      </button>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth"
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-none snap-center relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-sm flex items-center justify-center aspect-[16/9] md:aspect-[16/8]">
            <Image 
              src={src} 
              alt={`${title} screenshot ${index + 1}`}
              width={1200}
              height={600}
              className="object-contain w-full h-full transition-transform duration-500 hover:scale-[1.02] [image-rendering:high-quality]"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-slate-800/90 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center hover:scale-105"
        aria-label="Geser ke kanan"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
      </button>
      
      {/* Label Scroll/Swipe untuk mobile */}
      <div className="flex md:hidden justify-center mt-3 text-slate-400 dark:text-slate-500 text-xs font-bold tracking-widest uppercase">
         <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
         Geser untuk lebih lanjut
      </div>
    </div>
  );
}
