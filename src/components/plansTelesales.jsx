"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import plans from "@/data/plans.json";
import { SealCheck, Spinner } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "./ui/button";

const PlansTelesales = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

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
      message: formData.get("message"),
      selectedPlan: selectedPlan,
      formType: "plan",
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
        setTimeout(() => setOpen(false), 1000);
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
    <div className="container mx-auto max-w-7xl pt-20 md:pt-40 px-4" id="plans">
      <div>
        <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold">
          PLANS
        </p>
        <h1 className="text-neutral-700 dark:text-neutral-300 text-2xl md:text-3xl">
          Choose Your Affordable Plan
        </h1>
      </div>

      {/* Plan Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-6 border-t-2 border-neutral-300 dark:border-neutral-700">
        {plans.Telesales.map((plan, index) => (
          <div
            key={index}
            className={`pt-6 md:p-6 md:border-r-2 border-neutral-300 dark:border-neutral-700 ${
              index === 2 && "md:border-r-0 md:border-opacity-0 border-none"
            }`}
          >
            <span className="bg-neutral-600 text-white py-1 px-3 rounded-full uppercase text-xs">
              {plan.type}
            </span>
            <h4 className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-neutral-300">
              {plan.title}
            </h4>
            <p className="text-neutral-500 mt-2 text-sm md:text-base">
              {plan.description}
            </p>

            {plan.price && (
              <h2 className="text-white mt-4 text-xl md:text-2xl">
                Tk {plan.price}
                <span className="text-neutral-500 text-base md:text-lg">
                  /hour
                </span>
              </h2>
            )}

            <div className="border-t-2 border-neutral-300 dark:border-neutral-700 mt-4 pt-4">
              <p className="font-semibold text-neutral-400 text-base">
                Why should you take this
              </p>
              <ul className="text-neutral-500 mt-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 my-3">
                    <span className="text-blue-500 flex-shrink-0">
                      <SealCheck size={20} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button
                  className={`mt-6 w-full transition-all ${
                    (index === 0 &&
                      "bg-gradient-to-r from-neutral-600 to-neutral-600") ||
                    (index === 1 &&
                      "bg-gradient-to-r from-neutral-600 to-neutral-600")
                  }`}
                  onClick={() => setSelectedPlan(plan.title)}
                >
                  Start Your Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-neutral-700 dark:text-neutral-300 pb-2">
                    Start Your Project
                  </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label className="block text-sm mb-2 text-neutral-500">
                      Full name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <div>
                      <label className="block text-sm mb-2 text-neutral-500">
                        Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3"
                        placeholder="johndoe@gmail.com"
                        required
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
                        Phone (optional)
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3"
                        placeholder="+8801234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-neutral-500">
                      About project <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 min-h-[120px]"
                      placeholder="Your message here"
                      required
                    />
                  </div>

                  <div className="mt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-fit px-12"
                    >
                      {isSubmitting ? (
                        <p className="flex gap-2">
                          <Spinner
                            size={24}
                            className="animate-spin duration-3000"
                          />
                          Sending...
                        </p>
                      ) : (
                        <p>Submit</p>
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansTelesales;
