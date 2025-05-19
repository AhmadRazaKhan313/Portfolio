import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6 md:order-1 order-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-teal font-mono">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-light-gray">Ahmad Raza</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-400">I build things for the web.</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              I'm a web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products at Enigmatix.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent hover:bg-teal border-2 border-teal text-teal hover:text-navy transition-all duration-300 hover:shadow-lg"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                asChild
                className="bg-teal hover:bg-opacity-80 text-navy transition-all duration-300 hover:shadow-lg"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:order-2 order-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-full w-48 h-48 md:w-64 md:h-64 border-4 border-teal shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Ahmad Raza - Web Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
