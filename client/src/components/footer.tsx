import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-8 bg-navy relative">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none w-full">
        <svg 
          className="relative block w-full h-12 text-light-gray text-opacity-5"
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="currentColor">
          </path>
        </svg>
      </div>
      
      {/* Back to top button */}
      <div className="flex justify-center -mt-10 mb-10">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Button
            onClick={scrollToTop}
            className="rounded-full h-14 w-14 bg-gradient-accent shadow-lg hover:shadow-xl text-white hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp />
          </Button>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="border-t border-gray-800 opacity-30 mb-8"></div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-0 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center md:text-left">
            <a href="#" className="text-gradient font-mono text-xl font-semibold tracking-wider">
              &lt;ahmad.raza/&gt;
            </a>
          </div>
          
          <div className="flex justify-center items-center text-gray-400 text-sm">
            <span>Designed & Built with</span>
            <Heart className="h-4 w-4 mx-1 text-purple" />
            <span>by Ahmad Raza</span>
            <span className="ml-1">&copy; {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
