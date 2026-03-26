import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const skillsData = [
  {
    title: "Languages",
    points: [
      "Python",
      "SQLite",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    title: "AI / ML",
    points: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "Ollama (Local LLMs)",
    ],
  },
  {
    title: "Web Dev",
    points: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Flask Framework",
      "React",
    ],
  },
  {
    title: "Tools",
    points: [
      "GitHub",
      "VS Code",
      "Google Colab",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Concepts",
    points: [
      "Data Preprocessing",
      "Model Building & Evaluation",
      "Autonomous AI Agents",
      "LangGraph",
    ],
  },
  {
    title: "Soft Skills",
    points: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Adaptability",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 px-6 lg:px-12 relative overflow-hidden min-h-screen"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5 rounded-full blur-xl opacity-40" />
        <div className="absolute top-40 right-32 w-40 h-40 bg-gradient-to-br from-[var(--accent-secondary)]/10 to-[var(--accent-pink)]/5 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-gradient-to-br from-[var(--accent-pink)]/8 to-[var(--accent-primary)]/3 rounded-full blur-lg opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-white text-sm font-medium tracking-widest uppercase">
            03 — Technical Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Skills that{" "}
            <span className="gradient-text">drive innovation</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Proficient in AI/ML technologies, web development, and data science with a strong foundation in modern tools and methodologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Glass Container with Gradient Border */}
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-[var(--accent-pink)]/20">
            <div className="backdrop-blur-xl bg-white/3 border border-white/5 rounded-2xl p-8 h-full shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
              
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + index * 0.15,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(59, 130, 246, 0.05)"
                    }}
                    className="glass p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5 flex items-center justify-center"
                      >
                        <span className="text-2xl font-bold text-white">
                          {index === 0 ? '💻' : index === 1 ? '🤖' : index === 2 ? '🌐' : index === 3 ? '🛠️' : index === 4 ? '🧠' : '👥'}
                        </span>
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        {skill.title}
                      </h3>
                    </div>

                    {/* Skills Buttons */}
                    <div className="space-y-3">
                      {skill.points.map((point, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.8 + index * 0.15 + i * 0.05,
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            x: 8,
                            scale: 1.02,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 via-[var(--accent-secondary)]/10 to-[var(--accent-pink)]/10 hover:from-[var(--accent-primary)]/20 hover:via-[var(--accent-secondary)]/20 hover:to-[var(--accent-pink)]/20 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 text-left group relative overflow-hidden"
                        >
                          {/* Gradient overlay for premium feel */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 via-[var(--accent-secondary)]/5 to-[var(--accent-pink)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Soft glow effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Content */}
                          <div className="relative flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-colors duration-300 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                              {point}
                            </span>
                          </div>
                          
                          {/* Shimmer effect for premium feel */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Programming Languages', value: '6+' },
            { label: 'AI/ML Libraries', value: '5+' },
            { label: 'Development Tools', value: '4+' },
            { label: 'Core Concepts', value: '4+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: 1.2 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.05)"
              }}
              className="glass p-6 rounded-xl text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
