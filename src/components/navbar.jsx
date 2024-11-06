"use client";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-20 container mx-auto max-w-7xl">
      <div className="flex justify-end text-neutral-400">
        <Link target="_blank" href={"tel:+8801234567890"} className="px-5 py-3">
          +8801234567890
        </Link>
        <Link
          target="_blank"
          href={"mailto:rscoalition.info@gmail.com"}
          className="px-5 py-3 border-l-2 border-neutral-600"
        >
          rscoalition.info@gmail.com
        </Link>
      </div>

      <div className="flex justify-between items-center border-y-2 border-neutral-600 sticky top-0">
        <div className="w-[150px]" />
        <div>
          <Link
            className="border-r-2 border-neutral-600 px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
            href={"#about"}
          >
            About
          </Link>
          <Link
            className="border-r-2 border-neutral-600 px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
            href={"#services"}
          >
            Services
          </Link>
          <Link
            className="border-r-2 border-neutral-600 px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
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

        <div className="flex gap-4 w-[150px]">
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
          <Link href="#">
            <WhatsappLogo
              size={24}
              className="text-neutral-500 cursor-pointer hover:text-blue-600 transition-all"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
