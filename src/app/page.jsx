"use client";

import ContactForm from "@/components/contact";
import FAQSection from "@/components/faq";
import Hero from "@/components/hero";
import InboundServices from "@/components/inboundService";
import Navbar from "@/components/navbar";
import OutboundServices from "@/components/outboundService";
import PlansTelesales from "@/components/plansTelesales";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Slider from "@/components/slider";
import TeamSection from "@/components/team";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";
import collaborate from "../../public/collaborate.svg";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Slider />
      <InboundServices />
      <OutboundServices />
      <Services />
      <PlansTelesales />
      {/* <Plans /> */}
      <TeamSection />
      <FAQSection />
      <Reviews />
      <ContactForm />
      <Image
        src={collaborate}
        alt="collaborate"
        className="px-4 w-full mt-16 pointer-events-none invert dark:invert-0"
      />
    </div>
  );
}


// 
// 
// https://i.ibb.co.com/250dCBQ/noise.png
// 
// 
