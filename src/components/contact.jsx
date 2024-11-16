"use client";

import {
  FacebookLogo,
  LinkedinLogo,
  PhoneCall,
  Spinner,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      source: formData.get("source"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      formType: "contact",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        e.target.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="container mx-auto max-w-7xl pt-20 md:pt-40 px-4"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-10">
          <div>
            <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold">
              GET IN TOUCH
            </p>
            <h1 className="text-neutral-700 dark:text-neutral-300">
              Have Idea In Mind?
            </h1>
          </div>

          <div className="flex gap-4 mb-6">
            {/* <Link target="_blank" href={"#"}>
              <InstagramLogo
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link> */}
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/rscoalition"
            >
              <LinkedinLogo
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/RSCoalition">
              <FacebookLogo
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
            <Link target="_blank" href="tel:+8801973435247">
              <PhoneCall
                size={32}
                className="text-blue-500 cursor-pointer hover:text-blue-600 transition-all"
              />
            </Link>
          </div>

          <div className="mb-8">
            <p className="text-neutral-500 mb-2">Address</p>
            <h4 className="leading-8 text-neutral-700 dark:text-neutral-300">
              House-23, Road-1, Block A,
              <br />
              Aftabnagar, Dhaka
            </h4>
          </div>

          <p className="text-neutral-500 mb-2">
            © Copyright {new Date().getFullYear()},{" "}
            <Link
              target="_blank"
              href={"https://github.com/NH-Shohan/"}
              className="text-neutral-400 dark:text-neutral-700 font-semibold underline"
            >
              Developer
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-10 md:mt-0">
          {submitStatus.message && (
            <div
              className={`p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-red-500/10 text-red-500"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-500">
                Full name <span className="text-blue-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-500">
                Email <span className="text-blue-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-500">
                Phone (optional)
              </label>
              <input
                name="phone"
                type="tel"
                className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
                placeholder="+8801234567890"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-neutral-500">
                How did you hear about us?
              </label>
              <select
                name="source"
                className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
              >
                <option value="">Choose any one</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Search Engine">Search Engine</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-2 text-neutral-500">
                Project Budget
              </label>
              <select
                name="budget"
                className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
              >
                <option value="">Select your range</option>
                <option value="$100 - $500">$100 - $500</option>
                <option value="$500 - $1000">$500 - $1000</option>
                <option value="$1000 - $3000">$1000 - $3000</option>
                <option value="$3000+">$3000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-neutral-500">
              About project <span className="text-blue-500">*</span>
            </label>
            <textarea
              name="message"
              className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300 min-h-[120px]"
              placeholder="Your message here"
              required
            />
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={"w-full md:w-fit px-12"}
            >
              {isSubmitting ? (
                <p className="flex gap-2">
                  <Spinner size={24} className="animate-spin duration-3000" />{" "}
                  Sending...
                </p>
              ) : (
                <p>Submit</p>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
