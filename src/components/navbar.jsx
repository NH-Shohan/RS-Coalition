"use client";

import { OptimizedImage } from "@/lib/OptimizedImage";
import { FacebookLogo, LinkedinLogo, List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import rs_logo from "../../public/RS_LOGO.svg";
import { ModeToggle } from "./modeToggle";

// Navigation Links Data
const NAV_LINKS = [
  { href: "#inbound", label: "Inbound" },
  { href: "#outbound", label: "Outbound" },
  { href: "/services", label: "Coalitions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

// Social Links Data
const SOCIAL_LINKS = [
  // {
  //   Icon: InstagramLogo,
  //   href: "#",
  //   ariaLabel: "Follow us on Instagram",
  // },
  {
    Icon: LinkedinLogo,
    href: "https://www.linkedin.com/company/rscoalition",
    ariaLabel: "Connect with us on LinkedIn",
  },
  {
    Icon: FacebookLogo,
    href: "https://www.facebook.com/RSCoalition",
    ariaLabel: "Follow us on Facebook",
  },
];

// Reusable Social Icons Component
const SocialIcons = () => (
  <div className="flex gap-4">
    {SOCIAL_LINKS.map(({ Icon, href, ariaLabel }) => (
      <Link target="_blank" key={ariaLabel} href={href} aria-label={ariaLabel}>
        <Icon
          size={24}
          className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
        />
      </Link>
    ))}
  </div>
);

// Navigation Link Component
const NavLink = ({ href, children, className = "", onClick }) => {
  const pathname = usePathname();
  const isActive = pathname.includes("#");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`py-2 transition-all ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          : "hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-transparent hover:bg-clip-text"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.label.toLowerCase());

      let isAnyActive = false;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top <= 150 &&
            rect.bottom > 0 &&
            rect.top < window.innerHeight &&
            rect.bottom >= 150;

          if (isVisible) {
            setActiveSection(section);
            isAnyActive = true;
            break;
          }
        }
      }

      if (!isAnyActive) {
        setActiveSection("");
      }
    };

    checkMobile();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleLinkClick = () => isMobile && setIsMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-neutral-900/0 backdrop-blur-3xl">
      <nav className="container mx-auto max-w-7xl">
        {/* Top contact bar */}
        <div className="hidden md:flex justify-end items-center text-neutral-500 h-[52px]">
          <NavLink href="tel:+8801973435247" className="px-5 py-3">
            +880 1973-435247
          </NavLink>
          <NavLink
            href="mailto:rscoalition.info@gmail.com"
            className="px-5 py-4 border-l-2 border-neutral-300 dark:border-neutral-700"
          >
            rscoalition.info@gmail.com
          </NavLink>
        </div>

        {/* Main navbar */}
        <div className="flex justify-between items-center border-y-2 px-4 md:px-0 border-neutral-300 dark:border-neutral-700 h-[52px]">
          <div className="w-[250px]">
            <Link href={"/"}>
              <OptimizedImage
                src={rs_logo}
                alt="RS Coalition"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block text-neutral-700 dark:text-neutral-300">
            {NAV_LINKS.map((link, index) => {
              const isActive = activeSection === link.label.toLowerCase();
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-center px-7 py-3 transition-all inline-block
              ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                  : "hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-transparent hover:bg-clip-text"
              }
              ${
                index !== NAV_LINKS.length - 1
                  ? "border-r-2 border-neutral-300 dark:border-neutral-700"
                  : ""
              }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex justify-end items-center gap-4 w-[250px]">
            <ModeToggle />
            <SocialIcons />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden px-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <List size={32} className="text-neutral-400" />
          </button>
        </div>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed z-[9000] top-0 left-0 w-full h-screen bg-neutral-100 dark:bg-neutral-900 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end py-4 px-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} className="text-neutral-400" />
            </button>
          </div>
          <div className="flex flex-col px-10 py-4 gap-4 bg-neutral-100 dark:bg-neutral-900 text-neutral-500">
            <Link
              href={"/"}
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300"
            >
              <OptimizedImage
                src={rs_logo}
                onClick={handleLinkClick}
                alt="RS Coalition"
                width={40}
                height={40}
              />
              <h1>RS Coalition</h1>
            </Link>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.label.toLowerCase();
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`py-2 transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                      : "hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-transparent hover:bg-clip-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex gap-4 mt-4">
              <ModeToggle />
              <SocialIcons />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
