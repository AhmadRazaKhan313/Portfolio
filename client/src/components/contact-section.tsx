import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble } from "lucide-react";
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
  { icon: <Github className="h-5 w-5" />, href: "https://github.com/ahmadraza" },
  { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/ahmadraza" },
  { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/ahmadraza" },
  { icon: <Dribbble className="h-5 w-5" />, href: "https://dribbble.com/ahmadraza" },
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
    <section id="contact" className="py-24 px-6 bg-navy">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-light-gray text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-teal font-mono">05.</span> Get In Touch
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out through any of the channels below!
        </motion.p>
        
        <div className="max-w-xl mx-auto space-y-8">
          <motion.div 
            className="bg-white bg-opacity-5 p-8 rounded-lg backdrop-blur-sm border border-teal border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-teal mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-teal h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="text-light-gray text-sm font-medium mb-1">Email</h4>
                  <a href="mailto:ahmad.raza@example.com" className="text-gray-400 hover:text-teal transition-colors duration-300">
                    ahmad.raza@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-teal h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="text-light-gray text-sm font-medium mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-teal transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-teal h-5 w-5 mr-4 mt-1" />
                <div>
                  <h4 className="text-light-gray text-sm font-medium mb-1">Location</h4>
                  <p className="text-gray-400">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white bg-opacity-5 p-8 rounded-lg backdrop-blur-sm border border-teal border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-teal mb-6">Follow Me</h3>
            
            <div className="flex space-x-6 justify-center">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 text-light-gray hover:text-teal hover:bg-opacity-20 transition-colors duration-300 h-12 w-12 rounded-full flex items-center justify-center"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
