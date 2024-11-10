import Image from "next/image";
import c_letter from "../../public/C.svg";
import r_letter from "../../public/R.svg";
import s_letter from "../../public/S.svg";

const teamMembers = [
  {
    name: "Saqeb Hasan",
    role: "CEO",
    image: "/noise.png",
  },
  {
    name: "Nahim Hossain Shohan",
    role: "Business Development & Organization",
    image: "/noise.png",
  },
  {
    name: "R Letter",
    role: "",
    image: "",
  },
  {
    name: "S Letter",
    role: "",
    image: "",
  },
  {
    name: "Md. Touhidul Ridoy",
    role: "Project Manager",
    image: "/noise.png",
  },
  {
    name: "Rumel",
    role: "Business Development Manager",
    image: "/noise.png",
  },
  {
    name: "Mohsina Rubaiyat Khan",
    role: "Operations Coordinator",
    image: "/noise.png",
  },
  {
    name: "Mohsina Rubaiyat Khan",
    role: "Operations Coordinator",
    image: "/noise.png",
  },
  {
    name: "C Letter",
    role: "",
    image: "",
  },
];

const TeamSection = () => {
  return (
    <section className="container mx-auto max-w-7xl pt-40">
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
        THE TEAM
      </p>
      <h1 className="text-neutral-300">
        Our Core Specialists Who Lead The Way
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`border-neutral-700 p-6 text-neutral-300 transition-all duration-200 ${
              index % 3 !== 2 ? "border-r-2" : ""
            } ${index < teamMembers.length - 3 ? "border-b-2" : ""}`}
          >
            {index === 2 ? (
              <Image
                src={r_letter}
                alt="R letter"
                width={200}
                height={350}
                className="w-full aspect-square rounded-xl "
              />
            ) : index === 3 ? (
              <Image
                src={s_letter}
                alt="S letter"
                width={200}
                height={350}
                className="w-full aspect-square rounded-xl "
              />
            ) : index === 8 ? (
              <Image
                src={c_letter}
                alt="S letter"
                width={200}
                height={350}
                className="w-full aspect-square rounded-xl "
              />
            ) : (
              <div className="relative group overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={350}
                  className="w-full aspect-square rounded-xl bg-neutral-700 overflow-hidden"
                />
                <div className="absolute bottom-0 py-6 text-center w-full space-y-1 opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 duration-700 transition-all bg-gradient-to-b from-neutral-950/0 to-neutral-950/80 overflow-hidden">
                  <h4 className="text-neutral-300">{member.name}</h4>
                  <p className="text-sm text-neutral-400">{member.role}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
