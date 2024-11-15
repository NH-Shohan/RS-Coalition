"use client";

import services from "@/data/inboundServices.json";
import {
  CalendarCheck,
  ChatText,
  Clock,
  EnvelopeSimple,
  FileLock,
  Headset,
  Heartbeat,
  PhoneIncoming,
  Star,
  Wrench,
} from "@phosphor-icons/react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ICON_MAP = {
  PhoneIncoming: PhoneIncoming,
  Clock: Clock,
  Headset: Headset,
  FileLock: FileLock,
  Wrench: Wrench,
  EnvelopeSimple: EnvelopeSimple,
  Heartbeat: Heartbeat,
  CalendarCheck: CalendarCheck,
  ChatText: ChatText,
  Star: Star,
};

const InboundServices = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value < 0.33) {
        setCurrentImage(1);
      } else if (value < 0.66) {
        setCurrentImage(2);
      } else {
        setCurrentImage(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const renderIcon = (iconName) => {
    const IconComponent = ICON_MAP[iconName];
    return IconComponent ? (
      <IconComponent size={56} weight="thin" className="text-neutral-500" />
    ) : null;
  };

  return (
    <div
      ref={containerRef}
      className="pt-20 md:pt-40 relative"
      id="inboundServices"
    >
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 border-neutral-300 dark:border-neutral-700">
        <div className="col-span-1 md:relative">
          <div className="space-y-4 text-left md:text-right p-4 md:p-7 md:sticky md:top-[104px]">
            <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold uppercase">
              inbound services
            </p>
            <div className="space-y-2">
              <h1 className="text-neutral-700 dark:text-neutral-300">
                What We Offer
                <br /> Inbound
              </h1>
              <p className="text-neutral-500">We help your business grow</p>
            </div>

            <div className="relative h-[500px] w-full hidden md:block">
              {currentImage === 1 && (
                <div className="absolute inset-0 animate-fastFade">
                  <Image
                    src={"https://i.ibb.co.com/0BW6n3G/inbound.jpg"}
                    alt="Inbound Image 1"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
              {currentImage === 2 && (
                <div className="absolute inset-0 animate-fastFade">
                  <Image
                    src={"https://i.ibb.co.com/6N61338/inbound2.jpg"}
                    alt="Inbound Image 2"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
              {currentImage === 3 && (
                <div className="absolute inset-0 animate-fastFade">
                  <Image
                    src={"https://i.ibb.co.com/9c1QyQF/inbound3.jpg"}
                    alt="Inbound Image 3"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
            </div>
            {/* Original image for mobile */}
            <div className="md:hidden">
              <Image
                src={"https://i.ibb.co.com/0BW6n3G/inbound.jpg"}
                alt="Inbound Image"
                fill
              />
            </div>
          </div>
        </div>

        <div className="text-left col-span-2 md:border-l-2 border-neutral-300 dark:border-neutral-700">
          <div className="divide-y-2 divide-neutral-300 dark:divide-neutral-700">
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-4 p-4 md:py-12 md:px-12 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 transition-all"
              >
                <div>{renderIcon(service.Icon)}</div>
                <h3 className="text-neutral-700 dark:text-neutral-300">
                  {service.title}
                </h3>
                <p className="text-neutral-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboundServices;