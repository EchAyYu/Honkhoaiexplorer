import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AV1 = "https://images.unsplash.com/photo-1439778615639-28529f7628bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&q=80";
const AV2 = "https://images.unsplash.com/photo-1643647158941-322c5be8a8d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&q=80";
const AV3 = "https://images.unsplash.com/photo-1700721154874-78695c314eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&q=80";

const testimonials = [
  {
    stars: 5,
    quote: "Chuyến đi Hòn Khoai là trải nghiệm tuyệt vời nhất trong cuộc đời tôi. Đảo hoang sơ, không khí trong lành, nước biển xanh như ngọc và đội ngũ hướng dẫn rất tận tâm. Tôi sẽ quay lại đây mỗi năm!",
    name: "Nguyễn Thị Lan",
    location: "Hà Nội, Việt Nam",
    avatar: AV1,
    tag: "Tour 2N1Đ Hòn Khoai",
  },
  {
    stars: 5,
    quote: "Rừng ngập mặn Cà Mau đẹp không kém gì Amazon. Tour sinh thái được tổ chức rất chuyên nghiệp, hướng dẫn viên am hiểu thiên nhiên và kể chuyện rất hay. Ăn uống ngon, tươi sống 100%.",
    name: "Trần Minh Đức",
    location: "TP. Hồ Chí Minh",
    avatar: AV2,
    tag: "Tour Sinh Thái 1 Ngày",
  },
  {
    stars: 5,
    quote: "Hoàng hôn trên biển Cà Mau là khoảnh khắc không thể quên. San hô ở đây đẹp hơn cả Phú Quốc. Tôi đã đặt tour cho cả gia đình 6 người và ai cũng hài lòng. Giá cả rất hợp lý.",
    name: "Phạm Thị Hương",
    location: "Đà Nẵng, Việt Nam",
    avatar: AV3,
    tag: "Tour Lặn Biển San Hô",
  },
  {
    stars: 5,
    quote: "Chưa bao giờ tôi thấy bầu trời đầy sao như trên Hòn Khoai về đêm. Cảm giác cắm trại trên đảo hoang với tiếng sóng vỗ thực sự ma thuật. Nhất định phải thử một lần trong đời!",
    name: "Lê Văn Nam",
    location: "Cần Thơ, Việt Nam",
    avatar: AV1,
    tag: "Tour Cắm Trại Hòn Khoai",
  },
  {
    stars: 5,
    quote: "Đặt tour cho nhóm 15 người, mọi thứ được sắp xếp hoàn hảo. Tàu đúng giờ, hướng dẫn viên nhiệt tình, bữa ăn hải sản tươi ngon. Sẽ giới thiệu cho bạn bè và đồng nghiệp!",
    name: "Võ Thị Mai",
    location: "Bình Dương, Việt Nam",
    avatar: AV2,
    tag: "Tour Nhóm 3N2Đ",
  },
];

export function HpTestimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="w-full bg-white" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Header */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-[16px] p-8 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "white",
                border: "2px solid #EAF4FB",
                boxShadow: "0 8px 32px rgba(10,61,98,0.08)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} style={{ color: "#F39C12", fontSize: "17px" }}>★</span>
                ))}
              </div>

              {/* Quote */}
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
                "{t.quote}"
              </p>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "#EAF4FB" }} />

              {/* Footer */}
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px", color: "#1A1A2E" }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#555F6B" }}>
                    {t.location}
                  </div>
                </div>
                <span
                  className="shrink-0 px-3 py-1 rounded-full text-xs"
                  style={{ backgroundColor: "#EAF4FB", color: "#0A3D62", fontFamily: "Inter, sans-serif" }}
                >
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
      </div>
    </section>
  );
}
