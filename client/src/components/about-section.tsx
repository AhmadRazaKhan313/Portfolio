import { motion } from "framer-motion";
import { ArrowRightIcon, Camera, BookOpen, Mountain, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const interests = [
    { label: "Photography", icon: <Camera className="h-4 w-4 text-teal" /> },
    { label: "Reading", icon: <BookOpen className="h-4 w-4 text-teal" /> },
    { label: "Hiking", icon: <Mountain className="h-4 w-4 text-teal" /> },
    { label: "Open Source", icon: <Github className="h-4 w-4 text-teal" /> }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-navy relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-light-gray">
            <span className="text-gradient font-mono">01.</span> About Me
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-teal to-transparent opacity-30"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 leading-relaxed">
              Hello! I'm Ahmad, a web developer with a passion for creating engaging, accessible, and user-friendly websites and applications. My journey in web development began three years ago, and I've been constantly learning and improving my skills since then.
            </p>
            <p className="text-gray-400 leading-relaxed">
              At <span className="text-teal font-medium">Enigmatix</span>, I've had the opportunity to work on diverse projects that have sharpened my abilities in front-end development. I enjoy the process of transforming designs into fully-functional websites and applications that provide excellent user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
            </p>
            
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-light-gray font-medium mb-4 text-lg">Outside of work, I enjoy:</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  >
                    <Badge variant="outline" className="py-3 px-4 text-light-gray border-teal border-opacity-30 hover-lift">
                      <span className="flex items-center gap-2">
                        {interest.icon}
                        {interest.label}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-purple rounded-lg opacity-30 transform rotate-2"></div>
              
              {/* Main image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450" 
                  alt="Ahmad's workspace" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy to-transparent opacity-20"></div>
              </div>
              
              {/* Accent element */}
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-teal opacity-20 rounded-lg transform -rotate-6"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
