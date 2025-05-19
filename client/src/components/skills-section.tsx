import { motion } from "framer-motion";
import { LayoutIcon, PaletteIcon, DatabaseIcon, SmartphoneIcon, FileTextIcon, Drill } from "lucide-react";
import { skillsData } from "@/lib/constants";

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

const SkillGroup = ({ title, icon, skills, delay }: SkillGroupProps) => (
  <motion.div 
    className="bg-white bg-opacity-5 p-6 rounded-lg backdrop-blur-sm border border-teal border-opacity-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center mb-6">
      {icon}
      <h3 className="text-xl font-semibold text-light-gray">{title}</h3>
    </div>
    
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.div 
          key={index}
          className="skill-pill bg-light-gray bg-opacity-10 px-4 py-2 rounded-full text-teal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
          whileHover={{ y: -5 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-navy">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-light-gray"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal font-mono">03.</span> My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillGroup
            title="Frontend"
            icon={<LayoutIcon className="text-teal text-2xl mr-3" />}
            skills={skillsData.frontend}
            delay={0.2}
          />
          
          <SkillGroup
            title="UI Libraries"
            icon={<PaletteIcon className="text-teal text-2xl mr-3" />}
            skills={skillsData.uiLibraries}
            delay={0.3}
          />
          
          <SkillGroup
            title="State Management"
            icon={<DatabaseIcon className="text-teal text-2xl mr-3" />}
            skills={skillsData.stateManagement}
            delay={0.4}
          />
          
          <SkillGroup
            title="Mobile Development"
            icon={<SmartphoneIcon className="text-teal text-2xl mr-3" />}
            skills={skillsData.mobileDevelopment}
            delay={0.5}
          />
          
          <SkillGroup
            title="CMS"
            icon={<FileTextIcon className="text-teal text-2xl mr-3" />}
            skills={skillsData.cms}
            delay={0.6}
          />
          
          <SkillGroup
            title="Tools & Others"
            icon={<Drill className="text-teal text-2xl mr-3" />}
            skills={skillsData.tools}
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
}
