import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Heart } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real Time Stress Monitoring and Analysis Using IoT",
      description: "Designed and implemented an Internet of Things (IoT)-based system to monitor and analyze stress levels in real time, addressing the growing need for mental health awareness in high-pressure environments like the IT industry. The system uses biometric sensors to collect physiological data (e.g., heart rate, temperature), processes the data using microcontrollers, and provides real-time stress feedback to users through an intuitive interface.",
      technologies: ["IoT", "Dot Net Framework", "Machine Learning", "Biometric Sensors", "Microcontrollers"],
      category: "IoT & Health Tech",
      icon: <Zap className="h-6 w-6" />,
      highlights: [
        "Real-time biometric data collection",
        "Machine learning stress analysis",
        "Intuitive user interface",
        "Microcontroller integration"
      ]
    },
    {
      title: "Food Hotel Management System", 
      description: "Developed a comprehensive web-based management system utilizing Java, JDBC, and Servlets to efficiently manage restaurant operations. This application allows for the addition, update, deletion, and viewing of customer records, order management, and administrative functions, enhancing operational efficiency within hospitality institutions.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL", "SMS API", "Twilio", "Fast2SMS"],
      category: "Web Development",
      icon: <Heart className="h-6 w-6" />,
      highlights: [
        "Complete CRUD operations",
        "SMS notification integration", 
        "Customer management system",
        "Order tracking functionality"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A showcase of my technical projects that demonstrate practical application of 
              modern technologies to solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-accent/30">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-accent/10 rounded-lg text-green-accent">
                        {project.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-green-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center gap-2 text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-green-accent rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open("https://github.com/PalemHarshitha/PalemHarshitha", "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-green-accent hover:bg-green-accent/90"
                      onClick={() => window.open("https://github.com/PalemHarshitha/PalemHarshitha", "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-text-secondary mb-6">
              Interested in seeing more of my work or discussing potential collaborations?
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-green-accent hover:bg-green-accent/90 px-8 py-3 text-lg rounded-full"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;