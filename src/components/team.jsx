import Image from "next/image";

const teamMembers = [
  {
    name: "Saqeb Hasan",
    role: "CEO",
    image: "/vercel.svg",
  },
  {
    name: "Mohsina Rubaiyat Khan",
    role: "HR",
    image: "/vercel.svg",
  },
  {
    name: "Md. Touhidul Ridoy",
    role: "Project Manager",
    image: "/vercel.svg",
  },
  {
    name: "Nahim Hossain Shohan",
    role: "Business Development & Organization",
    image: "/vercel.svg",
  },
];

const TeamSection = () => {
  return (
    <section className="container mx-auto max-w-7xl">
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
        THE TEAM
      </p>
      <h1 className="text-neutral-300">
        Our Core Specialists Who Lead The Way
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex text-center border-neutral-700 gap-4 p-8 ${
              (index === 0 && "flex-row-reverse border-r border-b") ||
              (index === 1 && "border-l border-b") ||
              (index === 2 && "flex-row-reverse border-r border-t") ||
              (index === 3 && "border-l border-t")
            }`}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={350}
              className="rounded-xl mb-4 bg-neutral-700"
            />
            <div
              className={`text-left ${
                (index === 0 && "text-right") || (index === 2 && "text-right")
              }`}
            >
              <h4 className="text-neutral-300">{member.name}</h4>
              <p className="text-sm text-neutral-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
