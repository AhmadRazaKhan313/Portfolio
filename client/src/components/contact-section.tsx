import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble, ArrowUpRight, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: "https://github.com/AhmadRazaKhan313" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/ahmad-raza-khan300/" },
  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/ahmadrazakhan130" },
  { icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=100004604288794" },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    // In a real application, you would send this data to your server
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    }, 1500);
  }
  
  return (
    <section id="contact" className="py-24 px-6 bg-navy relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gradient">
            <span className="text-gradient font-mono">05.</span> Get In Touch
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-teal via-purple to-transparent opacity-30"></div>
        </motion.div>
        
        <motion.p 
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for new opportunities and would love to hear from you. Whether you have a question, a project in mind, or just want to connect, I'm always open to discussing new ideas and possibilities!
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="glass-effect rounded-xl p-8 shadow-lg card-shadow border-t border-l border-white/10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Mail className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-light-gray">Contact Details</h3>
            </div>
            
            <div className="space-y-8 pl-2">
              <motion.div 
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:bg-opacity-20 transition-colors duration-300">
                  <Mail className="text-teal h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-light-gray font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:ahmad.raza@example.com" 
                    className="text-gray-400 hover:text-teal transition-colors duration-300 flex items-center gap-1 group"
                  >
                    ahmadrazakhan130@gmail.com
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple group-hover:bg-opacity-20 transition-colors duration-300">
                  <Phone className="text-purple h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-light-gray font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-400 hover:text-purple transition-colors duration-300 flex items-center gap-1 group"
                  >
                    +92 (306) 9595-036
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <div className="w-12 h-12 rounded-full bg-teal bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-teal h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-light-gray font-medium mb-1">Location</h4>
                  <p className="text-gray-400">
                    Satellite Town Bahawalpur
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-xl p-8 shadow-lg card-shadow border-t border-r border-white/10 flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Github className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-light-gray">Social Networks</h3>
            </div>
            
            <p className="text-gray-400 mb-8">
              Connect with me on social media to see my latest updates, projects, and more.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-auto">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect hover-lift text-light-gray hover:text-teal transition-colors duration-300 h-16 w-16 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button
                asChild
                className="bg-gradient-accent text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full group"
              >
                <a 
                  href="mailto:ahmad.raza@example.com"
                  className="flex items-center"
                >
                  Let's Work Together
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
