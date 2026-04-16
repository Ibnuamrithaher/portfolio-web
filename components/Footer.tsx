export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold text-slate-900 dark:text-white">Ibnu Amri Thaher, S.Kom., M.Cs.</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Project Manager & Full Stack Engineer</p>
        </div>
        
        <div className="flex gap-6 text-xs font-medium text-slate-400 dark:text-slate-500">
          <a href="https://github.com/ibnuamrithaher" className="hover:text-slate-900 dark:hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">LINKEDIN</a>
          <a href="mailto:ibnuamrithaher100501@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">EMAIL</a>
        </div>

        <p className="text-[10px] text-slate-300 dark:text-slate-600 uppercase tracking-widest">
          © 2026 Developed with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}