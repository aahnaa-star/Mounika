import { motion } from 'framer-motion';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
      
      {/* Animated blobs */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--accent-orange)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="grad3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-secondary)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.05" />
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>
        
        {/* Blob 1 - Top right */}
        <motion.ellipse
          cx="80%"
          cy="20%"
          rx="400"
          ry="350"
          fill="url(#grad1)"
          filter="url(#blur)"
          animate={{
            cx: ['75%', '85%', '80%'],
            cy: ['15%', '25%', '20%'],
            rx: [350, 450, 400],
            ry: [300, 400, 350],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Blob 2 - Bottom left */}
        <motion.ellipse
          cx="20%"
          cy="80%"
          rx="300"
          ry="400"
          fill="url(#grad2)"
          filter="url(#blur)"
          animate={{
            cx: ['15%', '25%', '20%'],
            cy: ['75%', '85%', '80%'],
            rx: [250, 350, 300],
            ry: [350, 450, 400],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Blob 3 - Center */}
        <motion.ellipse
          cx="50%"
          cy="50%"
          rx="250"
          ry="200"
          fill="url(#grad3)"
          filter="url(#blur)"
          animate={{
            cx: ['45%', '55%', '50%'],
            cy: ['45%', '55%', '50%'],
            rx: [200, 300, 250],
            ry: [150, 250, 200],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
};

export default LiquidBackground;
