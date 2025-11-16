import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-poppins font-bold text-soft-blue">
            LearnHub
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/programs"
            className="text-dark-black font-inter font-medium hover:text-soft-blue transition-colors"
          >
            Programs
          </Link>
          <Link
            to="/booking"
            className="px-6 py-2.5 bg-soft-blue text-white rounded-lg font-inter font-medium hover:bg-opacity-90 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-dark-black hover:text-soft-blue transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream border-b border-gray-200 md:hidden">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/programs"
                className="block text-dark-black font-inter font-medium hover:text-soft-blue transition-colors py-2"
              >
                Programs
              </Link>
              <Link
                to="/booking"
                className="block px-6 py-2.5 bg-soft-blue text-white rounded-lg font-inter font-medium text-center hover:bg-opacity-90 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
