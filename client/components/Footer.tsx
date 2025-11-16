import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-poppins font-bold text-soft-blue mb-2">
              LearnHub
            </h3>
            <p className="text-dark-black text-sm font-inter">
              Empowering young minds through quality education.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-poppins font-semibold text-dark-black mb-4">
              Company
            </h4>
            <div className="space-y-2">
              <Link
                to="/programs"
                className="text-dark-black hover:text-soft-blue transition-colors text-sm font-inter"
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="text-dark-black hover:text-soft-blue transition-colors text-sm font-inter"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-poppins font-semibold text-dark-black mb-4">
              Legal
            </h4>
            <div className="space-y-2">
              <Link
                to="/privacy"
                className="text-dark-black hover:text-soft-blue transition-colors text-sm font-inter"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-dark-black hover:text-soft-blue transition-colors text-sm font-inter"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-poppins font-semibold text-dark-black mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-white rounded-lg text-soft-blue hover:bg-soft-blue hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-lg text-soft-blue hover:bg-soft-blue hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-lg text-soft-blue hover:bg-soft-blue hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-lg text-soft-blue hover:bg-soft-blue hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-dark-black text-sm font-inter">
            © 2024 LearnHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
