import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 border-t border-white/5 py-6 px-6 sm:px-12 lg:px-24 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/5 rounded-full blur-xl opacity-30" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-br from-[var(--accent-secondary)]/10 to-[var(--accent-pink)]/5 rounded-full blur-2xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-[var(--accent-pink)]/8 to-[var(--accent-primary)]/3 rounded-full blur-lg opacity-15" />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="glass p-6 rounded-2xl">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            {/* Left */}
            <div className="flex flex-col items-center gap-0.5 md:items-start">
              <span className="text-base font-semibold text-white">Mounika Thabiseelu</span>
              <p className="text-[var(--accent-primary)]/80 text-xs">Built with passion, powered by Aahnaa Technologies</p>
              <p className="text-xs text-gray-400/80 text-center md:text-left">
                © 2026 Mounika Thabiseelu. Crafting intelligent experiences.
              </p>
            </div>

            {/* Center - Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-400/80 transition-all duration-300 hover:text-white hover:border-white/20"
              whileHover={{ y: -1, scale: 1.02 }}
            >
              Back to top
              <ArrowUpRight size={10} />
            </motion.button>

            {/* Right - Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/thabiseelumounika"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-3 py-1.5 rounded-full text-xs text-gray-400/80 transition-all duration-300 hover:text-white hover:border-white/20"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mounika-thabiseelu-5bbb25313/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-3 py-1.5 rounded-full text-xs text-gray-400/80 transition-all duration-300 hover:text-white hover:border-white/20"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
