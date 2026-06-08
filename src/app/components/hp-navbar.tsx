import { useState, useEffect } from "react";
import { Compass, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Trang Chủ", active: true, dropdown: false, href: "/" },
  { label: "Giới Thiệu", active: false, dropdown: false, href: "/about" },
  { label: "Tour Du Lịch", active: false, dropdown: true, href: "/tours" },
  { label: "Thông Tin", active: false, dropdown: false, href: "/info" },
  { label: "Tin Tức", active: false, dropdown: false, href: "/news" },
  { label: "Liên Hệ", active: false, dropdown: false, href: "/contact" },
];

export function HpNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"VI" | "EN">("VI");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "80px",
        background: scrolled
          ? "rgba(10,61,98,0.92)"
          : "rgba(10,61,98,0.55)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div
        className="h-full flex items-center justify-between"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 64px" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#F39C12" }}
          >
            <Compass size={22} color="#1A1A2E" />
          </div>
          <div className="leading-tight">
            <div
              className="font-bold text-white tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", fontSize: "17px" }}
            >
              HÒN KHOAI
            </div>
            <div
              className="text-white/50 tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "4px" }}
            >
              EXPLORER
            </div>
          </div>
        </Link>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = window.location.pathname === link.href || (link.href === '/' && window.location.pathname === '') || (link.href !== '/' && link.href.startsWith('/') && window.location.pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-1 text-sm relative group transition-colors duration-150"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: isActive ? "#F39C12" : "rgba(255,255,255,0.85)",
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} />}
                {/* hover underline */}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"
                  style={{ width: isActive ? "100%" : "0" }}
                />
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Language switcher */}
          <div className="hidden md:flex items-center gap-1 text-xs text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
            <button
              onClick={() => setLang("VI")}
              className="px-2 py-1 rounded transition-colors"
              style={{
                fontWeight: lang === "VI" ? 600 : 400,
                color: lang === "VI" ? "white" : "rgba(255,255,255,0.5)",
              }}
            >
              VI
            </button>
            <span className="text-white/30">|</span>
            <button
              onClick={() => setLang("EN")}
              className="px-2 py-1 rounded transition-colors"
              style={{
                fontWeight: lang === "EN" ? 600 : 400,
                color: lang === "EN" ? "white" : "rgba(255,255,255,0.5)",
              }}
            >
              EN
            </button>
          </div>

          {/* CTA button */}
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "#F39C12",
              color: "#1A1A2E",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Phone size={14} />
            Đặt Tour Ngay
          </a>
        </div>
      </div>
    </nav>
  );
}
