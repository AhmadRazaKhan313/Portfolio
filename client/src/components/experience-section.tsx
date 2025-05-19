import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
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
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "2019 - 2020",
      responsibilities: [
        "Designed and developed responsive websites for small businesses and individual clients.",
        "Created custom WordPress themes and plugins to meet specific client requirements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-light-gray">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-coral font-mono">02.</span> Where I've Worked
        </motion.h2>
        
        <div className="relative pl-10 border-l-2 border-gray-300 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item relative mb-16 ml-6 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-navy">{exp.title}</h3>
                    <span className="text-coral font-mono text-sm">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 mb-3">{exp.company}</h4>
                  <ul className="space-y-3 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRightIcon className="h-5 w-5 text-coral mt-1 mr-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
