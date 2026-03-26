import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Brain, Keyboard, Bot, Code, BarChart } from 'lucide-react';

const projects = [
  {
    title: 'TYPING MOOD DETECTOR',
    description: 'AI-powered system that analyzes typing patterns to detect emotional states in real-time using machine learning algorithms.',
    impact: 'Enhanced emotional intelligence in digital communication',
    metrics: ['92% accuracy', 'Real-time analysis', 'ML-powered'],
    tech: ['Python', 'Machine Learning', 'TensorFlow', 'NLP'],
    icon: Brain,
    year: '2024',
    github: 'https://github.com/thabiseelumounika/TYPING_MOOD_DETECTOR',
    demo: '#'
  },
  {
    title: 'NEO MIND',
    description: 'Advanced AI agent system with autonomous decision-making capabilities and adaptive learning mechanisms.',
    impact: 'Revolutionary approach to autonomous AI systems',
    metrics: ['Autonomous', 'Adaptive Learning', 'Decision Making'],
    tech: ['Python', 'LangGraph', 'AI Agents', 'Neural Networks'],
    icon: Bot,
    year: '2024',
    github: 'https://github.com/thabiseelumounika/NEO_MIND',
    demo: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Premium portfolio with AI-powered interactions, glassmorphism design, and seamless animations.',
    impact: 'Professional digital presence with 10/10 aesthetic',
    metrics: ['React', 'Framer Motion', 'Glassmorphism'],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    icon: Code,
    year: '2024',
    github: 'https://github.com/thabiseelumounika',
    demo: '#'
  },
  {
    title: 'Data Analytics Platform',
    description: 'Comprehensive data visualization and analytics dashboard with real-time processing capabilities.',
    impact: 'Data-driven decision making for businesses',
    metrics: ['Real-time', 'Interactive', 'Scalable'],
    tech: ['Python', 'React', 'D3.js', 'PostgreSQL'],
    icon: BarChart,
    year: '2023',
    github: 'https://github.com/thabiseelumounika',
    demo: '#'
  },
];

const TiltCard = ({ project, index, isInView }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setTilt({
      x: (x - 0.5) * 10,
      y: (y - 0.5) * -10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        rotateX: tilt.y,
        rotateY: tilt.x
      } : {}}
      transition={{ 
        opacity: { duration: 0.6, delay: index * 0.1 },
        y: { duration: 0.6, delay: index * 0.1 },
        rotateX: { duration: 0.2 },
        rotateY: { duration: 0.2 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px rgba(255, 107, 157, 0.3)",
        transition: { duration: 0.3 }
      }}
      data-cursor="pointer"
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Header */}
      <div className="relative p-8 pb-0">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center">
            <project.icon className="w-7 h-7 text-[var(--accent-primary)]" />
          </div>
          <span className="text-xs text-[var(--text-muted)] font-mono">{project.year}</span>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
          {project.title}
        </h3>
        
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Impact Statement */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          {project.impact}
        </div>

        {/* Metric badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.map((metric, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)] text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] animate-pulse" />
              {metric}
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="px-8 pb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-white/5 text-xs text-[var(--text-secondary)] hover:text-white hover:bg-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
            whileHover={{ x: 4 }}
            data-cursor="pointer"
          >
            <Github className="w-4 h-4" />
            View Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors"
            whileHover={{ x: 4 }}
            data-cursor="pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
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
            04 — Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Projects that define me
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl">
            Each project represents a problem I wanted to solve. From neural networks 
            to AI agents, these are my learning journeys turned into code.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/thabiseelumounika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium hover:shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-cursor="pointer"
          >
            <Github className="w-5 h-5" />
            Explore More on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
