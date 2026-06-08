console.log("🔥🔥🔥 HP-TOURS.TSX FILE ĐÃ ĐƯỢC LOAD !!! 🔥🔥🔥");

import { useState, useEffect } from "react";
import { MapPin, Clock, Utensils, Ship, Tent, Waves, ArrowRight } from "lucide-react";

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
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        console.log("Fetching tours...");
        const response = await fetch('/api/tours?limit=6');
        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Data:", data);
        setTours(data.tours || []);
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);
  
  console.log("✅ HpTours component đang render!");
  
  const mappedTours = tours.map((tour: any, index: number) => ({
    id: tour.id,
    slug: tour.slug,
    image: tour.featured_image || `https://images.unsplash.com/photo-1780397566138-50945af79e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=260&q=80`,
    badge: index < 2 ? "HOT" : null,
    category: tour.duration_days === 1 ? "1-day" : tour.duration_days <= 3 ? "2-3-day" : "dive",
    duration: `${tour.duration_days} Ngày`,
    name: tour.title,
    rating: 5,
    reviews: tour.view_count || 0,
    location: tour.location || "Cà Mau City",
    price: tour.price.toLocaleString('vi-VN'),
    includes: [Utensils, Ship, Waves].slice(0, tour.duration_days || 2),
  }));

  const filtered = active === "all"
    ? mappedTours
    : mappedTours.filter((t) => t.category === active);

  if (loading) {
    return (
      <section id="tours" style={{ backgroundColor: "#EAF4FB", padding: "100px 0" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
          <div className="text-center">Đang tải dữ liệu tours...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="tours" style={{ backgroundColor: "#EAF4FB", padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-[12px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ boxShadow: "0px 8px 32px rgba(10,61,98,0.10)" }}
            >
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

                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#555F6B" }}>Bao gồm:</span>
                  {tour.includes.map((Icon: any, i: number) => (
                    <Icon key={i} size={15} style={{ color: "#0A3D62" }} />
                  ))}
                </div>

                <div className="flex items-end gap-1 mt-1">
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B" }}>Từ</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "22px", fontWeight: 700, color: "#0A3D62", lineHeight: 1 }}>
                    {tour.price}₫
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B", marginBottom: "2px" }}>/người</span>
                </div>

                <div className="flex gap-2.5 mt-auto pt-1">
                  <a
                    href={`/tours/${tour.slug}`}
                    className="flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 text-center no-underline"
                    style={{
                      border: "1.5px solid #0A3D62",
                      color: "#0A3D62",
                      fontFamily: "Inter, sans-serif",
                      background: "transparent",
                      textDecoration: "none",
                    }}
                  >
                    Xem Chi Tiết
                  </a>
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

        <div className="flex justify-center mt-10">
          <a
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-blue-900 hover:text-white group no-underline"
            style={{
              border: "2px solid #0A3D62",
              color: "#0A3D62",
              fontFamily: "Inter, sans-serif",
              background: "transparent",
              textDecoration: "none",
            }}
          >
            Xem Tất Cả Tour
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}