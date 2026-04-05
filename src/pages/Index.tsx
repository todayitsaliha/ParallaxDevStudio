import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutStrip from "@/components/AboutStrip";
import ProcessSection from "@/components/ProcessSection";
import USPSection from "@/components/USPSection";
import WorkSection from "@/components/WorkSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="bg-paper">
      <CustomCursor />
      <Nav />
      <Hero />
      <AboutStrip />
      <ProcessSection />
      <USPSection />
      <WorkSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
