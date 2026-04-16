'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans overflow-hidden transition-colors duration-300">

      {/* Premium Aurora & Noise Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* SVG Noise Texture for Premium Grain */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Animated Glowing Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Label Status yang Rapi */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-wider uppercase">
              Open for PM & Engineering Roles
            </span>
          </div>
        </motion.div>

        {/* Nama - Kontras Tinggi */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
            Ibnu Amri Thaher.
          </h1>
        </motion.div>

        {/* Jabatan - Bersih dan Berwibawa */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-400 mb-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span>Project Manager</span>
            <span className="hidden md:inline-block text-slate-300 dark:text-slate-700">|</span>
            <span>Full Stack Engineer</span>
            <span className="text-sm md:text-lg text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">S.Kom., M.Cs.</span>
          </h2>
        </motion.div>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Membawa produk digital dari gagasan hingga peluncuran.
          Saya menggabungkan rekayasa perangkat lunak dengan ketajaman manajerial
          melalui kerangka kerja <strong className="text-slate-800 dark:text-slate-200 font-bold">Agile & Scrum</strong> untuk tim yang terukur dan efisien.
        </motion.p>

        {/* Tombol - Solid, Elegan, Minimalis */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/CV_Ibnu_Amri_Thaher.pdf"
            className="px-8 py-3.5 w-full sm:w-auto rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1"
          >
            Lihat Portofolio
          </a>
          <a
            href="/CV_Ibnu_Amri_Thaher.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 w-full sm:w-auto rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-bold text-sm tracking-wide transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Unduh CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}