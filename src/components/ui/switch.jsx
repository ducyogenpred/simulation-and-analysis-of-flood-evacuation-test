import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const sizeClasses = {
  md: {
    root: "h-[1.15rem] w-8",
    thumb: "h-4 w-4 data-[state=checked]:translate-x-[calc(100%-2px)]",
  },
  lg: {
    root: "h-[1.75rem] w-12",
    thumb: "h-6 w-6 data-[state=checked]:translate-x-[calc(100%-2px)]",
  },
  xl: {
    root: "h-[2.30rem] w-16",
    thumb: "h-8 w-8 data-[state=checked]:translate-x-[calc(100%-2px)]",
  },
};

const Switch = React.forwardRef(
  ({ className, thumbClassName, size = "md", ...props }, ref) => {
    const { root, thumb } = sizeClasses[size];

    return (
      <SwitchPrimitive.Root
        ref={ref}
        data-slot="switch"
        className={cn(
          "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          root,
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform data-[state=unchecked]:translate-x-0",
            thumb,
            thumbClassName,
          )}
        />
      </SwitchPrimitive.Root>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
