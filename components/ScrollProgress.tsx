"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #7C3AED 0%, #A855F7 50%, #C084FC 100%)",
        boxShadow: "0 0 10px rgba(168, 85, 247, 0.7)"
      }}
    />
  );
}
