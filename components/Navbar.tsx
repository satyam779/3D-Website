"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Technology", href: "#technology" },
  { label: "Sensing", href: "#sensing" },
  { label: "Motion", href: "#motion" },
  { label: "Learning", href: "#learning" },
  { label: "Specs", href: "#specifications" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-500">
      <nav
        aria-label="Main Navigation"
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between",
          scrolled
            ? "glass-panel border-purple-500/20 shadow-2xl shadow-purple-950/40 bg-[#0B0710]/80 backdrop-blur-xl"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 border border-purple-400/40 flex items-center justify-center shadow-lg shadow-purple-900/40 group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold tracking-widest text-white uppercase group-hover:text-purple-300 transition-colors">
              TECHYGUIDE
            </span>
            <span className="text-[9px] font-mono tracking-mega text-purple-400 font-semibold -mt-1">
              ROBOTICS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-muted-light hover:text-white transition-colors duration-200 uppercase tracking-widest relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-purple-100 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200 active:scale-95"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-light hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-3 max-w-6xl mx-auto rounded-2xl glass-panel border-purple-500/30 p-6 bg-[#0B0710]/95 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-light hover:text-white hover:translate-x-1 transition-all py-2 border-b border-white/5 uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
