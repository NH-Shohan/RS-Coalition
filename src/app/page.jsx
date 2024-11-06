import ContactForm from "@/components/contact";
import FAQSection from "@/components/faq";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Plans from "@/components/plans";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Slider from "@/components/slider";
import TeamSection from "@/components/team";
import Image from "next/image";
import collaborate from "../../public/collaborate.svg";

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
      <Reviews />
      <ContactForm />
      <Image
        src={collaborate}
        alt="collaborate"
        className="px-4 w-full my-16 pointer-events-none"
      />
    </div>
  );
}
