import { useState, useEffect } from "react";
import { Compass, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserMenu } from "./UserMenu";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "/about" },
  { label: "Tour Du Lịch", href: "/tours", dropdown: true },
  { label: "Thông Tin", href: "/info" },
  { label: "Tin Tức", href: "/news" },
  { label: "Liên Hệ", href: "/contact" },
];

export function HpNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"VI" | "EN">("VI");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Kiểm tra user đã đăng nhập
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, [location.pathname]); // Re-check khi chuyển trang

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

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
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-1 text-sm relative group transition-colors duration-150"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: active ? "#F39C12" : "rgba(255,255,255,0.85)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} />}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"
                  style={{ width: active ? "100%" : "0" }}
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

          {/* User menu hoặc nút đăng nhập */}
          {user ? (
            <UserMenu user={user} onLogout={handleLogout} />
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Đăng Nhập
              </Link>
              <Link
                to="/login"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  backgroundColor: "#F39C12",
                  color: "#1A1A2E",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <Phone size={14} />
                Đặt Tour Ngay
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}