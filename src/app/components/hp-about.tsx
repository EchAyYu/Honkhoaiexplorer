import { ArrowRight } from "lucide-react";

const IMG_MAIN =
  "https://images.unsplash.com/photo-1560850038-f95de6e715b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=85";
const IMG_SMALL =
  "https://images.unsplash.com/photo-1772869495219-099533d86017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=85";

const features = [
  { icon: "🌿", text: "Rừng nguyên sinh nhiệt đới" },
  { icon: "🐠", text: "Đa dạng sinh thái biển phong phú" },
  { icon: "🏗", text: "Cảng tổng hợp lưỡng dụng hiện đại" },
  { icon: "🦅", text: "Hải đăng lịch sử từ năm 1889" },
];

export function HpAbout() {
  return (
    <section className="w-full bg-white" style={{ padding: "100px 0" }}>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}
      >
        {/* Left: image stack */}
        <div className="relative" style={{ minHeight: "500px" }}>
          {/* Main photo */}
          <div
            className="overflow-hidden"
            style={{ borderRadius: "16px", boxShadow: "0 20px 60px rgba(10,61,98,0.2)", width: "85%", position: "relative", zIndex: 1 }}
          >
            <img
              src={IMG_MAIN}
              alt="Hòn Khoai island aerial view"
              className="w-full object-cover"
              style={{ height: "400px" }}
            />
          </div>

          {/* Smaller overlapping photo */}
          <div
            className="absolute overflow-hidden"
            style={{
              borderRadius: "16px",
              boxShadow: "0 20px 40px rgba(10,61,98,0.25)",
              width: "55%",
              bottom: "-32px",
              right: "0",
              zIndex: 2,
              border: "4px solid white",
            }}
          >
            <img
              src={IMG_SMALL}
              alt="Fishermen on the sea"
              className="w-full object-cover"
              style={{ height: "220px" }}
            />
          </div>

          {/* Floating badge */}
          <div
            className="absolute flex items-center gap-2 px-4 py-2.5 rounded-[8px]"
            style={{
              backgroundColor: "#F39C12",
              top: "20px",
              left: "-12px",
              zIndex: 3,
              boxShadow: "0 8px 24px rgba(243,156,18,0.4)",
            }}
          >
            <span style={{ fontSize: "16px" }}>🏆</span>
            <span
              className="font-semibold leading-tight"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#1A1A2E" }}
            >
              Khu Du Lịch Sinh Thái Quốc Gia
            </span>
          </div>
        </div>

        {/* Right: text content */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1E8449",
            }}
          >
            VỀ HÒN KHOAI
          </span>

          {/* H2 */}
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 3vw, 42px)",
              lineHeight: 1.25,
              color: "#1A1A2E",
            }}
          >
            Điểm Đến Độc Đáo Nhất Mũi Cà Mau
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#555F6B",
            }}
          >
            Hòn Khoai nằm cách Cà Mau khoảng 14,5 km về phía Nam, là hòn đảo
            nguyên sơ với diện tích 4 km² được bao phủ bởi rừng nhiệt đới
            nguyên sinh. Với đường bờ biển cát trắng, nước biển trong xanh và
            hệ sinh thái đa dạng, đây là viên ngọc thiên nhiên ít người biết
            đến nhất của Việt Nam.
          </p>

          {/* Feature items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.text}
                className="flex items-center gap-3 p-3.5 rounded-xl"
                style={{ backgroundColor: "#EAF4FB" }}
              >
                <span style={{ fontSize: "20px" }}>{f.icon}</span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#1A1A2E",
                    fontWeight: 500,
                  }}
                >
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="inline-flex items-center gap-2 group w-fit mt-2 transition-all duration-200"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#0A3D62",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            Tìm Hiểu Thêm
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
