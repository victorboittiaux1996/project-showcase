import GlassNavbar from "@/components/GlassNavbar";
import HeroSection from "@/components/HeroSection";
import ActiveLinksSection from "@/components/ActiveLinksSection";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingElements />
      <GlassNavbar />
      <main className="relative z-10">
        <HeroSection />
        <ActiveLinksSection />
      </main>
    </div>
  );
};

export default Index;
