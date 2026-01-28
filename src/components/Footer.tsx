import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">USST</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              University of Saskatchewan Space Design Team. Building the next generation of space engineers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Projects', 'Team & History', 'News', 'Join the Team'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>usst@usask.ca</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>University of Saskatchewan<br />Saskatoon, SK, Canada</span>
              </li>
            </ul>
          </div>

          {/* Join */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get Involved</h4>
            <p className="text-muted-foreground text-sm mb-4">
              No experience required. All majors welcome.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Join the Team
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} University of Saskatchewan Space Design Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
