import { motion } from "framer-motion";
import { ArrowRightIcon, Briefcase, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      title: "Web Developer",
      company: "Enigmatix",
      period: "2020 - Present",
      responsibilities: [
        "Developed responsive and accessible web applications using React.js and Next.js, focusing on performance optimization and clean code architecture.",
        "Collaborated with UI/UX designers to implement intricate designs using modern CSS frameworks (Tailwind, Bootstrap) and advanced SCSS techniques.",
        "Built and maintained e-commerce solutions using WooCommerce and custom WordPress themes, resulting in a 40% increase in client conversion rates.",
        "Implemented state management solutions with Redux and Context API for complex web applications handling large amounts of data."
      ],
      achievements: [
        "Reduced load time by 60% through code optimization",
        "Improved conversion rates by 40%",
        "Lead developer on 5 major client projects"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "2019 - 2020",
      responsibilities: [
        "Designed and developed responsive websites for small businesses and individual clients.",
        "Created custom WordPress themes and plugins to meet specific client requirements."
      ],
      achievements: [
        "Completed 12+ projects for diverse clients",
        "Maintained 100% client satisfaction rate"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-light-gray relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-navy">
            <span className="text-gradient font-mono">02.</span> Work Experience
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-teal via-purple to-transparent opacity-30"></div>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-teal via-purple to-teal opacity-30 md:left-1/2 md:transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`relative mb-16 last:mb-0 md:grid md:grid-cols-2 md:gap-8 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-10 h-[20px] w-[20px] rounded-full bg-teal border-4 border-white shadow-md z-10 md:left-1/2 md:transform md:-translate-x-1/2"></div>
              
              {/* Date badge for mobile */}
              <div className="md:hidden ml-10 mb-4">
                <Badge className="bg-gradient-primary text-white font-mono">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {exp.period}
                </Badge>
              </div>
              
              {/* Content */}
              <div className={`md:contents`}>
                {/* Date for desktop - left side */}
                <div className={`hidden md:block ${index % 2 === 0 ? 'text-right' : 'md:order-2'}`}>
                  <Badge className="bg-gradient-primary text-white font-mono">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {exp.period}
                  </Badge>
                </div>
                
                <Card className={`ml-10 md:ml-0 card-shadow hover-lift ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="text-teal" />
                      <h3 className="text-xl font-bold text-navy">{exp.title}</h3>
                    </div>
                    
                    <h4 className="text-lg font-medium text-purple mb-4">{exp.company}</h4>
                    
                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="text-teal h-4 w-4" />
                          <h5 className="text-sm font-bold text-navy">Key Achievements</h5>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <Badge key={idx} variant="outline" className="bg-teal bg-opacity-5 text-teal">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Responsibilities */}
                    <ul className="space-y-3 text-gray-600">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + (idx * 0.1) }}
                        >
                          <ArrowRightIcon className="h-5 w-5 text-teal mt-1 mr-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
