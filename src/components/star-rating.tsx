import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  value = 5,
  className,
}: {
  value?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-accent", className)} aria-label={`${value} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("size-3.5", i < value ? "fill-accent" : "fill-transparent")}
        />
      ))}
    </span>
  );
}
