"use client"

import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => {
  

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-border dark:border-darkBorder transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-main data-[state=unchecked]:bg-white dark:data-[state=unchecked]:bg-secondaryBlack",
        className
      )}
      checked={isDark}
      onCheckedChange={toggleTheme}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 rounded-full border-2 border-border dark:border-darkBorder bg-white ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
        )}
      />
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };