"use client";
import Experience from "@/components/Experience";
import { experience } from "@/data/experience";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import { useState, useEffect } from "react";

const page = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-12">
        {isLoading ? (
          Array(2).fill(0).map((_, index) => (
            <div key={index} className="h-full">
              <SkeletonCard />
            </div>
          ))
        ) : (
          experience.map((exp, index) => (
            <div key={index} className="h-full">
              <Experience {...exp} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;