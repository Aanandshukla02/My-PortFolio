import React, { useState } from "react";
import { Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      type: "college",
      degree: "B.Tech in Electronics and Communication Engineering",
      school: "Indian Institute of Information Technology, Nagpur",
      mascot: "🎓",
      year: "Nov 2022 – Jun 2026",
      description:
        "Relevant Coursework: Data Structures, Algorithms, Operating Systems, OOP, Computer Networks, Database Management Systems",
    },
    {
      type: "school10",
      degree: "Secondary School Certificate (Class X)",
      school: "SMT D Singh, Doorwani Nagar, Naini, Prayagraj, Uttar Pradesh",
      mascot: "📘",
      year: "2020",
      description: "Completed Class 10th with strong academic foundation.",
    },
    {
      type: "school12",
      degree: "Senior School Certificate (Class XII)",
      school: "SMT D Singh, Doorwani Nagar, Naini, Prayagraj, Uttar Pradesh",
      mascot: "📗",
      year: "2022",
      description: "Completed Class 12th in Science Stream.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A look at my academic journey from school to college.
          </p>
        </motion.div>

        {/* Custom Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* College Card */}
          <motion.div
            variants={cardVariants}
            className={`relative md:col-span-2 border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
              hoveredIndex === 0
                ? "border-teal-500 scale-[1.02]"
                : "border-blue-400/20"
            } order-1 md:order-1`} // 👈 Mobile me pehla, desktop me same
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="space-y-4 text-center">
              <div className="flex justify-center items-center gap-3">
                <span className="text-3xl">{educationData[0].mascot}</span>
                <h3 className="text-2xl font-bold text-white">
                  {educationData[0].degree}
                </h3>
              </div>
              <p className="text-lg text-gray-300 flex justify-center items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-500" />
                {educationData[0].school}
              </p>
              <p className="text-gray-400 flex justify-center items-center gap-2">
                <Calendar className="w-4 h-4" />
                {educationData[0].year}
              </p>
              <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                {educationData[0].description}
              </p>
            </div>
          </motion.div>

          {/* 12th Card */}
          <motion.div
            variants={cardVariants}
            className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
              hoveredIndex === 2
                ? "border-teal-500 scale-[1.02]"
                : "border-blue-400/20"
            } order-2 md:order-3`} // 👈 Mobile me dusra, desktop me right
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{educationData[2].mascot}</span>
                <h3 className="text-xl font-bold text-white">
                  {educationData[2].degree}
                </h3>
              </div>
              <p className="text-lg text-gray-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-500" />
                {educationData[2].school}
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {educationData[2].year}
              </p>
              <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                {educationData[2].description}
              </p>
            </div>
          </motion.div>

          {/* 10th Card */}
          <motion.div
            variants={cardVariants}
            className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
              hoveredIndex === 1
                ? "border-teal-500 scale-[1.02]"
                : "border-blue-400/20"
            } order-3 md:order-2`} // 👈 Mobile me last, desktop me left
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{educationData[1].mascot}</span>
                <h3 className="text-xl font-bold text-white">
                  {educationData[1].degree}
                </h3>
              </div>
              <p className="text-lg text-gray-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-500" />
                {educationData[1].school}
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {educationData[1].year}
              </p>
              <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                {educationData[1].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
