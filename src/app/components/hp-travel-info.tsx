import { Thermometer, Clock, CreditCard, FileText, Plane, Car, Ship } from "lucide-react";

const infoCards = [
  {
    icon: Thermometer,
    title: "Thời Tiết Đẹp Nhất",
    value: "Tháng 11 — Tháng 4",
    desc: "Mùa khô, biển lặng, lý tưởng cho lặn biển và tắm nắng",
    color: "#F39C12",
  },
  {
    icon: Clock,
    title: "Thời Gian Ra Đảo",
    value: "~2.5 tiếng tàu",
    desc: "Tàu cao tốc xuất phát từ cảng Năm Căn, Cà Mau",
    color: "#0A3D62",
  },
  {
    icon: CreditCard,
    title: "Chi Phí Trung Bình",
    value: "2 — 5 triệu đồng",
    desc: "Bao gồm tàu, ăn uống, hướng dẫn viên và bảo hiểm",
    color: "#1E8449",
  },
  {
    icon: FileText,
    title: "Giấy Tờ Cần Mang",
    value: "CCCD / Hộ chiếu",
    desc: "Bản gốc còn hiệu lực — bắt buộc khi ra đảo",
    color: "#8e44ad",
  },
];

const routeSteps = [
  { icon: Plane, label: "TP.HCM", sub: "Bay 1 tiếng" },
  { icon: Car, label: "Cà Mau", sub: "Xe 30 phút" },
  { icon: Ship, label: "Hòn Khoai", sub: "Tàu 2.5 tiếng" },
];

export function HpTravelInfo() {
  return (
    <section style={{ backgroundColor: "#EAF4FB", padding: "100px 0" }}>
      <div
        className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-14 items-start"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}
      >
        {/* Left: Map placeholder + route */}
        <div className="flex flex-col gap-5">
          <div
            className="overflow-hidden relative"
            style={{
              borderRadius: "16px",
              boxShadow: "0 16px 48px rgba(10,61,98,0.14)",
              height: "340px",
              backgroundColor: "#c8e6f5",
            }}
          >
            {/* Stylized map placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#0A3D62" }}
              >
                <span style={{ fontSize: "28px" }}>🗺</span>
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#555F6B" }}>
                Bản đồ Hòn Khoai, Cà Mau
              </div>
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                style={{ backgroundColor: "rgba(10,61,98,0.7)", fontFamily: "Inter, sans-serif" }}
              >
                📍 Hòn Khoai, 14.5 km từ Cà Mau
              </div>
            </div>
            {/* fake map lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 560 340" fill="none">
              <path d="M0 170 Q140 120 280 170 Q420 220 560 170" stroke="#0A3D62" strokeWidth="2" />
              <path d="M0 100 Q140 60 280 100 Q420 140 560 100" stroke="#0A3D62" strokeWidth="1" />
              <path d="M0 240 Q140 200 280 240 Q420 280 560 240" stroke="#0A3D62" strokeWidth="1" />
              <circle cx="420" cy="190" r="8" fill="#F39C12" />
              <circle cx="420" cy="190" r="16" fill="none" stroke="#F39C12" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>

          {/* Travel route card */}
          <div
            className="flex items-center justify-between rounded-2xl p-5 bg-white"
            style={{ boxShadow: "0 8px 32px rgba(10,61,98,0.10)" }}
          >
            {routeSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#EAF4FB" }}
                  >
                    <step.icon size={18} style={{ color: "#0A3D62" }} />
                  </div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", color: "#1A1A2E" }}>{step.label}</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#555F6B" }}>{step.sub}</span>
                </div>
                {i < routeSteps.length - 1 && (
                  <div className="flex-1 flex items-center px-2">
                    <div className="flex-1 h-px border-t-2 border-dashed" style={{ borderColor: "#0A3D62", opacity: 0.3 }} />
                    <span style={{ fontSize: "14px", color: "#F39C12", margin: "0 6px" }}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: 2×2 info cards */}
        <div className="grid grid-cols-2 gap-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[12px] p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1"
              style={{ boxShadow: "0 8px 32px rgba(10,61,98,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: card.color + "18" }}
              >
                <card.icon size={18} style={{ color: card.color }} />
              </div>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B", marginBottom: "4px" }}>
                  {card.title}
                </div>
                <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "18px", color: "#1A1A2E", lineHeight: 1.2 }}>
                  {card.value}
                </div>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: 1.6, color: "#555F6B" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
