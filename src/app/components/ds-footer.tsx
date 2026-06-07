import { Compass, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  "Khám Phá": ["Hòn Khoai", "Rừng Ngập Mặn", "Mũi Cà Mau", "Đảo Hòn Đá Bạc", "Vườn Quốc Gia"],
  "Dịch Vụ": ["Tour Sinh Thái", "Lặn Biển", "Câu Cá", "Homestay", "Thuê Thuyền"],
  "Hỗ Trợ": ["Câu Hỏi Thường Gặp", "Chính Sách Hoàn Tiền", "Hướng Dẫn Đặt Tour", "Điều Khoản", "Bảo Mật"],
};

export function Footer() {
  return (
    <footer
      className="w-full rounded-2xl overflow-hidden"
      style={{ backgroundColor: "var(--night-sea)" }}
    >
      <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-5">
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
                style={{ fontFamily: "Playfair Display, serif", fontSize: "14px" }}
              >
                Hòn Khoai Explorer
              </div>
              <div
                className="text-white/40 leading-tight"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "2px" }}
              >
                CÀ MAU · VIETNAM
              </div>
            </div>
          </div>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "13px" }}
          >
            Khám phá vẻ đẹp hoang sơ của Hòn Khoai — hòn đảo nguyên sơ cuối cùng của Việt Nam.
          </p>

          <div className="flex flex-col gap-2.5">
            {[
              { icon: MapPin, text: "Hòn Khoai, Ngọc Hiển, Cà Mau" },
              { icon: Phone, text: "+84 290 388 8888" },
              { icon: Mail, text: "hello@honkhoai.vn" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={13} style={{ color: "var(--golden-sunset)" }} />
                <span
                  style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "12px" }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-1">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="flex flex-col gap-4">
            <h5
              className="font-semibold"
              style={{ fontFamily: "Inter, sans-serif", color: "white", fontSize: "14px" }}
            >
              {heading}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-150 hover:text-amber-400"
                    style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)", fontSize: "13px" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="px-10 py-4 flex items-center justify-between flex-wrap gap-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span
          style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.35)", fontSize: "12px" }}
        >
          © 2025 Hòn Khoai Explorer. Bảo lưu mọi quyền.
        </span>
        <span
          style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "rgba(243,156,18,0.6)", fontSize: "13px" }}
        >
          Nơi biển cả gặp gỡ rừng ngàn
        </span>
      </div>
    </footer>
  );
}
