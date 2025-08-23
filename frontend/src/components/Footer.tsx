import { useState } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Wheat, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CheckCircle
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState<{ message: string; show: boolean }>({
    message: "",
    show: false,
  });

  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState<{ message: string; show: boolean }>({
    message: "",
    show: false,
  });

  const quickLinks = [
    { name: "Crop Marketplace", href: "/marketplace" },
    { name: "Equipment Rentals", href: "/equipment-rentals" },
    { name: "Market Intelligence", href: "/market-intel" },
    { name: "Financial Services", href: "/sustainability" }
  ];

  const support = [
    { name: "Help Center", href: "/support/help" },
    { name: "Community Forum", href: "/community-hub" },
    { name: "Contact Support", href: "/support/contact" },
    { name: "Documentation", href: "/support/docs" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" }
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" }
  ];

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setPopup({ message: "Please enter a valid email address.", show: true });
      setTimeout(() => setPopup({ message: "", show: false }), 3000);
      return;
    }

    setPopup({
      message: `Thank you for subscribing, ${email}! You'll stay updated with Kisaan Mitra.`,
      show: true,
    });
    setEmail(""); // Clear input
    setTimeout(() => setPopup({ message: "", show: false }), 4000);
  };

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setPopup({ message: "Please enter a valid email address.", show: true });
      setTimeout(() => setPopup({ message: "", show: false }), 3000);
      return;
    }

    setPopup({
      message: `Thank you for subscribing, ${email}! You'll stay updated with Kisaan Mitra.`,
      show: true,
    });
    setEmail(""); // Clear input
    setTimeout(() => setPopup({ message: "", show: false }), 4000);
  };

  return (
    <footer className="bg-gradient-to-b from-agricultural-dark to-primary text-primary-foreground relative">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with Kisaan Mitra</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Get the latest market insights, farming tips, and platform updates directly in your inbox.
            </p>
          </div>

          {/* Input and Subscribe Button */}

          {/* Input and Subscribe Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition"
            />
            <Button
              onClick={handleSubscribe}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 flex items-center gap-2"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-foreground/20 rounded-lg">
                <Wheat className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">AgriConnect</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Empowering farmers with transparent marketplace solutions, 
              cutting-edge technology, and sustainable agricultural practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">support@KisaanMitra.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+080 0404 2706</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Bengaluru, Karnatak, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 KisaanMitra. All rights reserved. Empowering farmers across India.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center Popup Notification */}
      {popup.show && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg animate-fadeInOut z-50">
          <CheckCircle className="w-5 h-5" />
          <span>{popup.message}</span>
        </div>
      )}

      {/* Fade animation */}
      <style>
        {`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(10px); }
          }
          .animate-fadeInOut {
            animation: fadeInOut 4s ease-in-out forwards;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
