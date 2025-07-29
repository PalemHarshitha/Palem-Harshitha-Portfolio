const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating innovative solutions and delivering exceptional results through 
              cutting-edge technology and strategic problem-solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  I'm a passionate Python Full Stack Developer with a strong foundation in computer science 
                  and a keen interest in emerging technologies. With expertise in both frontend and backend 
                  development, I enjoy creating comprehensive solutions that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  My journey in technology has led me to explore various domains including IoT systems, 
                  machine learning, and web development. I believe in continuous learning and staying 
                  updated with the latest technological advancements.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-2xl border hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="space-y-8">
              <div className="bg-background rounded-2xl p-8 border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Full Stack Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building robust web applications using Python, Django, React, and modern JavaScript 
                      frameworks with focus on performance and user experience.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-2xl p-8 border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">IoT & Innovation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Implementing IoT solutions and machine learning algorithms to create smart systems 
                      that address contemporary challenges in various industries.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-background rounded-2xl p-8 border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Problem Solving</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyzing complex requirements and delivering scalable solutions with clean, 
                      maintainable code and comprehensive documentation.
                    </p>
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

export default AboutSection;