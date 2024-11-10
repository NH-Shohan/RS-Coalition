"use client";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import rs_logo from "../../public/RS_LOGO.svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-neutral-900/30 backdrop-blur-3xl">
      <nav className="container mx-auto max-w-7xl">
        <div className="flex justify-end items-center text-neutral-400 h-[52px]">
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

        <div className="flex justify-between items-center border-y-2 border-neutral-600 h-[52px]">
          <div className="w-[150px]">
            <Image src={rs_logo} alt="RS Coalition" width={40} height={40} />
          </div>
          <div>
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
    </div>
  );
};

export default Navbar;
