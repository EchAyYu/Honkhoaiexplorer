const BG_IMG =
  "https://images.unsplash.com/photo-1748102289451-da1109f5c3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80";

export function HpCta() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: "380px" }}
    >
      {/* Gradient + image background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(135deg, #0A3D62 0%, #1E8449 100%)" }}
        />
        <img
          src={BG_IMG}
          alt="Beach background"
          className="absolute inset-0 w-full h-full object-cover z-20"
          style={{ opacity: 0.18, mixBlendMode: "multiply" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center gap-6 px-6" style={{ maxWidth: "720px" }}>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "white",
            lineHeight: 1.2,
          }}
        >
          Sẵn Sàng Khám Phá Hòn Khoai?
        </h2>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Đặt tour ngay hôm nay — Ưu đãi đến 20% cho nhóm từ 10 người
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button
            className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            style={{
              backgroundColor: "white",
              color: "#0A3D62",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
            }}
          >
            Đặt Tour Ngay
          </button>
          <button
            className="px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/15 active:scale-95"
            style={{
              border: "2px solid rgba(255,255,255,0.7)",
              color: "white",
              background: "transparent",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
            }}
          >
            Liên Hệ Tư Vấn
          </button>
        </div>
      </div>
    </section>
  );
}
