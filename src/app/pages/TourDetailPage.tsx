import { useState } from "react";
import { ChevronRight, Star, Clock, Users, MapPin, CalendarDays, CheckCircle2, XCircle, ChevronDown, ChevronUp, Plus, Minus, Lock, MessageCircle, PhoneCall, Share, Heart, Check } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";
import { Link } from "react-router";

export default function TourDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const PRICE_PER_ADULT = 1200000;
  const totalPrice = adults * PRICE_PER_ADULT;

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- HERO IMAGE GALLERY --- */}
      <section className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pt-[100px] pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[65%_35%] gap-4 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          {/* Main Large Image */}
          <div className="relative h-full">
            <img src="/images/about-lighthouse.png" alt="Tour Hòn Khoai" className="w-full h-full object-cover" />
          </div>
          
          {/* 4 Thumbnail Images Grid */}
          <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-4 h-full relative">
            <img src="/images/about-hero.png" alt="Thumb 1" className="w-full h-full object-cover" />
            <img src="/images/about-port.png" alt="Thumb 2" className="w-full h-full object-cover" />
            <img src="/images/about-hero.png" alt="Thumb 3" className="w-full h-full object-cover" />
            <div className="relative w-full h-full">
              <img src="/images/about-port.png" alt="Thumb 4" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                <span className="text-white font-medium">Xem Tất Cả 24 Ảnh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT & SIDEBAR --- */}
      <section className="w-full max-w-[1440px] mx-auto px-8 md:px-16 pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT CONTENT AREA (65%) */}
          <div className="flex-1 lg:w-[65%]">
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 gap-2 mb-6">
              <Link to="/" className="hover:text-[#0A3D62] transition-colors">Trang Chủ</Link>
              <ChevronRight size={14} />
              <Link to="/tours" className="hover:text-[#0A3D62] transition-colors">Tour</Link>
              <ChevronRight size={14} />
              <span className="text-gray-900 font-medium">Hòn Khoai 2N1Đ</span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Hành Trình Khám Phá Rừng Nguyên Sinh Hòn Khoai
            </h1>

            {/* Rating & Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5 bg-[#F8FBFF] px-3 py-1.5 rounded-lg border border-[#EAF4FB]">
                <div className="flex text-[#F39C12]">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="font-bold text-gray-800">4.9</span>
                <span className="text-gray-500 underline text-sm cursor-pointer">(156 đánh giá)</span>
              </div>
              <div className="flex gap-2">
                <span className="bg-[#1E8449]/10 text-[#1E8449] text-xs font-bold px-2.5 py-1 rounded-md">Được Yêu Thích</span>
                <span className="bg-[#F39C12]/10 text-[#F39C12] text-xs font-bold px-2.5 py-1 rounded-md">Bán Chạy</span>
              </div>
            </div>

            {/* Info Chips */}
            <div className="flex flex-wrap gap-3 mb-10 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 text-gray-700 text-sm font-medium">
                <Clock size={16} className="text-[#0A3D62]" /> 2 Ngày 1 Đêm
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 text-gray-700 text-sm font-medium">
                <Users size={16} className="text-[#0A3D62]" /> Tối đa 20 người
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 text-gray-700 text-sm font-medium">
                <MapPin size={16} className="text-[#0A3D62]" /> Cà Mau
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 text-gray-700 text-sm font-medium">
                <CalendarDays size={16} className="text-[#0A3D62]" /> Khởi Hành Hàng Ngày
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
              {['overview', 'itinerary', 'included', 'reviews'].map((tab) => {
                const labels: Record<string, string> = {
                  overview: 'Tổng Quan',
                  itinerary: 'Lịch Trình',
                  included: 'Bao Gồm',
                  reviews: 'Đánh Giá'
                };
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-base font-semibold transition-colors relative whitespace-nowrap ${
                      isActive ? 'text-[#0A3D62]' : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {labels[tab]}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F39C12] rounded-t-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Trải nghiệm thiên nhiên hoang sơ</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>
                      Chào mừng bạn đến với tour du lịch sinh thái 2 ngày 1 đêm khám phá đảo Hòn Khoai – viên ngọc thô quyến rũ của cực Nam Tổ quốc. Chuyến đi không chỉ đưa bạn rời xa sự ồn ào của phố thị mà còn mang lại cơ hội hòa mình trọn vẹn vào hệ sinh thái đa dạng, ngắm nhìn ngọn hải đăng trăm tuổi và trải nghiệm những hoạt động độc đáo trên biển.
                    </p>
                    <p>
                      Hòn Khoai là một quần đảo với những cánh rừng nguyên sinh xanh thẳm, bờ biển cát trắng và những rạn san hô rực rỡ. Tại đây, bạn sẽ được tận hưởng không khí trong lành, thưởng thức hải sản tươi ngon và cắm trại dưới bầu trời đầy sao.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">Điểm nhấn hành trình</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Check-in ngọn hải đăng Hòn Khoai hơn 100 tuổi",
                      "Trekking xuyên rừng nguyên sinh",
                      "Thưởng thức tiệc BBQ hải sản tươi sống",
                      "Lặn biển ngắm san hô bãi cạn",
                      "Trải nghiệm câu cá, câu mực đêm cùng ngư dân",
                      "Ngắm bình minh tuyệt đẹp trên biển Đông"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 size={20} className="text-[#1E8449] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ITINERARY TAB */}
              {activeTab === 'itinerary' && (
                <div className="animate-in fade-in duration-500 space-y-4">
                  {/* Day 1 */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setExpandedDay(expandedDay === 1 ? null : 1)}
                      className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-bold text-gray-900 flex items-center gap-3 text-lg">
                        <span className="bg-[#0A3D62] text-white text-sm px-3 py-1 rounded-md">NGÀY 1</span>
                        Di Chuyển & Khám Phá Đảo
                      </h4>
                      {expandedDay === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedDay === 1 && (
                      <div className="p-6 bg-white border-t border-gray-100">
                        <div className="relative border-l-2 border-[#EAF4FB] pl-6 ml-3 space-y-8">
                          
                          <div className="relative">
                            <div className="absolute -left-[31px] w-4 h-4 bg-[#F39C12] rounded-full border-4 border-white shadow-sm" />
                            <div className="font-bold text-[#0A3D62] mb-1">6:00 — Đón khách tại Cà Mau</div>
                            <p className="text-gray-600 text-sm">Xe đón quý khách tại trung tâm TP. Cà Mau, di chuyển đến bến tàu Năm Căn.</p>
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-[31px] w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-sm" />
                            <div className="font-bold text-[#0A3D62] mb-1">8:30 — Lên tàu cao tốc ra đảo</div>
                            <p className="text-gray-600 text-sm">Tàu cao tốc đưa quý khách vượt biển. Tận hưởng cảm giác mạnh trên sóng biển.</p>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[31px] w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-sm" />
                            <div className="font-bold text-[#0A3D62] mb-1">12:00 — Dùng cơm trưa</div>
                            <p className="text-gray-600 text-sm">Đến đảo, nhận lều trại/phòng nghỉ. Dùng bữa trưa với đặc sản địa phương.</p>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[31px] w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-sm" />
                            <div className="font-bold text-[#0A3D62] mb-1">14:00 — Trekking Hải Đăng</div>
                            <p className="text-gray-600 text-sm">Bắt đầu hành trình leo núi, xuyên rừng nguyên sinh lên ngọn hải đăng Pháp.</p>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[31px] w-4 h-4 bg-[#1E8449] rounded-full border-4 border-white shadow-sm" />
                            <div className="font-bold text-[#0A3D62] mb-1">18:00 — Tiệc BBQ trên bãi biển</div>
                            <p className="text-gray-600 text-sm">Thưởng thức hải sản nướng, ngắm hoàng hôn đỏ rực buông xuống mặt biển.</p>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>

                  {/* Day 2 */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setExpandedDay(expandedDay === 2 ? null : 2)}
                      className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-bold text-gray-900 flex items-center gap-3 text-lg">
                        <span className="bg-[#0A3D62] text-white text-sm px-3 py-1 rounded-md">NGÀY 2</span>
                        Lặn Biển & Trở Về
                      </h4>
                      {expandedDay === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedDay === 2 && (
                      <div className="p-6 bg-white border-t border-gray-100">
                        <p className="text-gray-600">Đón bình minh sớm, ăn sáng, lặn ngắm san hô và lên tàu trở về đất liền vào buổi chiều. (Chi tiết lịch trình đang cập nhật...)</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* INCLUDED TAB */}
              {activeTab === 'included' && (
                <div className="animate-in fade-in duration-500 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Included */}
                  <div className="bg-[#F8FBFF] p-6 rounded-xl border border-[#EAF4FB]">
                    <h4 className="font-bold text-[#0A3D62] mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-[#1E8449]" size={20} /> Giá tour bao gồm
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><Check size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Xe đưa đón máy lạnh đời mới</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><Check size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Tàu cao tốc 2 chiều đất liền - đảo</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><Check size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Lều trại chuẩn/Phòng nghỉ tập thể</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><Check size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> 3 bữa chính (bao gồm 1 bữa BBQ hải sản) + 1 bữa phụ</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><Check size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Hướng dẫn viên địa phương nhiệt tình</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><Check size={16} className="text-[#1E8449] shrink-0 mt-0.5" /> Vé tham quan, bảo hiểm du lịch</li>
                    </ul>
                  </div>

                  {/* Excluded */}
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <XCircle className="text-red-500" size={20} /> Không bao gồm
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5" /> Vé máy bay/xe khách đến TP. Cà Mau</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5" /> Các chi phí cá nhân (điện thoại, giặt ủi...)</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5" /> Đồ uống trong các bữa ăn (bia, nước ngọt)</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5" /> Tiền tip cho HDV và tài xế (không bắt buộc)</li>
                      <li className="flex items-start gap-2 text-gray-700 text-sm"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5" /> Thuế VAT 10% (nếu yêu cầu xuất hóa đơn)</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === 'reviews' && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
                    <div className="flex flex-col items-center justify-center p-6 bg-[#F8FBFF] border border-[#EAF4FB] rounded-xl min-w-[200px]">
                      <div className="text-5xl font-black text-[#0A3D62] mb-2">4.9</div>
                      <div className="flex text-[#F39C12] mb-2">
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                      </div>
                      <div className="text-gray-500 text-sm">Dựa trên 156 đánh giá</div>
                    </div>

                    <div className="flex-1 w-full space-y-2">
                      {[
                        { stars: 5, pct: 90 },
                        { stars: 4, pct: 8 },
                        { stars: 3, pct: 2 },
                        { stars: 2, pct: 0 },
                        { stars: 1, pct: 0 },
                      ].map((item) => (
                        <div key={item.stars} className="flex items-center gap-3 text-sm">
                          <span className="w-4 font-medium text-gray-600">{item.stars}</span>
                          <Star size={12} className="text-gray-400" />
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#F39C12] rounded-full" style={{ width: `${item.pct}%` }} />
                          </div>
                          <span className="w-8 text-right text-gray-500">{item.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Review Cards */}
                  <div className="space-y-6">
                    {/* Review 1 */}
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/images/avatar1.png" alt="User" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <div className="font-bold text-gray-900">Nguyễn Văn Hoàng</div>
                          <div className="text-xs text-gray-500">Đã tham gia tour tháng 5/2026</div>
                        </div>
                      </div>
                      <div className="flex text-[#F39C12] mb-3">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Chuyến đi thật tuyệt vời! Hướng dẫn viên rất nhiệt tình và am hiểu địa phương. Hải sản tươi ngon không thể chê. Ngọn hải đăng cổ kính và rừng nguyên sinh mang lại cảm giác bình yên hiếm có.
                      </p>
                    </div>

                    {/* Review 2 */}
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/images/avatar2.png" alt="User" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <div className="font-bold text-gray-900">Trần Phương Mai</div>
                          <div className="text-xs text-gray-500">Đã tham gia tour tháng 4/2026</div>
                        </div>
                      </div>
                      <div className="flex text-[#F39C12] mb-3">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Phòng nghỉ sạch sẽ, đồ ăn phong phú. Nhất định sẽ quay lại! Hoạt động câu mực đêm là điểm nhấn của cả chuyến đi đối với gia đình mình.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT SIDEBAR - BOOKING (35%) */}
          <aside className="w-full lg:w-[35%] shrink-0">
            <div className="sticky top-[100px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8">
              
              <div className="mb-6">
                <span className="text-sm text-gray-500 font-medium">Giá chỉ từ</span>
                <div className="flex items-end gap-2 text-[#0A3D62]">
                  <span className="text-3xl font-black">1,200,000đ</span>
                  <span className="text-base text-gray-500 mb-1">/người</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4 mb-6">
                
                {/* Date Picker (mock) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Ngày Khởi Hành</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0A3D62] text-gray-700 bg-white"
                      defaultValue="2026-06-15"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Adults */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Số Người Lớn</label>
                    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                      <button 
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{adults}</span>
                      <button 
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Số Trẻ Em</label>
                    <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                      <button 
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold">{children}</span>
                      <button 
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Price Breakdown */}
              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>{adults} người lớn × {PRICE_PER_ADULT.toLocaleString()}đ</span>
                  <span>{totalPrice.toLocaleString()}đ</span>
                </div>
                {children > 0 && (
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{children} trẻ em × {(PRICE_PER_ADULT * 0.7).toLocaleString()}đ</span>
                    <span>{(children * PRICE_PER_ADULT * 0.7).toLocaleString()}đ</span>
                  </div>
                )}
                <div className="w-full h-px bg-gray-200 my-3" />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Tổng cộng</span>
                  <span className="text-xl font-black text-[#0A3D62]">
                    {(totalPrice + (children * PRICE_PER_ADULT * 0.7)).toLocaleString()}đ
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full py-4 rounded-xl bg-[#F39C12] text-white font-bold text-lg hover:bg-amber-500 transition-colors shadow-[0_4px_14px_rgba(243,156,18,0.4)]">
                  ĐẶT TOUR NGAY
                </button>
                <button className="w-full py-3.5 rounded-xl border-2 border-[#0A3D62] text-[#0A3D62] font-bold text-base hover:bg-[#F8FBFF] transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> Chat Tư Vấn
                </button>
              </div>

              {/* Small print */}
              <div className="flex justify-center gap-4 text-xs text-gray-500 mb-8 font-medium">
                <span className="flex items-center gap-1"><Lock size={14} /> Thanh toán bảo mật</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} /> Hủy miễn phí 24h</span>
              </div>

              {/* Contact Box */}
              <div className="bg-[#EAF4FB] p-4 rounded-xl text-center mb-6">
                <div className="flex items-center justify-center gap-2 text-[#0A3D62] font-black text-lg mb-1">
                  <PhoneCall size={18} /> Hotline: 1900 1234
                </div>
                <div className="text-xs text-gray-500">Hỗ trợ 7:00 — 21:00 hàng ngày</div>
              </div>

              {/* Share & Like */}
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0A3D62] font-medium transition-colors">
                  <Share size={16} /> Chia Sẻ
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 font-medium transition-colors">
                  <Heart size={16} /> Yêu Thích
                </button>
              </div>

            </div>
          </aside>

        </div>
      </section>

      <HpFooter />
    </div>
  );
}
