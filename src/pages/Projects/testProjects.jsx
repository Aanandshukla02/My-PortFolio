"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ✅ Import images
import codeSavantImg from "../../assets/images/CodeSavant-AI.png";
import reserveMateImg from "../../assets/images/Reservemate.png";
import mealStackImg from "../../assets/images/MealStack.png";
import hotelApiImg from "../../assets/images/Hotel Booking API.png";

const projects = [
  {
    title: "CodeSavant-AI: AI-Powered Code Reviewer",
    description:
      "A production-ready AI code review platform with Node.js/Express.js backend integrated with LangChain + Google Gemini AI for real-time structured code feedback.",
    src: codeSavantImg,
    color: "#f58b57",
    githubLink: "",
    liveLink: "https://codesavant-ai-frontend.onrender.com",
    tech: "Node.js, Express.js, React.js, LangChain, Google Gemini AI",
    date: "Jan 2025 - Feb 2025",
  },
  {
    title: "ReserveMate: Intelligent Restaurant Booking System",
    description:
      "Restaurant reservation system using MERN stack, processing 100+ bookings daily, updating table availability in real-time, and reducing booking errors by 25%.",
    src: reserveMateImg,
    color: "#50bfa0",
    githubLink: "",
    liveLink: "https://reservemate-o9h6.onrender.com",
    tech: "React.js, Node.js, Express.js, MongoDB, JavaScript, CSS",
    date: "Nov 2024 - Jan 2025",
  },
  {
    title: "MealStack: Food Ordering Backend",
    description:
      "A secure Node.js + Express.js backend with JWT authentication and role-based access for Admins and Users, enabling robust food ordering and management operations.",
    src: mealStackImg,
    color: "#5196fd",
    githubLink: "https://github.com/Aanandshukla02/MealStack",
    liveLink: "",
    tech: "Node.js, Express.js, MongoDB, JWT, CORS, Morgan",
    date: "Mar 2025 - Apr 2025",
  },
  {
    title: "Hotel Booking API",
    description:
      "A Node.js + Express.js based backend API for hotel management, featuring MongoDB integration with Mongoose for handling person and menu data. Supports role-based data filtering, schema validation, and real-time booking operations.",
    src: hotelApiImg,
    color: "#e67e22",
    githubLink: "https://github.com/Aanandshukla02/Node_Hotels",
    liveLink: "",
    tech: "Node.js, Express.js, MongoDB, Mongoose, REST API",
    date: "May 2025 – Jun 2025",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const [showIndicator, setShowIndicator] = useState(true);

  // ✅ Track scroll progress to hide/show indicator
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest >= 0.95) {
        setShowIndicator(false); // hide at end
      } else {
        setShowIndicator(true); // show otherwise
      }
    });
  }, [scrollYProgress]);

  return (
    <ReactLenis root>
      <main className="bg-black relative" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                tech={project.tech}
                date={project.date}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* 👇 Scroll Down Indicator (hide at last project) */}
        {showIndicator && (
          <motion.div
            initial={{ y: 0, opacity: 0.6 }}
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white text-sm flex flex-col items-center pointer-events-none z-50"
          >
            <span className="mb-1">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19,12 12,19 5,12" />
            </svg>
          </motion.div>
        )}
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src,
  color,
  tech,
  date,
  githubLink,
  liveLink,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Split Card */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image/Preview */}
          <div className="w-full md:w-[50%] h-[220px] md:h-[380px] lg:h-[420px] relative overflow-hidden bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
            {src ? (
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover opacity-80"
              />
            ) : (
              <span>Project Preview</span>
            )}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-xs md:text-sm">
              Project {i + 1}
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[50%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-2">
                {description}
              </p>
              <p className="text-xs md:text-sm text-gray-500 italic mb-2">
                {tech}
              </p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>

            {/* Links */}
            <div className="mt-4 md:mt-auto pt-4 border-t border-gray-700 flex gap-4">
              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-xs md:text-sm">Code</span>
                </motion.a>
              )}

              {liveLink && (
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs md:text-sm">Live</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
