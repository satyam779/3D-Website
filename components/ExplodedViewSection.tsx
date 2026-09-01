"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";
import { Disc, Radio, Cpu, PlusCircle } from "lucide-react";

export default function ExplodedViewSection() {
  const cards = [
    {
      number: "01",
      tag: "MECHANICAL",
      title: "MOTION ARCHITECTURE",
      description: "Dual wheel architecture designed for precision speed control, smooth turning radius, and tactile surface grip.",
      icon: <Disc className="w-5 h-5" />,
    },
    {
      number: "02",
      tag: "PERCEPTION",
      title: "SENSING ARRAY",
      description: "Front-facing dual ultrasonic transducer for accurate millimeter distance measurement and obstacle mapping.",
      icon: <Radio className="w-5 h-5" />,
    },
    {
      number: "03",
      tag: "COMPUTATION",
      title: "CONTROL SYSTEM",
      description: "Integrated custom purple PCB converting digital code commands directly into low-level electrical signals.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      number: "04",
      tag: "MODULARITY",
      title: "EXPANSION PORTS",
      description: "Accessible hardware interfaces allowing students to plug in custom IoT modules, sensors, and external peripherals.",
      icon: <PlusCircle className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/15 blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="MODULAR ARCHITECTURE // 02"
        title={
          <>
            EVERY PART. <br />
            <span className="text-gradient-purple">ONE CONNECTED SYSTEM.</span>
          </>
        }
        subtitle="Engineering you can see. No sealed plastic shells — all mechanical, sensory, and computational systems are exposed for hands-on learning."
      />

      {/* Grid of 4 Engineering Cards with Technical Border Accents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <FeatureCard
              number={card.number}
              tag={card.tag}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </div>

      {/* Technical Schematic Footer Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 p-4 rounded-xl glass-pill border border-purple-500/20 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-muted/70"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>SCHEMATIC: OPEN HARDWARE EXPOSED ARCHITECTURE</span>
        </div>
        <div className="flex items-center gap-6">
          <span>TOLERANCE: ±0.05MM</span>
          <span>PCB LAYERS: 2-LAYER IMMERSION GOLD</span>
        </div>
      </motion.div>
    </section>
  );
}
