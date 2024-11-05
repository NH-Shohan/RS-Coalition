import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mt-20 container mx-auto max-w-7xl">
      <div className="flex justify-end text-neutral-400">
        <p className="px-5 py-3">+8801234567890</p>
        <Link
          href={"mailto:rscoalition.info@gmail.com"}
          className="px-5 py-3 border-l-2 border-neutral-600"
        >
          rscoalition.info@gmail.com
        </Link>
      </div>

      <div className="flex justify-center border-y-2 border-neutral-600">
        <Link
          className="border-r-2 border-neutral-600 px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
          href={"#"}
        >
          About
        </Link>
        <Link
          className="border-r-2 border-neutral-600 px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
          href={"#"}
        >
          Services
        </Link>
        <Link
          className="border-r-2 border-neutral-600 px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
          href={"#"}
        >
          Pricing
        </Link>
        <Link
          className="px-7 py-3 hover:bg-gradient-to-r from-blue-600 to-purple-600 inline-block hover:text-transparent bg-clip-text transition-all"
          href={"#"}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
