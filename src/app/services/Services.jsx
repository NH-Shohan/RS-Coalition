"use client";

import ContactForm from "@/components/contact";
import FAQSection from "@/components/faq";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import Slider from "@/components/slider";
import TeamSection from "@/components/team";
import faqData from "@/data/otherFAQ.json";
import reviews from "@/data/otherReviews.json";
import Lenis from "lenis";
import { useEffect } from "react";
import collaborate from "../../../public/collaborate.svg";
import { OptimizedImage } from "@/lib/OptimizedImage";

const ServicesPage = () => {
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
    <div>
      <Hero />
      <Slider />
      <Services />
      <Plans />
      <TeamSection />
      <FAQSection faqData={faqData} />
      <Reviews reviews={reviews} />
      <ContactForm />
      <OptimizedImage
        src={collaborate}
        alt="collaborate"
        className="px-4 w-full mt-16 pointer-events-none invert dark:invert-0"
      />
    </div>
  );
};

export default ServicesPage;
