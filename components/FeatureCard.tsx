import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  number?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  tag?: string;
  className?: string;
}

export default function FeatureCard({
  number,
  title,
  description,
  icon,
  tag,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative group p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover overflow-hidden",
        className
      )}
    >
      {/* Corner crosshairs / technical marks */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-purple-500/30 group-hover:border-purple-400/80 transition-colors pointer-events-none" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-purple-500/30 group-hover:border-purple-400/80 transition-colors pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-purple-500/30 group-hover:border-purple-400/80 transition-colors pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-purple-500/30 group-hover:border-purple-400/80 transition-colors pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-6">
        {number && (
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase font-semibold">
            {number}
          </span>
        )}
        {tag && (
          <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/20 text-purple-300">
            {tag}
          </span>
        )}
        {icon && (
          <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
            {icon}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3 group-hover:text-purple-200 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
        {description}
      </p>
    </div>
  );
}
