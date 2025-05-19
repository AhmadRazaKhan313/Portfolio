import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-6 bg-navy border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Designed & Built by Ahmad Raza &copy; {new Date().getFullYear()}
          </div>
          
          <div className="flex space-x-6">
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
