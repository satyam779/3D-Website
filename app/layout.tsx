import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050407",
};

export const metadata: Metadata = {
  title: "TechyGuide Robot | Build. Code. Innovate.",
  description:
    "A next-generation educational robotics platform designed for hands-on learning, coding, electronics and autonomous robotics.",
  keywords: [
    "TechyGuide",
    "Robotics",
    "Educational Robot",
    "STEM",
    "Coding",
    "Ultrasonic Sensor",
    "Autonomous Robotics",
    "PCB Design",
    "Makerspace"
  ],
  authors: [{ name: "TechyGuide Robotics" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-background text-foreground selection:bg-purple-600 selection:text-white min-h-screen relative overflow-x-hidden antialiased">
        {/* Subtle Ambient Radial Lighting */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(121,22,165,0.15),rgba(255,255,255,0))]" 
          aria-hidden="true"
        />
        {/* Background Noise Grid Texture */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 bg-tech-grid opacity-60" 
          aria-hidden="true"
        />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
