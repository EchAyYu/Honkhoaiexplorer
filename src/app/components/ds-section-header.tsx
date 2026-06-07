interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: light ? "#F39C12" : "var(--mangrove-green)",
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 48px)",
          lineHeight: 1.25,
          color: light ? "white" : "var(--night-sea)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: 1.6,
            color: light ? "rgba(255,255,255,0.75)" : "var(--text-secondary)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
