"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { plans } from "./list";

function PlanCard({
  title,
  price,
  description,
  features,
  href,
  selected,
  onSelect,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  selected: boolean;
  onSelect: (plan: string) => void;
}) {
  return (
    <div
      className={
        "border-2 border-slate-100 shadow-lg rounded-3xl w-80 overflow-hidden duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl" +
        (selected ? " border-primary" : " border-slate-100")
      }
    >
      <div className="bg-primary/10 px-4 pt-8 pb-3">
        <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl sm:tracking-tight lg:text-3xl">
          {title}
        </h3>
      </div>
      <div className="p-4 text-left">
        <p className="text-slate-500 text-sm font-medium">{description}</p>
        <div className="mt-6">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary/50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-slate-500">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <Button
          className={
            "w-full rounded-full font-semibold border-2 border-primary " +
            (selected
              ? ""
              : "bg-transparent text-primary hover:text-primary hover:bg-transparent")
          }
          size="lg"
          onClick={() => onSelect(title)}
        >
          {selected ? "Selected" : "Select Plan"}
        </Button>
      </div>
    </div>
  );
}

export function AllPlans() {
  const [selectedPlan, setSelectedPlan] = useState("Free");

  return (
    <div className="w-full max-w-8xl mx-auto flex items-stretch justify-center flex-wrap text-center gap-4 my-8">
      {plans.map((plan, index) => (
        <PlanCard
          {...plan}
          key={index}
          selected={selectedPlan === plan.title}
          onSelect={setSelectedPlan}
        />
      ))}
    </div>
  );
}
