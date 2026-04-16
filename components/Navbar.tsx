'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-sm font-bold tracking-tighter text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
          >
            IBNU AMRI THAHER <span className="text-slate-400 dark:text-slate-500 font-normal">/ S.Kom., M.Cs.</span>
          </motion.span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Link href="/#projek" className="hover:text-slate-900 dark:hover:text-white transition-colors">Proyek</Link>
          <Link href="/#pengalaman" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pengalaman</Link>
          <Link href="/#kontak" className="hover:text-slate-900 dark:hover:text-white transition-colors">Kontak</Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="https://wa.me/62895704163165" className="text-xs font-bold px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-sm hover:bg-slate-800 dark:hover:bg-slate-200 transition-all">
            REKRUT SAYA
          </a>
        </div>
      </div>
    </nav>
  );
}