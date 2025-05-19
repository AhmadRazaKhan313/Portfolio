import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy bg-opacity-80 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-gradient font-mono text-xl font-semibold tracking-wider">
            &lt;ahmad.raza/&gt;
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-gradient nav-link relative px-4 py-2 text-light-gray hover:text-teal transition-colors duration-300 rounded-full hover:bg-white hover:bg-opacity-5"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild
                variant="outline" 
                className="ml-4 bg-transparent border-2 border-teal text-teal hover:bg-teal hover:text-navy transition-all duration-300 rounded-full"
              >
                <a href="#contact">
                  Let's Talk
                </a>
              </Button>
            </nav>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-light-gray hover:text-teal focus:outline-none glass-effect rounded-full h-10 w-10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="py-6 mt-4 glass-effect rounded-xl animate-in fade-in-50 duration-300">
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-light-gray hover:text-teal py-3 px-6 transition-colors duration-300 hover:bg-white hover:bg-opacity-5"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 px-6">
                <Button 
                  asChild
                  className="w-full bg-teal hover:bg-opacity-80 text-navy transition-all duration-300"
                >
                  <a href="#contact" onClick={closeMobileMenu}>
                    Let's Talk
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
