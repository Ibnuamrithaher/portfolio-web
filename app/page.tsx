import { projects, ProjectData } from '../data/projects';
import { research } from '../data/profile';
import ProjectCard from '../components/ProjectCard';
import ProjectSlider from '../components/ProjectSlider';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Timeline from '../components/Timeline';
import AnimateIn from '../components/AnimateIn';

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] dark:bg-[#0B1120] min-h-screen pt-16 transition-colors duration-300">
      <Navbar />

      <AnimateIn direction="up"><Hero /></AnimateIn>
      <AnimateIn direction="up"><Skills /></AnimateIn>
      <Certifications /> {/* Sertifikasi (sudah mengandung AnimateIn bawaan khusus komponen ini) */}
      <Timeline /> {/* Pengalaman kerja & organisasi  */}

      {/* Section: Core Expertise (Bento Grid Style) */}
      <section id="expertise" className="py-24 px-6 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
        <AnimateIn direction="up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.3em] mb-12 text-center">Kompetensi Inti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Project Management</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Implementasi metodologi Agile/Scrum untuk mengelola SDLC secara end-to-end, memastikan efisiensi tim dan ketepatan rilis produk digital.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fullstack Architecture</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Membangun ekosistem web yang andal dengan Nest.js, PostgreSQL, dan React. Fokus pada skalabilitas backend dan integrasi sistem yang aman.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Integration</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Pengalaman dalam tuning model Machine Learning dan integrasi AI untuk otomatisasi proses bisnis serta optimasi keamanan sistem.</p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Section: Projects */}
      <section id="projek" className="py-24 px-6 overflow-hidden">
        <AnimateIn direction="up">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Proyek Pilihan.</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Daftar eksekusi teknis dan manajerial pada platform skala besar.</p>
              </div>
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                <span className="text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full flex items-center gap-2">
                  Geser 
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </div>
            
            <ProjectSlider projects={[...projects].sort((a, b) => b.id - a.id)} />
          </div>
        </AnimateIn>
      </section>

      {/* Section: Call to Action (Kontak) */}
      <section id="kontak" className="py-32 px-6 bg-slate-900 dark:bg-[#060A13] text-white text-center overflow-hidden transition-colors duration-300">
        <AnimateIn direction="up">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-white">Siap berkolaborasi untuk proyek strategis Anda berikutnya?</h2>
            <p className="text-slate-400 dark:text-slate-500 mb-10 text-lg">Saya saat ini tersedia untuk peran manajerial atau pengembangan senior di lingkungan yang dinamis.</p>
            <a href="mailto:ibnuamri100501@gmail.com" className="inline-block px-10 py-4 bg-white dark:bg-indigo-600 text-slate-900 dark:text-white font-bold rounded-sm transition-transform hover:scale-105">
              HUBUNGI SAYA SEKARANG
            </a>
          </div>
        </AnimateIn>
      </section>

      <section id="publikasi" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest mb-12 text-center">Scientific Publications</h2>
            <div className="space-y-4">
              {research.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link !== "#" ? item.link : undefined}
                  target={item.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group block p-6 border border-slate-100 dark:border-slate-800 rounded-xl bg-[#FAFAFA] dark:bg-slate-800/50 md:bg-white md:dark:bg-slate-900 transition-all duration-300 ${item.link !== "#" ? 'hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800 cursor-pointer' : 'cursor-default opacity-80'}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-[16px] font-bold text-slate-900 dark:text-white leading-relaxed group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-[10px] font-black bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-400 px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-100 dark:border-indigo-800">
                          {item.publisher}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-xl font-black text-slate-200 dark:text-slate-700 group-hover:text-slate-300 dark:group-hover:text-slate-600 transition-colors">
                        {item.year}
                      </div>
                      {item.link !== "#" && (
                        <span className="text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      <Footer />
    </main>
  );
}