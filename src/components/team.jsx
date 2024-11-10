import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import c_letter from "../../public/C.svg";
import r_letter from "../../public/R.svg";
import s_letter from "../../public/S.svg";

const teamMembers = [
  {
    name: "Saqeb Hasan",
    role: "CEO",
    image: "/noise.png",
    mobileOrder: 1,
  },
  {
    name: "Nahim Hossain Shohan",
    role: "Business Development & Organization",
    image: "/noise.png",
    mobileOrder: 2,
  },
  {
    name: "R Letter",
    role: "",
    image: "",
    type: "letter",
    letter: "r",
    mobileOrder: 3,
  },
  {
    name: "S Letter",
    role: "",
    image: "",
    type: "letter",
    letter: "s",
    mobileOrder: 6,
  },
  {
    name: "Md. Touhidul Ridoy",
    role: "Project Manager",
    image: "/noise.png",
    mobileOrder: 4,
  },
  {
    name: "Rumel",
    role: "Business Development Manager",
    image: "/noise.png",
    mobileOrder: 5,
  },
  {
    name: "Mohsina Rubaiyat Khan",
    role: "Operations Coordinator",
    image: "/noise.png",
    mobileOrder: 7,
  },
  {
    name: "",
    role: "",
    image: "/noise.png",
    mobileOrder: 8,
  },
  {
    name: "C Letter",
    role: "",
    image: "",
    type: "letter",
    letter: "c",
    mobileOrder: 9,
  },
];

const TeamSection = () => {
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

  const getMemberComponent = (member, index) => (
    <div
      key={member.mobileOrder}
      className={`border-neutral-700 p-6 text-neutral-300 transition-all duration-200 ${
        isMobile
          ? "border-b-2 last:border-b-0"
          : `${index % 3 !== 2 ? "md:border-r-2" : ""} ${
              index < teamMembers.length - 3 ? "md:border-b-2" : ""
            }`
      }`}
      style={isMobile ? { order: member.mobileOrder } : {}}
    >
      {member.type === "letter" ? (
        <Image
          src={
            member.letter === "r"
              ? r_letter
              : member.letter === "s"
              ? s_letter
              : c_letter
          }
          alt={`${member.letter.toUpperCase()} letter`}
          width={200}
          height={350}
          className="w-full aspect-square rounded-xl"
        />
      ) : (
        <div className="relative group overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={200}
            height={350}
            className="w-full aspect-square rounded-2xl bg-neutral-700 overflow-hidden"
          />
          {member.name && (
            <div className="absolute bottom-0 py-6 text-center w-full space-y-2 opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 duration-700 transition-all bg-gradient-to-b from-neutral-950/0 to-neutral-950/80 overflow-hidden">
              <h4 className="text-neutral-300">{member.name}</h4>
              <p className="text-sm text-neutral-400">{member.role}</p>
              <div className="flex gap-4 justify-center">
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
          )}
        </div>
      )}
    </div>
  );

  const sortedMembers = [...teamMembers].sort((a, b) => {
    if (isMobile) {
      return a.mobileOrder - b.mobileOrder;
    }

    return 0;
  });

  return (
    <section className="container mx-auto max-w-7xl pt-40 px-4 md:px-0">
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
        THE TEAM
      </p>
      <h1 className="text-neutral-300 text-2xl md:text-3xl">
        Our Core Specialists Who Lead The Way
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        {sortedMembers.map((member, index) =>
          getMemberComponent(member, index)
        )}
      </div>
    </section>
  );
};

export default TeamSection;
