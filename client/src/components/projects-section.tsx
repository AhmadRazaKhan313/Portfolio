import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/constants";
import { Project } from "@/lib/types";
import { BadgeCheck, Code, Filter } from "lucide-react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "nextjs", label: "Next.js" },
    { id: "wordpress", label: "WordPress" }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));
  
  return (
    <section id="projects" className="py-24 px-6 bg-light-gray relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-navy">
            <span className="text-gradient font-mono">04.</span> Featured Projects
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-teal via-purple to-transparent opacity-30"></div>
        </motion.div>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-wrap justify-center items-center gap-3 mb-10">
            <div className="flex items-center gap-2 text-navy px-4 mr-2">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter:</span>
            </div>
            
            {filterButtons.map((button, index) => (
              <motion.div
                key={button.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <Button
                  variant={activeFilter === button.id ? "default" : "outline"}
                  className={
                    activeFilter === button.id 
                      ? "bg-gradient-accent text-white border-none shadow-md" 
                      : "bg-white text-navy border hover:border-teal hover:text-teal"
                  }
                  onClick={() => setActiveFilter(button.id)}
                >
                  {activeFilter === button.id && (
                    <BadgeCheck className="w-4 h-4 mr-1" />
                  )}
                  {button.id === "all" ? (
                    <><Code className="w-4 h-4 mr-1" /> {button.label}</>
                  ) : (
                    button.label
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project: Project, index: number) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-navy"
              >
                <p className="text-xl mb-4">No projects found with this filter.</p>
                <Button
                  variant="outline"
                  onClick={() => setActiveFilter("all")}
                  className="border-teal text-teal hover:bg-teal hover:bg-opacity-10"
                >
                  Show all projects
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
