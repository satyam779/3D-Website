import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  glow?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  glow = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col mb-12 sm:mb-16 md:mb-20", alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-purple-500/20 text-xs sm:text-xs font-mono tracking-widest text-purple-400 mb-4 sm:mb-6 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2 className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white",
        glow && "text-glow-purple"
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted font-normal max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
