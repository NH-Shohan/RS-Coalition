import Image from "next/image";

const Intro = () => {
  return (
    <div className="mx-4">
      <div className="max-w-5xl aspect-video border-4 md:border-8 container mx-auto border-neutral-300  dark:border-neutral-700 rounded-2xl md:rounded-[2.5rem] mt-8 relative overflow-hidden">
        <Image
          src={"https://i.ibb.co.com/KzBkjMd/hero.jpg"}
          alt="Hero Image"
          fill
        />
      </div>
    </div>
  );
};

export default Intro;
