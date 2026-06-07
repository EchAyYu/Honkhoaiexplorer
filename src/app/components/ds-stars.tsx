import { Star } from "lucide-react";

export function StarRating({
  rating = 5,
  max = 5,
  size = 16,
}: {
  rating?: number;
  max?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < rating ? "#F39C12" : "none"}
          stroke={i < rating ? "#F39C12" : "#ccc"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
