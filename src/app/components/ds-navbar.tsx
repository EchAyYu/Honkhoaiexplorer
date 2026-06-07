import { PrimaryButtonDark } from "./ds-buttons";
import { Compass, Menu } from "lucide-react";

const navLinks = [
  "Trang Chủ",
  "Khám Phá",
  "Tour",
  "Blog",
  "Liên Hệ",
];

export function NavBar() {
  return (
    <nav
      className="w-full flex items-center justify-between px-8 py-4 rounded-2xl"
      style={{
        backgroundColor: "var(--ocean-blue)",
        boxShadow: "var(--shadow-ocean)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "var(--golden-sunset)" }}
        >
          <Compass size={20} color="#1A1A2E" />
        </div>
        <div>
          <div
            className="font-bold text-white leading-tight"
            style={{ fontFamily: "Playfair Display, serif", fontSize: "15px" }}
          >
            Hòn Khoai Explorer
          </div>
          <div
            className="text-white/50 leading-tight"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "2px" }}
          >
            CÀ MAU · VIETNAM
          </div>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks.map((link, i) => (
          <a
            key={link}
            href="#"
            className="text-sm transition-colors duration-150 hover:text-amber-400"
            style={{
              fontFamily: "Inter, sans-serif",
              color: i === 0 ? "#F39C12" : "rgba(255,255,255,0.8)",
              fontWeight: i === 0 ? 600 : 400,
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <PrimaryButtonDark>Đặt Tour</PrimaryButtonDark>
        <button className="md:hidden text-white">
          <Menu size={20} />
        </button>
      </div>
    </nav>
  );
}
