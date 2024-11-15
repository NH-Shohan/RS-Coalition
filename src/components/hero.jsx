"use client";
import {
  BellRinging,
  Code,
  Database,
  DeviceMobile,
  Devices,
  FigmaLogo,
  Headset,
  OpenAiLogo,
  PhoneIncoming,
  PhoneOutgoing,
  TerminalWindow,
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import rs_coalition from "../../public/rs-coalition.svg";
import Intro from "./intro";
import { Button } from "./ui/button";

const Hero = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setDimensions({
        width: width,
        height: window.innerHeight,
      });
      setIsMobile(width < 768);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  const getResponsiveValues = () => {
    if (dimensions.width > 1536) {
      return { finalScale: 0.13, yOffset: -188, xOffset: -490 };
    } else if (dimensions.width > 1280) {
      return { finalScale: 0.13, yOffset: -170, xOffset: -510 };
    } else if (dimensions.width > 1024) {
      return { finalScale: 0.15, yOffset: -152, xOffset: -420 };
    } else if (dimensions.width > 768) {
      return { finalScale: 0.2, yOffset: -134, xOffset: -350 };
    } else {
      return { finalScale: 1, yOffset: 0, xOffset: 0 };
    }
  };

  const { finalScale, yOffset, xOffset } = getResponsiveValues();

  // Only apply transforms if not on mobile
  const scale = useTransform(scrollY, [0, 200], [1, isMobile ? 1 : finalScale]);
  const yPos = useTransform(scrollY, [0, 200], [0, isMobile ? 0 : yOffset]);
  const xPos = useTransform(scrollY, [0, 200], [0, isMobile ? 0 : xOffset]);

  // Element animations - only active on desktop
  const y1 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 500]);
  const y2 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 600]);
  const y3 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 700]);

  const leftX1 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 400]);
  const leftX2 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 300]);
  const leftX3 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 200]);

  const rightX1 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -400]);
  const rightX2 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -300]);
  const rightX3 = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -200]);

  const rotate1 = useTransform(scrollY, [0, 800], [30, isMobile ? 30 : 360]);
  const rotate2 = useTransform(scrollY, [0, 800], [-30, isMobile ? -30 : -360]);
  const rotate3 = useTransform(scrollY, [0, 800], [12, isMobile ? 12 : 180]);
  const rotate4 = useTransform(scrollY, [0, 800], [-12, isMobile ? -12 : -180]);

  // Add opacity transform - disabled on mobile
  const elementOpacity = useTransform(
    scrollY,
    [0, 500],
    [0.6, isMobile ? 0.6 : 0]
  );

  const elements = [
    {
      Icon: !pathname.includes("/services") ? PhoneIncoming : FigmaLogo,
      initialPos: "top-1/2 left-[12%]",
      x: leftX1,
      y: y1,
      rotate: rotate1,
    },
    {
      Icon: !pathname.includes("/services") ? PhoneOutgoing : Database,
      initialPos: "top-1/2 right-[12%]",
      x: rightX1,
      y: y1,
      rotate: rotate2,
    },
    {
      Icon: Devices,
      initialPos: "top-[40%] right-[17%]",
      x: rightX2,
      y: y2,
      rotate: rotate3,
    },
    {
      Icon: !pathname.includes("/services") ? DeviceMobile : Code,
      initialPos: "top-[40%] left-[17%]",
      x: leftX2,
      y: y2,
      rotate: rotate4,
    },
    {
      Icon: !pathname.includes("/services") ? BellRinging : OpenAiLogo,
      initialPos: "top-[45%] left-[26%]",
      x: leftX3,
      y: y3,
      rotate: rotate1,
    },
    {
      Icon: !pathname.includes("/services") ? Headset : TerminalWindow,
      initialPos: "top-[45%] right-[26%]",
      x: rightX3,
      y: y3,
      rotate: rotate2,
    },
  ];

  const logoInvert = useTransform(
    scrollY,
    [0, 200, 201],
    isDark
      ? ["invert(0)", "invert(1)", "invert(1)"] // Dark mode: black -> white
      : ["invert(1)", "invert(0)", "invert(0)"] // Light mode: white -> black
  );

  return (
    <div className="relative">
      {isMobile ? (
        <div className="w-full mt-32">
          <div className="container mx-auto">
            <Image
              src={rs_coalition}
              alt="RS Coalition"
              className="px-4 w-full"
              priority
            />
          </div>
        </div>
      ) : (
        <>
          <motion.div
            style={{
              scale,
              y: yPos,
              x: xPos,
            }}
            className="fixed z-50 w-full mt-40"
          >
            <div className="container mx-auto">
              <motion.img
                src={rs_coalition.src}
                alt="RS Coalition"
                className="px-4 w-full pointer-events-none"
                style={{
                  filter: logoInvert,
                }}
              />
            </div>
          </motion.div>

          <div className="w-full invisible">
            <div className="container mx-auto">
              <Image
                src={rs_coalition}
                alt="RS Coalition"
                className="px-4 w-full"
              />
            </div>
          </div>
        </>
      )}

      {!pathname.includes("/services") ? (
        <div className="container mx-auto max-w-7xl text-center text-neutral-500 pointer-events-none mt-10 md:mt-60 space-y-2">
          <h4 className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text font-medium">
            Engage. Convert. Grow.
          </h4>
          <h1 className="text-2xl md:text-3xl lg:text-4xl px-4">
            Crafting Connections, Captivating Designs, Closing Deals
            <br className="hidden md:block" />
            From Targeted Telesales to Inspired Design
            <br className="hidden md:block" />
            <span className="text-neutral-900 dark:text-neutral-300">
              —We Make It Happen.
            </span>
          </h1>
        </div>
      ) : (
        <div className="container mx-auto max-w-7xl text-center text-neutral-500 pointer-events-none mt-10 md:mt-60 space-y-2">
          <h4 className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text font-medium">
            Design. Develop. Deliver.
          </h4>
          <h1 className="text-2xl md:text-3xl lg:text-4xl px-4">
            Shaping Exceptional User Experiences,
            <br className="hidden md:block" />
            Crafting Interfaces That Inspire and Engage
            <br className="hidden md:block" />
            <span className="text-neutral-900 dark:text-neutral-300">
              —We Bring Your Vision to Life.
            </span>
          </h1>
        </div>
      )}

      <div className="container mx-auto max-w-7xl flex flex-col items-center mt-6 px-4">
        <Button className="px-12 h-14 font-bold text-xl">
          <Link href={"#pricing"}>Start Project</Link>
        </Button>
        <Image
          src={"https://i.ibb.co.com/QFZrKkq/arrow-white.png"}
          alt="Arrow Image"
          width={64}
          height={64}
          className="w-16 h-16 md:w-20 md:h-20 rotate-45 opacity-30 mt-4 pointer-events-none hidden dark:block"
          id="about"
        />
        <Image
          src={"https://i.ibb.co.com/pPrjzzm/arrow-black.png"}
          alt="Arrow Image"
          width={64}
          height={64}
          className="w-16 h-16 md:w-20 md:h-20 rotate-45 opacity-30 mt-4 pointer-events-none block dark:hidden"
          id="about"
        />
      </div>

      {/* Only render floating elements on desktop */}
      {!isMobile &&
        elements.map((element, index) => (
          <motion.div
            key={index}
            style={{
              x: element.x,
              y: element.y,
              rotate: element.rotate,
              opacity: elementOpacity,
            }}
            className={`absolute -z-20 ${element.initialPos} bg-neutral-200 dark:bg-neutral-800 p-6 rounded-2xl shadow-inner shadow-neutral-400 dark:shadow-neutral-700`}
          >
            <element.Icon
              size={32}
              className="text-neutral-900 dark:text-neutral-100"
            />
          </motion.div>
        ))}

      <Intro
        src={`${
          !pathname.includes("/services")
            ? "https://i.ibb.co.com/KzBkjMd/hero.jpg"
            : "https://i.ibb.co.com/pyvhZRx/development.jpg"
        }`}
      />
    </div>
  );
};

export default Hero;
