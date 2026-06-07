import { motion } from "motion/react";
import { MapPin, Play, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1748102289451-da1109f5c3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85";

const stats = [
  { icon: "🏝", number: "12+", label: "Tour" },
  { icon: "⭐", number: "4.9/5", label: "Đánh Giá" },
  { icon: "👥", number: "5,000+", label: "Khách" },
  { icon: "📅", number: "365", label: "Ngày Hoạt Động" },
];

export function HpHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "700px" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Hòn Khoai island aerial view"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,61,98,0.3) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* Center content */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: "80px" }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "4px",
            color: "#F39C12",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          ✦ KHÁM PHÁ VÙNG BIỂN HOANG SƠ ✦
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "clamp(44px, 6vw, 72px)",
            lineHeight: 1.15,
            maxWidth: "860px",
            marginBottom: "24px",
          }}
        >
          Hòn Khoai — Viên Ngọc Xanh
          <br />
          Cuối Trời Cà Mau
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "640px",
            marginBottom: "40px",
          }}
        >
          Hành trình đến hòn đảo nguyên sơ nhất Việt Nam — nơi rừng nguyên
          sinh gặp biển trời bất tận và cảng tổng hợp lưỡng dụng hiện đại.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center gap-4 flex-wrap justify-center"
          style={{ marginBottom: "80px" }}
        >
          <a
            href="#tours"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#F39C12",
              color: "#1A1A2E",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              boxShadow: "0 8px 32px rgba(243,156,18,0.4)",
            }}
          >
            <MapPin size={16} />
            Khám Phá Tour
          </a>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-white/15 active:scale-95"
            style={{
              border: "2px solid rgba(255,255,255,0.7)",
              color: "white",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
            }}
          >
            <Play size={14} fill="white" />
            Xem Video
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 absolute"
          style={{ bottom: "140px" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={22} color="rgba(255,255,255,0.6)" />
          </motion.div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            CUỘN XUỐNG
          </span>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-6"
        style={{ paddingBottom: "32px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center divide-x rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            divideColor: "rgba(255,255,255,0.2)",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 px-8 py-4"
              style={{ borderRight: "1px solid rgba(255,255,255,0.2)" }}
            >
              <span style={{ fontSize: "22px" }}>{s.icon}</span>
              <div>
                <div
                  className="font-bold text-white leading-tight"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: "22px" }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
