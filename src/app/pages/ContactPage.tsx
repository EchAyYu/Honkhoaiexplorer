import { useState } from "react";
import { Link } from "react-router";
import { Phone, MessageCircle, Mail, MapPin, ChevronRight, Calendar, Users, CheckCircle2, Facebook, Instagram, Youtube, PhoneCall, Check, Plus, Minus, Clock } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const faqs = [
    { q: "Tôi có thể hủy hoặc đổi ngày tour không?", a: "Khách hàng có thể hủy hoặc đổi ngày tour miễn phí trước 24 giờ so với giờ khởi hành. Quá thời gian trên, chúng tôi sẽ tính phí 30% giá trị tour." },
    { q: "Tôi ở ngoài Cà Mau có thể đặt tour không?", a: "Hoàn toàn được! Bạn có thể đặt tour qua website, điện thoại hoặc Zalo. Chúng tôi hỗ trợ tư vấn và nhận thanh toán online qua thẻ ngân hàng tiện lợi." },
    { q: "Thanh toán bằng những hình thức nào?", a: "Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng (Visa, MasterCard) và các ví điện tử phổ biến như Momo, ZaloPay." },
    { q: "Có chương trình ưu đãi cho đoàn đông không?", a: "Có, chúng tôi áp dụng mức chiết khấu hấp dẫn cho các nhóm từ 5 người trở lên. Hãy để lại yêu cầu báo giá để nhận được ưu đãi chi tiết." },
    { q: "Tour có phù hợp cho người cao tuổi không?", a: "Tùy thuộc vào loại tour. Các tour nghỉ dưỡng sinh thái rất phù hợp cho người cao tuổi, trong khi tour trekking Hải Đăng sẽ đòi hỏi thể lực nhiều hơn." },
    { q: "Trẻ em có giá vé riêng không?", a: "Trẻ em dưới 6 tuổi được miễn phí (chung dịch vụ với người lớn). Trẻ từ 6-11 tuổi tính 70% giá vé người lớn. Từ 12 tuổi trở lên tính giá vé người lớn." },
    { q: "Công ty có xuất hóa đơn VAT không?", a: "Chúng tôi là công ty du lịch lữ hành có tư cách pháp nhân hợp lệ, hỗ trợ xuất hóa đơn điện tử VAT 10% theo yêu cầu của khách hàng doanh nghiệp." },
    { q: "Tour có hỗ trợ tiếng Anh không?", a: "Các tour được yêu cầu trước sẽ có hướng dẫn viên thông thạo tiếng Anh hỗ trợ nhóm du khách nước ngoài với một khoản phụ phí nhỏ." }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[460px] mt-[80px] overflow-hidden flex flex-col justify-center items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] to-[#1E8449]" />
        
        {/* SVG wave pattern overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="white" strokeWidth="2" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#wave)" />
          </svg>
        </div>

        {/* Decorative dots top-right */}
        <div className="absolute top-8 right-8 w-48 h-48 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 mx-auto flex flex-col items-center text-center pb-12">
          {/* Breadcrumb */}
          <div className="absolute top-0 left-8 md:left-16 flex items-center text-sm text-white/70 gap-2 -mt-10">
            <Link to="/" className="hover:text-white transition-colors">Trang Chủ</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">Liên Hệ</span>
          </div>

          <span className="text-[#F39C12] font-bold tracking-[3px] uppercase text-sm mb-4">LIÊN HỆ VỚI CHÚNG TÔI</span>
          
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white mb-4 leading-tight drop-shadow-md max-w-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
            Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ Bạn
          </h1>
          
          <p className="text-lg text-white/80 max-w-xl mb-8 font-light">
            Đội ngũ tư vấn chuyên nghiệp — Phản hồi trong vòng 30 phút
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a href="tel:19001234" className="flex items-center gap-2 bg-white text-[#0A3D62] font-bold rounded-full px-6 py-3 shadow-lg hover:bg-gray-50 transition-colors">
              <PhoneCall size={18} /> Gọi Ngay: 1900 1234
            </a>
            <a href="#" className="flex items-center gap-2 bg-[#0068FF] text-white font-bold rounded-full px-6 py-3 shadow-lg hover:bg-[#0052cc] transition-colors">
              <MessageCircle size={18} /> Chat Zalo
            </a>
            <a href="mailto:info@honkhoai.vn" className="flex items-center gap-2 border border-white text-white font-bold rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
              <Mail size={18} /> Email Ngay
            </a>
          </div>
        </div>
      </section>

      {/* --- CONTACT INFO CARDS ROW --- */}
      <section className="relative z-20 w-full max-w-[1100px] mx-auto px-4 sm:px-8 -mt-[60px] mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 - Điện Thoại */}
          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition-transform border border-gray-50 flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] mb-4">
              <Phone size={24} />
            </div>
            <div className="text-[#1E8449] font-bold text-xs tracking-widest uppercase mb-2">HOTLINE</div>
            <h4 className="text-[#0A3D62] font-bold text-2xl mb-2">1900 1234</h4>
            <p className="text-gray-500 text-sm mb-4">Miễn phí • 7:00 — 21:00</p>
            <a href="tel:19001234" className="mt-auto px-4 py-2 border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm rounded-lg hover:bg-[#EAF4FB] transition-colors">
              Gọi Ngay
            </a>
          </div>

          {/* Card 2 - Zalo */}
          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition-transform border border-gray-50 flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] mb-4">
              <MessageCircle size={24} />
            </div>
            <div className="text-[#1E8449] font-bold text-xs tracking-widest uppercase mb-2">ZALO & CHAT</div>
            <h4 className="text-[#0A3D62] font-bold text-2xl mb-2">0900 123 456</h4>
            <p className="text-gray-500 text-sm mb-4">Phản hồi trong 5 phút</p>
            <a href="#" className="mt-auto px-4 py-2 border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm rounded-lg hover:bg-[#EAF4FB] transition-colors">
              Nhắn Tin
            </a>
          </div>

          {/* Card 3 - Email */}
          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition-transform border border-gray-50 flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] mb-4">
              <Mail size={24} />
            </div>
            <div className="text-[#1E8449] font-bold text-xs tracking-widest uppercase mb-2">EMAIL</div>
            <h4 className="text-[#0A3D62] font-bold text-[20px] lg:text-lg mb-2 truncate w-full">info@honkhoai.vn</h4>
            <p className="text-gray-500 text-sm mb-4">Phản hồi trong 2 tiếng</p>
            <a href="mailto:info@honkhoai.vn" className="mt-auto px-4 py-2 border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm rounded-lg hover:bg-[#EAF4FB] transition-colors">
              Gửi Email
            </a>
          </div>

          {/* Card 4 - Văn Phòng */}
          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition-transform border border-gray-50 flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] mb-4">
              <MapPin size={24} />
            </div>
            <div className="text-[#1E8449] font-bold text-xs tracking-widest uppercase mb-2">VĂN PHÒNG</div>
            <h4 className="text-[#0A3D62] font-bold text-lg mb-2">Số 1 Lý Văn Lâm</h4>
            <p className="text-gray-500 text-sm mb-4">Thứ 2 — CN: 7:00 — 17:00</p>
            <a href="#map" className="mt-auto px-4 py-2 border border-[#0A3D62] text-[#0A3D62] font-semibold text-sm rounded-lg hover:bg-[#EAF4FB] transition-colors">
              Xem Bản Đồ
            </a>
          </div>

        </div>
      </section>

      {/* --- MAIN SECTION --- */}
      <section className="w-full bg-white py-[100px] px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* LEFT COLUMN - CONTACT FORM (55%) */}
          <div className="flex-[0_0_55%] w-full lg:w-[55%]">
            <span className="text-[#1E8449] font-bold tracking-widest text-sm uppercase block mb-3">GỬI TIN NHẮN CHO CHÚNG TÔI</span>
            <h2 className="text-[36px] font-bold text-[#0A3D62] mb-4 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Đặt Câu Hỏi Hoặc Yêu Cầu Tư Vấn
            </h2>
            <p className="text-[#555F6B] text-base mb-10">
              Điền form bên dưới — chúng tôi sẽ liên hệ lại trong 30 phút
            </p>

            {isSubmitted ? (
              // SUCCESS STATE
              <div className="bg-[#F0FFF4] border border-[#1E8449] rounded-2xl p-10 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CheckCircle2 size={64} className="text-[#1E8449] mb-6" />
                <h3 className="text-2xl font-bold text-[#1E8449] mb-4">Gửi Thành Công!</h3>
                <p className="text-gray-600 mb-8 max-w-sm">Chúng tôi đã nhận được tin nhắn. Đội ngũ tư vấn sẽ liên hệ bạn trong vòng 30 phút.</p>
                <div className="flex gap-4">
                  <Link to="/" className="px-6 py-3 rounded-lg border-2 border-[#1E8449] text-[#1E8449] font-bold hover:bg-[#1E8449] hover:text-white transition-colors">
                    Về Trang Chủ
                  </Link>
                  <Link to="/tours" className="px-6 py-3 rounded-lg bg-[#F39C12] text-white font-bold hover:bg-amber-500 transition-colors shadow-sm">
                    Xem Tour
                  </Link>
                </div>
              </div>
            ) : (
              // FORM
              <form onSubmit={handleSubmit} className="space-y-[20px]">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A2E]">Họ và Tên *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn An" 
                      className="w-full h-[50px] px-4 rounded-[10px] border border-[#D1D9E0] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A2E]">Số Điện Thoại *</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="0900 123 456" 
                      className="w-full h-[50px] px-4 rounded-[10px] border border-[#D1D9E0] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A2E]">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      required
                      type="email" 
                      placeholder="email@example.com" 
                      className="w-full h-[50px] pl-11 pr-4 rounded-[10px] border border-[#D1D9E0] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A2E]">Chủ Đề *</label>
                    <div className="relative">
                      <select required className="w-full h-[50px] px-4 pr-10 rounded-[10px] border border-[#D1D9E0] text-gray-800 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all appearance-none bg-white">
                        <option value="" disabled selected>Chọn chủ đề...</option>
                        <option>Tư Vấn Tour</option>
                        <option>Đặt Tour</option>
                        <option>Báo Giá Nhóm</option>
                        <option>Khiếu Nại</option>
                        <option>Hợp Tác</option>
                        <option>Khác</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <ChevronRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1A2E]">Số Người Dự Kiến</label>
                    <div className="relative">
                      <select className="w-full h-[50px] px-4 pr-10 rounded-[10px] border border-[#D1D9E0] text-gray-800 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all appearance-none bg-white">
                        <option value="" disabled selected>Chọn số người...</option>
                        <option>1-2 người</option>
                        <option>3-5 người</option>
                        <option>6-10 người</option>
                        <option>10+ người</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <ChevronRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1A2E]">Ngày Dự Kiến Khởi Hành</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full h-[50px] px-4 rounded-[10px] border border-[#D1D9E0] text-gray-800 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Row 5 */}
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-[#1A1A2E]">Nội Dung Tin Nhắn *</label>
                  <textarea 
                    required
                    placeholder="Mô tả chi tiết yêu cầu của bạn để chúng tôi tư vấn chính xác nhất..." 
                    className="w-full h-[140px] p-4 rounded-[10px] border border-[#D1D9E0] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A3D62] focus:ring-4 focus:ring-[#0A3D62]/20 transition-all resize-y"
                  ></textarea>
                  <div className="absolute bottom-4 right-4 text-[12px] text-gray-400">
                    0/500
                  </div>
                </div>

                {/* Row 6 Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group mt-4 mb-6">
                  <input required type="checkbox" className="w-5 h-5 mt-0.5 rounded border-[#D1D9E0] text-[#0A3D62] focus:ring-[#0A3D62]" />
                  <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">
                    Tôi đồng ý với Chính Sách Bảo Mật và Điều Khoản Sử Dụng
                  </span>
                </label>

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="w-full h-[54px] rounded-[12px] bg-gradient-to-r from-[#0A3D62] to-[#1E8449] text-white font-bold text-[16px] hover:brightness-110 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={18} /> Gửi Tin Nhắn Ngay
                </button>

                <p className="text-center text-[13px] text-[#888] flex items-center justify-center gap-1.5 mt-4">
                  <span className="text-[14px]">🔒</span> Thông tin của bạn được bảo mật tuyệt đối
                </p>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN - INFO & MAP (45%) */}
          <div className="flex-1 w-full lg:w-auto space-y-8">
            
            {/* Block 1 - Working Hours */}
            <div className="bg-[#EAF4FB] rounded-2xl p-8">
              <h4 className="text-[#0A3D62] font-bold text-xl mb-6 flex items-center gap-2">
                <Clock size={24} /> Giờ Làm Việc
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-700 font-medium pb-4 border-b border-white/60">
                  <span>Thứ 2 — Thứ 6</span>
                  <div className="flex items-center gap-4">
                    <span>07:00 — 21:00</span>
                    <span className="flex items-center gap-1.5 text-[#1E8449] text-sm"><span className="w-2 h-2 rounded-full bg-[#1E8449] animate-pulse"></span> Đang mở cửa</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-700 font-medium pb-4 border-b border-white/60">
                  <span>Thứ 7</span>
                  <span>07:00 — 20:00</span>
                </div>
                <div className="flex justify-between items-center text-gray-700 font-medium pb-4 border-b border-white/60">
                  <span>Chủ Nhật</span>
                  <span>08:00 — 18:00</span>
                </div>
                <div className="flex justify-between items-center text-gray-700 font-medium pb-2">
                  <span>Lễ Tết</span>
                  <span>08:00 — 17:00</span>
                </div>
              </div>

              {/* Note box */}
              <div className="bg-white rounded-[8px] p-4 mt-6 text-sm text-gray-700 shadow-sm border border-blue-50 flex items-start gap-3">
                <PhoneCall size={18} className="text-[#0A3D62] shrink-0 mt-0.5" />
                <p className="leading-relaxed">Ngoài giờ làm việc: Gọi hotline <strong className="text-[#0A3D62]">1900 1234</strong> — trực 24/7 cho các trường hợp khẩn cấp</p>
              </div>
            </div>

            {/* Block 2 - Map */}
            <div id="map" className="space-y-4">
              <div className="w-full h-[280px] bg-gray-200 rounded-2xl overflow-hidden shadow-md relative border border-gray-100">
                {/* Google Maps Placeholder */}
                <div className="absolute inset-0 bg-[#EAF4FB] flex flex-col items-center justify-center text-[#0A3D62]/40">
                  <MapPin size={40} className="mb-2 text-[#F39C12]" />
                  <span className="font-semibold text-lg">Bản đồ Cà Mau</span>
                  <span className="text-sm">Marker: Hòn Khoai Explorer Office</span>
                </div>
              </div>
              <div className="px-2">
                <p className="text-gray-700 font-medium flex items-start gap-2 mb-2">
                  <MapPin size={18} className="text-[#F39C12] shrink-0 mt-0.5" />
                  Số 1 Đường Lý Văn Lâm, Phường 1, TP. Cà Mau
                </p>
                <a href="#" className="inline-flex items-center gap-1.5 text-[#0A3D62] font-bold text-sm hover:underline ml-6">
                  <MapPin size={14} /> Chỉ Đường Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Block 3 - Social Media */}
            <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-6">🌐 Kết Nối Với Chúng Tôi</h4>
              <div className="space-y-2">
                
                {/* Facebook */}
                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-[#EAF4FB] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="text-[#1877F2]"><Facebook size={24} /></div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Facebook</div>
                      <div className="text-gray-500 text-xs">@HonKhoaiExplorer</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#0A3D62] opacity-0 group-hover:opacity-100 transition-opacity">Follow &rarr;</span>
                </a>

                {/* Instagram */}
                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-[#EAF4FB] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="text-pink-600"><Instagram size={24} /></div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Instagram</div>
                      <div className="text-gray-500 text-xs">@honkhoai.explorer</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#0A3D62] opacity-0 group-hover:opacity-100 transition-opacity">Follow &rarr;</span>
                </a>

                {/* YouTube */}
                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-[#EAF4FB] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="text-[#FF0000]"><Youtube size={24} /></div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">YouTube</div>
                      <div className="text-gray-500 text-xs">Hòn Khoai Explorer</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#0A3D62] opacity-0 group-hover:opacity-100 transition-opacity">Subscribe &rarr;</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="w-full bg-[#EAF4FB] py-[80px] px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#1E8449] font-bold tracking-widest text-sm uppercase block mb-3">CÂU HỎI THƯỜNG GẶP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62]" style={{ fontFamily: "Playfair Display, serif" }}>
              Bạn Muốn Biết Gì Về Chúng Tôi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column FAQs */}
            <div className="space-y-6">
              {faqs.slice(0, 4).map((faq, idx) => {
                const globalIdx = idx;
                const isActive = expandedFaq === globalIdx;
                return (
                  <div key={idx} className={`bg-white rounded-xl shadow-sm border-l-4 transition-colors ${isActive ? 'border-[#0A3D62]' : 'border-transparent'}`}>
                    <button 
                      onClick={() => setExpandedFaq(isActive ? null : globalIdx)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <span className="font-semibold text-[#1A1A2E] text-base pr-4">{faq.q}</span>
                      <div className="w-8 h-8 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] shrink-0">
                        {isActive ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    {isActive && (
                      <div className="px-6 pb-6 pt-2 text-[15px] text-[#555F6B] leading-[1.7] border-t border-[#EAF4FB]">
                        <div className="mt-4">{faq.a}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column FAQs */}
            <div className="space-y-6">
              {faqs.slice(4, 8).map((faq, idx) => {
                const globalIdx = idx + 4;
                const isActive = expandedFaq === globalIdx;
                return (
                  <div key={idx} className={`bg-white rounded-xl shadow-sm border-l-4 transition-colors ${isActive ? 'border-[#0A3D62]' : 'border-transparent'}`}>
                    <button 
                      onClick={() => setExpandedFaq(isActive ? null : globalIdx)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                    >
                      <span className="font-semibold text-[#1A1A2E] text-base pr-4">{faq.q}</span>
                      <div className="w-8 h-8 rounded-full bg-[#EAF4FB] flex items-center justify-center text-[#0A3D62] shrink-0">
                        {isActive ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    {isActive && (
                      <div className="px-6 pb-6 pt-2 text-[15px] text-[#555F6B] leading-[1.7] border-t border-[#EAF4FB]">
                        <div className="mt-4">{faq.a}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- OFFICE LOCATIONS --- */}
      <section className="w-full bg-white py-[80px] px-8 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D62] text-center mb-12" style={{ fontFamily: "Playfair Display, serif" }}>
            Văn Phòng Của Chúng Tôi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - VĂN PHÒNG CHÍNH */}
            <div className="border border-[#EAF4FB] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all bg-white relative">
              <div className="w-full h-[160px] bg-gray-200 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[#EAF4FB]" />
                <MapPin size={32} className="text-[#0A3D62]/40 relative z-10" />
                <div className="absolute top-4 right-4 z-20 bg-[#F39C12] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                  CHÍNH
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-4">Cà Mau — Trụ Sở Chính</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-gray-600"><MapPin size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> Số 1 Lý Văn Lâm, Phường 1, TP. Cà Mau</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><PhoneCall size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> (0290) 123 4567</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Mail size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> camau@honkhoai.vn</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Calendar size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> T2-CN: 7:00 — 21:00</li>
              </ul>
              <button className="w-full py-2.5 rounded-lg border border-[#0A3D62] text-[#0A3D62] font-semibold hover:bg-[#EAF4FB] transition-colors">
                Xem Bản Đồ
              </button>
            </div>

            {/* Card 2 - ĐẠI LÝ HỒ CHÍ MINH */}
            <div className="border border-[#EAF4FB] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all bg-white relative">
              <div className="w-full h-[160px] bg-gray-200 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[#EAF4FB]" />
                <MapPin size={32} className="text-[#0A3D62]/40 relative z-10" />
                <div className="absolute top-4 right-4 z-20 bg-[#0A3D62] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                  ĐẠI LÝ
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-4">TP. Hồ Chí Minh</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-gray-600"><MapPin size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> Đường Nguyễn Huệ, Quận 1, TP.HCM</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><PhoneCall size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> (028) 123 4567</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Mail size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> hcm@honkhoai.vn</li>
                <li className="flex items-start gap-3 text-sm text-gray-600"><Calendar size={18} className="text-[#0A3D62] shrink-0 mt-0.5" /> T2-T7: 8:00 — 18:00</li>
              </ul>
            </div>

            {/* Card 3 - ĐẶT TOUR TRỰC TUYẾN */}
            <div className="border border-[#EAF4FB] rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all bg-white relative">
              <div className="w-full h-[160px] bg-[#EAF4FB] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center text-[#0A3D62]">
                <MessageCircle size={48} className="mr-2" />
                <Plus size={20} className="mb-8 font-bold" />
                <PhoneCall size={32} className="ml-2" />
                <div className="absolute top-4 right-4 z-20 bg-[#1E8449] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                  ONLINE 24/7
                </div>
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-3">Đặt Tour Trực Tuyến</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Đặt tour mọi lúc mọi nơi qua website, Zalo hoặc Facebook Messenger. Đội ngũ trực 24/7.
              </p>
              <div className="space-y-3">
                <button className="w-full py-2.5 rounded-lg bg-gray-50 text-gray-800 font-semibold text-sm hover:bg-gray-100 transition-colors flex justify-center items-center gap-2">
                  <span className="text-xl">🌐</span> Đặt Qua Website
                </button>
                <button className="w-full py-2.5 rounded-lg bg-[#0068FF] text-white font-semibold text-sm hover:bg-[#0052cc] transition-colors flex justify-center items-center gap-2">
                  <MessageCircle size={18} /> Chat Zalo
                </button>
                <button className="w-full py-2.5 rounded-lg bg-[#1877F2] text-white font-semibold text-sm hover:bg-[#166fe5] transition-colors flex justify-center items-center gap-2">
                  <Facebook size={18} /> Facebook Messenger
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA BOTTOM BANNER --- */}
      <section className="w-full py-[80px] px-8 bg-gradient-to-r from-[#0A3D62] to-[#1E8449] flex items-center justify-center text-center">
        <div className="max-w-[800px] flex flex-col items-center">
          <h2 className="text-4xl md:text-[44px] font-bold text-white mb-4 leading-tight drop-shadow-sm" style={{ fontFamily: "Playfair Display, serif" }}>
            Chưa Tìm Được Tour Phù Hợp?
          </h2>
          <p className="text-lg text-white/80 font-light mb-8 max-w-xl leading-relaxed">
            Hãy để chúng tôi thiết kế tour riêng theo yêu cầu của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/tours" className="px-8 py-3.5 rounded-full bg-white text-[#0A3D62] font-bold shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <MapPin size={18} /> Xem Tất Cả Tour
            </Link>
            <a href="tel:19001234" className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <PhoneCall size={18} /> Tư Vấn Miễn Phí
            </a>
          </div>
        </div>
      </section>

      <HpFooter />
    </div>
  );
}
