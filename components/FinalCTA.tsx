"use client";

import { motion } from "framer-motion";
import { robotProduct } from "@/data/robot";
import { ArrowRight, Sparkles, Send } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[95vh] w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-28 overflow-hidden bg-background border-t border-purple-500/15"
    >
      {/* Intense Center Radial Spotlight & Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[850px] h-[340px] sm:h-[600px] md:h-[850px] rounded-full bg-gradient-to-tr from-purple-900/40 via-purple-600/25 to-transparent blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] rounded-full bg-purple-500/20 blur-[90px] pointer-events-none -z-10 animate-pulse-slow" 
        aria-hidden="true"
      />

      {/* Enormous Low-Opacity Background Typography Behind Robot */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[14vw] sm:text-[16vw] font-extrabold uppercase leading-[0.8] text-white/[0.03] tracking-tighter whitespace-nowrap">
          BUILD
        </span>
        <span className="text-[14vw] sm:text-[16vw] font-extrabold uppercase leading-[0.8] text-purple-500/[0.04] tracking-tighter whitespace-nowrap">
          THE
        </span>
        <span className="text-[14vw] sm:text-[16vw] font-extrabold uppercase leading-[0.8] text-white/[0.03] tracking-tighter whitespace-nowrap">
          FUTURE
        </span>
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-purple-500/30 text-[11px] font-mono tracking-widest text-purple-300 mb-6 uppercase"
        >
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span>INNOVATION IN THE CLASSROOM</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white max-w-3xl"
        >
          {robotProduct.purchase.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg sm:text-2xl text-muted font-normal max-w-xl leading-relaxed"
        >
          {robotProduct.purchase.subtitle}
        </motion.p>

        {/* Center Robot Visual Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="my-8 sm:my-10 relative flex justify-center items-center w-full max-w-md"
        >
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/robot/hero-robot.webp"
              alt="TechyGuide Smart Robot Purchase Overview"
              className="w-full max-w-[380px] sm:max-w-[440px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(121,22,165,0.5)]"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/images/robot/hero-robot.webp";
              }}
            />
          </motion.div>
        </motion.div>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="mailto:demo@techyguide.com?subject=Request%20TechyGuide%20Robot%20Demo"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-purple-100 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-950/50 flex items-center justify-center gap-2.5 group"
          >
            <span>{robotProduct.purchase.buttonPrimary}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="mailto:sales@techyguide.com?subject=Get%20a%20Quote%20for%20TechyGuide%20Robot"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-white/20 hover:border-purple-400/80 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2.5"
          >
            <span>{robotProduct.purchase.buttonSecondary}</span>
            <Send className="w-3.5 h-3.5 text-purple-400" />
          </a>
        </motion.div>

        {/* Micro Support Guarantee Text */}
        <div className="mt-8 text-xs font-mono text-muted/70 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>EDUCATIONAL INSTITUTION & LAB DISCOUNTS AVAILABLE</span>
        </div>
      </div>
    </section>
  );
}
