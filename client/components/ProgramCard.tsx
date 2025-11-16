import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ProgramCardProps {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  icon: ReactNode;
  image?: string;
}

export default function ProgramCard({
  id,
  name,
  ageRange,
  description,
  icon,
}: ProgramCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Icon */}
      <div className="mb-4 text-soft-blue text-4xl">{icon}</div>

      {/* Age Badge */}
      <span className="inline-flex w-fit px-3 py-1 bg-cream text-soft-blue text-xs font-poppins font-semibold rounded-full mb-3">
        Ages {ageRange}
      </span>

      {/* Title */}
      <h3 className="text-xl font-poppins font-bold text-dark-black mb-2">
        {name}
      </h3>

      {/* Description */}
      <p className="text-dark-black text-sm font-inter mb-6 flex-grow">
        {description}
      </p>

      {/* Button */}
      <Link
        to={`/program/${id}`}
        className="inline-flex items-center gap-2 text-soft-blue font-inter font-semibold hover:gap-3 transition-all"
      >
        View Program
        <ArrowRight size={18} />
      </Link>
    </div>
  );
}
