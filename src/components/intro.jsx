import { OptimizedImage } from "@/lib/OptimizedImage";
import { usePathname } from "next/navigation";
import development from "../../public/development.jpg";
import hero from "../../public/hero.jpg";

const Intro = () => {
  const pathname = usePathname();

  return (
    <div className="mx-4">
      <div className="max-w-5xl aspect-video border-4 md:border-8 container mx-auto border-neutral-300 dark:border-neutral-700 rounded-2xl md:rounded-[2.5rem] mt-8 relative overflow-hidden">
        <OptimizedImage
          src={!pathname.includes("/services") ? hero : development}
          alt="Hero Image"
          className="object-cover w-full h-full"
          fill
        />
      </div>
    </div>
  );
};

export default Intro;
