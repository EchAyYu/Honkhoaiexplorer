const BG_IMG =
  "https://images.unsplash.com/photo-1773590106911-3a6a667b8787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80";

const cards = [
  {
    icon: "🛥",
    title: "Tàu Cao Tốc Hiện Đại",
    desc: "Hệ thống tàu mới nhất, an toàn và tiện nghi với đầy đủ phao cứu sinh, điều hòa và wifi.",
  },
  {
    icon: "🌿",
    title: "Du Lịch Sinh Thái Bền Vững",
    desc: "Bảo vệ môi trường trong từng hành trình — cam kết không rác thải nhựa ra đại dương.",
  },
  {
    icon: "👨‍💼",
    title: "Hướng Dẫn Viên Chuyên Nghiệp",
    desc: "Đội ngũ giàu kinh nghiệm, am hiểu địa phương và có chứng chỉ hướng dẫn viên quốc tế.",
  },
  {
    icon: "💰",
    title: "Giá Tốt Nhất Thị Trường",
    desc: "Cam kết hoàn tiền 100% nếu bạn tìm được tour tương đương với giá rẻ hơn ở nơi khác.",
  },
];

export function HpWhy() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1A1A2E", padding: "100px 0" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={BG_IMG}
          alt="Ocean night"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0" style={{ background: "rgba(26,26,46,0.75)" }} />
      </div>

      <div className="relative z-10" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#F39C12" }}>
            TẠI SAO CHỌN CHÚNG TÔI
          </span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.25, color: "white" }}>
            Trải Nghiệm Khác Biệt Tại Hòn Khoai
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-5 p-8 rounded-[16px] transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              <span style={{ fontSize: "48px", lineHeight: 1 }}>{card.icon}</span>
              <div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "white",
                    lineHeight: 1.35,
                  }}
                >
                  {card.title}
                </h4>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.68)",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
