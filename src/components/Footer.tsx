import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-primary text-text-light py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Harshitha</h3>
              <p className="text-text-light/80 leading-relaxed">
                Python Full Stack Developer passionate about creating innovative 
                solutions with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-light/80 hover:text-lime-accent transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('projects');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-light/80 hover:text-lime-accent transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('skills');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-light/80 hover:text-lime-accent transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-light/80 hover:text-lime-accent transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-text-light/80">
                <p>palemharshitha@gmail.com</p>
                <p>+91 6309879072</p>
                <p>Madanapalle, India</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-text-light/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-light/60 text-sm mb-4 md:mb-0">
              © {currentYear} Palem Harshitha. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-text-light/60">
              <span>Made with</span>
              <span>and modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;