import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border py-12 relative overflow-hidden">
      {/* Polygon patterns background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="polygon-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,15 90,85 10,85" fill="currentColor" className="text-primary" />
              <polygon points="25,30 40,50 25,70 10,50" fill="currentColor" className="text-primary" opacity="0.5" />
              <polygon points="75,40 85,55 75,70 65,55" fill="currentColor" className="text-primary" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#polygon-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              DevHub
            </h3>
            <p className="text-muted-foreground">
              Building future-ready digital experiences with innovation and precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web & Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#why-choose" className="hover:text-primary transition-colors">About Us</a></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 DevHub Developers Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
