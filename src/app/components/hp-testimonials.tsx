import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const defaultAvatars = [
  "https://images.unsplash.com/photo-1439778615639-28529f7628bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1643647158941-322c5be8a8d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1700721154874-78695c314eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&q=80",
];

export function HpTestimonials() {
  const [page, setPage] = useState(0);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const perPage = 3;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials?limit=6');
        const data = await response.json();
        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  if (loading) {
    return (
      <section className="w-full bg-white" style={{ padding: "100px 0" }}>
        <div className="text-center">Đang tải đánh giá...</div>
      </section>
    );
  }

  if (testimonials.length === 0) return null;

  return (
    <section className="w-full bg-white" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            color: "#1A1A2E",
          }}
        >
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={t.id || i}
              className="flex flex-col gap-5 rounded-[16px] p-8 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "white",
                border: "2px solid #EAF4FB",
                boxShadow: "0 8px 32px rgba(10,61,98,0.08)",
              }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating || 5 }).map((_, j) => (
                  <span key={j} style={{ color: "#F39C12", fontSize: "17px" }}>★</span>
                ))}
              </div>

              <p
                className="flex-1"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#555F6B",
                }}
              >
                "{t.content?.substring(0, 180)}..."
              </p>

              <div style={{ height: "1px", backgroundColor: "#EAF4FB" }} />

              <div className="flex items-center gap-3">
                <img src={t.customer_avatar || defaultAvatars[i % 3]} alt={t.customer_name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", color: "#1A1A2E" }}>
                    {t.customer_name}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B" }}>
                    {t.customer_location || "Việt Nam"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
              style={{ border: "1.5px solid #0A3D62", color: "#0A3D62" }}
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === page ? "28px" : "10px",
                  height: "10px",
                  backgroundColor: i === page ? "#0A3D62" : "#d4e8f5",
                }}
              />
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
              style={{ border: "1.5px solid #0A3D62", color: "#0A3D62" }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}