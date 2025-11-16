import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-poppins font-bold text-soft-blue mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl text-dark-black mb-4 font-inter">
          Oops! Page not found
        </p>
        <p className="text-dark-black mb-8 font-inter">
          The page you're looking for doesn't exist yet, but check back soon!
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-soft-blue text-white rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
