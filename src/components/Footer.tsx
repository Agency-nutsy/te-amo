import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import { siteConfig as c } from "@/config/site";

const PHONE = c.phone;
const PHONE_DISPLAY = c.phoneDisplay;
const ADDRESS = c.address;
const MAPS_LINK = c.mapsLink;

const Footer = () => (
  <footer className="bg-card border-t border-border pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <Link to="/" className="font-display text-2xl font-bold tracking-tight mb-4 inline-flex items-center gap-1.5">
            <span className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-lg">{c.namePart1}</span>
            <span className="text-foreground">{c.namePart2}</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mt-4">
            {c.hero.description}
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Popular Items</h3>
          <ul className="space-y-3">
            {c.popularItems.map((item) => (
              <li key={item}>
                <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{ADDRESS}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 group">
                <Phone size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{PHONE_DISPLAY}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${c.email}`} className="flex items-center gap-3 group">
                <Mail size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{c.email}</span>
              </a>
            </li>
          </ul>
          
          <div className="flex gap-4 mt-6">
            <a href={c.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {c.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          {c.hoursShort}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
