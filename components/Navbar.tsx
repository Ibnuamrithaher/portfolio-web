'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  lang: string;
  dict: {
    experience: string;
    projects: string;
    contact: string;
    home?: string; 
    name: string;
    degree: string;
  };
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // The menu is closed via onClick on links to avoid synchronous setState in effect

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = locale;
    } else {
      segments.push(locale);
    }
    return segments.join('/') || '/';
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href={`/${lang}`} className="flex-shrink-0 z-50">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-sm font-bold tracking-tighter text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
          >
            {dict.name} <span className="hidden sm:inline text-slate-400 dark:text-slate-500 font-normal ml-1">/ {dict.degree}</span>
          </motion.span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Link href={`/${lang}#projek`} className="hover:text-slate-900 dark:hover:text-white transition-colors">{dict.projects}</Link>
          <Link href={`/${lang}#pengalaman`} className="hover:text-slate-900 dark:hover:text-white transition-colors">{dict.experience}</Link>
          <Link href={`/${lang}#kontak`} className="hover:text-slate-900 dark:hover:text-white transition-colors">{dict.contact}</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-sm p-1 ml-2">
            <Link 
              href={redirectedPathname('id')}
              className={`px-2 py-1 text-[10px] font-bold rounded-sm transition-colors ${lang === 'id' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              ID
            </Link>
            <Link 
              href={redirectedPathname('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded-sm transition-colors ${lang === 'en' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              EN
            </Link>
          </div>
          <ThemeToggle />
          <a href="https://wa.me/62895704163165" className="text-xs font-bold px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-all">
            {lang === 'id' ? 'REKRUT SAYA' : 'HIRE ME'}
          </a>
        </div>

        {/* Mobile Toggle & Minimal Actions */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-900 dark:text-white z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5 relative">
              <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-[#0B1120] border-b border-slate-100 dark:border-slate-800 p-8 flex flex-col gap-8 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-center">
              <Link href={`/${lang}#projek`} className="text-slate-900 dark:text-white" onClick={() => setIsOpen(false)}>{dict.projects}</Link>
              <Link href={`/${lang}#pengalaman`} className="text-slate-900 dark:text-white" onClick={() => setIsOpen(false)}>{dict.experience}</Link>
              <Link href={`/${lang}#kontak`} className="text-slate-900 dark:text-white" onClick={() => setIsOpen(false)}>{dict.contact}</Link>
            </div>

            <div className="flex flex-col gap-6 pt-6 border-t border-slate-100 dark:border-slate-800 items-center">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded p-1 w-full max-w-[120px]">
                <Link 
                  href={redirectedPathname('id')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded transition-colors ${lang === 'id' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Indo
                </Link>
                <Link 
                  href={redirectedPathname('en')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded transition-colors ${lang === 'en' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Eng
                </Link>
              </div>
              
              <a href="https://wa.me/62895704163165" className="w-full text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-black rounded-lg">
                {lang === 'id' ? 'KONSULTASI GRATIS' : 'FREE CONSULTATION'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}