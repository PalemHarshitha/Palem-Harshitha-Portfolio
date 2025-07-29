import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Palem Harshitha
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white hover:bg-primary/90 px-6 py-2 font-medium"
            >
              Contact me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;