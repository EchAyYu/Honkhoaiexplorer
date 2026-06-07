import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, MapPin, Plane, Bus, Car, Navigation, Utensils, Sun, CloudRain, CheckCircle2, XCircle, AlertTriangle, ChevronDown, ChevronUp, Phone, ChevronRight, CloudSun } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function TravelInfoPage() {
  const [activeSection, setActiveSection] = useState("dia-diem");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['dia-diem', 'di-chuyen', 'ra-dao', 'am-thuc', 'thoi-tiet', 'luu-y', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    { q: "Có thể đi Hòn Khoai tự túc không?", a: "Hiện tại, việc lên đảo yêu cầu phải được cấp phép vì đây là khu vực đồn biên phòng quản lý. Việc tham gia tour giúp bạn được lo toàn bộ thủ tục pháp lý, an toàn và thuận tiện nhất." },
    { q: "Trẻ em bao nhiêu tuổi được đi?", a: "Trẻ em từ 6 tuổi trở lên có đủ sức khỏe tốt có thể tham gia tour. Phụ huynh cần chú ý an toàn cho trẻ trong quá trình di chuyển bằng tàu cao tốc." },
    { q: "Có nên đặt trước hay đến mua tại chỗ?", a: "Nên đặt trước ít nhất 1 tuần (đặc biệt vào cuối tuần hoặc ngày lễ) để công ty chuẩn bị giấy phép xuất bến và đảm bảo số lượng người lên đảo không vượt mức cho phép." },
    { q: "Đảo có phủ sóng điện thoại không?", a: "Trên đảo có phủ sóng 4G của Viettel, MobiFone khá tốt. Vinaphone đôi khi sóng hơi yếu ở một số khu vực khuất núi." },
    { q: "Có thể ở lại qua đêm trên đảo?", a: "Có thể, với hình thức ngủ lều hoặc tại khu nhà khách tập thể nếu được đăng ký trước qua công ty tour được cấp phép." },
    { q: "Tour có hoạt động vào thời tiết xấu không?", a: "Vì sự an toàn, nếu có biển động hoặc cảnh báo thời tiết xấu từ trạm khí tượng, tour sẽ được dời lịch hoặc hoàn tiền 100%." }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- HERO --- */}
      <section className="relative w-full h-[360px] flex items-center justify-center overflow-hidden mt-[80px]">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62] to-[#1E8449]" />
        
        {/* Subtle Wave Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] px-8 mx-auto flex flex-col items-center justify-center text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 leading-tight drop-shadow-md"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Cẩm Nang Du Lịch Hòn Khoai
          </h1>
          <p className="text-lg text-white/80 font-light mb-8 max-w-xl">
            Mọi thứ bạn cần biết trước khi lên đường
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-full w-full max-w-[500px] flex items-center p-2 shadow-lg">
            <Search className="text-gray-400 ml-3 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Tìm thông tin..." 
              className="flex-1 bg-transparent border-none outline-none px-4 text-gray-800 placeholder-gray-400"
            />
            <button className="px-6 py-2.5 rounded-full bg-[#0A3D62] text-white font-medium hover:bg-[#082a45] transition-colors shrink-0">
              Tìm Kiếm
            </button>
          </div>
        </div>
      </section>

      {/* --- MAIN LAYOUT --- */}
      <section className="w-full bg-white py-[80px] px-4 sm:px-8 md:px-16">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
          
          {/* LEFT SIDEBAR (240px) */}
          <aside className="hidden lg:block w-[240px] shrink-0 sticky top-[100px]">
            <h6 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 px-3">
              NỘI DUNG
            </h6>
            
            <nav className="flex flex-col mb-8">
              {[
                { id: 'dia-diem', label: '📍 Địa Điểm & Bản Đồ' },
                { id: 'di-chuyen', label: '🚌 Di Chuyển Đến Cà Mau' },
                { id: 'ra-dao', label: '🛥 Ra Đảo Hòn Khoai' },
                { id: 'luu-tru', label: '🏨 Lưu Trú' },
                { id: 'am-thuc', label: '🍜 Ẩm Thực Đặc Sản' },
                { id: 'thoi-tiet', label: '🌤 Thời Tiết Theo Mùa' },
                { id: 'luu-y', label: '📋 Lưu Ý Khi Đi' },
                { id: 'suc-khoe', label: '💊 Sức Khỏe & An Toàn' },
                { id: 'faq', label: '❓ Câu Hỏi Thường Gặp' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left px-3 py-2.5 text-sm font-medium transition-all rounded-r-lg border-l-4 ${
                    activeSection === item.id 
                      ? 'border-[#0A3D62] bg-[#F8FBFF] text-[#0A3D62]' 
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Quick Booking Card */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-5 text-center">
              <div className="w-12 h-12 bg-[#F8FBFF] rounded-full flex items-center justify-center mx-auto mb-3 text-[#F39C12]">
                <MapPin size={24} />
              </div>
              <h5 className="font-bold text-gray-900 mb-1">Đã sẵn sàng khám phá?</h5>
              <p className="text-xs text-gray-500 mb-4">Lên lịch ngay hôm nay để nhận ưu đãi tốt nhất.</p>
              <Link to="/tours" className="block w-full py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-sm">
                Đặt Tour Ngay
              </Link>
            </div>
          </aside>

          {/* MAIN CONTENT (Flexible / max 680px for readability) */}
          <main className="flex-1 max-w-[680px] w-full mx-auto lg:mx-0">
            
            {/* Section 1 — ĐỊA ĐIỂM & BẢN ĐỒ */}
            <div id="dia-diem" className="mb-16 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>ĐỊA ĐIỂM & BẢN ĐỒ</h2>
              
              <div className="w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-xl mb-6 shadow-sm overflow-hidden border border-gray-100 relative">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-[#EAF4FB] flex flex-col items-center justify-center text-[#0A3D62]/40">
                  <MapPin size={48} className="mb-2" />
                  <span className="font-semibold">Bản đồ tương tác Hòn Khoai</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">📍 Vị trí địa lý</h4>
                  <p className="text-gray-600 text-sm">Huyện Ngọc Hiển, Tỉnh Cà Mau, Việt Nam. Cách đất liền khoảng 14.6 km về phía Nam.</p>
                </div>
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">🧭 Tọa độ</h4>
                  <p className="text-gray-600 text-sm">Vĩ độ: 8°26' Bắc<br />Kinh độ: 104°49' Đông</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-16" />

            {/* Section 2 — DI CHUYỂN ĐẾN CÀ MAU */}
            <div id="di-chuyen" className="mb-16 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>DI CHUYỂN ĐẾN CÀ MAU</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">Để đến được Hòn Khoai, trước tiên bạn cần di chuyển đến Thành phố Cà Mau hoặc bến tàu Năm Căn. Dưới đây là các phương tiện phổ biến nhất:</p>
              
              <div className="space-y-4 mb-6">
                {/* Transport 1 */}
                <div className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <div className="w-12 h-12 rounded-full bg-[#EAF4FB] text-[#0A3D62] flex items-center justify-center shrink-0">
                    <Plane size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Máy Bay</h3>
                    <p className="text-sm text-gray-600 mb-2">Chặng bay TP.HCM (SGN) → Cà Mau (CAH)</p>
                    <div className="flex flex-wrap gap-3 text-xs font-medium">
                      <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">⏱ 1 tiếng</span>
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded border border-green-100">💰 Từ 500K</span>
                    </div>
                  </div>
                </div>

                {/* Transport 2 */}
                <div className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <div className="w-12 h-12 rounded-full bg-[#F39C12]/10 text-[#F39C12] flex items-center justify-center shrink-0">
                    <Bus size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Xe Khách</h3>
                    <p className="text-sm text-gray-600 mb-2">Từ Bến xe Miền Tây (TP.HCM) đi BX Cà Mau</p>
                    <div className="flex flex-wrap gap-3 text-xs font-medium">
                      <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">⏱ 5-6 tiếng</span>
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded border border-green-100">💰 Từ 150K</span>
                    </div>
                  </div>
                </div>

                {/* Transport 3 */}
                <div className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow bg-white">
                  <div className="w-12 h-12 rounded-full bg-[#1E8449]/10 text-[#1E8449] flex items-center justify-center shrink-0">
                    <Car size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Tự Túc (Ô tô/Xe máy)</h3>
                    <p className="text-sm text-gray-600 mb-2">Đi theo tuyến QL1A hoặc Quản Lộ Phụng Hiệp</p>
                    <div className="flex flex-wrap gap-3 text-xs font-medium">
                      <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">⏱ 6-7 tiếng</span>
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">Google Maps route</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight box */}
              <div className="bg-[#EAF4FB] border-l-4 border-[#0A3D62] p-4 rounded-r-lg">
                <p className="text-[#0A3D62] text-sm">
                  <span className="font-bold text-base mr-1">💡 Mẹo Hay:</span> Đặt vé máy bay và xe giường nằm trước ít nhất 2 tuần vào mùa cao điểm để đảm bảo lịch trình. Xe giường nằm đêm là lựa chọn phổ biến nhất giúp tiết kiệm thời gian nghỉ ngơi.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-16" />

            {/* Section 3 — RA ĐẢO HÒN KHOAI */}
            <div id="ra-dao" className="mb-16 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>RA ĐẢO HÒN KHOAI</h2>
              
              <div className="relative w-full h-[120px] rounded-xl overflow-hidden mb-6 bg-[#0A3D62]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] via-[#0A3D62]/80 to-transparent z-10" />
                <img src="/images/about-port.png" alt="Boat" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
                <div className="relative z-20 w-full h-full flex flex-col justify-center px-6">
                  <div className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base font-bold">
                    <div className="px-3 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 text-center">
                      Cảng<br/>Cà Mau
                    </div>
                    <div className="flex-1 flex items-center justify-center text-white/80">
                      <div className="w-full h-px bg-white/40 relative">
                        <Navigation size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-[#F39C12] rounded-lg text-white shadow-lg text-center">
                      Tàu Cao Tốc<br/><span className="text-xs font-normal">2.5 tiếng</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center text-white/80">
                      <div className="w-full h-px bg-white/40 relative">
                        <Navigation size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
                      </div>
                    </div>
                    <div className="px-3 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 text-center">
                      Đảo<br/>Hòn Khoai
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-[#EAF4FB] text-[#0A3D62] font-semibold text-xs uppercase">
                    <tr>
                      <th className="px-4 py-3">Loại Tàu</th>
                      <th className="px-4 py-3">Giờ Khởi Hành</th>
                      <th className="px-4 py-3">Giá Vé (1 chiều)</th>
                      <th className="px-4 py-3">Đơn vị vận hành</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Tàu Cao Tốc 1</td>
                      <td className="px-4 py-3 text-gray-600">8:00 Sáng</td>
                      <td className="px-4 py-3 text-gray-600">250,000đ</td>
                      <td className="px-4 py-3 text-gray-600">Hòn Khoai Express</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900">Tàu Cao Tốc 2</td>
                      <td className="px-4 py-3 text-gray-600">14:00 Chiều</td>
                      <td className="px-4 py-3 text-gray-600">250,000đ</td>
                      <td className="px-4 py-3 text-gray-600">Superdong</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Gỗ/Đò dọc (Chậm)</td>
                      <td className="px-4 py-3 text-gray-600">Linh hoạt</td>
                      <td className="px-4 py-3 text-gray-600">100,000đ</td>
                      <td className="px-4 py-3 text-gray-600">Ngư dân (Cần thỏa thuận)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="luu-tru" className="w-full h-px bg-transparent mb-16 scroll-mt-[100px]" />

            {/* Section 4 — ẨM THỰC ĐẶC SẢN */}
            <div id="am-thuc" className="mb-16 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6 flex items-center gap-3" style={{ fontFamily: "Playfair Display, serif" }}>
                <Utensils size={28} className="text-[#F39C12]" /> ẨM THỰC ĐẶC SẢN
              </h2>
              <p className="text-gray-600 mb-6">Đến Hòn Khoai, du khách không thể bỏ lỡ những hải sản tươi rói vừa được đánh bắt từ biển khơi lên. Do đảo chưa khai thác dịch vụ mạnh, các bữa ăn chủ yếu là hải sản tự nhiên do người dân chế biến vô cùng đậm đà.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="group cursor-pointer">
                  <div className="w-full h-[160px] rounded-xl overflow-hidden mb-3 bg-gray-100 border border-gray-200">
                    <img src="/images/about-hero.png" alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#F39C12] transition-colors">🦀 Cua Biển Hòn Khoai</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Cua gạch, cua thịt chắc nịch, rang me hoặc luộc sả chấm muối tiêu chanh.</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="w-full h-[160px] rounded-xl overflow-hidden mb-3 bg-gray-100 border border-gray-200">
                    <img src="/images/about-port.png" alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#F39C12] transition-colors">🐟 Cá Mú Nướng Mọi</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Cá mú đỏ đánh bắt tự nhiên, thịt dai ngọt nướng trên than hồng thơm phức.</p>
                </div>
                <div className="group cursor-pointer">
                  <div className="w-full h-[160px] rounded-xl overflow-hidden mb-3 bg-gray-100 border border-gray-200">
                    <img src="/images/about-lighthouse.png" alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#F39C12] transition-colors">🦐 Tôm Hùm Đá</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Loại tôm hùm sống trong các hốc đá quanh đảo, cực kỳ dinh dưỡng và đắt giá.</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-16" />

            {/* Section 5 — THỜI TIẾT THEO MÙA */}
            <div id="thoi-tiet" className="mb-16 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6 flex items-center gap-3" style={{ fontFamily: "Playfair Display, serif" }}>
                <Sun size={28} className="text-[#F39C12]" /> THỜI TIẾT THEO MÙA
              </h2>
              <p className="text-gray-600 mb-6">Biển Hòn Khoai bị ảnh hưởng mạnh bởi gió mùa. Việc chọn đúng thời điểm sẽ quyết định 90% sự thành công của chuyến đi.</p>

              {/* Month Calendar Visual */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm mb-6">
                <div className="grid grid-cols-6 gap-2 sm:gap-3 mb-6">
                  {[1, 2, 3, 4, 11, 12].map(m => (
                    <div key={m} className="aspect-square rounded-xl bg-[#1E8449] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                      T{m}
                    </div>
                  ))}
                  {[5, 6, 7, 8, 9, 10].map(m => (
                    <div key={m} className="aspect-square rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-lg shadow-sm">
                      T{m}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 text-sm font-medium border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#1E8449]"></span> Lý Tưởng (Mùa Khô)</span>
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-100"></span> Có Thể Đi (Mùa Mưa)</span>
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400"></span> Biển Động (Theo Bão)</span>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="bg-[#1E8449] text-white p-5 rounded-xl flex items-start gap-4">
                <CheckCircle2 size={24} className="text-green-200 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Thời điểm tốt nhất: Tháng 11 đến Tháng 4 năm sau</h4>
                  <p className="text-green-100 text-sm">Đây là lúc gió chướng nhẹ, biển êm, sóng lặng, nước biển trong xanh vô cùng thích hợp cho việc di chuyển bằng tàu và ngắm san hô.</p>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-16" />

            {/* Section 6 — LƯU Ý KHI ĐI */}
            <div id="luu-y" className="mb-16 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>LƯU Ý KHI ĐI</h2>
              
              {/* Warning box */}
              <div className="bg-[#FEF3C7] border-l-4 border-orange-400 p-4 rounded-r-lg mb-6 flex items-start gap-3">
                <AlertTriangle size={24} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-amber-900 text-sm">
                  <span className="font-bold text-base mr-1">Quan Trọng:</span> Mọi du khách phải mang theo Căn Cước Công Dân bản gốc hoặc Hộ chiếu để đăng ký tạm trú với trạm biên phòng. Không chấp nhận bản sao photo hay ảnh chụp trên điện thoại.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Left - NÊN MANG THEO */}
                <div className="bg-[#F8FBFF] border border-[#EAF4FB] p-6 rounded-xl">
                  <h4 className="font-bold text-[#0A3D62] mb-4 text-sm uppercase tracking-wider">NÊN MANG THEO</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Kem chống nắng SPF 50+, mũ rộng vành</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Giày leo núi/thể thao chống trượt tốt</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Thuốc chống say sóng, đau bụng, urgo</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Đồ bơi, kính râm, sạc dự phòng dung lượng lớn</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Thuốc chống côn trùng/muỗi rừng</li>
                  </ul>
                </div>

                {/* Right - KHÔNG ĐƯỢC PHÉP */}
                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-red-800 mb-4 text-sm uppercase tracking-wider">KHÔNG ĐƯỢC PHÉP</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-700"><XCircle size={16} className="text-red-500 shrink-0 mt-0.5" /> Tuyệt đối không xả rác nhựa ra biển/đảo</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><XCircle size={16} className="text-red-500 shrink-0 mt-0.5" /> Không được bẻ san hô, nhặt trứng chim/rùa biển</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><XCircle size={16} className="text-red-500 shrink-0 mt-0.5" /> Cấm đốt lửa trại tự phát trong bìa rừng</li>
                    <li className="flex items-start gap-2 text-sm text-gray-700"><XCircle size={16} className="text-red-500 shrink-0 mt-0.5" /> Cấm bay flycam gần khu vực quân sự đồn biên phòng</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="suc-khoe" className="w-full h-px bg-transparent mb-16 scroll-mt-[100px]" />

            {/* Section 7 — FAQ */}
            <div id="faq" className="mb-8 scroll-mt-[100px]">
              <h2 className="text-3xl font-bold text-[#0A3D62] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>CÂU HỎI THƯỜNG GẶP</h2>
              
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className={`border ${expandedFaq === idx ? 'border-[#0A3D62]' : 'border-gray-200'} rounded-xl overflow-hidden transition-colors`}>
                    <button 
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${expandedFaq === idx ? 'bg-[#F8FBFF]' : 'bg-white hover:bg-gray-50'}`}
                    >
                      <span className={`font-semibold pr-4 ${expandedFaq === idx ? 'text-[#0A3D62]' : 'text-gray-900'}`}>{faq.q}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp size={20} className="text-[#0A3D62] shrink-0" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400 shrink-0" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <div className="p-5 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* RIGHT SIDEBAR (240px) */}
          <aside className="hidden lg:flex flex-col w-[240px] shrink-0 sticky top-[100px] gap-6">
            
            {/* Weather widget */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-5">
              <h5 className="font-bold text-[#0A3D62] mb-4 flex items-center gap-2">
                <CloudSun size={18} /> Thời Tiết Hôm Nay
              </h5>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-black text-gray-800 tracking-tighter">28°C</div>
                <CloudRain size={36} className="text-blue-400" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Mưa rải rác. Gió Đông Bắc 15km/h. Cập nhật 15 phút trước.</p>
            </div>

            {/* Quick Info Card */}
            <div className="bg-[#EAF4FB] rounded-xl shadow-sm border border-blue-100 p-5 text-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-[#0A3D62] shadow-sm">
                <Phone size={18} />
              </div>
              <p className="text-sm text-gray-600 font-medium mb-1">Đường Dây Hỗ Trợ 24/7</p>
              <div className="text-xl font-black text-[#0A3D62] mb-4">1900 1234</div>
              <button className="w-full py-2 rounded-lg border-2 border-[#0A3D62] text-[#0A3D62] font-semibold text-sm hover:bg-[#0A3D62] hover:text-white transition-colors">
                Gọi Ngay
              </button>
            </div>

            {/* Related Tours */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100 p-5">
              <h5 className="font-bold text-gray-900 mb-4 text-sm">Tour Phổ Biến</h5>
              <div className="space-y-4">
                
                {/* Mini Tour 1 */}
                <div className="flex gap-3 group">
                  <div className="w-14 h-14 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                    <img src="/images/about-port.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link to="/tour/1" className="text-xs font-bold text-gray-900 group-hover:text-[#0A3D62] line-clamp-2 leading-tight mb-1">Hòn Khoai Trong Ngày</Link>
                    <div className="text-[#F39C12] text-xs font-bold">850K</div>
                  </div>
                </div>

                {/* Mini Tour 2 */}
                <div className="flex gap-3 group">
                  <div className="w-14 h-14 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                    <img src="/images/about-lighthouse.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link to="/tour/2" className="text-xs font-bold text-gray-900 group-hover:text-[#0A3D62] line-clamp-2 leading-tight mb-1">Rừng Nguyên Sinh 2N1Đ</Link>
                    <div className="text-[#F39C12] text-xs font-bold">1,200K</div>
                  </div>
                </div>

                {/* Mini Tour 3 */}
                <div className="flex gap-3 group">
                  <div className="w-14 h-14 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                    <img src="/images/about-hero.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link to="/tour/3" className="text-xs font-bold text-gray-900 group-hover:text-[#0A3D62] line-clamp-2 leading-tight mb-1">Lặn Biển Ngắm San Hô</Link>
                    <div className="text-[#F39C12] text-xs font-bold">2,450K</div>
                  </div>
                </div>

              </div>
            </div>

          </aside>

        </div>
      </section>

      <HpFooter />
    </div>
  );
}
