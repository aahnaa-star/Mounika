import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experience = [
  {
    id: 1,
    title: 'AI Research Intern',
    company: 'Tech Innovation Lab',
    period: 'Jan 2024 - Present',
    description: [
      'Developed ML models for real-time data analysis',
      'Improved prediction accuracy by 35% using ensemble methods',
      'Collaborated with cross-functional team of 8 developers'
    ],
    icon: Briefcase
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions Inc',
    period: 'Jun 2023 - Dec 2023',
    description: [
      'Built responsive web applications using React and Node.js',
      'Implemented RESTful APIs and database architectures',
      'Reduced page load time by 40% through optimization'
    ],
    icon: Briefcase
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 px-6 lg:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-white text-sm font-medium tracking-widest uppercase">
            05 — Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] transform -translate-x-1/2 md:left-1/2"
          />

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut"
                }}
                className="relative flex items-start gap-6 md:gap-8 lg:gap-12"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.4 + index * 0.1,
                    type: "spring"
                  }}
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] p-2 md:p-3 shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(255, 107, 157, 0.4)"
                  }}
                >
                  <exp.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  className="flex-1 glass rounded-2xl p-4 md:p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(255, 107, 157, 0.2)"
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--accent-primary)] font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-[var(--text-muted)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.6 + index * 0.1 + itemIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
