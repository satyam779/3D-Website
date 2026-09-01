import { Cpu, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const links = [
    { label: "Robotics Platform", href: "#technology" },
    { label: "STEM Labs", href: "#learning" },
    { label: "AI & Embedded Labs", href: "#sensing" },
    { label: "Technical Specs", href: "#specifications" },
    { label: "Contact & Demo", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#050407] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 border border-purple-400/40 flex items-center justify-center shadow-lg shadow-purple-900/40">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold tracking-widest text-white uppercase">
                TECHYGUIDE
              </span>
            </div>
            <p className="text-sm text-muted font-normal max-w-sm mt-1">
              Building the next generation of innovators through tangible, transparent engineering hardware.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono text-muted hover:text-white uppercase tracking-wider transition-colors flex items-center gap-1 group"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Metadata Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted/60">
          <div>
            © {new Date().getFullYear()} TechyGuide. All rights reserved. Engineered for Education.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              SYSTEM ONLINE
            </span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
