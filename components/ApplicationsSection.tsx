"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { 
  ShieldAlert, 
  Compass, 
  Car, 
  Activity, 
  Code2, 
  Trophy, 
  Wifi, 
  Brain 
} from "lucide-react";

export default function ApplicationsSection() {
  const apps = [
    {
      num: "01",
      title: "Obstacle Avoiding Robot",
      text: "Program real-time sonic radar sweeps to detect approaching walls, calculate alternative angles, and dynamically navigate complex rooms.",
      icon: <ShieldAlert className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "02",
      title: "Autonomous Navigation Rover",
      text: "Implement closed-loop waypoint following, dead reckoning mathematical algorithms, and responsive steering logic.",
      icon: <Compass className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "03",
      title: "Smart Mobility Vehicle",
      text: "Simulate smart city autonomous vehicle behaviors including dynamic collision avoidance, pedestrian stopping, and speed zones.",
      icon: <Car className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "04",
      title: "Sensor Explorer Lab",
      text: "Plot live telemetry waveforms, calibrate distance curves against real materials, and investigate ultrasonic acoustic physics.",
      icon: <Activity className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "05",
      title: "Coding Challenges",
      text: "Solve structured computational thinking puzzles, algorithmic sorting runs, and timed maze navigation routines.",
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "06",
      title: "STEM Robotics Competitions",
      text: "Compete in speed trials, obstacle courses, precision parking, and autonomous sumo robotics classroom tournaments.",
      icon: <Trophy className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "07",
      title: "IoT Connected Fleet",
      text: "Stream live robot telemetry over wireless protocols, trigger remote actions, and coordinate multi-robot formations.",
      icon: <Wifi className="w-5 h-5 text-purple-400" />,
    },
    {
      num: "08",
      title: "AI & Edge ML Projects",
      text: "Train machine learning models to classify terrain, predict obstacle trajectories, and optimize battery efficiency autonomously.",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-purple-500/10">
      {/* Background illumination */}
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/15 blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <SectionHeading
        eyebrow="ENDLESS CAPABILITIES // 08"
        title={
          <>
            WHAT WILL <br />
            <span className="text-gradient-purple">YOU BUILD?</span>
          </>
        }
        subtitle="One unified hardware platform unlocks dozens of hands-on student engineering challenges across software, electrical, and mechanical domains."
      />

      {/* Grid of 8 Application Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12">
        {apps.map((app, idx) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group min-h-[240px] relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-widest">
                  APP {app.num}
                </span>
                <span className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                  {app.icon}
                </span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                {app.title}
              </h3>
            </div>

            <p className="text-xs text-muted leading-relaxed mt-4 font-normal">
              {app.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
