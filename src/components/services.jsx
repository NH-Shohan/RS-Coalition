const services = [
  {
    title: "Telesales",
    desc: "Our telesales team connects with global clients, driving lead generation and enhancing sales through targeted, professional outreach. With a focus on relationship-building and effective communication, we help you expand your customer base and boost revenue.",
  },
  {
    title: "UI/UX Design",
    desc: "We specialize in user-centric UI/UX design, blending visual appeal with seamless functionality. Our designs prioritize the user journey, enhancing engagement and satisfaction across digital platforms to ensure an unforgettable experience.",
  },
  {
    title: "App Design",
    desc: "We design mobile apps that are both visually appealing and highly functional, tailored to create a smooth, intuitive user experience. From concept to design, we focus on making every interaction meaningful and engaging.",
  },
  {
    title: "Website Design",
    desc: "Our website design services focus on creating visually stunning, fully responsive websites that reflect your brand’s identity. From layout to functionality, we ensure every element is crafted to engage visitors and drive conversions.",
  },
  {
    title: "Web Development",
    desc: "Our web development services bring your ideas to life through scalable, high-performance websites. Whether for e-commerce, business, or personal use, we build custom solutions tailored to meet your goals and optimize user interaction.",
  },
  {
    title: "App Development",
    desc: "Our app development services deliver high-quality mobile applications for Android and iOS. We prioritize performance, usability, and security, ensuring each app meets the unique needs of your users while driving business growth.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto max-w-7xl grid grid-cols-3 gap-6 border-t-2 border-neutral-700 mt-40">
      <div className="space-y-4 text-right col-span-1 p-7">
        <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
          SERVICES
        </p>
        <div>
          <h1>
            What We <br /> Offer
          </h1>
          <p>We help your business grow</p>
        </div>
      </div>

      <div className="space-y-4 text-left col-span-2 border-l-2 border-neutral-700 p-7 pl-12">
        <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
          WE OFFER
        </p>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-neutral-300">{service.title}</h3>
              <p className="text-neutral-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
