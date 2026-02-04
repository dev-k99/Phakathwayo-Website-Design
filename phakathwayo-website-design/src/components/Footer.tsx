import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jfif";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Phakathwayo JMS" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <span className="font-display text-xl text-foreground">Phakathwayo</span>
              <span className="font-display text-xl text-primary ml-1">JMS</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 justify-center">
            <a href="tel:0676577059" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              067 657 7059
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Richards Bay, KZN
            </div>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm text-right">
            © {new Date().getFullYear()} Phakathwayo JMS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
