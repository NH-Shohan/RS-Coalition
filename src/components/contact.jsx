"use client";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  PhoneCall,
} from "@phosphor-icons/react";
import Link from "next/link";
import Button from "./ui/button";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto max-w-7xl" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-10">
          <div>
            <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
              GET IN TOUCH
            </p>
            <h1 className="text-neutral-300">Have Idea In Mind?</h1>
          </div>

          <div className="flex gap-4 mb-6">
            <Link href="#">
              <InstagramLogo
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link href="#">
              <LinkedinLogo
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link href="#">
              <FacebookLogo
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link href="#">
              <PhoneCall
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
          </div>

          {/* Address */}
          <div className="mb-8">
            <p className="text-neutral-500 mb-2">Address</p>
            <h5>
              House-23, Road-1, Block A,
              <br />
              Aftabnagar, Dhaka
            </h5>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-200">
                Full name <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-neutral-700 focus:border-blue-500 outline-none px-0 py-3"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-200">
                Email <span className="text-blue-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-neutral-700 focus:border-blue-500 outline-none px-0 py-3"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-200">
                Phone (optional)
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-neutral-700 focus:border-blue-500 outline-none px-0 py-3"
                placeholder="+8801234567890"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-200">
                How did you hear about us?
              </label>
              <select className="w-full bg-transparent border-b border-neutral-700 focus:border-blue-500 outline-none px-0 py-3">
                <option value="">Choose any one</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="search">Search Engine</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-200">
                Project Budget
              </label>
              <select className="w-full bg-transparent border-b border-neutral-700 focus:border-blue-500 outline-none px-0 py-3">
                <option value="">Select your range</option>
                <option value="small">$100 - $500</option>
                <option value="medium">$500 - $1000</option>
                <option value="medium">$1000 - $3000</option>
                <option value="large">$3000+</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm mb-2 text-neutral-200">
              About project <span className="text-blue-500">*</span>
            </label>
            <textarea
              className="w-full bg-transparent border-b border-neutral-700 focus:border-blue-500 outline-none px-0 py-3 min-h-[120px]"
              placeholder="Your message here"
              required
            />
          </div>

          <div className="mt-8">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
