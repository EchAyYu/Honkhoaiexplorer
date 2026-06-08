import { Search, ChevronRight, Filter, Star, MapPin, Clock, Utensils, Ship, Camera, Tent, Fish, ChevronDown } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";
import { Link } from "react-router-dom";

export default function ToursPage() {
  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- HERO --- */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden mt-[80px]">
        {/* Background Image & Overlay */}
        <img
          src="/images/about-hero.png" // Reusing since quota exhausted
          alt="Hòn Khoai Tours"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 mx-auto h-full flex flex-col justify-center items-center text-center">
          {/* Breadcrumb */}
          <div className="absolute top-8 left-8 md:left-16 flex items-center text-sm text-white/80 gap-2">
            <Link to="/" className="hover:text-white transition-colors">Trang Chủ</Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Tour Du Lịch</span>
          </div>

          <div className="mt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 flex flex-col items-center w-full">
            <h1
              className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-4 drop-shadow-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Tất Cả Gói Tour
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light drop-shadow mb-8">
              Chọn hành trình phù hợp — từ 1 ngày đến nhiều ngày nghỉ dưỡng
            </p>

            {/* Search bar */}
            <div className="bg-white rounded-[40px] w-full max-w-[600px] flex items-center p-2 shadow-2xl">
              <input 
                type="text" 
                placeholder="Tìm kiếm tour..." 
                className="flex-1 bg-transparent border-none outline-none px-6 text-gray-800 placeholder-gray-400"
              />
              <button className="w-12 h-12 rounded-full bg-[#F39C12] flex items-center justify-center text-white hover:bg-amber-500 transition-colors shrink-0 shadow-md">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="w-full bg-white py-[80px] px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDEBAR */}
          <aside className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-[120px] h-fit bg-white border border-[#EAF4FB] rounded-2xl p-6 shadow-sm">
            <h4 className="text-[#0A3D62] font-bold text-lg mb-6 flex items-center gap-2">
              <Filter size={20} /> Lọc Tour
            </h4>

            {/* Filter group 1: Thời Lượng */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Thời Lượng</h5>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors">1 Ngày</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors">2 Ngày 1 Đêm</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors">3 Ngày 2 Đêm</span>
                </label>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            {/* Filter group 2: Mức Giá */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Mức Giá</h5>
              <input type="range" min="500000" max="5000000" className="w-full accent-[#0A3D62] mb-2" defaultValue="5000000" />
              <div className="text-sm text-[#0A3D62] font-medium text-center bg-[#EAF4FB] py-1.5 rounded-md">
                500,000đ — 5,000,000đ
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            {/* Filter group 3: Số Người */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Số Người</h5>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] transition-colors">Cá Nhân</button>
                <button className="px-3 py-1.5 rounded-full border border-[#0A3D62] bg-[#EAF4FB] text-sm text-[#0A3D62] font-medium transition-colors">Cặp Đôi</button>
                <button className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] transition-colors">Gia Đình</button>
                <button className="px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] transition-colors">Nhóm</button>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            {/* Filter group 4: Loại Tour */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Loại Tour</h5>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors flex items-center gap-2">🌿 Sinh Thái</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors flex items-center gap-2">🤿 Lặn Biển</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors flex items-center gap-2">🎣 Câu Cá</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors flex items-center gap-2">⛺ Camping</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors flex items-center gap-2">📸 Nhiếp Ảnh</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-gray-600 group-hover:text-[#0A3D62] transition-colors flex items-center gap-2">🚢 Ngắm Biển</span>
                </label>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            {/* Filter group 5: Đánh Giá */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Đánh Giá</h5>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="rating" className="w-4 h-4 border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <div className="flex items-center gap-1 text-[#F39C12]">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm text-gray-600 ml-1">trở lên</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="rating" className="w-4 h-4 border-gray-300 text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <div className="flex items-center gap-1 text-[#F39C12]">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} className="text-gray-300" />
                    <span className="text-sm text-gray-600 ml-1">trở lên</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-8">
              <button className="w-full py-3 rounded-lg bg-[#0A3D62] text-white font-semibold hover:bg-[#082a45] transition-colors shadow-md">
                Áp Dụng Lọc
              </button>
              <button className="text-sm text-gray-500 hover:text-[#0A3D62] font-medium transition-colors text-center">
                Xóa Tất Cả
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-[#F8FBFF] p-4 rounded-xl mb-8 border border-[#EAF4FB]">
              <div className="text-gray-600 font-medium mb-4 sm:mb-0">
                Tìm thấy 12 tour
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Sắp xếp:</span>
                <button className="flex items-center gap-2 font-medium text-[#0A3D62] bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#0A3D62] transition-colors shadow-sm">
                  Phổ Biến Nhất <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Tour grid 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {/* TOUR CARD 1 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[240px] overflow-hidden">
                  <img src="/images/about-port.png" alt="Tour 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-[#1E8449] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    PHỔ BIẾN
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer shadow-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Clock size={14} className="text-[#0A3D62]" /> 1 Ngày
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3 leading-tight hover:text-[#1E8449] transition-colors cursor-pointer" style={{ fontFamily: "Playfair Display, serif" }}>
                    Hòn Khoai Trong Ngày
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-[#F39C12]">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">4.9</span>
                    <span className="text-sm text-gray-500">(203 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                    <MapPin size={14} className="text-gray-400" /> Cà Mau city
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 my-auto mb-4" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Utensils size={18} />
                      <Ship size={18} />
                      <Camera size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Từ</div>
                      <div className="text-[#0A3D62]">
                        <span className="text-xl font-black">850,000đ</span>
                        <span className="text-xs text-gray-500">/người</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to="/tour/1" className="flex-1 py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm text-center hover:bg-[#F8FBFF] transition-colors">
                      Xem Chi Tiết
                    </Link>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-md">
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* TOUR CARD 2 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[240px] overflow-hidden">
                  <img src="/images/about-lighthouse.png" alt="Tour 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer shadow-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Clock size={14} className="text-[#0A3D62]" /> 2 Ngày 1 Đêm
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3 leading-tight hover:text-[#1E8449] transition-colors cursor-pointer" style={{ fontFamily: "Playfair Display, serif" }}>
                    Hành Trình Khám Phá Rừng Nguyên Sinh
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-[#F39C12]">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} className="text-gray-300" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">4.2</span>
                    <span className="text-sm text-gray-500">(156 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                    <MapPin size={14} className="text-gray-400" /> Bến tàu Năm Căn
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 my-auto mb-4" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Tent size={18} />
                      <Utensils size={18} />
                      <Camera size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Từ</div>
                      <div className="text-[#0A3D62]">
                        <span className="text-xl font-black">1,200,000đ</span>
                        <span className="text-xs text-gray-500">/người</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to="/tour/2" className="flex-1 py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm text-center hover:bg-[#F8FBFF] transition-colors">
                      Xem Chi Tiết
                    </Link>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-md">
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* TOUR CARD 3 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[240px] overflow-hidden">
                  <img src="/images/about-hero.png" alt="Tour 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-[#F39C12] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    HOT DEAL
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer shadow-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Clock size={14} className="text-[#0A3D62]" /> 3 Ngày 2 Đêm
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3 leading-tight hover:text-[#1E8449] transition-colors cursor-pointer" style={{ fontFamily: "Playfair Display, serif" }}>
                    Nghỉ Dưỡng Lặn Ngắm San Hô
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-[#F39C12]">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">4.8</span>
                    <span className="text-sm text-gray-500">(320 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                    <MapPin size={14} className="text-gray-400" /> Đảo Hòn Khoai
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 my-auto mb-4" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Fish size={18} />
                      <Ship size={18} />
                      <Utensils size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Từ</div>
                      <div className="text-[#0A3D62]">
                        <span className="text-xl font-black">2,450,000đ</span>
                        <span className="text-xs text-gray-500">/người</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to="/tour/3" className="flex-1 py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm text-center hover:bg-[#F8FBFF] transition-colors">
                      Xem Chi Tiết
                    </Link>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-md">
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* TOUR CARD 4 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[240px] overflow-hidden">
                  <img src="/images/about-port.png" alt="Tour 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer shadow-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Clock size={14} className="text-[#0A3D62]" /> 2 Ngày 1 Đêm
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3 leading-tight hover:text-[#1E8449] transition-colors cursor-pointer" style={{ fontFamily: "Playfair Display, serif" }}>
                    Câu Cá Mực Đêm Trên Biển
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-[#F39C12]">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">4.7</span>
                    <span className="text-sm text-gray-500">(89 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                    <MapPin size={14} className="text-gray-400" /> Cà Mau city
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 my-auto mb-4" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Fish size={18} />
                      <Ship size={18} />
                      <Utensils size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Từ</div>
                      <div className="text-[#0A3D62]">
                        <span className="text-xl font-black">1,500,000đ</span>
                        <span className="text-xs text-gray-500">/người</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to="/tour/4" className="flex-1 py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm text-center hover:bg-[#F8FBFF] transition-colors">
                      Xem Chi Tiết
                    </Link>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-md">
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* TOUR CARD 5 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[240px] overflow-hidden">
                  <img src="/images/about-lighthouse.png" alt="Tour 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-gray-400 hover:text-red-500 cursor-pointer shadow-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Clock size={14} className="text-[#0A3D62]" /> 1 Ngày
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3 leading-tight hover:text-[#1E8449] transition-colors cursor-pointer" style={{ fontFamily: "Playfair Display, serif" }}>
                    Nhiếp Ảnh Thảo Nguyên Biển
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-[#F39C12]">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">5.0</span>
                    <span className="text-sm text-gray-500">(12 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                    <MapPin size={14} className="text-gray-400" /> Bến tàu Năm Căn
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 my-auto mb-4" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Camera size={18} />
                      <Ship size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Từ</div>
                      <div className="text-[#0A3D62]">
                        <span className="text-xl font-black">900,000đ</span>
                        <span className="text-xs text-gray-500">/người</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to="/tour/5" className="flex-1 py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm text-center hover:bg-[#F8FBFF] transition-colors">
                      Xem Chi Tiết
                    </Link>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-md">
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

              {/* TOUR CARD 6 */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-[240px] overflow-hidden">
                  <img src="/images/about-hero.png" alt="Tour 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-red-500 cursor-pointer shadow-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
                    <Clock size={14} className="text-[#0A3D62]" /> 3 Ngày 2 Đêm
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D62] mb-3 leading-tight hover:text-[#1E8449] transition-colors cursor-pointer" style={{ fontFamily: "Playfair Display, serif" }}>
                    Trọn Gói Hòn Khoai VIP
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-[#F39C12]">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold text-gray-800">4.9</span>
                    <span className="text-sm text-gray-500">(45 đánh giá)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
                    <MapPin size={14} className="text-gray-400" /> Đón tại Sân Bay Cà Mau
                  </div>
                  
                  <div className="w-full h-px bg-gray-100 my-auto mb-4" />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Tent size={18} />
                      <Fish size={18} />
                      <Camera size={18} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 mb-0.5">Từ</div>
                      <div className="text-[#0A3D62]">
                        <span className="text-xl font-black">3,800,000đ</span>
                        <span className="text-xs text-gray-500">/người</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Link to="/tour/6" className="flex-1 py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm text-center hover:bg-[#F8FBFF] transition-colors">
                      Xem Chi Tiết
                    </Link>
                    <button className="flex-1 py-2.5 rounded-lg bg-[#F39C12] text-white font-semibold text-sm hover:bg-amber-500 transition-colors shadow-md">
                      Đặt Ngay
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-16">
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium transition-colors bg-white">
                &larr; Trước
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0A3D62] text-white font-bold shadow-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium transition-colors bg-white">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium transition-colors bg-white">
                3
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:border-[#0A3D62] hover:text-[#0A3D62] font-medium transition-colors bg-white">
                Sau &rarr;
              </button>
            </div>

          </div>
        </div>
      </section>

      <HpFooter />
    </div>
  );
}
