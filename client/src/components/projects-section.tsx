import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/constants";
import { Project } from "@/lib/types";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filterButtons = [
    { id: "all", label: "All" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "wordpress", label: "WordPress" }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));
  
  return (
    <section id="projects" className="py-24 px-6 bg-light-gray">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-coral font-mono">04.</span> My Projects
        </motion.h2>
        
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {filterButtons.map((button) => (
              <Button
                key={button.id}
                variant={activeFilter === button.id ? "default" : "outline"}
                className={
                  activeFilter === button.id 
                    ? "bg-navy text-light-gray" 
                    : "bg-white text-navy border border-navy hover:bg-gray-100"
                }
                onClick={() => setActiveFilter(button.id)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
