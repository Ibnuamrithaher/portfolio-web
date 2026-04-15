// components/ProjectCard.tsx
import { ProjectData } from '@/data/projects';

// Kita beri tahu TypeScript bahwa komponen ini menerima props 'project' dengan tipe ProjectData
export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      {project.role && <p className="text-sm text-blue-600 font-semibold mb-3">{project.role}</p>}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.background}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}