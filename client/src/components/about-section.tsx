import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

export default function AboutSection() {
  const interests = [
    "Photography",
    "Reading",
    "Hiking",
    "Open Source"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-navy">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-light-gray"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal font-mono">01.</span> About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400">
              Hello! I'm Ahmad, a web developer with a passion for creating engaging, accessible, and user-friendly websites and applications. My journey in web development began three years ago, and I've been constantly learning and improving my skills since then.
            </p>
            <p className="text-gray-400">
              At Enigmatix, I've had the opportunity to work on diverse projects that have sharpened my abilities in front-end development. I enjoy the process of transforming designs into fully-functional websites and applications that provide excellent user experiences.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
            </p>
            
            <div className="pt-6">
              <h3 className="text-light-gray font-medium mb-3">Outside of work, I enjoy:</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400">
                {interests.map((interest, index) => (
                  <li key={index} className="flex items-center">
                    <ArrowRightIcon className="h-4 w-4 text-teal mr-2" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=450" 
                alt="Ahmad's workspace" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
