// components/Timeline.tsx
import { experiences } from '../data/profile';
import OrgSlider from './OrgSlider';
import AnimateIn from './AnimateIn';

interface TimelineProps {
  lang: 'id' | 'en';
  dict: {
    title: string;
    tenure: string;
  };
}

export default function Timeline({ lang, dict }: TimelineProps) {
  return (
    <section id="pengalaman" className="py-24 px-6 bg-[#FAFAFA] dark:bg-[#0B1120] transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimateIn direction="up">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-16">{dict.title}</h2>
        </AnimateIn>
        <div className="ml-1">
          {experiences.map((exp, idx) => (
            <AnimateIn key={idx} direction="up" delay={idx * 0.1}>
              <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800 pb-16 last:pb-0 last:border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300">
                <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-slate-900 dark:bg-slate-100 rounded-full ring-4 ring-[#FAFAFA] dark:ring-[#0B1120]"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {exp.role[lang]} <span className="text-slate-400 font-medium whitespace-nowrap">@ {exp.company}</span>
                  </h3>
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-2 md:mt-0 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3 mt-4">
                  {exp.desc[lang] && (
                    <li className="text-[14px] text-slate-500 dark:text-slate-400 flex items-start group">
                      <span className="mr-3 text-slate-300 dark:text-slate-600 mt-1.5 group-hover:text-slate-400 dark:group-hover:text-slate-500 transition-colors">
                        <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                      </span>
                      <span className="leading-relaxed flex-1">{exp.desc[lang]}</span>
                    </li>
                  )}
                  {exp.bullets[lang] && exp.bullets[lang].length > 0 && exp.bullets[lang].map((bullet, bIdx) => (
                    <li key={bIdx} className="text-[14px] text-slate-500 dark:text-slate-400 flex items-start group">
                      <span className="mr-3 text-slate-300 dark:text-slate-600 mt-1.5 group-hover:text-slate-400 dark:group-hover:text-slate-500 transition-colors">
                        <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                      </span>
                      <span className="leading-relaxed flex-1">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Ringkasan Organisasi Singkat */}
        <div className="mt-24">
          <AnimateIn direction="up">
            <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-4">
              {dict.tenure}
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </h3>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.2}>
            <OrgSlider organizations={[
              {
                role: lang === 'id' ? "Staff Divisi Ekonomi Kreatif" : "Creative Economy Division Staff",
                org: "Himpunan Mahasiswa Pascasarjana UGM",
                period: "2024-2025",
                icon: "🎓"
              },
              {
                role: lang === 'id' ? "Staff Divisi Humas" : "Public Relations Staff",
                org: "HMP Muslim UGM",
                period: "2024-2025",
                icon: "📢"
              },
              {
                role: lang === 'id' ? "Sekretaris Departemen Internal" : "Internal Department Secretary",
                org: "BEM KM Universitas Mulawarman",
                period: "2020-2021",
                icon: "✍️"
              },
              {
                role: lang === 'id' ? "Staf Hubungan Masyarakat" : "Public Relations Staff",
                org: "KAMMI",
                period: "2020-2021",
                icon: "🤝"
              },
              {
                role: lang === 'id' ? "Sekretaris Divisi" : "Division Secretary",
                org: "UKM PSHT Unmul",
                period: "2020-2021",
                icon: "🥋"
              },
              {
                role: lang === 'id' ? "Ketua Komisi Keuangan" : "Finance Commission Chairman",
                org: "DPM Unmul (Student Representative Council)",
                period: "2019",
                icon: "💼"
              },
              {
                role: lang === 'id' ? "Staf Kerohanian" : "Religious Affairs Staff",
                org: "Association Study of Computer Science",
                period: "2018-2019",
                icon: "💻"
              }
            ]} />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}