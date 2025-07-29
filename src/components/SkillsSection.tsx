import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Python Development",
      icon: <Code className="h-6 w-6" />,
      color: "purple-primary",
      skills: [
        { name: "Control Flow & Loops", level: 90 },
        { name: "Functions & Modules", level: 85 },
        { name: "OOP Concepts", level: 80 },
        { name: "Data Structures", level: 85 },
        { name: "String Manipulation", level: 90 },
        { name: "Exception Handling", level: 85 },
        { name: "File Handling", level: 80 }
      ],
      libraries: ["math", "datetime", "random", "pandas", "numpy"]
    },
    {
      title: "Database & SQL",
      icon: <Database className="h-6 w-6" />,
      color: "lime-accent",
      skills: [
        { name: "SQL Statements", level: 85 },
        { name: "Queries & Sub-queries", level: 80 },
        { name: "Database Normalization", level: 75 },
        { name: "Database Design", level: 80 }
      ],
      libraries: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      color: "purple-primary",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3 & Styling", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Responsive Design", level: 85 }
      ],
      libraries: ["React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Emerging Technologies",
      icon: <Zap className="h-6 w-6" />,
      color: "lime-accent",
      skills: [
        { name: "IoT Systems", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "Data Science", level: 70 },
        { name: "AI Applications", level: 70 }
      ],
      libraries: ["TensorFlow", "Scikit-learn", "Arduino", "Raspberry Pi"]
    }
  ];

  const certifications = [
    {
      title: "Python Full Stack Development Course",
      provider: "Pyspiders",
      year: "2024"
    },
    {
      title: "Crash Python Course",
      provider: "Coursera by Google", 
      year: "2023"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels 
              across various programming languages and technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border border-border/50 hover:border-primary/30 hover-lift bg-background/80 backdrop-blur-sm p-8">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8 pt-0">
                  {/* Skills with Progress Bars */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-foreground text-lg">{skill.name}</span>
                          <span className="text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-3 bg-muted" />
                      </div>
                    ))}
                  </div>

                  {/* Related Libraries/Tools */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 text-lg">Libraries & Tools:</h4>
                    <div className="flex flex-wrap gap-3">
                      {category.libraries.map((lib, libIndex) => (
                        <Badge key={libIndex} variant="outline" className="px-3 py-2 border-primary/20 text-primary hover:bg-primary/10">
                          {lib}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-background rounded-3xl p-12 border border-border/50 shadow-lg">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              Certifications & Courses
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="border border-primary/20 hover:border-primary/40 hover-lift bg-background/50">
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl text-foreground mb-4">{cert.title}</CardTitle>
                    <CardDescription className="flex justify-between items-center">
                      <span className="text-primary font-semibold text-lg">{cert.provider}</span>
                      <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">{cert.year}</Badge>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Statement */}
          <div className="text-center mt-20 bg-primary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Continuous Learning
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I believe in staying updated with the latest technological advancements and continuously 
              expanding my skill set. My approach to problem-solving combines theoretical knowledge 
              with practical implementation, enabling me to deliver robust and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;