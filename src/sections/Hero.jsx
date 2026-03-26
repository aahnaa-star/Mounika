import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const AnimatedName = ({ text, isInView }) => {
  const letters = text.split('');
  
  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
          } : {}}
          transition={{
            duration: 0.6,
            delay: 0.4 + index * 0.08,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="inline-block"
          style={{ display: 'inline-block' }}
        >
          <motion.span
            animate={isInView ? {
              y: [0, -8, 0],
            } : {}}
            transition={{
              duration: 2,
              delay: 1.5 + index * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block gradient-text-subtle"
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="py-16 px-6 lg:px-12 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium Lighting Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] -top-32 -right-32"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)] tracking-widest uppercase">
                01 — AI & Data Science Student
              </span>
            </motion.div>

            {/* Main Heading with animated name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
            >
              <AnimatedName text="Mounika" isInView={isInView} />
              <br />
              <motion.span 
                className="text-white inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.span
                  animate={isInView ? { y: [0, -5, 0] } : {}}
                  transition={{
                    duration: 3,
                    delay: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  Thabiseelu
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed"
            >
              <span className="text-white font-semibold">AI Engineer</span> building 
              <span className="text-[var(--accent-secondary)]"> intelligent systems</span> that 
              <span className="text-[var(--accent-primary)]"> solve real problems</span>. 
              <br className="hidden md:block" />
              <span className="text-sm md:text-base opacity-80">
                3+ years • 10+ projects • Specialized in ML agents
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="pointer"
                data-cursor-text="View"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent-orange)]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-cursor="pointer"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Clean Illustration with Depth */}
          <motion.div
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Glow Behind Illustration */}
            <div 
              className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
              style={{
                background: 'linear-gradient(to bottom right, rgba(99,102,241,0.2), rgba(168,85,247,0.2))',
                filter: 'blur(3xl)',
              }}
            />

            {/* Main Illustration - Desktop Only */}
            <motion.img
              src="/hero.png" 
              alt="Hero Illustration"
              className="hidden lg:block absolute right-10 top-[40%] -translate-y-1/2 w-[380px] md:w-[450px] lg:w-[500px] opacity-95 z-10"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                filter: "brightness(0.9) contrast(1.1) saturate(0.9)",
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                console.log('Hero image not loaded, using fallback design');
              }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            data-cursor="pointer"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
