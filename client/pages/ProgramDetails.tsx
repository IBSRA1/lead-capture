import { useParams, Link } from "react-router-dom";
import { CheckCircle, Star, Briefcase, Target, Award, FileText } from "lucide-react";

const programsData: Record<string, any> = {
  "coding-101": {
    name: "Coding 101",
    description:
      "Learn the basics of programming with block-based coding and interactive projects.",
    ageRange: "10–13",
    designedFor: [
      "Participants must be at least 6 years old.",
      "Students with no programming experience",
      "Students who enjoy problem-solving and creativity",
      "Students exploring their ideal tech specialization",
      "Curious minds who love to explore and learn",
    ],
    whatYouLearn: [
      "Basic programming concepts and logic",
      "Master block-based coding",
      "Game Application Development Essentials",
      "Web Application Development Essentials",
      "Mobile Application Development Essentials",
      "AI Application Development Essentials",
      "Robotics & Electronics Application Development Essentials",
      "Communication, negotiation, and presentation skills",
      "Problem-solving and Creativity",
    ],
    programInfo: {
      sessions: "16 session",
      projects: "15 project",
      duration: "2 months",
      classSize: "Maximum 4 students",
      sessionLength: "2-hour sessions",
      format: "Online & In-person options",
    },
    projects: [
      { name: "Robotics Application Development", count: 3 },
      { name: "Electronics Application Development", count: 5 },
      { name: "Web Application Development", count: 1 },
      { name: "Mobile Application Development", count: 2 },
      { name: "Game Application Development", count: 2 },
      { name: "AI Application Development", count: 2 },
    ],
    outcomes: [
      "Solid foundation in programming concepts",
      "Ability to create interactive projects",
      "Develop essential interpersonal skills",
      "Discover Different Programming Fields",
      "Enhanced problem-solving skills",
      "Identify your ideal technical specialization",
    ],
    benefits: [
      "Small class sizes for personalized attention",
      "Regular progress reports for parents (SPR)",
      "Ongoing technical support available",
      "Taught by certified engineers with real-world experience",
      "A recap video after each session",
      "Comprehensive materials for faster, easier learning",
    ],
    policy: {
      enrollment: "Rolling enrollment available",
      materials: "All learning materials included",
      refund: "Full refund within the first 6 sessions",
      support: "online support available",
    },
  },
  "web-design": {
    name: "Web Design Fundamentals",
    description:
      "Create beautiful, responsive websites using HTML, CSS, and JavaScript.",
    ageRange: "13–16",
    designedFor: [
      "Participants must be at least 8 years old.",
      "Students with basic computer skills",
      "Creative students who love design",
      "Students interested in web development careers",
      "Curious minds who love to explore and learn",
    ],
    whatYouLearn: [
      "HTML fundamentals and structure",
      "CSS styling and responsive design",
      "JavaScript for interactivity",
      "Web design principles and best practices",
      "Building interactive web experiences",
      "Performance optimization",
      "Web accessibility standards",
      "Communication and presentation skills",
      "Creative problem-solving",
    ],
    programInfo: {
      sessions: "20 session",
      projects: "8 project",
      duration: "3 months",
      classSize: "Maximum 4 students",
      sessionLength: "2-hour sessions",
      format: "Online & In-person options",
    },
    projects: [
      { name: "Personal Portfolio Website", count: 2 },
      { name: "Business Websites", count: 3 },
      { name: "Interactive Web Applications", count: 2 },
      { name: "Responsive Design Projects", count: 1 },
    ],
    outcomes: [
      "Build functional and beautiful websites",
      "Master HTML, CSS, and JavaScript basics",
      "Create responsive designs for all devices",
      "Understand web design best practices",
      "Enhanced creative thinking",
      "Ready for advanced web development courses",
    ],
    benefits: [
      "Small class sizes for personalized attention",
      "Regular progress reports for parents (SPR)",
      "Ongoing technical support available",
      "Taught by certified web developers with real-world experience",
      "A recap video after each session",
      "Comprehensive materials for faster, easier learning",
    ],
    policy: {
      enrollment: "Rolling enrollment available",
      materials: "All learning materials included",
      refund: "Full refund within the first 6 sessions",
      support: "online support available",
    },
  },
  "stem-masters": {
    name: "STEM Masters",
    description:
      "Advanced courses in science, technology, engineering, and mathematics.",
    ageRange: "14–18",
    designedFor: [
      "Participants must be at least 14 years old.",
      "Advanced students seeking deeper STEM knowledge",
      "Students interested in STEM careers",
      "Students who love advanced problem-solving",
      "Curious minds exploring specialized fields",
    ],
    whatYouLearn: [
      "Advanced programming and algorithms",
      "Machine learning and AI fundamentals",
      "Data science and analytics",
      "Advanced robotics and automation",
      "IoT and embedded systems",
      "Research methodology and project management",
      "Technical communication and presentation",
      "Real-world problem solving",
    ],
    programInfo: {
      sessions: "24 session",
      projects: "6 project",
      duration: "4 months",
      classSize: "Maximum 6 students",
      sessionLength: "3-hour sessions",
      format: "Online & In-person options",
    },
    projects: [
      { name: "AI and Machine Learning", count: 2 },
      { name: "Advanced Robotics", count: 2 },
      { name: "IoT Applications", count: 1 },
      { name: "Data Science Projects", count: 1 },
    ],
    outcomes: [
      "Advanced STEM competencies",
      "Ready for university-level STEM courses",
      "Research and project management skills",
      "Industry-relevant technical knowledge",
      "Enhanced analytical thinking",
      "Prepared for STEM career paths",
    ],
    benefits: [
      "Small class sizes for personalized attention",
      "Regular progress reports for parents (SPR)",
      "Ongoing technical support available",
      "Taught by certified engineers with real-world experience",
      "A recap video after each session",
      "Comprehensive materials for faster, easier learning",
    ],
    policy: {
      enrollment: "Rolling enrollment available",
      materials: "All learning materials included",
      refund: "Full refund within the first 6 sessions",
      support: "online support available",
    },
  },
  "digital-literacy": {
    name: "Digital Literacy",
    description:
      "Master the essential digital skills needed for modern learning and careers.",
    ageRange: "10–12",
    designedFor: [
      "Participants must be at least 6 years old.",
      "Students new to digital technology",
      "Students building foundational computer skills",
      "Students preparing for digital careers",
      "Curious minds eager to learn digital tools",
    ],
    whatYouLearn: [
      "Computer basics and operating systems",
      "Internet safety and digital citizenship",
      "Document creation and editing",
      "Spreadsheet fundamentals",
      "Presentation skills",
      "Email and communication tools",
      "Basic coding and computational thinking",
      "Digital research skills",
    ],
    programInfo: {
      sessions: "12 session",
      projects: "10 project",
      duration: "6 weeks",
      classSize: "Maximum 5 students",
      sessionLength: "1.5-hour sessions",
      format: "Online & In-person options",
    },
    projects: [
      { name: "Document Creation Projects", count: 3 },
      { name: "Spreadsheet Applications", count: 3 },
      { name: "Digital Presentations", count: 2 },
      { name: "Online Safety Projects", count: 2 },
    ],
    outcomes: [
      "Strong foundation in digital tools",
      "Digital citizenship and online safety",
      "Confident computer user",
      "Ready for more advanced tech courses",
      "Enhanced digital problem-solving",
      "Prepared for modern learning environments",
    ],
    benefits: [
      "Small class sizes for personalized attention",
      "Regular progress reports for parents (SPR)",
      "Ongoing technical support available",
      "Taught by certified instructors with teaching experience",
      "A recap video after each session",
      "Comprehensive materials for faster, easier learning",
    ],
    policy: {
      enrollment: "Rolling enrollment available",
      materials: "All learning materials included",
      refund: "Full refund within the first 3 sessions",
      support: "online support available",
    },
  },
};

export default function ProgramDetails() {
  const { id } = useParams<{ id: string }>();
  const program = programsData[id || "coding-101"];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-poppins font-bold text-dark-black mb-4">
            Program Not Found
          </h1>
          <Link
            to="/programs"
            className="px-8 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all"
          >
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-cream">
      {/* Program Header */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-dark-black mb-2">
            {program.name}
          </h1>
          <span className="inline-block px-4 py-2 bg-cream text-soft-blue rounded-full font-poppins font-semibold text-sm mb-4">
            Ages {program.ageRange}
          </span>
          <p className="text-lg text-dark-black font-inter">
            {program.description}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 space-y-8">
        {/* This Program is Designed For */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-soft-blue" size={28} />
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
              This Program is Designed For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.designedFor.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-soft-blue flex-shrink-0 mt-1" size={20} />
                <p className="text-dark-black font-inter">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <Star className="text-coral" size={28} />
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
              What You'll Learn
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.whatYouLearn.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 items-start">
                <Star className="text-coral flex-shrink-0 mt-1" size={20} />
                <p className="text-dark-black font-inter">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Information */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black mb-6">
            Program Information
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-dark-black/60 font-inter mb-1">Sessions</p>
              <p className="text-lg font-poppins font-semibold text-dark-black">
                {program.programInfo.sessions}
              </p>
            </div>
            <div>
              <p className="text-sm text-dark-black/60 font-inter mb-1">Projects</p>
              <p className="text-lg font-poppins font-semibold text-dark-black">
                {program.programInfo.projects}
              </p>
            </div>
            <div>
              <p className="text-sm text-dark-black/60 font-inter mb-1">Duration</p>
              <p className="text-lg font-poppins font-semibold text-dark-black">
                {program.programInfo.duration}
              </p>
            </div>
            <div>
              <p className="text-sm text-dark-black/60 font-inter mb-1">Class Size</p>
              <p className="text-lg font-poppins font-semibold text-dark-black">
                {program.programInfo.classSize}
              </p>
            </div>
            <div>
              <p className="text-sm text-dark-black/60 font-inter mb-1">
                Session Length
              </p>
              <p className="text-lg font-poppins font-semibold text-dark-black">
                {program.programInfo.sessionLength}
              </p>
            </div>
            <div>
              <p className="text-sm text-dark-black/60 font-inter mb-1">Format</p>
              <p className="text-lg font-poppins font-semibold text-dark-black">
                {program.programInfo.format}
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.projects.map((project: any, i: number) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-poppins font-semibold text-dark-black mb-2">
                  {project.name}
                </h3>
                <p className="text-dark-black/60 font-inter text-sm">
                  {project.count} Projects
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-dark-black font-poppins font-semibold">
            Total Projects: {program.projects.reduce((sum: number, p: any) => sum + p.count, 0)} Projects
          </p>
        </div>

        {/* Program Outcomes */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-soft-blue" size={28} />
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
              Program Outcomes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.outcomes.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 items-start">
                <Target className="text-soft-blue flex-shrink-0 mt-1" size={20} />
                <p className="text-dark-black font-inter">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-soft-blue" size={28} />
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
              Program Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.benefits.map((item: string, i: number) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="text-soft-blue flex-shrink-0 mt-1" size={20} />
                <p className="text-dark-black font-inter">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Policy */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-dark-black" size={28} />
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-dark-black">
              Program Policy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-poppins font-semibold text-dark-black mb-2">
                Enrollment
              </h3>
              <p className="text-dark-black font-inter">
                {program.policy.enrollment}
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-dark-black mb-2">
                Refund
              </h3>
              <p className="text-dark-black font-inter">
                {program.policy.refund}
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-dark-black mb-2">
                Materials
              </h3>
              <p className="text-dark-black font-inter">
                {program.policy.materials}
              </p>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-dark-black mb-2">
                Support
              </h3>
              <p className="text-dark-black font-inter">
                {program.policy.support}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-soft-blue to-soft-blue/90 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 font-inter mb-8">
            Join {program.name} and transform your future today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="px-8 py-3 bg-white text-soft-blue rounded-lg font-poppins font-semibold hover:bg-gray-100 transition-all"
            >
              Book Now
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-poppins font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
