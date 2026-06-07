import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
}

export function FeatureIconCard({ icon: Icon, title, description, accent = "#F39C12" }: FeatureCardProps) {
  return (
    <div
      className="rounded-[12px] p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0px 8px 32px rgba(10,61,98,0.18)",
      }}
    >
      {/* Glow orb */}
      <div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: accent }}
      />

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: accent + "20", border: `1px solid ${accent}40` }}
      >
        <Icon size={22} style={{ color: accent }} />
      </div>

      <div>
        <h4
          className="font-semibold mb-1.5"
          style={{ fontFamily: "Inter, sans-serif", color: "white", fontSize: "16px" }}
        >
          {title}
        </h4>
        <p
          className="leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "14px" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function StatsCard({
  icon: Icon,
  number,
  label,
  accent = "#F39C12",
}: {
  icon: LucideIcon;
  number: string;
  label: string;
  accent?: string;
}) {
  return (
    <div
      className="rounded-[12px] p-6 flex flex-col items-center gap-2 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0px 8px 32px rgba(10,61,98,0.18)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
        style={{ backgroundColor: accent + "25" }}
      >
        <Icon size={20} style={{ color: accent }} />
      </div>
      <div
        className="font-bold leading-none"
        style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "36px" }}
      >
        {number}
      </div>
      <div
        style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "13px" }}
      >
        {label}
      </div>
    </div>
  );
}
