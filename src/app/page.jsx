import FAQSection from "@/components/faq";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Plans from "@/components/plans";
import Services from "@/components/services";
import Slider from "@/components/slider";
import TeamSection from "@/components/team";

export default function Home() {
  return (
    <div className="space-y-40">
      <Navbar />
      <Hero />
      <Slider />
      <Services />
      <Plans />
      <TeamSection />
      <FAQSection />
    </div>
  );
}
