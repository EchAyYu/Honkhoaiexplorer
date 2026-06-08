import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, Eye, Share2, Mail, ChevronRight, ChevronLeft } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function NewsBlogPage() {
  const [activeTab, setActiveTab] = useState("Tất Cả");

  const tabs = [
    "🗂 Tất Cả", "🗺 Cẩm Nang Du Lịch", "🌿 Thiên Nhiên & Sinh Thái",
    "🍜 Ẩm Thực", "📸 Nhiếp Ảnh", "🏗 Cảng & Phát Triển", "🎉 Sự Kiện"
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[420px] mt-[80px] overflow-hidden flex flex-col items-center justify-center">
        {/* Background collage/mosaic mock with gradient overlay */}
        <div className="absolute inset-0 bg-[#0A3D62]" />
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-50 mix-blend-luminosity">
          <img src="/images/about-lighthouse.png" className="w-full h-full object-cover" />
          <img src="/images/about-hero.png" className="w-full h-full object-cover" />
          <img src="/images/about-port.png" className="w-full h-full object-cover" />
          <img src="/images/about-hero.png" className="w-full h-full object-cover" />
          <img src="/images/about-port.png" className="w-full h-full object-cover" />
          <img src="/images/about-lighthouse.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/90 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 mx-auto flex flex-col items-center text-center">
          {/* Top-left breadcrumb */}
          <div className="absolute top-0 left-8 md:left-16 flex items-center text-sm text-white gap-2">
            <Link to="/" className="hover:text-amber-400 transition-colors">Trang Chủ</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white/80">Tin Tức</span>
          </div>

          <span className="text-[#F39C12] font-bold tracking-[3px] uppercase text-sm mb-4 mt-8 block">TIN TỨC & CẨM NANG</span>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4 leading-tight drop-shadow-md" style={{ fontFamily: "Playfair Display, serif" }}>
            Khám Phá Câu Chuyện Hòn Khoai
          </h1>
          <p className="text-lg text-white/80 max-w-[600px] mb-8 font-light leading-relaxed">
            Cập nhật mới nhất về du lịch, văn hóa và thiên nhiên vùng biển Cà Mau
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-full w-full max-w-[560px] flex items-center p-2 shadow-2xl">
            <Search className="text-[#555F6B] ml-4 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm bài viết..." 
              className="flex-1 bg-transparent border-none outline-none px-4 text-gray-800 placeholder-gray-400"
            />
            <button className="px-7 py-3 rounded-full bg-[#F39C12] text-white font-semibold hover:bg-amber-500 transition-colors shadow-sm shrink-0">
              Tìm Kiếm
            </button>
          </div>
        </div>
      </section>

      {/* --- CATEGORY FILTER BAR --- */}
      <section className="w-full bg-white border-b border-[#EAF4FB] py-5 sticky top-[80px] z-40">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 overflow-x-auto no-scrollbar flex items-center gap-3 justify-center sm:justify-start lg:justify-center">
          {tabs.map(tab => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  isActive 
                    ? "bg-[#0A3D62] text-white border-[#0A3D62] shadow-md" 
                    : "bg-white text-[#555F6B] border-[#EAF4FB] hover:border-[#0A3D62] hover:text-[#0A3D62]"
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="w-full bg-white py-[80px] px-8 md:px-16">
        <div className="max-w-[1248px] mx-auto flex flex-col lg:flex-row gap-12 justify-center">
          
          {/* Main content 900px */}
          <main className="w-full lg:max-w-[900px] flex-1">
            
            {/* FEATURED / HERO ARTICLE */}
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row border border-gray-100 group">
              {/* Left Image */}
              <div className="md:w-[520px] h-[340px] shrink-0 overflow-hidden relative">
                <img src="/images/about-hero.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Featured article" />
              </div>
              
              {/* Right Content */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-[#1E8449] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    CẨM NANG DU LỊCH
                  </span>
                </div>
                
                <Link to="/news/1" className="block mb-4">
                  <h2 className="text-2xl lg:text-[32px] font-bold text-[#1A1A2E] leading-snug group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                    Kinh Nghiệm Khám Phá Hòn Khoai Từ A Đến Z Cho Người Lần Đầu Đặt Chân
                  </h2>
                </Link>
                
                <p className="text-[#555F6B] text-base leading-relaxed line-clamp-3 mb-6">
                  Đảo Hòn Khoai không chỉ nổi tiếng với ngọn hải đăng cổ kính mà còn mang trong mình vẻ đẹp nguyên sơ kỳ vĩ. Nếu bạn đang lên kế hoạch cho chuyến đi đầu tiên, đây là toàn bộ bí kíp để có một trải nghiệm trọn vẹn nhất.
                </p>

                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-6">
                  <img src="/images/avatar1.png" className="w-10 h-10 rounded-full object-cover" alt="Author" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">Nguyễn Minh Tuấn</div>
                    <div className="text-[13px] text-gray-500">Hướng dẫn viên du lịch</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> 15 Tháng 11, 2025</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> 8 phút đọc</span>
                    <span className="flex items-center gap-1.5"><Eye size={14} /> 2,450 lượt xem</span>
                  </div>
                  <Link to="/news/1" className="flex items-center gap-2 text-sm font-bold text-[#0A3D62] hover:text-[#F39C12] transition-colors group/btn">
                    Đọc Bài Viết <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SECTION LABEL */}
            <div className="mt-[60px] mb-8 border-b border-gray-100 pb-2">
              <span className="text-[#0A3D62] font-bold tracking-widest text-sm uppercase">BÀI VIẾT MỚI NHẤT</span>
              <div className="w-12 h-1 bg-[#F39C12] mt-2 rounded-full" />
            </div>

            {/* ARTICLE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <img src="/images/about-lighthouse.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Post" />
                  <div className="absolute top-3 left-3 bg-[#1E8449] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    CẨM NANG
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/news/2">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                      Top 10 Điểm Checkin Đẹp Nhất Tại Hòn Khoai
                    </h3>
                  </Link>
                  <p className="text-sm text-[#555F6B] line-clamp-2 mb-5 leading-relaxed">Khám phá những góc máy thần thánh mang về những bức ảnh triệu like trên đảo.</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar2.png" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[13px] font-bold text-gray-800">Trần Ngọc Mai</span>
                      </div>
                      <span className="text-xs text-gray-500">10 Th11</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Clock size={12} /> 5p</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> 1.2K</span>
                      </div>
                      <button className="hover:text-[#0A3D62] transition-colors"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <img src="/images/about-hero.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Post" />
                  <div className="absolute top-3 left-3 bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    THIÊN NHIÊN
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/news/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                      Hệ Sinh Thái Rừng Ngập Mặn Cà Mau — Kỳ Quan Thiên Nhiên
                    </h3>
                  </Link>
                  <p className="text-sm text-[#555F6B] line-clamp-2 mb-5 leading-relaxed">Vẻ đẹp kỳ bí và hệ sinh thái vô cùng đa dạng của vùng đất ngập nước phương Nam.</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar3.png" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[13px] font-bold text-gray-800">Phạm Đức</span>
                      </div>
                      <span className="text-xs text-gray-500">08 Th11</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Clock size={12} /> 12p</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> 950</span>
                      </div>
                      <button className="hover:text-[#0A3D62] transition-colors"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <img src="/images/about-port.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Post" />
                  <div className="absolute top-3 left-3 bg-[#F39C12] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    ẨM THỰC
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/news/4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                      6 Món Hải Sản Nhất Định Phải Thử Khi Đến Hòn Khoai
                    </h3>
                  </Link>
                  <p className="text-sm text-[#555F6B] line-clamp-2 mb-5 leading-relaxed">Đến biển đảo thì không thể bỏ lỡ đại tiệc hải sản tươi rói nướng mọi trên than hồng.</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar1.png" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[13px] font-bold text-gray-800">Hoàng Tuấn</span>
                      </div>
                      <span className="text-xs text-gray-500">05 Th11</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Clock size={12} /> 6p</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> 3.2K</span>
                      </div>
                      <button className="hover:text-[#0A3D62] transition-colors"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <img src="/images/about-lighthouse.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Post" />
                  <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    NHIẾP ẢNH
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/news/5">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                      Bí Kíp Chụp Ảnh Biển Đẹp Như Tạp Chí Với Điện Thoại
                    </h3>
                  </Link>
                  <p className="text-sm text-[#555F6B] line-clamp-2 mb-5 leading-relaxed">Hướng dẫn chi tiết từ góc máy đến căn sáng cho những bức ảnh hoàng hôn rực rỡ.</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar2.png" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[13px] font-bold text-gray-800">Trần Ngọc Mai</span>
                      </div>
                      <span className="text-xs text-gray-500">01 Th11</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Clock size={12} /> 4p</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> 1.8K</span>
                      </div>
                      <button className="hover:text-[#0A3D62] transition-colors"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <img src="/images/about-port.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Post" />
                  <div className="absolute top-3 left-3 bg-[#0A3D62] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    CẢNG & PHÁT TRIỂN
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/news/6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                      Cảng Tổng Hợp Lưỡng Dụng Hòn Khoai — Động Lực Phát Triển
                    </h3>
                  </Link>
                  <p className="text-sm text-[#555F6B] line-clamp-2 mb-5 leading-relaxed">Dự án siêu cảng mang đến kỳ vọng thay đổi diện mạo kinh tế vùng Cực Nam.</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar3.png" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[13px] font-bold text-gray-800">Lê Khang</span>
                      </div>
                      <span className="text-xs text-gray-500">28 Th10</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Clock size={12} /> 10p</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> 450</span>
                      </div>
                      <button className="hover:text-[#0A3D62] transition-colors"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <img src="/images/about-hero.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Post" />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    SỰ KIỆN
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/news/7">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0A3D62] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
                      Lễ Hội Nghinh Ông Sông Đốc 2025 — Nét Văn Hóa Độc Đáo
                    </h3>
                  </Link>
                  <p className="text-sm text-[#555F6B] line-clamp-2 mb-5 leading-relaxed">Cùng hòa mình vào không khí nhộn nhịp của lễ hội cầu ngư lớn nhất Nam Bộ.</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <img src="/images/avatar1.png" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-[13px] font-bold text-gray-800">Nguyễn Minh Tuấn</span>
                      </div>
                      <span className="text-xs text-gray-500">20 Th10</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1"><Clock size={12} /> 7p</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> 2.1K</span>
                      </div>
                      <button className="hover:text-[#0A3D62] transition-colors"><Share2 size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* LOAD MORE */}
            <div className="mt-16 text-center">
              <button className="border-2 border-[#0A3D62] text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white font-semibold rounded-full px-10 py-3.5 transition-all shadow-sm">
                Xem Thêm Bài Viết
              </button>
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-center gap-2 mt-16 pt-10 border-t border-gray-100">
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#0A3D62] transition-colors">
                &larr; Trang Trước
              </button>
              <button className="w-10 h-10 rounded-full bg-[#0A3D62] text-white font-bold flex items-center justify-center shadow-md">1</button>
              <button className="w-10 h-10 rounded-full border border-[#EAF4FB] bg-white text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium flex items-center justify-center transition-colors">2</button>
              <button className="w-10 h-10 rounded-full border border-[#EAF4FB] bg-white text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium flex items-center justify-center transition-colors">3</button>
              <span className="text-gray-400 px-2">...</span>
              <button className="w-10 h-10 rounded-full border border-[#EAF4FB] bg-white text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium flex items-center justify-center transition-colors">8</button>
              <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#0A3D62] transition-colors">
                Trang Sau &rarr;
              </button>
            </div>

          </main>

          {/* RIGHT SIDEBAR 300px */}
          <aside className="w-full lg:w-[300px] shrink-0 sticky top-[100px] h-fit flex flex-col gap-8">
            
            {/* Widget 1 — Bài Viết Nổi Bật */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="text-[#0A3D62] font-bold text-sm tracking-widest uppercase mb-5">🔥 NỔI BẬT</h4>
              
              <div className="space-y-4">
                <Link to="/news/8" className="flex gap-4 group">
                  <img src="/images/about-port.png" className="w-[72px] h-[72px] rounded-lg object-cover shrink-0 group-hover:opacity-80 transition-opacity" />
                  <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-sm text-gray-900 group-hover:text-[#0A3D62] line-clamp-2 mb-1 leading-snug">Hướng dẫn chi tiết phượt đảo Hòn Khoai bằng tàu cá</h5>
                    <span className="text-[11px] text-gray-400 font-medium">10 Th11, 2025</span>
                  </div>
                </Link>
                <div className="w-full h-px bg-gray-100" />
                
                <Link to="/news/9" className="flex gap-4 group">
                  <img src="/images/about-hero.png" className="w-[72px] h-[72px] rounded-lg object-cover shrink-0 group-hover:opacity-80 transition-opacity" />
                  <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-sm text-gray-900 group-hover:text-[#0A3D62] line-clamp-2 mb-1 leading-snug">Góc máy chụp hoàng hôn đẹp nhất Nam Bộ</h5>
                    <span className="text-[11px] text-gray-400 font-medium">05 Th11, 2025</span>
                  </div>
                </Link>
                <div className="w-full h-px bg-gray-100" />
                
                <Link to="/news/10" className="flex gap-4 group">
                  <img src="/images/about-lighthouse.png" className="w-[72px] h-[72px] rounded-lg object-cover shrink-0 group-hover:opacity-80 transition-opacity" />
                  <div className="flex flex-col justify-center">
                    <h5 className="font-bold text-sm text-gray-900 group-hover:text-[#0A3D62] line-clamp-2 mb-1 leading-snug">Khám phá dấu ấn kiến trúc Pháp qua ngọn Hải Đăng</h5>
                    <span className="text-[11px] text-gray-400 font-medium">02 Th11, 2025</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Widget 2 — Danh Mục */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="text-[#0A3D62] font-bold text-sm tracking-widest uppercase mb-5">📂 DANH MỤC</h4>
              <ul className="space-y-3">
                {[
                  { name: "Cẩm Nang Du Lịch", icon: "🗺", count: 18 },
                  { name: "Thiên Nhiên", icon: "🌿", count: 12 },
                  { name: "Ẩm Thực", icon: "🍜", count: 9 },
                  { name: "Nhiếp Ảnh", icon: "📸", count: 7 },
                  { name: "Cảng & Phát Triển", icon: "🏗", count: 5 },
                  { name: "Sự Kiện", icon: "🎉", count: 4 },
                ].map((cat, idx) => (
                  <li key={idx}>
                    <Link to="#" className="flex items-center justify-between group">
                      <span className="text-sm font-medium text-gray-600 group-hover:text-[#0A3D62] transition-colors">{cat.icon} {cat.name}</span>
                      <span className="text-xs font-bold text-[#0A3D62] bg-[#EAF4FB] px-2.5 py-1 rounded-full group-hover:bg-[#0A3D62] group-hover:text-white transition-colors">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3 — Tags Phổ Biến */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h4 className="text-[#0A3D62] font-bold text-sm tracking-widest uppercase mb-5">🏷 TAGS</h4>
              <div className="flex flex-wrap gap-2">
                {["Hòn Khoai", "Cà Mau", "Lặn Biển", "Rừng Ngập Mặn", "Hải Đăng", "Tàu Cao Tốc", "Cua Biển", "Camping", "Sunrise", "Thiên Nhiên", "Cảng Biển", "Eco Tour"].map(tag => (
                  <Link key={tag} to="#" className="text-xs font-medium text-[#555F6B] bg-[#EAF4FB] px-3 py-1.5 rounded-full hover:bg-[#0A3D62] hover:text-white transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 4 — Newsletter */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#0A3D62] to-[#1E8449] p-6 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <Mail className="text-white mx-auto mb-3" size={32} />
              <h4 className="text-lg font-bold text-white mb-1 relative z-10">Nhận Bản Tin Du Lịch</h4>
              <p className="text-[13px] text-white/80 mb-5 relative z-10">Cập nhật tour mới & ưu đãi hàng tuần</p>
              
              <div className="space-y-3 relative z-10">
                <input type="email" placeholder="Email của bạn..." className="w-full bg-white rounded-lg px-4 py-3 text-sm text-gray-900 border-none outline-none focus:ring-2 focus:ring-[#F39C12]" />
                <button className="w-full bg-white text-[#0A3D62] font-bold text-sm py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                  Đăng Ký Ngay
                </button>
              </div>
              <p className="text-[11px] text-white/60 mt-4 relative z-10">🔒 Không spam. Hủy đăng ký bất kỳ lúc nào.</p>
            </div>

          </aside>
        </div>
      </section>

      <HpFooter />
    </div>
  );
}
