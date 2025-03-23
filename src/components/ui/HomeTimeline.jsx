import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HomeTimeline() {
  const data = [
    {
      title: "Early 2023",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-normal mb-8">
            Started Learning Basic Web Programming, Using HTML, CSS, And Javascript
          </h2>
        </div>
      ),
    },
    {
      title: "September 2022",
      content: (
        <div>
          <h2
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-normal mb-8">
              Joined Vellore Institute Of Technology, Chennai.
          </h2>
          <p>
            Bachelor Of Technology, In Electrical And Electronics Engineering
          </p>
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
