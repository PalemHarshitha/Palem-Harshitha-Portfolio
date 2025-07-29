import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Skill Dzire",
      location: "Remote",
      duration: "Feb 2024 - Apr 2024",
      type: "Internship",
      description: "Gained hands-on experience in data analysis, machine learning algorithms, and data visualization techniques.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy"]
    },
    {
      role: "AI-ML Virtual Intern",
      company: "Edu Skills - AICTE",
      location: "Remote", 
      duration: "May 2023 - Jun 2023",
      type: "Virtual Internship",
      description: "Explored artificial intelligence and machine learning concepts, worked on practical projects involving neural networks and deep learning.",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "TensorFlow", "Neural Networks"]
    }
  ];

  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Aditya College of Engineering",
      location: "Madanapalle",
      duration: "2020-2024",
      grade: "83.4%"
    },
    {
      degree: "Intermediate - M.P.C",
      institution: "Sri Siddartha Junior College", 
      location: "Madanapalle",
      duration: "2018-2020",
      grade: "96.7%"
    },
    {
      degree: "10th Standard",
      institution: "Gnanodaya E.M High School",
      location: "",
      duration: "2018",
      grade: "9.3 CGPA"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and educational background that shaped my expertise 
              in technology and software development.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center">
                <div className="w-3 h-8 bg-primary rounded-full mr-4"></div>
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/30 hover-lift bg-background/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-2xl text-foreground">{exp.role}</CardTitle>
                        <Badge className="bg-primary/10 text-primary border-primary/20">{exp.type}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                          <span className="font-semibold text-primary text-lg">{exp.company}</span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-foreground mb-6 leading-relaxed text-lg">{exp.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="px-3 py-1 border-primary/20 text-primary hover:bg-primary/10">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-10 flex items-center">
                <div className="w-3 h-8 bg-primary rounded-full mr-4"></div>
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card key={index} className="border border-border/50 hover:border-primary/30 hover-lift bg-background/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-foreground">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                          <span className="font-semibold text-primary text-lg">{edu.institution}</span>
                          {edu.location && (
                            <span className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </span>
                          )}
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {edu.duration}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-medium">Grade:</span>
                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-lg font-semibold">
                          {edu.grade}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;