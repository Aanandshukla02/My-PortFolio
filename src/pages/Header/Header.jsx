import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });

  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
  }, [location.pathname]);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "education", icon: FaGraduationCap, text: "Education", path: "/education" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md py-3">
      <div className="flex justify-center px-2 sm:px-6">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x w-full max-w-[900px]">
          <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-2 sm:px-6 py-1.5 sm:py-2.5">
            <div
              className="flex items-center justify-between gap-2
                         overflow-x-auto sm:overflow-x-visible
                         scrollbar-hide
                         w-full"
            >
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => setActiveLink(id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full
                    font-medium
                    transition-all duration-300
                    hover:bg-white/10
                    ${
                      activeLink === id
                        ? "bg-white/15 text-white"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    className={`text-base sm:text-lg ${
                      activeLink === id ? "scale-110" : ""
                    }`}
                  />
                  {/* Responsive & scalable text */}
                  <span
                    className={`${
                      activeLink === id ? "inline" : "hidden sm:inline"
                    }`}
                    style={{
                      fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)", // small on mobile, normal on larger
                      whiteSpace: "nowrap",
                    }}
                  >
                    {text}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}
