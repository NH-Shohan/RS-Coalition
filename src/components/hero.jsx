import Button from "@/components/button";
import Image from "next/image";
import arrow from "../../public/arrow.png";
import rs_coalition from "../../public/rs-coalition.svg";

const Hero = () => {
  return (
    <div>
      <Image
        src={rs_coalition}
        alt="RS Coalition"
        className="px-4 w-full my-20 pointer-events-none"
      />

      <div className="container mx-auto text-center text-neutral-500 pointer-events-none">
        <h1>
          Experience an immersive journey that <br /> celebrates Design,
          innovation, and <br />
          <span className="text-neutral-300">boundless imagination</span>
        </h1>
      </div>

      <div className="container mx-auto flex flex-col items-center mt-10">
        <Button>Start Project</Button>
        <Image
          src={arrow}
          alt="Arrow Image"
          className="w-20 h-20 rotate-45 opacity-30 mt-4"
        />
      </div>
    </div>
  );
};

export default Hero;
