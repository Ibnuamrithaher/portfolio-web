// components/Skills.tsx
interface SkillsProps {
  dict: {
    title: string;
    cats: {
      languages: string;
      frameworks: string;
      devops: string;
      tools: string;
    }
  };
}

export default function Skills({ dict }: SkillsProps) {
  const skills = [
    { cat: dict.cats.languages, items: ["PHP", "JavaScript", "Python", "C++", "Java"] },
    { cat: dict.cats.frameworks, items: ["Nest.js", "Express.js", "React.js", "Laravel", "Vue"] },
    { cat: dict.cats.devops, items: ["Docker", "CI/CD", "GCP", "TensorFlow", "PyTorch"] },
    { cat: dict.cats.tools, items: ["Power BI", "KNIME", "MySQL", "PostgreSQL", "MongoDB"] }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-12 tracking-tighter text-center underline decoration-indigo-500 underline-offset-8">{dict.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{skill.cat}</h3>
              <ul className="space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}