import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import flower from "/flower.png";

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1, glow: false });
  const [particles, setParticles] = useState([]);
  const [blooms, setBlooms] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse move (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setPos({ x, y, scale: 1, glow: false });

      // 🔥 Enhanced cursor interaction with important elements
      const target = e.target.closest('[data-cursor]');
      if (target) {
        // Increase glow/scale for important elements
        setPos({ x, y, scale: 1.3, glow: true });
      }

      // 🌸 Reduced petal trail for premium feel
      if (Math.random() > 0.7) { // Less frequent
        const newParticle = {
          id: Math.random(),
          x,
          y,
          angle: Math.random() * 2 * Math.PI,
          scale: 0.3 + Math.random() * 0.2,
          rotate: Math.random() * 180,
        };

        setParticles((prev) => [...prev.slice(-8), newParticle]); // Reduced trail
      }
    };

    // 🌺 Bloom on click
    const handleClick = (e) => {
      const bloom = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setBlooms((prev) => [...prev, bloom]);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* MAIN CURSOR - Desktop Only */}
      {!isMobile && (
        <div
          style={{
            position: "fixed",
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <img
            src={flower}
            alt="cursor"
            style={{
              width: pos.scale ? `${28 * pos.scale}px` : "28px", // Smaller base size
              height: pos.scale ? `${28 * pos.scale}px` : "28px",
              filter: pos.glow 
                ? "drop-shadow(0 0 15px rgba(255, 105, 180, 0.8))" 
                : "drop-shadow(0 0 8px rgba(255, 105, 180, 0.6))",
              transition: "all 0.4s ease-out", // Smoother transition
            }}
          />
        </div>
      )}

      {/* PETAL TRAIL - Desktop Only */}
      {!isMobile && (
        <AnimatePresence>
          {particles.map((p) => (
            <motion.img
              key={p.id}
              src={flower}
              style={{
                position: "fixed",
                left: p.x,
                top: p.y,
                width: "8px", // Smaller petals
                height: "8px",
                pointerEvents: "none",
                zIndex: 9997,
              }}
              initial={{
                scale: p.scale,
                rotate: p.rotate,
                opacity: 0.6, // More subtle
              }}
              animate={{
                x: Math.cos(p.angle) * 30, // Smaller spread
                y: Math.sin(p.angle) * 30,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.2, // Slower fade
                ease: "easeOut",
              }}
            />
          ))}
        </AnimatePresence>
      )}

      {/* CLICK BLOOM EFFECT */}
      <AnimatePresence>
        {blooms.map((b) => (
          <motion.img
            key={b.id}
            src={flower}
            style={{
              position: "fixed",
              left: b.x,
              top: b.y,
              width: "20px",
              height: "20px",
              pointerEvents: "none",
              zIndex: 9998,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => {
              setBlooms((prev) => prev.filter((x) => x.id !== b.id));
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default CursorFollower;