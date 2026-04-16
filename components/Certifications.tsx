'use client';

import { useRef } from 'react';
import AnimateIn from './AnimateIn';

interface CertData {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  link: string;
}

function CertSlider({ certifications }: { certifications: CertData[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Chunk data: 3 items per view on desktop
  const chunkSize = 3;
  const chunks: CertData[][] = [];
  for (let i = 0; i < certifications.length; i += chunkSize) {
    chunks.push(certifications.slice(i, i + chunkSize));
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.firstElementChild?.clientWidth || 800;
      scrollRef.current.scrollBy({ left: -(slideWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.firstElementChild?.clientWidth || 800;
      scrollRef.current.scrollBy({ left: slideWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/slider mb-12 last:mb-0">
      {chunks.length > 1 && (
        <button 
          onClick={scrollLeft}
          className="absolute hidden md:flex md:-left-5 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2.5 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 items-center justify-center hover:scale-105"
          aria-label="Geser ke kiri"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-4 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] scroll-smooth px-1"
      >
        {chunks.map((chunk, slideIdx) => (
          <div key={slideIdx} className="w-full flex-none snap-start grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
            {chunk.map((cert, idx) => (
              <div 
                key={idx} 
                className="group relative p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{cert.icon}</span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{cert.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{cert.issuer}</p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                  {cert.link !== "#" ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline hover:text-emerald-700 transition-colors">
                      Tampilkan Bukti / Kredensial
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-xs font-bold text-slate-400 dark:text-slate-600 cursor-not-allowed">
                      Berkas Disertakan Terpisah
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {chunks.length > 1 && (
        <button 
          onClick={scrollRight}
          className="absolute hidden md:flex md:-right-5 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 rounded-full p-2.5 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 items-center justify-center hover:scale-105"
          aria-label="Geser ke kanan"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}
    </div>
  );
}

export default function Certifications() {
  const categories = [
    {
      name: "💻 Kompetensi & Teknologi Informasi",
      certs: [
        { title: "Cloud Practitioner Essentials (AWS)", issuer: "AWS / Dicoding", year: "Kompetensi", icon: "☁️", link: "/sertifikat/Sertivikat Kelulusan Kelas Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).pdf" },
        { title: "Sertifikat Web Server Hardening", issuer: "DTS Kominfo / Lembaga Pelatihan", year: "Kompetensi", icon: "🛡️", link: "/sertifikat/Ibnu Amri T_Sertifikat Web Server Hardening (1).pdf" },
        { title: "Membuat Aplikasi Android Pemula", issuer: "Dicoding Indonesia", year: "Kelulusan", icon: "📱", link: "/sertifikat/Sertivikat Belajar Membuat Aplikasi Android Untuk Pemula Dari Dicoding.pdf" },
        { title: "Front-End Web Pemula (Landing Page)", issuer: "Dicoding Indonesia", year: "Kelulusan", icon: "🖥️", link: "/sertifikat/CERTIFICATE_LANDING_PAGE_ARXR82TJ2MZY.jpeg (1772×928).jpg" },
        { title: "Digital Marketing", issuer: "Lembaga Pelatihan", year: "Pelatihan", icon: "📈", link: "/sertifikat/Sertivikat Digital Marketing.pdf" },
        { title: "Programming PHP", issuer: "Progate / Sololearn", year: "Kelulusan", icon: "🐘", link: "/sertifikat/PHP.pdf" },
        { title: "Programming JavaScript", issuer: "Progate / Sololearn", year: "Kelulusan", icon: "🟨", link: "/sertifikat/JavaScript.pdf" },
        { title: "HTML & CSS", issuer: "Progate / Sololearn", year: "Kelulusan", icon: "🌐", link: "/sertifikat/HTML & CSS.pdf" },
        { title: "Command Line Fundamentals", issuer: "Platform Course", year: "Kelulusan", icon: "⌨️", link: "/sertifikat/Comand Line.pdf" },
      ]
    },
    {
      name: "🏛️ Akademik & Ujian Profesional",
      certs: [
        { title: "TOEFL ITP", issuer: "Pusat Bahasa", year: "Sertifikasi", icon: "🌎", link: "/sertifikat/TOFEL ITP.pdf" },
        { title: "TPA BAPPENAS", issuer: "Bappenas RI", year: "Sertifikasi", icon: "🧠", link: "/sertifikat/TPA BAPPENAS.pdf" },
        { title: "Asisten Praktikum", issuer: "Universitas Mulawarman", year: "Akademik", icon: "👨‍🏫", link: "/sertifikat/Asisten Praktikum.jpg" },
        { title: "Penghargaan Fakultas Teknik", issuer: "Universitas Mulawarman", year: "Penghargaan", icon: "🥇", link: "/sertifikat/sertiv_penghargaan_teknik.pdf" },
      ]
    },
    {
      name: "🎯 Magang, Kejuaraan, & Organisasi",
      certs: [
        { title: "Magang MSIB (Back End Developer)", issuer: "PT Telkomsel", year: "Magang", icon: "🏢", link: "/sertifikat/Magang Kampus Merdeka Back End Developer PT Telkomsel.pdf" },
        { title: "Sertifikat GEMASTIK", issuer: "Puspresnas / Kemdikbud", year: "Nasional", icon: "🏆", link: "/sertifikat/E-Sertifikat Gemastik-Ibnu Amri T.pdf" },
        { title: "Staff Biro Riset & Pengembangan", issuer: "BEM KM Unmul", year: "Organisasi", icon: "📋", link: "/sertifikat/Sertivikat Staff Biro Riset dan Pengembangan BEM KM Unmul.pdf" },
        { title: "Pengurus KAMMI", issuer: "KAMMI", year: "Organisasi", icon: "🤝", link: "/sertifikat/KAMII.png" },
        { title: "Peserta Fighter Camp UKM PSHT", issuer: "UKM PSHT Unmul", year: "Bela Diri", icon: "🥋", link: "/sertifikat/Peserta Fighter Camph UKM PSHT Unmul.pdf" },
        { title: "Seminar: Melatih Mental Juara", issuer: "Kepanitiaan Daring", year: "Webinar", icon: "🎙️", link: "/sertifikat/Partisipasi Seminar Daring dengan tema Melatih Mental Juara Di Masa Pandemi.jpeg" },
      ]
    }
  ];

  return (
    <section id="sertifikasi" className="py-24 px-6 bg-[#FAFAFA] dark:bg-[#0B1120] border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimateIn direction="up">
          <h2 className="text-3xl font-black text-center text-slate-900 dark:text-white mb-16 tracking-tighter underline decoration-emerald-500 underline-offset-8">
            Licenses & Certifications
          </h2>
        </AnimateIn>

        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="mb-20 last:mb-0">
            <AnimateIn direction="up">
              <h3 className="text-lg font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8 px-1">
                {cat.name}
              </h3>
            </AnimateIn>
            <CertSlider certifications={cat.certs} />
          </div>
        ))}
      </div>
    </section>
  );
}

