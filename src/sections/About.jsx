import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Brain } from 'lucide-react';

const stats = [
  { num: '3+', label: 'Years Coding', icon: Code2 },
  { num: '10+', label: 'Projects', icon: Brain },
  { num: '2', label: 'Internships', icon: GraduationCap },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
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
            02 — About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - Large typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
              Building <span className="gradient-text">intelligent systems</span>{' '}
              that solve real problems
            </h2>
            
            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
              <p>
                I'm Mounika Thabiseelu, an AI & Data Science undergraduate at 
                <span className="text-white"> Kakinada Institute of Engineering and Technology</span>. 
                My journey into tech started with a curiosity about how machines can learn — 
                and evolved into building full-stack AI applications.
              </p>
              <p>
                I've developed <span className="text-[var(--accent-cyan)]">typing mood detection systems</span> using 
                neural networks, created <span className="text-[var(--accent-purple)]">personal AI assistants</span> with 
                local LLMs, and architected secure data pipelines for production applications.
              </p>
              <p>
                What drives me? The intersection of intelligence and impact. I believe the best 
                code is the kind that makes someone's day easier.
              </p>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mt-8 text-[var(--text-muted)]"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in Kakinada, AP, India</span>
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-4 group hover:bg-white/5 transition-colors"
                data-cursor="pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-pink)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[var(--accent-pink)]" />
                </div>
                <div>
                  <span className="text-3xl font-display font-bold text-white">{stat.num}</span>
                  <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
                </div>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-6 mt-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-purple)]/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <h4 className="font-medium text-white">B.Tech in CSE (AI & DS)</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Kakinada Institute of Engineering and Technology</p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">2022 — 2026</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
