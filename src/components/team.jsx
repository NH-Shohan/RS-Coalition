import teamMembers from "@/data/teamMembers.json";
import { OptimizedImage } from "@/lib/OptimizedImage";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import c_letter from "../../public/C.svg";
import r_letter from "../../public/R.svg";
import s_letter from "../../public/S.svg";

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
      className={`border-neutral-300 dark:border-neutral-700 p-6 text-neutral-300 dark:text-neutral-700 transition-all duration-200 ${
        isMobile
          ? "border-b-2 last:border-b-0"
          : `${index % 3 !== 2 ? "md:border-r-2" : ""} ${
              index < teamMembers.length - 3 ? "md:border-b-2" : ""
            }`
      }`}
      style={isMobile ? { order: member.mobileOrder } : {}}
    >
      {member.type === "letter" ? (
        <OptimizedImage
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
          className="w-full aspect-square rounded-xl invert dark:invert-0"
        />
      ) : (
        <div className="relative group overflow-hidden">
          <OptimizedImage
            src={member.image}
            alt={member.name}
            width={200}
            height={350}
            className="w-full aspect-square rounded-2xl overflow-hidden  dark:invert invert-0"
          />
          {member.name && (
            <div className="absolute bottom-0 pb-6 pt-10 text-center w-full space-y-2 bg-gradient-to-b from-neutral-950/0 to-neutral-950/70 overflow-hidden rounded-2xl">
              <h4 className="text-neutral-200">{member.name}</h4>
              <p className="text-sm text-neutral-300">{member.role}</p>
              {index === 1 && (
                <p className="text-xs text-neutral-300">Software Developer</p>
              )}
              {member.social && (
                <div className="flex gap-4 justify-center">
                  <Link
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <InstagramLogo
                      size={24}
                      className="text-neutral-400 cursor-pointer hover:text-blue-600 transition-all"
                    />
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <LinkedinLogo
                      size={24}
                      className="text-neutral-400 cursor-pointer hover:text-blue-600 transition-all"
                    />
                  </Link>
                  <Link
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <FacebookLogo
                      size={24}
                      className="text-neutral-400 cursor-pointer hover:text-blue-600 transition-all"
                    />
                  </Link>
                </div>
              )}
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
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold">
        THE TEAM
      </p>
      <h1 className="text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl">
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
