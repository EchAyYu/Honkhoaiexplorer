import { ArrowRight, Calendar } from "lucide-react";

const IMG_1 = "https://images.unsplash.com/photo-1780397566138-50945af79e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=220&q=80";
const IMG_2 = "https://images.unsplash.com/photo-1612971432130-04d239cb6706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=220&q=80";
const IMG_3 = "https://images.unsplash.com/photo-1772850014745-9ed9aa2be5bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=220&q=80";

const posts = [
  {
    image: IMG_1,
    category: "Cẩm Nang",
    title: "Hòn Khoai — Viên Ngọc Xanh Cuối Trời Nam",
    excerpt: "Nằm ngoài khơi mũi Cà Mau, Hòn Khoai ẩn chứa vẻ đẹp hoang sơ mà ít người biết đến. Đây là cẩm nang đầy đủ nhất để bạn khám phá hòn đảo huyền bí này.",
    date: "15 tháng 6, 2025",
  },
  {
    image: IMG_2,
    category: "Sinh Thái",
    title: "Rừng Ngập Mặn Cà Mau — Lá Phổi Xanh Của Đồng Bằng",
    excerpt: "Vùng đất Cà Mau là nơi hội tụ của ba vùng biển, tạo nên hệ sinh thái đặc biệt nhất Việt Nam. Hãy cùng khám phá khu rừng ngập mặn lớn nhất Đông Nam Á.",
    date: "3 tháng 5, 2025",
  },
  {
    image: IMG_3,
    category: "Tin Tức",
    title: "Cảng Hòn Khoai Chính Thức Đón Tàu Du Lịch Quốc Tế",
    excerpt: "Từ tháng 11/2025, cảng tổng hợp Hòn Khoai sẽ đón các tàu du lịch quốc tế, mở ra kỷ nguyên mới cho du lịch mũi Cà Mau và toàn vùng Đồng bằng sông Cửu Long.",
    date: "20 tháng 4, 2025",
  },
];

export function HpBlog() {
  return (
    <section style={{ backgroundColor: "#F8FBFF", padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#1E8449" }}>
            TIN TỨC & CẨM NANG
          </span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1A1A2E" }}>
            Bài Viết Mới Nhất
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-[12px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ boxShadow: "0 8px 32px rgba(10,61,98,0.08)" }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-sky-100" style={{ height: "200px" }}>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#1E8449", fontFamily: "Inter, sans-serif" }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h4
                  className="line-clamp-2"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "19px", color: "#1A1A2E", lineHeight: 1.35 }}
                >
                  {post.title}
                </h4>
                <p
                  className="line-clamp-3 flex-1"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "#555F6B" }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "rgba(10,61,98,0.08)" }}
                >
                  <div className="flex items-center gap-1.5" style={{ color: "#555F6B" }}>
                    <Calendar size={12} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{post.date}</span>
                  </div>
                  <button
                    className="inline-flex items-center gap-1 font-semibold text-xs group transition-colors hover:text-blue-800"
                    style={{ fontFamily: "Inter, sans-serif", color: "#0A3D62" }}
                  >
                    Đọc Thêm
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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
            style={{ border: "2px solid #0A3D62", color: "#0A3D62", fontFamily: "Inter, sans-serif", background: "transparent" }}
          >
            Xem Tất Cả Bài Viết
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
