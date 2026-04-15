export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div className="aspect-video w-full bg-slate-100 p-4 flex items-center justify-center">
         {/* Placeholder jika gambar belum ada */}
         <span className="text-slate-400 font-medium">{project.title} Preview</span>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
        <p className="mb-4 text-sm text-slate-600 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}