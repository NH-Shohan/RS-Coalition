import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Plans from "@/components/plans";
import Services from "@/components/services";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Slider />
      <Services />
      <Plans />
    </div>
  );
}
