import services from "@/data/services.json";

const Services = () => {
  return (
    <div className="pt-20 md:pt-40" id="services">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 border-t-2 border-neutral-700 h-full">
        <div className="space-y-4 text-left md:text-right col-span-1 p-4 md:p-7 md:sticky top-[104px] md:h-screen">
          <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
            SERVICES
          </p>
          <div className="space-y-2">
            <h1 className="text-neutral-300">
              What We <br /> Offer
            </h1>
            <p className="text-neutral-500">We help your business grow</p>
          </div>
        </div>

        <div className="space-y-4 text-left col-span-2 md:border-l-2 border-neutral-700">
          <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none px-4 md:px-12 pt-7">
            WE OFFER
          </p>

          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-2 p-4 md:py-12 md:px-12 border-b-2 border-neutral-700"
              >
                <h3 className="text-neutral-300">{service.title}</h3>
                <p className="text-neutral-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
