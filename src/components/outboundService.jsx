import services from "@/data/outboundServices.json";
import {
  CalendarCheck,
  ChatText,
  Clock,
  CreditCard,
  EnvelopeSimple,
  FileLock,
  Headset,
  Heartbeat,
  PhoneIncoming,
  Question,
  Star,
  Wrench,
} from "@phosphor-icons/react";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import outbound from "../../public/outbound.jpg";
import outbound2 from "../../public/outbound2.jpg";
import outbound3 from "../../public/outbound3.jpg";
import { TrackedImage } from "./TrackedImage";

const ICON_MAP = {
  PhoneIncoming: PhoneIncoming,
  Clock: Clock,
  Headset: Headset,
  FileLock: FileLock,
  Wrench: Wrench,
  CreditCard: CreditCard,
  EnvelopeSimple: EnvelopeSimple,
  Heartbeat: Heartbeat,
  CalendarCheck: CalendarCheck,
  ChatText: ChatText,
  Star: Star,
  Question: Question,
};

const OutboundServices = () => {
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
    <div ref={containerRef} className="pt-20 md:pt-40 relative" id="outbound">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 md:gap-6 border-t-2 border-neutral-300 dark:border-neutral-700">
        <div className="col-span-1 md:relative">
          <div className="space-y-4 text-left md:text-right p-4 md:p-7 md:sticky md:top-[104px]">
            <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold uppercase">
              outbound services
            </p>
            <div className="space-y-2">
              <h1 className="text-neutral-700 dark:text-neutral-300">
                What We Offer
                <br /> Outbound
              </h1>
              <p className="text-neutral-500">We help your business grow</p>
            </div>

            <div className="relative h-[500px] w-full hidden md:block">
              {currentImage === 1 && (
                <div className="absolute inset-0 animate-fastFade">
                  <TrackedImage
                    src={outbound}
                    alt="outbound Image 1"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
              {currentImage === 2 && (
                <div className="absolute inset-0 animate-fastFade">
                  <TrackedImage
                    src={outbound2}
                    alt="outbound Image 2"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
              {currentImage === 3 && (
                <div className="absolute inset-0 animate-fastFade">
                  <TrackedImage
                    src={outbound3}
                    alt="outbound Image 3"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
            </div>
            {/* Original image for mobile */}
            <div className="relative h-[500px] w-full md:hidden overflow-hidden">
              <TrackedImage
                src={outbound}
                alt="outbound Image"
                className="object-cover rounded-2xl"
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
                className="group space-y-4 p-4 md:py-12 md:px-12 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 transition-all duration-300"
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

export default OutboundServices;
