import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="max-w-7xl aspect-video border-8 container mx-auto border-neutral-600 rounded-[2.5rem] bg-neutral-800 mt-8" />

      <Slider />
      <Services />
    </div>
  );
}
