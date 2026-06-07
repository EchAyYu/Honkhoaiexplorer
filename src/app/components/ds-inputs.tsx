import { Mail, Search } from "lucide-react";

export function EmailInput({ placeholder = "email@example.com" }: { placeholder?: string }) {
  return (
    <div className="relative">
      <Mail
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "var(--text-secondary)" }}
      />
      <input
        type="email"
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-[4px] text-sm outline-none transition-all duration-200 focus:ring-2"
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: "var(--input-background)",
          border: "1.5px solid var(--border)",
          color: "var(--text-primary)",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}

export function SearchInput({ placeholder = "Tìm kiếm tour, địa điểm..." }: { placeholder?: string }) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ color: "var(--text-secondary)" }}
      />
      <input
        type="search"
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2"
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: "var(--input-background)",
          border: "1.5px solid var(--border)",
          color: "var(--text-primary)",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
