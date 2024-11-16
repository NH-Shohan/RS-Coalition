"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import plansData from "@/data/plans.json";
import { SealCheck, Spinner } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const Plans = () => {
  const [activeTab, setActiveTab] = useState("UI/UX Design");
  const [plans, setPlans] = useState([]);
  const [slideDirection, setSlideDirection] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    setPlans(plansData[activeTab]);
  }, [activeTab]);

  const tabs = ["UI/UX Design", "Web Development", "App Development"];

  const handleTabChange = (newTab) => {
    const oldIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(newTab);
    setSlideDirection(newIndex > oldIndex ? 1 : -1);
    setActiveTab(newTab);
  };

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 10 : -10,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -10 : 10,
      opacity: 0,
    }),
  };

  return (
    <div
      className="container mx-auto max-w-7xl pt-20 md:pt-40 px-4"
      id="pricing"
    >
      {/* Header and tabs remain the same */}
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none font-bold">
        PLANS
      </p>
      <h1 className="dark:text-neutral-300 text-neutral-700 text-2xl md:text-3xl">
        Choose Your Affordable Plan
      </h1>

      <div className="relative mt-10 border-y-2 border-neutral-300 dark:border-neutral-700">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex whitespace-nowrap min-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-3 hover:text-blue-600 transition-all border-r-2 border-neutral-300 dark:border-neutral-700 px-4 md:px-5 flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none"
                    : "text-neutral-500"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                <span className="text-sm md:text-base">{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Plans Grid */}
      <AnimatePresence
        mode="wait"
        initial={false}
        custom={slideDirection}
        className="overflow-hidden"
      >
        <motion.div
          key={activeTab}
          custom={slideDirection}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-6 md:mt-0"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`md:p-6 md:border-r-2 border-neutral-300 dark:border-neutral-700 ${
                index === 2 && "md:border-r-0 md:border-opacity-0 border-none"
              }`}
            >
              {/* Plan content remains the same */}
              <span className="bg-neutral-600 text-white py-1 px-3 rounded-full uppercase text-xs">
                {plan.type}
              </span>
              <h4 className="mt-4 text-lg md:text-xl">{plan.title}</h4>
              <p className="text-neutral-500 mt-2 text-sm md:text-base">
                {plan.description}
              </p>

              {plan.price && (
                <h2 className="text-neutral-700 dark:text-neutral-300 mt-4 text-xl md:text-4xl">
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
                        className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
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
                          className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
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
                          className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300"
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
                        className="w-full bg-transparent border-b-2 border-neutral-300 dark:border-neutral-700 focus:border-b-blue-500 outline-none px-0 py-3 text-neutral-700 dark:text-neutral-300 min-h-[120px]"
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
                          <p className="flex gap-2 items-center">
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
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Plans;
