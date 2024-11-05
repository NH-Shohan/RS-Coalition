const services = [
  "Telesales",
  "UI/UX DESIGN",
  "APP DESIGN",
  "App development",
  "Website design",
  "Web development",
];

const Slider = () => {
  return (
    <>
      <div className="relative overflow-hidden py-5 border-y border-neutral-700 mt-32">
        <div className="flex gap-8 animate-scroll-left">
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={`left-${index}`}
              className="flex gap-8 items-center text-neutral-600 text-[4.5rem]"
            >
              <h1 className="text-[4.5rem] uppercase">{service}</h1>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
                ✧
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden py-5 border-y border-neutral-700">
        <div className="flex gap-8 animate-scroll-right">
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={`right-${index}`}
              className="flex gap-8 items-center text-neutral-600 text-[4.5rem]"
            >
              <h1 className="text-[4.5rem] uppercase">{service}</h1>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
                ✧
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
