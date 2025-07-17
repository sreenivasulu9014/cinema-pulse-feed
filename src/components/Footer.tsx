import { Link } from 'react-router-dom';
import { Film, Instagram, Twitter, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const movieCategories = [
    'Hollywood Movies',
    'Bollywood Movies', 
    'Tollywood Movies',
    'Kollywood Movies',
    'Web Series',
    'Movie Trailers'
  ];

  const quickLinks = [
    'Latest Updates',
    'Actor Profiles',
    'Movie Reviews',
    'Release Calendar',
    'Behind the Scenes',
    'Interviews'
  ];

  const company = [
    'About Us',
    'Contact Us',
    'Privacy Policy',
    'Terms of Service',
    'Advertise With Us',
    'Careers'
  ];

  return (
    <footer className="bg-cinema-darker pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-primary" />
              <span className="font-heading text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                IBomma TV Live
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your ultimate destination for the latest movie news, reviews, and entertainment updates 
              from around the world.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Movie Categories */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
              Movie Categories
            </h3>
            <ul className="space-y-2">
              {movieCategories.map((category) => (
                <li key={category}>
                  <Link 
                    to="/" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link 
                    to="/" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
              Company
            </h3>
            <ul className="space-y-2 mb-4">
              {company.map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@ibommatv.live</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 IBomma TV Live. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;