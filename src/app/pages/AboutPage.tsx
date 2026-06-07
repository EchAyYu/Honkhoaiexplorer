import { ChevronRight, Facebook, Linkedin, Anchor, Ship, RefreshCw, TrendingUp, Maximize, MapPin, Trees, Fish, Mountain, Thermometer, CheckCircle2 } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- HERO SUB-PAGE --- */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mt-[80px]">
        {/* Background Image & Overlay */}
        <img
          src="/images/about-hero.png"
          alt="Hòn Khoai Explorer - Aerial Island View"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3D62]/80 to-[#1A1A2E]/90" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 mx-auto h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <div className="absolute top-8 left-8 md:left-16 flex items-center text-sm text-white/80 gap-2">
            <a href="/" className="hover:text-white transition-colors">Trang Chủ</a>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Giới Thiệu</span>
          </div>

          <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight drop-shadow-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Câu Chuyện Của Chúng Tôi
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
              Hành trình kiến tạo điểm đến du lịch sinh thái hàng đầu Việt Nam
            </p>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C50.32,87,101.44,79.14,152.6,71.29,208.68,62.67,265.48,67.13,321.39,56.44Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* --- SECTION 1: INTRODUCTION STORY --- */}
      <section className="w-full bg-white py-[100px] px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left: Image */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-2xl shadow-2xl overflow-hidden group">
            <img
              src="/images/about-lighthouse.png"
              alt="Hòn Khoai Lighthouse"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 rounded-full bg-[#1E8449] flex items-center justify-center text-white">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Thành Lập</p>
                <p className="text-xl font-bold text-[#0A3D62]">2015</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center">
            <span className="text-[#1E8449] font-bold tracking-wider text-sm mb-4 uppercase">CÂU CHUYỆN CỦA CHÚNG TÔI</span>
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-8 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Từ Tình Yêu Biển Đảo<br />Đến Sứ Mệnh Du Lịch
            </h2>
            
            <div className="space-y-6 text-[#555F6B] leading-relaxed text-lg mb-10">
              <p>
                Bắt nguồn từ tình yêu sâu sắc với vẻ đẹp hoang sơ của quê hương Cà Mau, Hòn Khoai Explorer được thành lập với một sứ mệnh duy nhất: Đưa viên ngọc xanh của cực Nam Tổ quốc đến gần hơn với du khách trong và ngoài nước.
              </p>
              <p>
                Chúng tôi không chỉ tổ chức các chuyến đi, mà còn kiến tạo những trải nghiệm gắn kết con người với thiên nhiên. Từ ngọn hải đăng trăm tuổi mang dấu ấn thời gian đến những cánh rừng nguyên sinh kỳ vĩ, mỗi bước chân trên Hòn Khoai là một câu chuyện đang chờ được kể.
              </p>
              <p>
                Với cam kết phát triển du lịch bền vững, Hòn Khoai Explorer luôn đặt việc bảo tồn hệ sinh thái lên hàng đầu, đảm bảo rằng vẻ đẹp nguyên sơ này sẽ mãi được lưu giữ cho các thế hệ mai sau.
              </p>
            </div>

            {/* Stats Inline */}
            <div className="flex flex-wrap gap-6 border-t border-gray-100 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#F39C12] mb-1">10+</span>
                <span className="text-sm font-medium text-gray-500">Năm Kinh Nghiệm</span>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#F39C12] mb-1">5,000+</span>
                <span className="text-sm font-medium text-gray-500">Khách Hài Lòng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: TIMELINE --- */}
      <section className="w-full bg-[#EAF4FB] py-[100px] px-8 md:px-16 relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#0A3D62]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Hành Trình Phát Triển
            </h2>
            <div className="w-24 h-1 bg-[#F39C12] mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-[#0A3D62]/10 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal w-full md:odd:flex-row-reverse group">
                <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#F39C12] border-4 border-white shadow-md -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />
                <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-2xl font-black text-[#0A3D62] mb-2">1889</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Hải Đăng Hòn Khoai Được Xây Dựng</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Ngọn hải đăng do thực dân Pháp xây dựng, là một trong những công trình lâu đời nhất trên các hải đảo Việt Nam.</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal w-full md:odd:flex-row-reverse group">
                <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#F39C12] border-4 border-white shadow-md -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />
                <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 md:text-right">
                  <div className="text-2xl font-black text-[#0A3D62] mb-2">1977</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Công Nhận Khu Bảo Tồn Thiên Nhiên</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Đảo được chính thức bảo vệ để giữ gìn hệ sinh thái rừng nguyên sinh và đa dạng sinh học độc đáo.</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-center justify-between md:justify-normal w-full md:odd:flex-row-reverse group">
                <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#F39C12] border-4 border-white shadow-md -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />
                <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-2xl font-black text-[#0A3D62] mb-2">2000</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Bắt Đầu Phát Triển Du Lịch Sinh Thái</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Những đoàn khách đầu tiên đặt chân đến đảo dưới hình thức du lịch trải nghiệm hoang dã.</p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative flex items-center justify-between md:justify-normal w-full md:odd:flex-row-reverse group">
                <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#F39C12] border-4 border-white shadow-md -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />
                <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 md:text-right">
                  <div className="text-2xl font-black text-[#0A3D62] mb-2">2015</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Thành Lập Hòn Khoai Explorer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Chính thức ra mắt thương hiệu với các dịch vụ lữ hành chuyên nghiệp, an toàn và bài bản.</p>
                </div>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative flex items-center justify-between md:justify-normal w-full md:odd:flex-row-reverse group">
                <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#F39C12] border-4 border-white shadow-md -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />
                <div className="w-full md:w-[45%] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-2xl font-black text-[#0A3D62] mb-2">2020</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Cảng Tổng Hợp Lưỡng Dụng Hòn Khoai</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Phê duyệt quy hoạch xây dựng cảng biển chiến lược, kết hợp kinh tế và an ninh quốc phòng.</p>
                </div>
              </div>

              {/* Timeline Item 6 */}
              <div className="relative flex items-center justify-between md:justify-normal w-full md:odd:flex-row-reverse group">
                <div className="absolute left-[50%] w-6 h-6 rounded-full bg-[#F39C12] border-4 border-white shadow-md -translate-x-1/2 hidden md:block z-10 group-hover:scale-125 transition-transform" />
                <div className="w-full md:w-[45%] bg-[#0A3D62] p-6 rounded-xl shadow-lg transition-shadow border border-[#0A3D62] md:text-right text-white">
                  <div className="text-2xl font-black text-[#F39C12] mb-2">2025</div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Điểm Đến Du Lịch Quốc Tế</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Hướng tới trở thành điểm sáng trên bản đồ du lịch sinh thái và nghỉ dưỡng cao cấp quốc tế.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: HON KHOAI ISLAND INFO --- */}
      <section className="w-full bg-white py-[100px] px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#0A3D62]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Tổng Quan Về Hòn Khoai
            </h2>
            <div className="w-24 h-1 bg-[#1E8449] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#EAF4FB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] group-hover:bg-[#0A3D62] group-hover:text-white transition-colors mb-6">
                <Maximize size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A3D62] mb-2">32 km²</h3>
              <p className="text-gray-600 font-medium">Tổng Diện Tích</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#EAF4FB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] group-hover:bg-[#0A3D62] group-hover:text-white transition-colors mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A3D62] mb-2">15 km</h3>
              <p className="text-gray-600 font-medium">Cách Bờ (Cà Mau)</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#EAF4FB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#1E8449] group-hover:bg-[#1E8449] group-hover:text-white transition-colors mb-6">
                <Trees size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A3D62] mb-2">95%</h3>
              <p className="text-gray-600 font-medium">Rừng Nguyên Sinh Phủ Xanh</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#EAF4FB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#1E8449] group-hover:bg-[#1E8449] group-hover:text-white transition-colors mb-6">
                <Fish size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A3D62] mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Loài Thủy Sinh</p>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#EAF4FB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#F39C12] group-hover:bg-[#F39C12] group-hover:text-white transition-colors mb-6">
                <Mountain size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A3D62] mb-2">318m</h3>
              <p className="text-gray-600 font-medium">Đỉnh Cao Nhất</p>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center text-center p-8 rounded-2xl border-2 border-[#EAF4FB] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#F39C12] group-hover:bg-[#F39C12] group-hover:text-white transition-colors mb-6">
                <Thermometer size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#0A3D62] mb-2">26-30°C</h3>
              <p className="text-gray-600 font-medium">Nhiệt Độ Trung Bình</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PORT INFORMATION --- */}
      <section className="w-full bg-[#0A3D62] py-[100px] px-8 md:px-16 text-white overflow-hidden relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F39C12]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: Port Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square group">
            <img 
              src="/images/about-port.png" 
              alt="Hòn Khoai Port" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0A3D62]/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Right: Text & Features */}
          <div>
            <span className="text-[#F39C12] font-bold tracking-wider text-sm mb-4 uppercase inline-block">CẢNG TỔNG HỢP LƯỠNG DỤNG</span>
            <h2 
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Hòn Khoai — Cảng Biển Chiến Lược
            </h2>
            <p className="text-white/80 leading-relaxed text-lg mb-10">
              Dự án Cảng tổng hợp Hòn Khoai không chỉ là một bến đỗ cho những con tàu viễn dương mà còn là đòn bẩy kinh tế chiến lược của vùng Đồng bằng sông Cửu Long. Với vị trí đắc địa trên tuyến hàng hải quốc tế, cảng Hòn Khoai mở ra cánh cửa giao thương rộng lớn, kết hợp hài hòa giữa phát triển kinh tế và tiềm năng du lịch vô tận.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-[#F39C12]">
                  <Ship size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Năng Lực Tiếp Nhận</h4>
                  <p className="text-white/70 text-sm">Tiếp nhận tàu trọng tải lớn lên đến 250.000 DWT, là siêu cảng lớn nhất khu vực.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-[#1E8449]">
                  <Anchor size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Vị Trí Chiến Lược</h4>
                  <p className="text-white/70 text-sm">Nằm ngay trên tuyến hàng hải quốc tế Đông - Tây sầm uất bậc nhất thế giới.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-[#F39C12]">
                  <RefreshCw size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Lưỡng Dụng</h4>
                  <p className="text-white/70 text-sm">Kết hợp hoàn hảo giữa phục vụ thương mại, logistics và phát triển du lịch sinh thái biển.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/5 text-[#1E8449]">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Phát Triển Kinh Tế</h4>
                  <p className="text-white/70 text-sm">Thúc đẩy mạnh mẽ kinh tế vùng Cà Mau và toàn bộ Đồng bằng sông Cửu Long cất cánh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: TEAM --- */}
      <section className="w-full bg-white py-[100px] px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#0A3D62]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Đội Ngũ Chuyên Gia
            </h2>
            <div className="w-24 h-1 bg-[#F39C12] mx-auto mt-6 rounded-full" />
            <p className="text-gray-500 mt-6 max-w-2xl mx-auto">Những con người đam mê và tâm huyết, không ngừng nỗ lực để mang đến cho bạn trải nghiệm tuyệt vời nhất.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team 1 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="relative mb-6">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img src="/images/avatar1.png" alt="Nguyễn Văn A" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 rounded-full border-[3px] border-[#F39C12] scale-110 opacity-50 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <h4 className="text-xl font-bold text-[#0A3D62] mb-1">Lê Minh Khang</h4>
              <p className="text-sm font-semibold text-[#1E8449] mb-4">Giám Đốc Điều Hành</p>
              <p className="text-sm text-[#555F6B] line-clamp-2 mb-6">Hơn 15 năm kinh nghiệm trong ngành du lịch sinh thái và phát triển bền vững.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Facebook size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Linkedin size={16} /></a>
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="relative mb-6">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img src="/images/avatar2.png" alt="Trần Thị B" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 rounded-full border-[3px] border-[#1E8449] scale-110 opacity-50 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <h4 className="text-xl font-bold text-[#0A3D62] mb-1">Trần Ngọc Mai</h4>
              <p className="text-sm font-semibold text-[#1E8449] mb-4">Giám Đốc Vận Hành</p>
              <p className="text-sm text-[#555F6B] line-clamp-2 mb-6">Chuyên gia thiết kế tour với sự am hiểu sâu sắc về văn hóa bản địa Cà Mau.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Facebook size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Linkedin size={16} /></a>
              </div>
            </div>

            {/* Team 3 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="relative mb-6">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img src="/images/avatar3.png" alt="Phạm Văn C" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 rounded-full border-[3px] border-[#F39C12] scale-110 opacity-50 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <h4 className="text-xl font-bold text-[#0A3D62] mb-1">Phạm Minh Đức</h4>
              <p className="text-sm font-semibold text-[#1E8449] mb-4">Trưởng Đoàn Cố Vấn</p>
              <p className="text-sm text-[#555F6B] line-clamp-2 mb-6">Cố vấn sinh học hải dương học, đảm bảo các tour luôn tôn trọng hệ sinh thái.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Facebook size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Linkedin size={16} /></a>
              </div>
            </div>

            {/* Team 4 */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="relative mb-6">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                  <img src="/images/avatar1.png" alt="Hoàng Thị D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 rounded-full border-[3px] border-[#1E8449] scale-110 opacity-50 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <h4 className="text-xl font-bold text-[#0A3D62] mb-1">Hoàng Hải Tuấn</h4>
              <p className="text-sm font-semibold text-[#1E8449] mb-4">Quản Lý Trải Nghiệm</p>
              <p className="text-sm text-[#555F6B] line-clamp-2 mb-6">Đảm bảo mọi khoảnh khắc của du khách trên đảo luôn an toàn và đáng nhớ.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Facebook size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A3D62] hover:text-white transition-colors"><Linkedin size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CERTIFICATIONS & PARTNERS --- */}
      <section className="w-full bg-[#F8FBFF] py-[80px] px-8 md:px-16 border-t border-blue-50">
        <div className="max-w-[1440px] mx-auto">
          <h3 className="text-2xl font-bold text-center text-[#0A3D62] mb-12">Chứng Nhận & Đối Tác</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
            {/* Logos represented by text for layout since we don't have SVGs */}
            <div className="text-xl font-bold text-gray-400 hover:text-[#0A3D62] transition-colors cursor-pointer grayscale hover:grayscale-0">Tổng Cục Du Lịch</div>
            <div className="text-xl font-bold text-gray-400 hover:text-[#0A3D62] transition-colors cursor-pointer grayscale hover:grayscale-0">Sở Du Lịch Cà Mau</div>
            <div className="text-3xl font-black text-gray-400 hover:text-[#0A3D62] transition-colors cursor-pointer grayscale hover:grayscale-0 tracking-tighter">IATA</div>
            <div className="text-xl font-bold text-gray-400 hover:text-[#005B9F] transition-colors cursor-pointer grayscale hover:grayscale-0">Vietnam Airlines</div>
            <div className="text-xl font-bold text-gray-400 hover:text-[#003580] transition-colors cursor-pointer grayscale hover:grayscale-0">Booking.com</div>
            <div className="text-xl font-bold text-gray-400 hover:text-[#34E0A1] transition-colors cursor-pointer grayscale hover:grayscale-0">TripAdvisor</div>
          </div>
        </div>
      </section>

      <HpFooter />
    </div>
  );
}
