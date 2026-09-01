"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Zap, Radio, Disc, KeyRound, Sparkles } from "lucide-react";

export default function IntelligenceSection() {
  const pcbNodes = [
    {
      label: "SENSING",
      desc: "Dual ultrasonic ping & echo timing controller",
      icon: <Radio className="w-4 h-4 text-purple-400" />,
      pos: "top-4 left-4 sm:top-8 sm:left-8",
    },
    {
      label: "MOTION",
      desc: "H-bridge dual channel PWM motor drivers",
      icon: <Disc className="w-4 h-4 text-purple-400" />,
      pos: "top-4 right-4 sm:top-8 sm:right-8",
    },
    {
      label: "LOGIC",
      desc: "High-speed 32-bit embedded microcontroller",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      pos: "bottom-4 left-4 sm:bottom-8 sm:left-8",
    },
    {
      label: "POWER",
      desc: "Regulated battery management & voltage rail",
      icon: <Zap className="w-4 h-4 text-purple-400" />,
      pos: "bottom-4 right-4 sm:bottom-8 sm:right-8",
    },
    {
      label: "INPUT / EXPANSION",
      desc: "USB programming & sensor bus breakouts",
      icon: <KeyRound className="w-4 h-4 text-purple-400" />,
      pos: "top-1/2 -translate-y-1/2 right-4 sm:right-6",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Ambient background illumination */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-900/20 blur-[180px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="EMBEDDED COMPUTING // 04"
        title={
          <>
            THE BRAIN <br />
            <span className="text-gradient-purple">IS THE BOARD.</span>
          </>
        }
        subtitle="Every decision begins here. A unified custom purple PCB integrating computing logic, sensory inputs, motor power stages, and USB communication directly."
      />

      {/* Main Interactive PCB Visualizer */}
      <div className="relative mt-12 rounded-3xl glass-panel border border-purple-500/20 p-6 sm:p-10 overflow-hidden">
        {/* Animated Background Circuit Pulse Lines */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* PCB Image Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-1/2 flex justify-center items-center py-6"
          >
            {/* Pulsing Core Glow */}
            <div className="absolute w-64 h-64 bg-purple-600/30 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

            <div className="relative group">
              <img
                src="/images/robot/hero-robot.webp"
                alt="TechyGuide Custom Purple Robotics PCB Architecture"
                className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_15px_45px_rgba(121,22,165,0.5)] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/robot/hero-robot.webp";
                }}
              />

              {/* Glowing Pulse Rings on Chip Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-purple-400/50 animate-ping pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-400/20 blur-sm pointer-events-none" />
            </div>
          </motion.div>

          {/* Subsystem Callout Nodes */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pcbNodes.map((node, idx) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between border-purple-500/15"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-purple-950/70 border border-purple-500/30">
                    {node.icon}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-purple-400 font-semibold">
                    BUS 0{idx + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight uppercase">
                    {node.label}
                  </h4>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical PCB Specs Ribbon */}
        <div className="mt-8 pt-6 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>SUBSTRATE: FR-4 MATTE PURPLE SOLDERMASK</span>
          </div>
          <div>IO: GPIO / PWM / I2C / UART / USB-C</div>
        </div>
      </div>
    </section>
  );
}
