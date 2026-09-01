"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Radio, Activity, CheckCircle, Wifi, Gauge } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function SensorSection() {
  const [distance, setDistance] = useState(34.8);

  // Simulated live telemetry readout
  useEffect(() => {
    const interval = setInterval(() => {
      // Oscillate distance between 28.4 and 42.6 cm
      setDistance((prev) => {
        const delta = (Math.random() - 0.5) * 2.4;
        const next = Math.max(15.0, Math.min(65.0, prev + delta));
        return parseFloat(next.toFixed(1));
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sensing" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/15 blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="SENSORY PERCEPTION // 03"
        title={
          <>
            SEE. MEASURE. <br />
            <span className="text-gradient-purple">RESPOND.</span>
          </>
        }
        subtitle="The robot continuously measures the physical world ahead and converts distance into actionable telemetry your code can understand."
      />

      {/* Main Sensor Presentation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12">
        {/* Left Column: Sensor Detail Image + Radar Waveform Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative rounded-3xl overflow-hidden glass-panel border border-purple-500/20 group p-4 sm:p-6"
        >
          {/* Subtle radar sweep animation */}
          <div className="relative rounded-2xl overflow-hidden bg-[#07040B] flex items-center justify-center min-h-[320px] sm:min-h-[420px]">
            <img
              src={getAssetPath("/images/robot/hero-robot.webp")}
              alt="TechyGuide Robot Dual Ultrasonic Sensor Array"
              className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_10px_35px_rgba(121,22,165,0.4)] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = getAssetPath("/images/robot/hero-robot.webp");
              }}
            />

            {/* Simulated Sonic Radar Wavefronts */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="w-48 h-48 rounded-full border border-purple-400/20 animate-ping opacity-30" />
              <div className="w-80 h-80 rounded-full border border-purple-500/15 animate-pulse opacity-20" />
            </div>

            {/* Live Sonic Cone Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass-pill px-4 py-2 rounded-xl text-[11px] font-mono text-purple-300">
              <span className="flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                FREQUENCY: 40KHZ PULSED
              </span>
              <span className="text-muted">FOV: 30° CONE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Live Telemetry HUD & Sensor Data Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          {/* Real-time Distance Meter */}
          <div className="p-6 rounded-2xl glass-panel border-purple-500/30 bg-[#0B0710]/90 shadow-xl shadow-purple-950/40 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Gauge className="w-4 h-4 text-purple-400" />
                LIVE TELEMETRY
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                STREAMING
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-extrabold font-mono tracking-tight text-white">
                {distance}
              </span>
              <span className="text-xl font-mono text-purple-300 font-semibold">CM</span>
            </div>

            {/* Dynamic Distance Bar */}
            <div className="w-full bg-white/10 h-2 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                animate={{ width: `${Math.min(100, (distance / 65) * 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-muted mt-1.5">
              <span>MIN: 2CM</span>
              <span>RANGE: 400CM</span>
            </div>
          </div>

          {/* Signal & Decision Status Pill Boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl glass-panel flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase">
                <Wifi className="w-3.5 h-3.5" /> SIGNAL
              </div>
              <div className="text-lg font-bold text-white font-mono mt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> ACTIVE
              </div>
              <span className="text-[10px] font-mono text-muted mt-1">ECHO LATENCY: 1.2MS</span>
            </div>

            <div className="p-5 rounded-2xl glass-panel flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase">
                <Activity className="w-3.5 h-3.5" /> RESPONSE
              </div>
              <div className="text-lg font-bold text-white font-mono mt-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-purple-400" /> PATH CLEAR
              </div>
              <span className="text-[10px] font-mono text-muted mt-1">DECISION: FORWARD</span>
            </div>
          </div>

          {/* Key Sensor Capabilities List */}
          <div className="p-5 rounded-2xl glass-panel border border-white/5 space-y-2.5">
            {[
              "Autonomous obstacle avoidance algorithms",
              "Dynamic speed adjustment based on distance",
              "Real-time wall-following and maze navigation",
              "Sensor fusion with motor encoders",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-light">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
