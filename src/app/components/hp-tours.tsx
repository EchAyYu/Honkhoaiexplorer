import { useState } from "react";
import { MapPin, Clock, Utensils, Ship, Tent, Waves, ArrowRight } from "lucide-react";

const IMG_1 = "https://images.unsplash.com/photo-1780397566138-50945af79e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80";
const IMG_2 = "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80";
const IMG_3 = "https://images.unsplash.com/photo-1612971432130-04d239cb6706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80";
const IMG_4 = "https://images.unsplash.com/photo-1773589972650-1bbfe8d12c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80";
const IMG_5 = "https://images.unsplash.com/photo-1767825489875-757583e74fff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80";
const IMG_6 = "https://images.unsplash.com/photo-1515555585025-54136276b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80";

const allTours = [
  {
    id: 1, image: IMG_1, badge: "HOT", category: "1-day",
    duration: "1 Ngày", name: "Hòn Khoai Khám Phá Một Ngày",
    rating: 5, reviews: 128, location: "Cà Mau City",
    price: "850.000", includes: [Utensils, Ship, Waves],
  },
  {
    id: 2, image: IMG_4, badge: "HOT", category: "2-3-day",
    duration: "2 Ngày 1 Đêm", name: "Hòn Khoai Hoàng Hôn & Bình Minh",
    rating: 5, reviews: 96, location: "Cà Mau City",
    price: "1.850.000", includes: [Utensils, Ship, Tent, Waves],
  },
  {
    id: 3, image: IMG_2, badge: "NEW", category: "dive",
    duration: "1 Ngày", name: "Lặn Biển San Hô Hòn Khoai",
    rating: 4.9, reviews: 54, location: "Cà Mau City",
    price: "1.200.000", includes: [Utensils, Ship, Waves],
  },
  {
    id: 4, image: IMG_3, badge: null, category: "eco",
    duration: "1 Ngày", name: "Rừng Ngập Mặn U Minh Hạ",
    rating: 4.8, reviews: 87, location: "Cà Mau City",
    price: "650.000", includes: [Utensils, Ship],
  },
  {
    id: 5, image: IMG_5, badge: "HOT", category: "2-3-day",
    duration: "3 Ngày 2 Đêm", name: "Combo Cà Mau — Hòn Khoai Trọn Gói",
    rating: 5, reviews: 42, location: "Cà Mau City",
    price: "3.200.000", includes: [Utensils, Ship, Tent, Waves],
  },
  {
    id: 6, image: IMG_6, badge: "NEW", category: "dive",
    duration: "1 Ngày", name: "Câu Cá & Lặn Ngắm San Hô",
    rating: 4.7, reviews: 31, location: "Cà Mau City",
    price: "980.000", includes: [Utensils, Ship, Waves],
  },
];

const tabs = [
  { label: "Tất Cả ✓", key: "all" },
  { label: "1 Ngày", key: "1-day" },
  { label: "2-3 Ngày", key: "2-3-day" },
  { label: "Lặn Biển", key: "dive" },
  { label: "Sinh Thái", key: "eco" },
];

const badgeColors: Record<string, string> = {
  HOT: "#e74c3c",
  NEW: "#0A3D62",
  SALE: "#F39C12",
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= Math.round(rating) ? "#F39C12" : "#ddd", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

export function HpTours() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? allTours
    : allTours.filter((t) => t.category === active);

  return (
    <section id="tours" style={{ backgroundColor: "#EAF4FB", padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#1E8449" }}>
            TOUR DU LỊCH
          </span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.25, color: "#1A1A2E" }}>
            Những Hành Trình Không Thể Bỏ Lỡ
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", color: "#555F6B", lineHeight: 1.65, maxWidth: "540px" }}>
            Từ khám phá đảo hoang sơ một ngày đến lặn biển ngắm san hô, mỗi tour là một kỷ niệm đáng nhớ.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                backgroundColor: active === t.key ? "#0A3D62" : "white",
                color: active === t.key ? "white" : "#555F6B",
                border: active === t.key ? "none" : "1.5px solid rgba(10,61,98,0.15)",
                boxShadow: active === t.key ? "0 4px 16px rgba(10,61,98,0.25)" : "none",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tour grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-[12px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ boxShadow: "0px 8px 32px rgba(10,61,98,0.10)" }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden bg-sky-100" style={{ height: "240px" }}>
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                {tour.badge && (
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: badgeColors[tour.badge] }}
                  >
                    {tour.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-1.5" style={{ color: "#555F6B" }}>
                  <Clock size={13} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>⏱ {tour.duration}</span>
                </div>

                <h3 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "18px", color: "#1A1A2E", lineHeight: 1.3 }}>
                  {tour.name}
                </h3>

                <div className="flex items-center gap-2">
                  <StarRow rating={tour.rating} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B" }}>
                    {tour.rating} ({tour.reviews} đánh giá)
                  </span>
                </div>

                <div className="flex items-center gap-1.5" style={{ color: "#555F6B" }}>
                  <MapPin size={13} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
                    Xuất phát: {tour.location}
                  </span>
                </div>

                <div style={{ height: "1px", backgroundColor: "rgba(10,61,98,0.1)" }} />

                {/* Includes */}
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#555F6B" }}>Bao gồm:</span>
                  {tour.includes.map((Icon, i) => (
                    <Icon key={i} size={15} style={{ color: "#0A3D62" }} />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mt-1">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B" }}>Từ</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 700, color: "#0A3D62", lineHeight: 1 }}>
                    {tour.price}₫
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B", marginBottom: "2px" }}>/người</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2.5 mt-auto pt-1">
                  <button
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-blue-50"
                    style={{
                      border: "1.5px solid #0A3D62",
                      color: "#0A3D62",
                      fontFamily: "Inter, sans-serif",
                      background: "transparent",
                    }}
                  >
                    Xem Chi Tiết
                  </button>
                  <button
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
                    style={{
                      backgroundColor: "#F39C12",
                      color: "#1A1A2E",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Đặt Ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-10">
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-blue-900 hover:text-white group"
            style={{
              border: "2px solid #0A3D62",
              color: "#0A3D62",
              fontFamily: "Inter, sans-serif",
              background: "transparent",
            }}
          >
            Xem Tất Cả Tour
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
