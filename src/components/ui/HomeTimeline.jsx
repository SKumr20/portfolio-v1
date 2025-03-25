import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HomeTimeline() {
  const data = [
    {
      title: "Present",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Learning Backend Developement using NodeJS, and exploring NextJS
          </h2>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Basic Frontend websites using React, And TailwindCSS.
          </h2>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Started Learning Javascript. Switched to Guitar soon though, was easier.
          </h2>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
            Started Learning C (Never Been the same)
          </h2>
        </div>
      ),
    },
    {
      title: "September 2022",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-8">
              Joined Vellore Institute Of Technology, Chennai.
          </h2> 
        </div>
      ),
    },
    {
      title: "Born 2002",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-normal mb-8">
              Patna, Bihar, IN
          </h2>
        </div>
      ),
    },
  ];
  return (
    <div className="mx-12 md:mx-48">
      <Timeline data={data} />
    </div>
  );
}
