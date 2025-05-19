import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="project-card group relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="project-overlay absolute inset-0 bg-navy bg-opacity-80 opacity-0 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold text-teal mb-2">{project.title}</h3>
          <p className="text-light-gray text-sm">{project.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="bg-teal bg-opacity-20 text-teal text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-teal hover:text-white transition-colors duration-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
