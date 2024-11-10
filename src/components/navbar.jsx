"use client";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import rs_logo from "../../public/RS_LOGO.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-neutral-900/30 backdrop-blur-3xl">
      <nav className="container mx-auto max-w-7xl">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center text-neutral-400 h-[52px]">
          <Link
            target="_blank"
            href={"tel:+8801973435247"}
            className="px-5 py-3"
          >
            +880 1973-435247
          </Link>
          <Link
            target="_blank"
            href={"mailto:rscoalition.info@gmail.com"}
            className="px-5 py-4 border-l-2 border-neutral-600"
          >
            rscoalition.info@gmail.com
          </Link>
        </div>

        {/* Main navbar */}
        <div className="flex justify-between items-center border-y-2 px-4 md:px-0 border-neutral-600 h-[52px]">
          <div className="w-[150px]">
            <Image src={rs_logo} alt="RS Coalition" width={40} height={40} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <Link
              className="border-r-2 border-neutral-600 w-32 text-center px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
              href={"#about"}
            >
              About
            </Link>
            <Link
              className="border-r-2 border-neutral-600 w-32 text-center px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
              href={"#services"}
            >
              Services
            </Link>
            <Link
              className="border-r-2 border-neutral-600 w-32 text-center px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
              href={"#plans"}
            >
              Pricing
            </Link>
            <Link
              className="px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
              href={"#contact"}
            >
              Contact
            </Link>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex justify-end gap-4 w-[150px]">
            <Link href="#">
              <InstagramLogo
                size={24}
                className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link href="#">
              <LinkedinLogo
                size={24}
                className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link href="#">
              <FacebookLogo
                size={24}
                className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden px-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <List size={32} className="text-neutral-400" />
          </button>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed z-[9000] top-0 left-0 w-full h-screen bg-neutral-900 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end py-4 px-8">
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={32} className="text-neutral-400" />
            </button>
          </div>
          <div className="flex flex-col px-10 py-4 gap-4 bg-neutral-900">
            <Link
              className="text-neutral-400 py-2 hover:text-blue-600 transition-all"
              href={"#about"}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              className="text-neutral-400 py-2 hover:text-blue-600 transition-all"
              href={"#services"}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              className="text-neutral-400 py-2 hover:text-blue-600 transition-all"
              href={"#plans"}
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
            <Link
              className="text-neutral-400 py-2 hover:text-blue-600 transition-all"
              href={"#contact"}
              onClick={handleLinkClick}
            >
              Contact
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex gap-4 mt-4">
              <Link href="#">
                <InstagramLogo
                  size={24}
                  className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
                />
              </Link>
              <Link href="#">
                <LinkedinLogo
                  size={24}
                  className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
                />
              </Link>
              <Link href="#">
                <FacebookLogo
                  size={24}
                  className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
