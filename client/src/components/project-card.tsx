import { motion } from "framer-motion";
import { Github, ExternalLink, Code, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative rounded-xl overflow-hidden card-shadow hover-lift bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Quick action buttons on hover */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-white/90 text-navy hover:bg-teal hover:text-white"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-white/90 text-navy hover:bg-teal hover:text-white"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-navy">{project.title}</h3>
          <Code className="text-teal h-5 w-5 flex-shrink-0" />
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <Badge 
              key={idx} 
              variant="outline" 
              className="bg-teal/5 text-xs border-teal/20 text-teal font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* View Details Link */}
        <div className="flex justify-end mt-2">
          <Button 
            variant="link" 
            className="p-0 h-auto text-teal hover:text-purple transition-colors gap-1 font-medium text-sm group"
            asChild
          >
            <a href={project.liveUrl || project.githubUrl || '#'} target="_blank" rel="noopener noreferrer">
              View Details 
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Accent Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </motion.div>
  );
}
