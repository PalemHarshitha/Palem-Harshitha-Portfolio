import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const profilePhotoUrl = "/lovable-uploads/5f4d903d-18af-4b22-b1e0-f38438cc8c4c.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would typically download a PDF resume
    window.print();
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/palem-harshitha/?originalSubdomain=in', '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/PalemHarshitha/PalemHarshitha', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 border border-primary/20 rounded-lg -rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-16 w-2 h-2 bg-primary rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/60 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <p className="text-xl text-hero-text/80 mb-8 leading-relaxed max-w-lg">👋 Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-hero-text mb-4 leading-tight">
                Palem Harshitha
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                <span className="text-hero-text">Full Stack </span>
                <span className="text-primary">Python Developer</span>
              </h2>
            </div>
            
            <p className="text-xl text-hero-text/80 mb-8 leading-relaxed max-w-lg">
              I craft scalable and efficient applications with great user experiences using modern technologies. 
              Specialized in IoT systems, web development, and machine learning.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-hero-text/70">10+ Projects Completed</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-semibold hover-lift"
              >
               Conatct Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={downloadResume}
                className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-semibold hover-lift"
              >
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="sm"
                onClick={openLinkedIn}
                className="text-hero-text/70 hover:text-primary hover:bg-primary/10 p-3"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={openGithub}
                className="text-hero-text/70 hover:text-primary hover:bg-primary/10 p-3"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('mailto:palemharshitha@gmail.com', '_blank')}
                className="text-hero-text/70 hover:text-primary hover:bg-primary/10 p-3"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Right content - Profile photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-scale">
            <div className="relative">
              {/* Main photo container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src={profilePhotoUrl} 
                    alt="Palem Harshitha - Full Stack Python Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-xl -z-10"></div>
                
                {/* Floating achievement badge */}
                <div className="absolute top-6 -right-6 bg-background rounded-2xl p-4 shadow-lg border animate-float">
                  <div className="text-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;