"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { robotProduct } from "@/data/robot";
import { GraduationCap, Sparkles, BookOpen, Check } from "lucide-react";

export default function LearningSection() {
  const modules = [
    {
      num: "01",
      title: "Introduction to Robotics",
      desc: "Anatomy of an autonomous robot, understanding actuators, sensors, and the control loop.",
    },
    {
      num: "02",
      title: "Electronics Fundamentals",
      desc: "Circuit theory, voltage rails, GPIO states, Ohm's law in practice, and microcontroller pins.",
    },
    {
      num: "03",
      title: "Motor Control & PWM",
      desc: "H-bridge drivers, directional truth tables, PWM frequency modulation, and speed ramps.",
    },
    {
      num: "04",
      title: "Sensor Programming",
      desc: "Ultrasonic echo timing, converting microseconds to centimeters, filtering noise and false echoes.",
    },
    {
      num: "05",
      title: "Obstacle Avoidance & Decision Logic",
      desc: "Finite state machines, conditional branches, reactive steering, and collision recovery.",
    },
    {
      num: "06",
      title: "Autonomous Navigation",
      desc: "Dead reckoning, proportional turning algorithms, wall following, and maze solving.",
    },
    {
      num: "07",
      title: "IoT & Wireless Expansion",
      desc: "Telemetry streaming, wireless command packets, external sensor modules, and cloud dashboards.",
    },
    {
      num: "08",
      title: "AI & Embedded Machine Learning",
      desc: "Pattern recognition, edge ML concepts, predictive path planning, and autonomous behaviors.",
    },
  ];

  return (
    <section id="learning" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-purple-500/10">
      {/* Background ambient lighting with soft purple tone */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-800/15 blur-[180px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="CURRICULUM ROADMAP // 07"
        title={
          <>
            FROM FIRST CODE <br />
            <span className="text-gradient-purple">TO AUTONOMOUS ROBOTICS.</span>
          </>
        }
        subtitle="A laboratory on wheels. One continuous hardware platform that grows alongside students from basic block coding to advanced embedded C++ and AI algorithms."
      />

      {/* Vertical Learning Timeline */}
      <div className="relative mt-16 sm:mt-20">
        {/* Continuous Center Vertical Line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500/80 via-purple-400/40 to-purple-600/10 pointer-events-none" />

        <div className="space-y-8 sm:space-y-12">
          {modules.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Center Glowing Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full glass-panel border border-purple-400/60 bg-[#0B0710] flex items-center justify-center z-20 shadow-lg shadow-purple-900/60">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                </div>

                {/* Content Card (Left or Right on desktop) */}
                <div className={`w-full sm:w-[calc(50%-32px)] pl-12 sm:pl-0 ${
                  isEven ? "sm:pr-4 sm:text-right" : "sm:pl-4 sm:text-left"
                }`}>
                  <div className="p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover border-purple-500/20 group">
                    <div className={`flex items-center gap-2 mb-2 ${
                      isEven ? "sm:justify-end" : "sm:justify-start"
                    }`}>
                      <span className="font-mono text-xs text-purple-400 font-bold tracking-widest uppercase">
                        PHASE {item.num}
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
