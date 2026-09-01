"use client";

import { motion } from "framer-motion";
import { robotProduct } from "@/data/robot";
import { CheckCircle2, Shield, Wrench, Sparkles, Cpu } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function EngineeringSection() {
  const pills = [
    "Custom PCB",
    "Modular Hardware",
    "Programmable MCU",
    "Expandable I/O",
    "Classroom Ready",
  ];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 right-10 w-96 h-96 bg-purple-900/15 blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Statement & Engineering Pillars */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-purple-500/20 text-xs font-mono tracking-widest text-purple-400 mb-6 uppercase w-fit">
            <span>ENGINEERING RIGOR // 06</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            Built like an engineering platform.{" "}
            <span className="text-gradient-purple">Designed for learners.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed font-normal">
            {robotProduct.engineering.description}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {pills.map((pill) => (
              <span
                key={pill}
                className="px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-mono text-purple-300 tracking-wider uppercase hover:border-purple-400/60 hover:text-white transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Feature Checklist */}
          <div className="mt-10 space-y-3.5">
            {robotProduct.engineering.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-sm sm:text-base text-muted-light font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Platform Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 rounded-3xl glass-panel border-purple-500/20 p-6 sm:p-8 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                HARDWARE OVERVIEW
              </span>
              <Cpu className="w-4 h-4 text-purple-400" />
            </div>

            <img
              src={getAssetPath("/images/robot/hero-robot.webp")}
              alt="TechyGuide Robot Chassis and Wheels Engineering"
              className="w-full max-w-[340px] mx-auto h-auto object-contain my-4 drop-shadow-[0_10px_30px_rgba(121,22,165,0.4)]"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = getAssetPath("/images/robot/hero-robot.webp");
              }}
            />
          </div>

          <div className="relative z-10 pt-4 border-t border-purple-500/15 grid grid-cols-2 gap-4 text-left">
            <div>
              <div className="text-[10px] font-mono text-muted uppercase">MATERIALS</div>
              <div className="text-xs font-semibold text-white mt-0.5">FR-4, BRASS, NITRILE</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-muted uppercase">POWER DRAW</div>
              <div className="text-xs font-semibold text-white mt-0.5">5V / 500MA REGULATED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
