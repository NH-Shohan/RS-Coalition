"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const services = [
  "Telesales",
  "Inbound Call",
  "Outbound Call",
  "Customer Service",
  "UI/UX DESIGN",
  "Client Engagement",
  "App Development",
  "B2B Sales",
  "Web Development",
];

const servicesOthers = [
  "UI/UX DESIGN",
  "Web Design",
  "App Development",
  "Product Design",
  "Web Development",
  "Re Branding",
];

const Slider = () => {
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);
  const pathname = usePathname();

  const servicesToShow = pathname.includes("/services")
    ? servicesOthers
    : services;

  useEffect(() => {
    let leftScrollPosition = 0;
    let rightScrollPosition = 0;
    const scrollSpeed = 1;

    const leftScrollContainer = leftScrollRef.current;
    const rightScrollContainer = rightScrollRef.current;

    const leftScroll = () => {
      if (leftScrollContainer) {
        leftScrollPosition += scrollSpeed;
        leftScrollContainer.scrollLeft = leftScrollPosition;

        if (leftScrollPosition >= leftScrollContainer.scrollWidth / 2) {
          leftScrollPosition = 0;
        }
      }
    };

    const rightScroll = () => {
      if (rightScrollContainer) {
        rightScrollPosition -= scrollSpeed;
        rightScrollContainer.scrollLeft = rightScrollPosition;

        if (rightScrollPosition <= 0) {
          rightScrollPosition = rightScrollContainer.scrollWidth / 2;
        }
      }
    };

    const leftInterval = setInterval(leftScroll, 40);
    const rightInterval = setInterval(rightScroll, 40);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="mt-20 md:mt-40">
      <div className="relative overflow-hidden md:py-5 border-y-2 border-neutral-300 dark:border-neutral-700">
        <div
          ref={leftScrollRef}
          className="flex whitespace-nowrap"
          style={{ display: "flex", overflow: "hidden" }}
        >
          {[...servicesToShow, ...servicesToShow].map((service, index) => (
            <div
              key={`left-${index}`}
              className="flex items-center text-neutral-700 text-[4.5rem] whitespace-nowrap"
            >
              <h1 className="text-2xl md:text-5xl uppercase text-neutral-700">
                {service}
              </h1>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none mx-8">
                ✧
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden md:py-5 border-b-2 border-neutral-300 dark:border-neutral-700">
        <div
          ref={rightScrollRef}
          className="flex whitespace-nowrap"
          style={{ display: "flex", overflow: "hidden" }}
        >
          {[...servicesToShow, ...servicesToShow].map((service, index) => (
            <div
              key={`right-${index}`}
              className="flex items-center text-neutral-700 dark:text-neutral-300 text-[4.5rem] whitespace-nowrap"
            >
              <h1 className="text-2xl md:text-5xl uppercase text-neutral-700">
                {service}
              </h1>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none mx-8">
                ✧
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
