
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import ModulesSection from "@/components/ModulesSection";
import AudienceSection from "@/components/AudienceSection";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import GuiaNR01Button from "@/components/GuiaNR01Button";
import OrcamentoForm from "@/components/OrcamentoForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ModulesSection />
      <GuiaNR01Button />
      <OrcamentoForm />
      <AudienceSection />
      <Differentials />
      <FAQ />
      <CTAFinal />
    </>
  );
}