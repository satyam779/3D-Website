import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import RobotHero from "@/components/RobotHero";
import IntroSection from "@/components/IntroSection";
import RobotScrollSequence from "@/components/RobotScrollSequence";
import ExplodedViewSection from "@/components/ExplodedViewSection";
import SensorSection from "@/components/SensorSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import MotionSection from "@/components/MotionSection";
import EngineeringSection from "@/components/EngineeringSection";
import LearningSection from "@/components/LearningSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import SpecsSection from "@/components/SpecsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main className="w-full relative">
        <RobotHero />
        <IntroSection />
        <RobotScrollSequence />
        <ExplodedViewSection />
        <SensorSection />
        <IntelligenceSection />
        <MotionSection />
        <EngineeringSection />
        <LearningSection />
        <ApplicationsSection />
        <SpecsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
