import services from "@/data/services.json";
import {
  AppWindow,
  Code,
  DeviceMobile,
  Globe,
  PaintBrush,
} from "@phosphor-icons/react";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import service from "../../public/service.jpg";
import service2 from "../../public/service2.jpg";
import service3 from "../../public/service3.jpg";
import { OptimizedImage } from "@/lib/OptimizedImage";

const ICON_MAP = {
  PaintBrush: PaintBrush,
  DeviceMobile: DeviceMobile,
  Globe: Globe,
  Code: Code,
  AppWindow: AppWindow,
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value < 1 / 3) {
        setCurrentImage(1);
      } else if (value < 2 / 3) {
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
    <div ref={containerRef} className="pt-20 md:pt-40 relative" id="coalitions">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 md:gap-6 border-t-2 border-neutral-300 dark:border-neutral-700">
        <div className="col-span-1 md:relative">
          <div className="space-y-4 text-left md:text-right p-4 md:p-7 md:sticky md:top-[104px]">
            <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold uppercase">
              other SERVICES
            </p>
            <div className="space-y-2">
              <h1 className="text-neutral-700 dark:text-neutral-300">
                What We <br /> Offer
              </h1>
              <p className="text-neutral-500">We help your business grow</p>
            </div>

            <div className="relative h-[500px] w-full hidden md:block">
              {currentImage === 1 && (
                <div className="absolute inset-0 animate-fastFade">
                  <OptimizedImage
                    src={service}
                    alt="service Image 1"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
              {currentImage === 2 && (
                <div className="absolute inset-0 animate-fastFade">
                  <OptimizedImage
                    src={service2}
                    alt="service Image 2"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
              {currentImage === 3 && (
                <div className="absolute inset-0 animate-fastFade">
                  <OptimizedImage
                    src={service3}
                    alt="service Image 3"
                    className="object-cover rounded-2xl"
                    fill
                  />
                </div>
              )}
            </div>
            {/* Original image for mobile */}
            <div className="relative h-[500px] w-full md:hidden overflow-hidden">
              <OptimizedImage
                src={service}
                alt="service Image"
                className="object-cover rounded-2xl"
                fill
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 text-left col-span-2 md:border-l-2 border-neutral-300 dark:border-neutral-700">
          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className={`space-y-4 p-4 md:py-12 md:px-12 border-b-2 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 transition-all border-neutral-300 dark:border-neutral-700`}
              >
                <div>{renderIcon(service.Icon)}</div>
                <h3 className="text-neutral-700 dark:text-neutral-300">
                  {service.title}
                </h3>
                <p className="text-neutral-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
