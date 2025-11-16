import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "LearnHub has completely transformed my child's approach to learning. The programs are engaging, and the mentors are incredibly supportive!",
    author: "Sarah Johnson",
    role: "Parent",
  },
  {
    id: 2,
    text: "I love how interactive and fun the lessons are. The coaches make learning feel like play, and I'm actually excited to join every session!",
    author: "Alex Chen",
    role: "Student, Age 14",
  },
  {
    id: 3,
    text: "The curriculum is well-structured and age-appropriate. My child has made new friends from around the world, which is amazing!",
    author: "Maria Garcia",
    role: "Parent",
  },
  {
    id: 4,
    text: "Best learning experience ever. The teachers really care about each student's progress, and the global community is so cool!",
    author: "Jordan Smith",
    role: "Student, Age 12",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setAutoplay(false);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-coral text-coral"
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-lg md:text-xl font-inter text-dark-black mb-6 italic">
          "{current.text}"
        </p>

        {/* Author */}
        <div className="mb-8">
          <p className="font-poppins font-semibold text-dark-black">
            {current.author}
          </p>
          <p className="text-sm font-inter text-dark-black opacity-75">
            {current.role}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-soft-blue w-8"
                    : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-3 bg-cream rounded-lg text-soft-blue hover:bg-soft-blue hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 bg-cream rounded-lg text-soft-blue hover:bg-soft-blue hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
