"use client";
import {
  BellRinging,
  Code,
  FigmaLogo,
  Headset,
  PhoneIncoming,
  PhoneOutgoing,
} from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import arrow from "../../public/arrow.png";
import rs_coalition from "../../public/rs-coalition.svg";
import Intro from "./intro";
import Button from "./ui/button";

const Hero = () => {
  const { scrollY } = useScroll();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setDimensions({
        width: width,
        height: window.innerHeight,
      });
      setIsMobile(width < 768); // Set mobile breakpoint at 768px
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
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
      return { finalScale: 1, yOffset: 0, xOffset: 0 }; // No transform on mobile
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
    [0.4, isMobile ? 0.4 : 0]
  );

  const elements = [
    {
      Icon: PhoneIncoming,
      initialPos: "top-1/2 left-[12%]",
      x: leftX1,
      y: y1,
      rotate: rotate1,
    },
    {
      Icon: PhoneOutgoing,
      initialPos: "top-1/2 right-[12%]",
      x: rightX1,
      y: y1,
      rotate: rotate2,
    },
    {
      Icon: FigmaLogo,
      initialPos: "top-[40%] right-[17%]",
      x: rightX2,
      y: y2,
      rotate: rotate3,
    },
    {
      Icon: Code,
      initialPos: "top-[40%] left-[17%]",
      x: leftX2,
      y: y2,
      rotate: rotate4,
    },
    {
      Icon: BellRinging,
      initialPos: "top-[42%] left-[26%]",
      x: leftX3,
      y: y3,
      rotate: rotate1,
    },
    {
      Icon: Headset,
      initialPos: "top-[42%] right-[26%]",
      x: rightX3,
      y: y3,
      rotate: rotate2,
    },
  ];

  return (
    <div className="relative">
      {/* Main logo - conditional rendering based on mobile */}
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
              <Image
                src={rs_coalition}
                alt="RS Coalition"
                className="px-4 w-full pointer-events-none"
                priority
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

      <div className="container mx-auto max-w-7xl text-center text-neutral-500 pointer-events-none mt-10 md:mt-60 space-y-2">
        <p className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">
          Engage. Convert. Grow.
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl px-4">
          Crafting Connections, Captivating Designs, Closing Deals
          <br className="hidden md:block" />
          From Targeted Telesales to Inspired Design
          <br className="hidden md:block" />
          <span className="text-neutral-300">—We Make It Happen.</span>
        </h1>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col items-center mt-6 px-4">
        <Button>
          <Link href={"#plans"}>Start Project</Link>
        </Button>
        <Image
          src={arrow}
          alt="Arrow Image"
          className="w-16 h-16 md:w-20 md:h-20 rotate-45 opacity-30 mt-4 pointer-events-none"
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
            className={`absolute -z-20 ${element.initialPos} bg-neutral-800 p-6 rounded-2xl shadow-inner shadow-neutral-700`}
          >
            <element.Icon size={32} />
          </motion.div>
        ))}

      <Intro />
    </div>
  );
};

export default Hero;
