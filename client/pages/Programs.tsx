import { BookOpen, Users, Award, Zap } from "lucide-react";
import ProgramCard from "../components/ProgramCard";

const programs = [
  {
    id: "coding-101",
    name: "Coding 101",
    ageRange: "10–13",
    description:
      "Learn the basics of programming with block-based coding and interactive projects.",
    icon: <Zap />,
  },
  {
    id: "web-design",
    name: "Web Design Fundamentals",
    ageRange: "13–16",
    description:
      "Create beautiful, responsive websites using HTML, CSS, and JavaScript.",
    icon: <BookOpen />,
  },
  {
    id: "stem-masters",
    name: "STEM Masters",
    ageRange: "14–18",
    description:
      "Advanced courses in science, technology, engineering, and mathematics.",
    icon: <Award />,
  },
  {
    id: "digital-literacy",
    name: "Digital Literacy",
    ageRange: "10–12",
    description:
      "Master the essential digital skills needed for modern learning and careers.",
    icon: <Users />,
  },
];

export default function Programs() {
  return (
    <main className="bg-cream">
      {/* Header */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-dark-black mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-dark-black font-inter max-w-3xl">
            Choose from our diverse range of educational programs tailored for
            different ages and interests. Each program is designed to inspire,
            educate, and empower young learners.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-black mb-4">
              Why Choose LearnHub
            </h2>
            <p className="text-lg text-dark-black font-inter max-w-2xl mx-auto">
              We provide more than just education—we create a supportive learning
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow text-center">
              <div className="text-soft-blue mb-4 flex justify-center">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-dark-black mb-2">
                Safe Learning
              </h3>
              <p className="text-dark-black font-inter">
                Secure, moderated environment with verified mentors.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow text-center">
              <div className="text-soft-blue mb-4 flex justify-center">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-dark-black mb-2">
                Expert Mentors
              </h3>
              <p className="text-dark-black font-inter">
                Learn from industry professionals and experienced educators.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 shadow-soft hover:shadow-md transition-shadow text-center">
              <div className="text-soft-blue mb-4 flex justify-center">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-dark-black mb-2">
                Global Students
              </h3>
              <p className="text-dark-black font-inter">
                Connect with peers from around the world and expand perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
