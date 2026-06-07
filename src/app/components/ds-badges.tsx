export type BadgeVariant = "HOT" | "NEW" | "SALE" | "ECO" | "POPULAR";

const badgeStyles: Record<BadgeVariant, { bg: string; color: string }> = {
  HOT: { bg: "#e74c3c", color: "#fff" },
  NEW: { bg: "#0A3D62", color: "#fff" },
  SALE: { bg: "#F39C12", color: "#1A1A2E" },
  ECO: { bg: "#1E8449", color: "#fff" },
  POPULAR: { bg: "#8e44ad", color: "#fff" },
};

export function Badge({ variant }: { variant: BadgeVariant }) {
  const s = badgeStyles[variant];
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
      style={{
        backgroundColor: s.bg,
        color: s.color,
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.05em",
      }}
    >
      {variant}
    </span>
  );
}
