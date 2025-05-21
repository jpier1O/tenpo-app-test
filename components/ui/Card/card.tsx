import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card text-card-foreground shadow-[0px_2px_2px_0px_#00000059]",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export {
  Card,
};
