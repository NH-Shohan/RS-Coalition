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

  return (
    <div className="container mx-auto max-w-7xl pt-40" id="plans">
      <p className="text-lg bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none">
        PLANS
      </p>
      <h1 className="text-neutral-300">Choose Your Affordable Plan</h1>

      <div className="flex justify-start border-y-2 border-neutral-700 mt-10">
        {[
          "Telesales",
          "UI/UX Design",
          "Web Development",
          "App Development",
        ].map((tab) => (
          <button
            key={tab}
            className={`py-3 hover:text-blue-600 transition-all border-r-2 border-neutral-700 px-5 ${
              activeTab === tab
                ? "bg-gradient-to-b from-blue-500 to-purple-600 inline-block text-transparent bg-clip-text leading-none"
                : "text-neutral-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border-r-2 border-neutral-700 ${
              index === 2 && "border-r-0 border-opacity-0"
            }`}
          >
            <span className="bg-neutral-600 text-white py-1 px-3 rounded-full uppercase text-xs">
              {plan.type}
            </span>
            <h4 className="mt-4">{plan.title}</h4>
            <p className="text-neutral-500 mt-2">{plan.description}</p>

            {plan.price && (
              <h2 className="text-white mt-4">
                Tk {plan.price}
                <span className="text-neutral-500 text-lg">/hour</span>
              </h2>
            )}

            <div className="border-t-2 border-neutral-700 mt-4 pt-4">
              <p className="font-semibold text-neutral-400">
                Why should you take this
              </p>
              <ul className="text-neutral-500 mt-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm my-3"
                  >
                    <span className="text-blue-500">
                      <SealCheck size={20} />
                    </span>
                    {feature}
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
    </div>
  );
};

export default Plans;
