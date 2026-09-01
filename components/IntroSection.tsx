"use client";

import { motion } from "framer-motion";
import { robotProduct } from "@/data/robot";
import { Cpu, Compass, Sliders, Layers } from "lucide-react";

export default function IntroSection() {
  const statIcons = [
    <Compass key="drive" className="w-5 h-5 text-purple-400" />,
    <Sliders key="sensing" className="w-5 h-5 text-purple-400" />,
    <Cpu key="prog" className="w-5 h-5 text-purple-400" />,
    <Layers key="learn" className="w-5 h-5 text-purple-400" />,
  ];

  return (
    <section id="intro" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 blur-[120px] pointer-events-none -z-10" />

      {/* Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Big Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-purple-500/20 text-xs font-mono tracking-widest text-purple-400 mb-6 uppercase w-fit">
            <span>PHILOSOPHY // 01</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
            Not another toy. <br />
            <span className="text-gradient-purple">A real robotics platform.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-xl">
            Students don&apos;t just watch technology work. They understand <span className="text-white font-medium">why</span> it works.
          </p>

          <p className="mt-4 text-base text-muted/80 leading-relaxed max-w-xl">
            {robotProduct.description}
          </p>
        </motion.div>

        {/* Right Column: 4 Stat Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {robotProduct.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between min-h-[140px] relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors">
                  {statIcons[idx]}
                </span>
                <span className="text-[10px] font-mono text-purple-400/70 uppercase">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-mono tracking-wider text-muted uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
