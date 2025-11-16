import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function Home() {
  return (
    <main className="bg-cream relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid of floating decorative shapes */}
        <div className="absolute top-10 left-5 w-20 h-20 rounded-2xl bg-soft-blue/10 opacity-60 animate-pulse"></div>
        <div className="absolute top-32 left-1/4 w-16 h-16 rounded-full bg-coral/15 opacity-50 animate-pulse" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute top-20 right-1/4 w-24 h-24 rounded-3xl bg-soft-blue/8 opacity-40 animate-pulse" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-2xl bg-coral/10 opacity-45 animate-pulse" style={{animationDelay: "0.3s"}}></div>

        <div className="absolute bottom-1/3 left-10 w-28 h-28 rounded-full bg-soft-blue/12 opacity-55 animate-pulse" style={{animationDelay: "1.5s"}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-3xl bg-coral/12 opacity-50 animate-pulse" style={{animationDelay: "0.8s"}}></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 rounded-2xl bg-soft-blue/10 opacity-60 animate-pulse" style={{animationDelay: "1.2s"}}></div>
        <div className="absolute bottom-20 right-5 w-32 h-32 rounded-full bg-coral/8 opacity-40 animate-pulse" style={{animationDelay: "0.6s"}}></div>

        <div className="absolute top-2/3 left-1/2 w-16 h-16 rounded-lg bg-soft-blue/15 opacity-50 animate-pulse" style={{animationDelay: "1.8s"}}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-coral/10 opacity-55 animate-pulse" style={{animationDelay: "0.4s"}}></div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-dark-black mb-4 leading-tight">
              Empowering Young Minds
            </h1>
            <p className="text-lg md:text-xl text-dark-black mb-8 font-inter">
              Quality education programs designed for students aged 10–18, taught
              by expert mentors in a safe, global community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/program/coding-101"
                className="px-8 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all text-center"
              >
                Explore Programs
              </Link>
              <Link
                to="/booking"
                className="px-8 py-3 border-2 border-soft-blue text-soft-blue rounded-lg font-poppins font-semibold hover:bg-soft-blue hover:text-white transition-all text-center"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full aspect-square bg-gradient-to-br from-soft-blue/10 to-coral/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen size={80} className="text-soft-blue mx-auto mb-4" />
                <p className="text-dark-black font-inter">
                  Youth Learning Illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-black mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-dark-black font-inter">
              Hear from parents and students who have transformed their learning
              journey with LearnHub.
            </p>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>
    </main>
  );
}
