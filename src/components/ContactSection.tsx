import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSeIgl2BgLfAZq5HOulGD54Z8JMQ0tRDE2GVKrXDFQ1bARynIg/formResponse';

  const formDataToSend = new FormData();
  formDataToSend.append('entry.2073237694', formData.name);      // Name field
  formDataToSend.append('entry.986600683', formData.email);      // Email field
  formDataToSend.append('entry.2024598627', formData.message);   // Message field

  fetch(googleFormURL, {
    method: 'POST',
    mode: 'no-cors',
    body: formDataToSend,
  }).then(() => {
    setIsSubmitted(true); // ✅ Form submitted state
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me!",
    });
    setFormData({ name: '', email: '', message: '' }); // Reset form
  }).catch(() => {
    toast({
      title: "Error!",
      description: "There was a problem submitting the form.",
      variant: "destructive",
    });
  });
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hero-text mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-hero-text/80 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, or 
              just have a chat about technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-hero-text mb-6">
                  Get In Touch
                </h3>
                <p className="text-hero-text/80 mb-8 leading-relaxed">
                  Feel free to reach out for project collaborations, job opportunities, 
                  or if you'd like to discuss innovative ideas in technology and development.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-green-accent bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-accent/20 rounded-lg">
                        <Mail className="h-6 w-6 text-green-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-hero-text">Email</h4>
                        <a 
                          href="mailto:palemharshitha@gmail.com"
                          className="text-hero-text/80 hover:text-green-accent transition-colors"
                        >
                          palemharshitha@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-accent bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-accent/20 rounded-lg">
                        <Phone className="h-6 w-6 text-green-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-hero-text">Phone</h4>
                        <a 
                          href="tel:+916309879072"
                          className="text-hero-text/80 hover:text-green-accent transition-colors"
                        >
                          +91 6309879072
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-accent bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-accent/20 rounded-lg">
                        <MapPin className="h-6 w-6 text-green-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-hero-text">Location</h4>
                        <span className="text-hero-text/80">Madanapalle, India</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold text-hero-text mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-hero-text/20 text-hero-text hover:bg-green-accent hover:text-white"
                    onClick={() => window.open("https://github.com/PalemHarshitha/PalemHarshitha", "_blank")}
                  >
                    <Github className="text-sky-500 hover:text-sky-700 transition-transform hover:scale-110" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-hero-text/20 text-hero-text hover:bg-green-accent hover:text-white"
                    onClick={() => window.open("https://www.linkedin.com/in/palem-harshitha/?originalSubdomain=in", "_blank")}
                  >
                    <Linkedin className="text-sky-500 hover:text-sky-700 transition-transform hover:scale-110" />
                    LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-hero-text/20 text-hero-text hover:bg-green-accent hover:text-white"
                    onClick={() => window.open("https://chat.google.com", "_blank")}
                  >
                    <Send className="w-6 h-6 text-blue-600" />
                    Google Chat
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-green-accent/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-hero-text">Send a Message</CardTitle>
                  <CardDescription className="text-hero-text/80">
                    I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
  <form onSubmit={handleSubmit} className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-hero-text mb-2">
        Name
      </label>
      <Input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your full name"
        required
        className="w-full bg-white/20 border-hero-text/20 text-hero-text placeholder:text-hero-text/60"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-hero-text mb-2">
        Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="your.email@example.com"
        required
        className="w-full bg-white/20 border-hero-text/20 text-hero-text placeholder:text-hero-text/60"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-hero-text mb-2">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Tell me about your project or how I can help..."
        required
        className="w-full min-h-[120px] bg-white/20 border-hero-text/20 text-hero-text placeholder:text-hero-text/60"
      />
    </div>

    <Button 
      type="submit" 
      className="w-full bg-green-accent hover:bg-green-accent/90 text-white py-3 rounded-full"
    >
      <Send className="mr-2 h-5 w-5" />
      Send Message
    </Button>
  </form>
) : (
  <div className="text-center text-green-accent text-lg font-semibold py-6">
    ✅ Your message has been sent successfully!<br />
    I’ll get back to you soon.
  </div>
)}

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;