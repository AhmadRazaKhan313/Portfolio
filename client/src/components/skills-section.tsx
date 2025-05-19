import { motion } from "framer-motion";
import { LayoutIcon, PaletteIcon, DatabaseIcon, SmartphoneIcon, FileTextIcon, Wrench, ChevronRight } from "lucide-react";
import { skillsData } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
  colorClass: string;
}

const SkillGroup = ({ title, icon, skills, delay, colorClass }: SkillGroupProps) => (
  <motion.div 
    className="relative hover-lift card-shadow"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {/* Top accent color */}
    <div className={`absolute top-0 left-0 right-0 h-1 ${colorClass} rounded-t-lg`}></div>
    
    <Card className="border-none glass-effect overflow-hidden h-full">
      <CardContent className="p-6 relative">
        {/* Blurred background circle */}
        <div className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full ${colorClass} opacity-10 blur-xl`}></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-10 h-10 rounded-md flex items-center justify-center ${colorClass} bg-opacity-20`}>
              {icon}
            </div>
            <h3 className="text-xl font-bold text-light-gray">{title}</h3>
          </div>
          
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <ChevronRight className={`h-4 w-4 ${colorClass === 'bg-teal' ? 'text-teal' : 'text-purple'} mr-2`} />
                    <span className="text-light-gray text-sm font-medium">{skill}</span>
                  </div>
                  <span className={`text-xs font-mono ${colorClass === 'bg-teal' ? 'text-teal' : 'text-purple'}`}>
                    {85 + (index % 3) * 5}%
                  </span>
                </div>
                <Progress 
                  value={85 + (index % 3) * 5} 
                  className={`h-1.5 bg-gray-700 ${colorClass === 'bg-teal' ? 'indicator-teal' : 'indicator-purple'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-navy relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-light-gray">
            <span className="text-gradient font-mono">03.</span> Technical Skills
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-teal via-purple to-transparent opacity-30"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillGroup
            title="Frontend Development"
            icon={<LayoutIcon className="text-teal text-lg" />}
            skills={skillsData.frontend}
            delay={0.2}
            colorClass="bg-teal"
          />
          
          <SkillGroup
            title="UI Libraries"
            icon={<PaletteIcon className="text-purple text-lg" />}
            skills={skillsData.uiLibraries}
            delay={0.3}
            colorClass="bg-purple"
          />
          
          <SkillGroup
            title="State Management"
            icon={<DatabaseIcon className="text-teal text-lg" />}
            skills={skillsData.stateManagement}
            delay={0.4}
            colorClass="bg-teal"
          />
          
          <SkillGroup
            title="Mobile Development"
            icon={<SmartphoneIcon className="text-purple text-lg" />}
            skills={skillsData.mobileDevelopment}
            delay={0.5}
            colorClass="bg-purple"
          />
          
          <SkillGroup
            title="CMS & E-commerce"
            icon={<FileTextIcon className="text-teal text-lg" />}
            skills={skillsData.cms}
            delay={0.6}
            colorClass="bg-teal"
          />
          
          <SkillGroup
            title="Tools & Frameworks"
            icon={<Wrench className="text-purple text-lg" />}
            skills={skillsData.tools}
            delay={0.7}
            colorClass="bg-purple"
          />
        </div>
      </div>
    </section>
  );
}
