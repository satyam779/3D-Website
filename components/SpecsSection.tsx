"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { robotProduct } from "@/data/robot";
import { Download, FileText, CheckCircle2 } from "lucide-react";

export default function SpecsSection() {
  return (
    <section id="specifications" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-purple-500/10">
      {/* Background illumination */}
      <div 
        className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-900/15 blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="SPECIFICATIONS // 09"
        title={
          <>
            TECHNICAL <br />
            <span className="text-gradient-purple">BY DESIGN.</span>
          </>
        }
        subtitle="Full engineering breakdown and system parameters built for reliability, repeatability, and classroom durability."
      />

      {/* Specifications Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 rounded-3xl glass-panel border-purple-500/20 overflow-hidden shadow-2xl shadow-purple-950/40"
      >
        <div className="divide-y divide-purple-500/10">
          {robotProduct.specifications.map((spec, idx) => (
            <div
              key={spec.label}
              className="px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-purple-950/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-purple-400/80 uppercase">
                  0{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-muted-light group-hover:text-white transition-colors">
                  {spec.label}
                </span>
              </div>
              <div className="font-mono text-sm sm:text-base font-medium text-white group-hover:text-purple-300 transition-colors sm:text-right pl-7 sm:pl-0">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Spec Table Footer Bar */}
        <div className="p-6 sm:p-8 bg-[#0B0710]/90 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>FULL COMPLIANCE: CE / FCC / ROHS CERTIFIED</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 hover:text-white transition-colors group"
          >
            <FileText className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
            <span>Request Full Datasheet PDF</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
