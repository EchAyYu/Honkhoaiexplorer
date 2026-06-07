import { StarRating } from "./ds-stars";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  avatar: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  name,
  location,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div
      className="rounded-[12px] p-7 bg-white flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-ocean)" }}
    >
      <div className="flex items-start justify-between">
        <StarRating rating={rating} size={15} />
        <Quote size={24} style={{ color: "var(--golden-sunset)", opacity: 0.6 }} />
      </div>

      <p
        className="leading-relaxed flex-1"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontStyle: "italic",
          color: "var(--text-primary)",
          fontSize: "17px",
          lineHeight: 1.7,
        }}
      >
        "{quote}"
      </p>

      <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
        <img
          src={avatar}
          alt={name}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <div
            className="font-semibold"
            style={{ fontFamily: "Inter, sans-serif", color: "var(--night-sea)", fontSize: "14px" }}
          >
            {name}
          </div>
          <div
            style={{ fontFamily: "Inter, sans-serif", color: "var(--text-secondary)", fontSize: "12px" }}
          >
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
