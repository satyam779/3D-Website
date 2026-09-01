"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn, getAssetPath } from "@/lib/utils";
import { Layers, Disc, Sliders, Cpu, Activity, Sparkles, CheckCircle2 } from "lucide-react";

const TOTAL_FRAMES = 120;

// Helper to format frame path
function getFrameUrl(index: number): string {
  const padded = String(index).padStart(4, "0");
  return getAssetPath(`/images/robot/sequence/frame_${padded}.webp`);
}

interface StoryOverlayProps {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  tag: string;
  headline: string;
  sub: string;
  icon: React.ReactNode;
  position: "left" | "right" | "center";
}

function StoryOverlay({
  progress,
  range,
  tag,
  headline,
  sub,
  icon,
  position,
}: StoryOverlayProps) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [30, 0, 0, -30]);
  const scale = useTransform(progress, range, [0.95, 1, 1, 0.95]);

  const posClasses = {
    left: "items-start text-left md:left-8 lg:left-16 xl:left-24",
    right: "items-start md:items-end text-left md:text-right md:right-8 lg:right-16 xl:right-24",
    center: "items-center text-center left-1/2 -translate-x-1/2",
  };

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 w-full max-w-sm sm:max-w-md lg:max-w-[440px] px-6 py-6 pointer-events-none z-20 flex flex-col transition-all",
        posClasses[position]
      )}
    >
      <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/20 bg-[#0B0710]/85 backdrop-blur-2xl shadow-2xl shadow-purple-950/60 pointer-events-auto">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-purple-900/50 border border-purple-400/30 text-purple-300">
            {icon}
          </div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            {tag}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-white leading-tight mb-3">
          {headline}
        </h3>

        <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
          {sub}
        </p>
      </div>
    </motion.div>
  );
}

export default function RobotScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track images in a ref to avoid React state re-render bottlenecks
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const fallbackImageRef = useRef<HTMLImageElement | null>(null);
  const loadedCountRef = useRef(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Framer motion scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Nearest available frame finder to guarantee zero blank flashes
  const getNearestLoadedImage = useCallback((targetIndex: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    if (images[targetIndex] && images[targetIndex]?.complete && (images[targetIndex]?.naturalWidth ?? 0) > 0) {
      return images[targetIndex];
    }
    
    // Search outwards for closest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && images[prev] && images[prev]?.complete && (images[prev]?.naturalWidth ?? 0) > 0) {
        return images[prev];
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && images[next] && images[next]?.complete && (images[next]?.naturalWidth ?? 0) > 0) {
        return images[next];
      }
    }
    return fallbackImageRef.current;
  }, []);

  // Draw frame on canvas with object-contain and high-DPI scaling
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const img = getNearestLoadedImage(frameIndex);
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width === 0 || canvas.height === 0) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Calculate object-contain scale and center coordinates
    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight) * 0.95;
    const drawWidth = img.naturalWidth * scale;
    const drawHeight = img.naturalHeight * scale;
    const x = (width - drawWidth) / 2;
    const y = (height - drawHeight) / 2;

    ctx.drawImage(img, x, y, drawWidth, drawHeight);
    ctx.restore();
  }, [getNearestLoadedImage]);

  // Preloading Strategy
  useEffect(() => {
    let isMounted = true;

    // Load fallback hero image first
    const fallback = new Image();
    fallback.src = getAssetPath("/images/robot/hero-robot.webp");
    fallbackImageRef.current = fallback;
    fallback.onload = () => {
      if (isMounted && !imagesRef.current[0]) {
        drawFrame(0);
      }
    };

    // 1. Immediately load frame 1 (index 0)
    const loadSingleFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        if (!isMounted) return resolve();
        if (imagesRef.current[index]) return resolve();

        const img = new Image();
        img.src = getFrameUrl(index + 1);
        
        img.onload = () => {
          if (!isMounted) return resolve();
          imagesRef.current[index] = img;
          loadedCountRef.current++;
          setLoadProgress(Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));
          if (index === currentFrameRef.current) {
            drawFrame(index);
          }
          resolve();
        };

        img.onerror = () => {
          // If .webp fails, try .jpg fallback
          const jpgImg = new Image();
          jpgImg.src = getAssetPath(`/images/robot/sequence/frame_${String(index + 1).padStart(4, "0")}.jpg`);
          jpgImg.onload = () => {
            if (!isMounted) return resolve();
            imagesRef.current[index] = jpgImg;
            loadedCountRef.current++;
            setLoadProgress(Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100));
            if (index === currentFrameRef.current) {
              drawFrame(index);
            }
            resolve();
          };
          jpgImg.onerror = () => {
            if (!isMounted) return resolve();
            if (fallbackImageRef.current) {
              imagesRef.current[index] = fallbackImageRef.current;
            }
            resolve();
          };
        };
      });
    };

    const runPreload = async () => {
      // Step 1: Immediate frame 0
      await loadSingleFrame(0);

      // Step 2: Priority batch (first 20 frames)
      const priorityBatch = [];
      for (let i = 1; i < Math.min(20, TOTAL_FRAMES); i++) {
        priorityBatch.push(loadSingleFrame(i));
      }
      await Promise.all(priorityBatch);

      // Step 3: Progressive batches for remainder
      const batchSize = 10;
      for (let i = 20; i < TOTAL_FRAMES; i += batchSize) {
        if (!isMounted) break;
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadSingleFrame(j));
        }
        await Promise.all(batch);
      }
    };

    runPreload();

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
      }
      drawFrame(currentFrameRef.current);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrame]);

  // Subscribe to scrollYProgress without causing React re-renders
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1)))
      );
      
      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(() => {
          drawFrame(targetFrame);
        });
      }
    });

    return () => {
      unsubscribe();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [scrollYProgress, drawFrame]);

  return (
    <section
      id="technology"
      ref={containerRef}
      className="relative w-full h-[700vh] bg-background select-none"
    >
      {/* Sticky Canvas & Story Container */}
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center justify-center">
        {/* Deep ambient radial lighting behind canvas */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(121,22,165,0.18)_0%,rgba(5,4,7,0.85)_60%,#050407_100%)] pointer-events-none" 
          aria-hidden="true"
        />

        {/* HTML5 Canvas for ultra-smooth 60fps frame rendering */}
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_60px_rgba(121,22,165,0.35)]"
        />

        {/* Loading Progress Indicator (fades out once initial frames load) */}
        {loadProgress < 20 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/20 text-xs font-mono text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>CALIBRATING 3D MODEL ({loadProgress}%)</span>
          </div>
        )}

        {/* Interactive Story Overlays Synchronized to Scroll Progress */}
        
        {/* Phase 1: 0% - 12% Fully Assembled */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.0, 0.04, 0.09, 0.12]}
          tag="01 // ASSEMBLED PLATFORM"
          headline="Built as one intelligent system."
          sub="Electronics, sensing and motion working together in a unified educational form factor."
          icon={<Layers className="w-4 h-4" />}
          position="left"
        />

        {/* Phase 2: 12% - 28% Wheels Moving Outward */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.13, 0.18, 0.24, 0.28]}
          tag="02 // DUAL DRIVE"
          headline="Movement starts here."
          sub="Independent motor control transforms line-by-line code into physical motion and directional logic."
          icon={<Disc className="w-4 h-4" />}
          position="right"
        />

        {/* Phase 3: 28% - 42% Wheel & Motor Assembly */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.29, 0.33, 0.38, 0.42]}
          tag="03 // MOTOR ARCHITECTURE"
          headline="Precision in every movement."
          sub="Control speed, differential turning, and torque with programmatic feedback loops."
          icon={<Activity className="w-4 h-4" />}
          position="left"
        />

        {/* Phase 4: 42% - 58% Ultrasonic Sensor Separation */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.43, 0.48, 0.54, 0.58]}
          tag="04 // ENVIRONMENTAL SENSING"
          headline="It can sense the world."
          sub="Real-time sonic distance measurement enables responsive obstacle avoidance and autonomous navigation."
          icon={<Sliders className="w-4 h-4" />}
          position="right"
        />

        {/* Phase 5: 58% - 72% Main PCB Focus */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.59, 0.63, 0.68, 0.72]}
          tag="05 // EMBEDDED BRAIN"
          headline="The intelligence lives here."
          sub="A custom robotics controller connects sensing, logic, power management, and motor outputs seamlessly."
          icon={<Cpu className="w-4 h-4" />}
          position="left"
        />

        {/* Phase 6: 72% - 86% Full Exploded View */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.73, 0.77, 0.82, 0.86]}
          tag="06 // TRANSPARENT ENGINEERING"
          headline="Every component has a purpose."
          sub="Instead of hiding inside a plastic case, all circuitry and mechanics are exposed for experiential learning."
          icon={<Sparkles className="w-4 h-4" />}
          position="right"
        />

        {/* Phase 7: 86% - 100% Reassembly & Final Ignition */}
        <StoryOverlay
          progress={scrollYProgress}
          range={[0.87, 0.91, 0.97, 1.0]}
          tag="07 // COMPLETE DEPLOYMENT"
          headline="Now make it yours."
          sub="Build. Code. Experiment. Innovate. Turn your ideas into autonomous robotic behavior."
          icon={<CheckCircle2 className="w-4 h-4" />}
          position="center"
        />

        {/* Technical HUD Floating Timeline on the side */}
        <div className="hidden lg:flex flex-col gap-2 absolute right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          {["01 ASSEMBLED", "02 DRIVE", "03 MOTORS", "04 SENSORS", "05 PCB", "06 EXPLODED", "07 READY"].map((step, idx) => {
            const stepFraction = idx / 6;
            return (
              <div key={step} className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-muted/60">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
                <span>{step}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
