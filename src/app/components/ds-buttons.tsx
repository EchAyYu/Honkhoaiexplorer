import { ArrowRight } from "lucide-react";

export function PrimaryButton({
  children = "Khám Phá Ngay",
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95"
      style={{
        backgroundColor: "var(--golden-sunset)",
        color: "var(--night-sea)",
        boxShadow: "var(--shadow-ocean)",
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children = "Xem Thêm",
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/10 active:scale-95"
      style={{
        border: "2px solid white",
        color: "white",
        background: "transparent",
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children = "Tìm Hiểu Thêm",
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 group active:scale-95"
      style={{
        color: "var(--golden-sunset)",
        background: "none",
        border: "none",
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.01em",
        padding: "14px 0",
      }}
    >
      {children}
      <ArrowRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </button>
  );
}

export function PrimaryButtonDark({
  children = "Đặt Tour Ngay",
}: {
  children?: React.ReactNode;
}) {
  return (
    <button
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
      style={{
        backgroundColor: "var(--golden-sunset)",
        color: "var(--night-sea)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {children}
    </button>
  );
}
