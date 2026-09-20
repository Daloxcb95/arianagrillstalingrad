import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium tracking-wide text-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
