import { Compass, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const exploreLinks = ["Trang Chủ", "Giới Thiệu", "Tour Du Lịch", "Thông Tin", "Tin Tức", "Liên Hệ"];
const tourLinks = ["Tour 1 Ngày Hòn Khoai", "Tour Lặn Biển San Hô", "Tour Sinh Thái Rừng Ngập Mặn", "Tour Câu Cá Ngoài Khơi", "Combo Cà Mau — Hòn Khoai"];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "15px", color: "white", marginBottom: "10px" }}>
        {children}
      </div>
      <div style={{ width: "40px", height: "2px", backgroundColor: "#F39C12", borderRadius: "2px" }} />
    </div>
  );
}

// TikTok icon (not in lucide)
function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.21 8.21 0 0 0 4.79 1.53V6.74a4.85 4.85 0 0 1-1.03-.05z"/>
    </svg>
  );
}

export function HpFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ backgroundColor: "#0A1628" }}>
      {/* Main content */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "80px 80px 0" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F39C12" }}>
                <Compass size={22} color="#1A1A2E" />
              </div>
              <div>
                <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "16px", color: "white" }}>HÒN KHOAI</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "4px", color: "rgba(255,255,255,0.4)" }}>EXPLORER</div>
              </div>
            </div>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: "16px", color: "rgba(243,156,18,0.75)" }}>
              "Đưa Bạn Đến Tận Cùng Đất Việt"
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}>
              Chuyên tổ chức tour du lịch sinh thái và khám phá biển đảo tại Hòn Khoai — Cà Mau từ năm 2017.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook },
                { Icon: Instagram },
                { Icon: Youtube },
                { Icon: TikTokIcon },
              ].map(({ Icon }, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Khám Phá */}
          <div>
            <FooterHeading>Khám Phá</FooterHeading>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-150 hover:text-white"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tour Phổ Biến */}
          <div>
            <FooterHeading>Tour Phổ Biến</FooterHeading>
            <ul className="flex flex-col gap-3">
              {tourLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-150 hover:text-white"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div>
            <FooterHeading>Liên Hệ & Đăng Ký</FooterHeading>
            <div className="flex flex-col gap-3 mb-7">
              {[
                { icon: MapPin, text: "Số 1 Đường Lý Văn Lâm, Cà Mau" },
                { icon: Phone, text: "Hotline: 1900 1234" },
                { icon: Mail, text: "info@honkhaiexplorer.vn" },
                { icon: Clock, text: "7:00 — 21:00 (Thứ 2 — Chủ Nhật)" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon size={13} style={{ color: "#F39C12", marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, color: "white", marginBottom: "10px" }}>
                Nhận Ưu Đãi Mới Nhất
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2.5 text-xs outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    color: "white",
                    fontFamily: "Inter, sans-serif",
                  }}
                />
                <button
                  className="px-4 py-2.5 rounded-lg font-semibold text-xs transition-all hover:brightness-110"
                  style={{ backgroundColor: "#F39C12", color: "#1A1A2E", fontFamily: "Inter, sans-serif" }}
                >
                  Đăng Ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "1440px", margin: "48px auto 0", padding: "0 80px" }}>
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between flex-wrap gap-3"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "20px 80px 40px" }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
          © 2025 Hòn Khoai Explorer. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          {["Chính Sách Bảo Mật", "Điều Khoản", "Sitemap"].map((link, i, arr) => (
            <span key={link} className="flex items-center gap-5">
              <a
                href="#"
                className="transition-colors hover:text-white"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
              >
                {link}
              </a>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
