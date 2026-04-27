import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Pipeline } from "@/components/landing/Pipeline";
import { OldVsNew } from "@/components/landing/OldVsNew";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Comparison } from "@/components/landing/Comparison";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream landing-page-sizing">
      <style>{`
        .landing-page-sizing { font-size: 16px !important; }
        .landing-page-sizing h1 { font-size: 4.5rem !important; line-height: 1.1 !important; }
        .landing-page-sizing h2 { font-size: 3rem !important; line-height: 1.2 !important; }
        .landing-page-sizing h3 { font-size: 1.5rem !important; }
        .landing-page-sizing section { padding-top: 8rem !important; padding-bottom: 8rem !important; }
        .landing-page-sizing .container { max-width: 1200px !important; }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Pipeline />
        <OldVsNew />
        <HowItWorks />
        <FeaturesBento />
        <Comparison />
        <Stats />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
