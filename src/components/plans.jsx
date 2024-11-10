"use client";

import plansData from "@/data/plans.json";
import { SealCheck } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Button from "./ui/button";

const Plans = () => {
  const [activeTab, setActiveTab] = useState("Telesales");
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(plansData[activeTab]);
  }, [activeTab]);

  const tabs = [
    "Telesales",
    "UI/UX Design",
    "Web Development",
    "App Development",
  ];

  return (
    <div className="container mx-auto max-w-7xl pt-20 md:pt-40 px-4" id="plans">
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
        PLANS
      </p>
      <h1 className="text-neutral-300 text-2xl md:text-3xl">
        Choose Your Affordable Plan
      </h1>

      {/* Scrollable tabs container for mobile */}
      <div className="relative mt-10 border-y-2 border-neutral-700">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex whitespace-nowrap min-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-3 hover:text-blue-600 transition-all border-r-2 border-neutral-700 px-4 md:px-5 flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none"
                    : "text-neutral-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <span className="text-sm md:text-base">{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plan Cards - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-6 md:mt-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`md:p-6 md:border-r-2 border-neutral-700 ${
              index === 2 && "md:border-r-0 md:border-opacity-0"
            } bg-neutral-900/30 rounded-lg md:rounded-none`}
          >
            <span className="bg-neutral-600 text-white py-1 px-3 rounded-full uppercase text-xs">
              {plan.type}
            </span>
            <h4 className="mt-4 text-lg md:text-xl">{plan.title}</h4>
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

            <div className="border-t-2 border-neutral-700 mt-4 pt-4">
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

            <Button
              className={`mt-6 w-full transition-all ${
                (index === 0 &&
                  "bg-gradient-to-r from-neutral-600 to-neutral-600") ||
                (index === 1 &&
                  "bg-gradient-to-r from-neutral-600 to-neutral-600")
              }`}
            >
              Start Your Project
            </Button>
          </div>
        ))}
      </div>

      {/* Add custom styles for hiding scrollbar */}
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
