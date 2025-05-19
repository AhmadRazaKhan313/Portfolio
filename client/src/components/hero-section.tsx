import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-teal opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6 md:order-1 order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-mono bg-teal bg-opacity-10 text-teal border border-teal border-opacity-30">
                <Code className="w-4 h-4 mr-2" /> Web Developer
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-light-gray">Ahmad </span>
              <span className="text-gradient">Raza</span>
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I build exceptional digital experiences.
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A passionate web developer with 3 years of experience creating modern, 
              accessible, and user-centric applications at Enigmatix. Specializing in 
              React, Next.js, and responsive design solutions.
            </motion.p>
            
            <motion.div 
              className="pt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                asChild
                className="bg-gradient-accent text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl px-6 rounded-full group"
              >
                <a href="#projects" className="flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent hover:bg-teal hover:bg-opacity-10 border-2 border-teal text-teal transition-all duration-300 px-6 rounded-full"
              >
                <a href="#contact" className="flex items-center">
                  Get In Touch
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:order-2 order-1 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-teal rounded-xl opacity-50 transform rotate-3"></div>
              <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-purple rounded-xl opacity-50 transform -rotate-3"></div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl hover-lift">
                <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                    alt="Ahmad Raza - Web Developer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
