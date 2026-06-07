import { Calendar } from "lucide-react";

interface BlogCardProps {
  thumbnail: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export function BlogCard({ thumbnail, category, title, excerpt, date }: BlogCardProps) {
  return (
    <div
      className="rounded-[12px] overflow-hidden bg-white flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ boxShadow: "var(--shadow-ocean)" }}
    >
      <div className="relative h-48 overflow-hidden bg-sky-100">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: "var(--mangrove-green)",
              color: "white",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h4
          className="font-semibold leading-snug line-clamp-2"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "var(--night-sea)",
            fontSize: "17px",
          }}
        >
          {title}
        </h4>
        <p
          className="line-clamp-2 leading-relaxed"
          style={{
            fontFamily: "Inter, sans-serif",
            color: "var(--text-secondary)",
            fontSize: "14px",
          }}
        >
          {excerpt}
        </p>
        <div
          className="flex items-center gap-1.5 mt-auto pt-3 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <Calendar size={12} style={{ color: "var(--text-secondary)" }} />
          <span
            style={{ fontFamily: "Inter, sans-serif", color: "var(--text-secondary)", fontSize: "12px" }}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
