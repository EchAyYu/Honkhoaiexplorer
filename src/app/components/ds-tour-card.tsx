import { StarRating } from "./ds-stars";
import { Badge } from "./ds-badges";
import { Heart } from "lucide-react";
import { GhostButton } from "./ds-buttons";

interface TourCardProps {
  image: string;
  badge?: "HOT" | "NEW" | "SALE" | "ECO" | "POPULAR";
  title: string;
  location: string;
  rating: number;
  reviews: number;
  duration: string;
  price: number;
}

export function TourCard({
  image,
  badge,
  title,
  location,
  rating,
  reviews,
  duration,
  price,
}: TourCardProps) {
  return (
    <div
      className="rounded-[12px] overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ boxShadow: "var(--shadow-ocean)" }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-sky-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge} />
          </div>
        )}
        <button
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white transition-colors"
        >
          <Heart size={14} style={{ color: "var(--ocean-blue)" }} />
        </button>
        <div
          className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
          style={{ backgroundColor: "rgba(10,61,98,0.85)", fontFamily: "Inter, sans-serif" }}
        >
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p
            className="text-xs mb-1"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif", letterSpacing: "1px", textTransform: "uppercase" }}
          >
            {location}
          </p>
          <h3
            className="font-semibold leading-snug"
            style={{ fontFamily: "Playfair Display, serif", color: "var(--night-sea)", fontSize: "18px" }}
          >
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <StarRating rating={rating} size={14} />
          <span
            className="text-xs"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            {rating.toFixed(1)} ({reviews} đánh giá)
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <span
              className="text-xs"
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              Từ
            </span>
            <div
              className="font-bold"
              style={{ fontFamily: "Inter, sans-serif", color: "var(--ocean-blue)", fontSize: "20px" }}
            >
              {price.toLocaleString("vi-VN")}₫
            </div>
          </div>
          <GhostButton>Chi Tiết</GhostButton>
        </div>

        {/* Book button */}
        <button
          className="w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: "var(--ocean-blue)",
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Đặt Tour Ngay
        </button>
      </div>
    </div>
  );
}
