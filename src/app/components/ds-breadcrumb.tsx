import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 flex-wrap">
      <a
        href="#"
        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
        style={{ color: "var(--ocean-blue)", fontFamily: "Inter, sans-serif", fontSize: "13px" }}
      >
        <Home size={13} />
        <span>Trang Chủ</span>
      </a>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={13} style={{ color: "var(--text-secondary)" }} />
          {item.href && i < items.length - 1 ? (
            <a
              href={item.href}
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--ocean-blue)", fontFamily: "Inter, sans-serif", fontSize: "13px" }}
            >
              {item.label}
            </a>
          ) : (
            <span
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif", fontSize: "13px" }}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
