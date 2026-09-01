"use client";

import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { robotProduct } from "@/data/robot";

export default function RobotHero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#06030B]">
      {/* Full-bleed Deep Space Cosmic Atmosphere */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_40%,rgba(121,22,165,0.22)_0%,rgba(11,4,20,0.8)_50%,#06030B_100%)] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[350px] sm:h-[500px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none -z-10 animate-pulse-slow" 
        aria-hidden="true"
      />

      {/* Floating Starry Dust Background */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none -z-10" />

      {/* Top Header Text Container */}
      <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center z-10 pt-2">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-purple-500/30 text-[10px] sm:text-xs font-mono tracking-widest text-purple-300 mb-3 uppercase shadow-lg shadow-purple-950/50"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
          <span>{robotProduct.hero.eyebrow}</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight leading-[1.08] text-white"
        >
          Meet the Robot{" "}
          <span className="text-gradient-purple">
            That Makes Technology Tangible.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-sm sm:text-base md:text-lg text-muted font-normal max-w-2xl leading-relaxed"
        >
          <span className="text-white font-medium">{robotProduct.tagline}</span>{" "}
          {robotProduct.hero.subtitle}
        </motion.p>
      </div>

      {/* Hero Robot Showcase (Edge-to-Edge Full-Screen Width Experience) */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 25 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl mx-auto flex items-center justify-center my-3 sm:my-4 z-10"
      >
        <div className="relative group w-full flex justify-center items-center">
          {/* Ambient Platform Illumination Under Robot */}
          <div className="absolute bottom-2 w-3/4 max-w-3xl h-16 bg-purple-600/35 blur-3xl rounded-full pointer-events-none" />

          {/* Floating animated wrapper */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotateZ: [-0.4, 0.4, -0.4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full flex justify-center items-center"
          >
            {/* Transparent full-width robot image showcase */}
            <div className="relative w-full flex justify-center items-center">
              <img
                src="/images/robot/hero-robot.webp"
                alt="TechyGuide Educational Smart Robot Platform"
                className="w-full max-w-[650px] sm:max-w-[780px] md:max-w-[900px] lg:max-w-[1000px] max-h-[46vh] sm:max-h-[50vh] object-contain drop-shadow-[0_25px_60px_rgba(168,85,247,0.45)] select-none pointer-events-none filter"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = "/images/robot/hero-robot.webp";
                }}
              />
            </div>
          </motion.div>

          {/* Technical Micro HUD Callouts */}
          <div className="hidden md:flex absolute top-2 left-4 lg:left-8 glass-pill border border-purple-500/30 px-3.5 py-1.5 rounded-xl flex-col gap-0.5 text-left pointer-events-none shadow-xl bg-[#0B0710]/70 backdrop-blur-md">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-purple-400" /> SYSTEM STATUS
            </span>
            <span className="text-xs font-mono text-white font-semibold">ALL SENSORS NOMINAL</span>
          </div>

          <div className="hidden md:flex absolute bottom-2 right-4 lg:right-8 glass-pill border border-purple-500/30 px-3.5 py-1.5 rounded-xl flex-col gap-0.5 text-left pointer-events-none shadow-xl bg-[#0B0710]/70 backdrop-blur-md">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-purple-400" /> ARCHITECTURE
            </span>
            <span className="text-xs font-mono text-white font-semibold">CUSTOM PURPLE PCB V2</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto z-10 pt-3 border-t border-white/5"
      >
        <div className="flex items-center gap-3">
          <a
            href="#technology"
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-purple-100 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-900/40 flex items-center gap-2"
          >
            <span>Explore Interactive 3D</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full glass-panel border-white/15 hover:border-purple-500/50 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all"
          >
            Request Demo
          </a>
        </div>

        {/* Animated Scroll Down Indicator */}
        <a
          href="#intro"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-purple-300 transition-colors group"
        >
          <span>Scroll to Disassemble</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
