import Image from "next/image";

const Intro = ({ src }) => {
  return (
    <div className="mx-4">
      <div className="max-w-5xl aspect-video border-4 md:border-8 container mx-auto border-neutral-300  dark:border-neutral-700 rounded-2xl md:rounded-[2.5rem] mt-8 relative overflow-hidden">
        <Image src={src} alt="Hero Image" className="object-cover" fill />
      </div>
    </div>
  );
};

export default Intro;
