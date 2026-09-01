"use client";

import { motion } from "framer-motion";
import { ArrowRight, Binary, Cpu, Disc, Move } from "lucide-react";

export default function MotionSection() {
  const steps = [
    {
      step: "01",
      title: "READ INPUT",
      sub: "Sensor Telemetry",
      description: "Ultrasonic sensor samples distance every 10 milliseconds, sending pulse-width timing values to the MCU.",
      icon: <Binary className="w-5 h-5 text-purple-400" />,
    },
    {
      step: "02",
      title: "PROCESS LOGIC",
      sub: "Control Algorithm",
      description: "Student code evaluates conditional logic, determining target velocity, steering angle, and obstacle avoidance thresholds.",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
    },
    {
      step: "03",
      title: "CONTROL MOTORS",
      sub: "PWM Signal Generation",
      description: "High-frequency PWM signals modulate voltage to left and right motor drivers independently for differential speed.",
      icon: <Disc className="w-5 h-5 text-purple-400" />,
    },
    {
      step: "04",
      title: "PHYSICAL MOTION",
      sub: "Execution & Feedback",
      description: "High-traction rubber wheels rotate with brass hub precision, translating binary logic into fluid physical motion.",
      icon: <Move className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section id="motion" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Background illumination */}
      <div 
        className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-purple-900/15 blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      {/* Giant Typography Header */}
      <div className="flex flex-col mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-purple-500/20 text-xs font-mono tracking-widest text-purple-400 mb-6 uppercase w-fit">
          <span>EXECUTION PIPELINE // 05</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] text-white uppercase"
        >
          CODE <br />
          <span className="text-gradient-purple">BECOMES</span> <br />
          MOVEMENT.
        </motion.h2>

        <p className="mt-6 text-base sm:text-xl text-muted max-w-2xl leading-relaxed">
          Watch lines of student code transform in microseconds into precise mechanical action through an uninterrupted control loop.
        </p>
      </div>

      {/* 4 Connected Stages with Animated Progress Path */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((stage, idx) => (
          <motion.div
            key={stage.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between relative group min-h-[260px]"
          >
            {/* Top Row: Number & Icon */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                  STAGE {stage.step}
                </span>
                <span className="p-2.5 rounded-xl bg-purple-950/70 border border-purple-500/30 group-hover:border-purple-400 transition-colors">
                  {stage.icon}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight uppercase group-hover:text-purple-200 transition-colors">
                {stage.title}
              </h3>
              <p className="text-[11px] font-mono text-purple-400/90 tracking-wider uppercase mt-0.5">
                {stage.sub}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-muted mt-4 leading-relaxed">
              {stage.description}
            </p>

            {/* Arrow connecting to next stage */}
            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-purple-500/40">
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
