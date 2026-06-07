import { Link } from "react-router";
import { ChevronRight, Calendar, Clock, Eye, Share2, Facebook, Twitter, Link as LinkIcon, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function ArticleDetailPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />

      {/* --- ARTICLE HERO --- */}
      <section className="relative w-full h-[500px] mt-[80px] overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-[#0A3D62]" />
        <img src="/images/about-lighthouse.png" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" alt="Article Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] via-[#1A1A2E]/60 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] px-8 md:px-16 mx-auto pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-white/80 gap-2 mb-8">
            <Link to="/" className="hover:text-amber-400 transition-colors">Trang Chủ</Link>
            <ChevronRight size={14} />
            <Link to="/news" className="hover:text-amber-400 transition-colors">Tin Tức</Link>
            <ChevronRight size={14} />
            <span className="font-medium text-white">Cẩm Nang Du Lịch</span>
          </div>

          <div className="mb-6">
            <span className="inline-block bg-[#1E8449] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
              CẨM NANG DU LỊCH
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white mb-8 leading-tight max-w-[800px] drop-shadow-md" style={{ fontFamily: "Playfair Display, serif" }}>
            Kinh Nghiệm Khám Phá Hòn Khoai Từ A Đến Z Cho Người Lần Đầu Đặt Chân
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-3">
              <img src="/images/avatar1.png" className="w-10 h-10 rounded-full object-cover border-2 border-white/20" alt="Author" />
              <div>
                <div className="font-bold text-white">Nguyễn Minh Tuấn</div>
                <div className="text-[12px] text-white/70">Hướng dẫn viên du lịch</div>
              </div>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Calendar size={16} /> 15 Tháng 11, 2025</span>
            <span className="flex items-center gap-2"><Clock size={16} /> 8 phút đọc</span>
            <span className="flex items-center gap-2"><Eye size={16} /> 2,450 lượt xem</span>
          </div>
        </div>
      </section>

      {/* --- ARTICLE BODY --- */}
      <section className="w-full bg-white py-[80px] px-6">
        <article className="max-w-[780px] mx-auto text-[#333] leading-[1.8] text-[17px]">
          
          <p className="text-[20px] text-[#1A1A2E] leading-relaxed mb-8">
            Đảo Hòn Khoai không chỉ nổi tiếng với ngọn hải đăng cổ kính do người Pháp xây dựng mà còn mang trong mình vẻ đẹp nguyên sơ kỳ vĩ. Nằm cách đất liền mũi Cà Mau khoảng 14.6km, cụm đảo này vẫn giữ được thảm thực vật phong phú và đường bờ biển tuyệt đẹp chưa bị thương mại hóa. Nếu bạn đang lên kế hoạch cho chuyến đi đầu tiên, đây là toàn bộ bí kíp để có một trải nghiệm trọn vẹn nhất.
          </p>

          <h2 className="text-[28px] font-bold text-[#0A3D62] mt-12 mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            1. Lựa chọn thời điểm lý tưởng nhất
          </h2>
          <p className="mb-6">
            Bởi Hòn Khoai là một hòn đảo nằm ngoài khơi, yếu tố thời tiết quyết định đến 90% sự thành công của chuyến đi. Biển Nam Bộ chịu ảnh hưởng sâu sắc của gió mùa.
          </p>

          {/* Info Box */}
          <div className="bg-[#EAF4FB] rounded-xl p-6 mb-8 flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-[#0A3D62] text-white flex items-center justify-center shrink-0 mt-1">
              <Lightbulb size={16} />
            </div>
            <div>
              <h4 className="font-bold text-[#0A3D62] mb-1">Mẹo nhỏ:</h4>
              <p className="text-sm text-[#0A3D62]/80 leading-relaxed m-0">Thời điểm tuyệt vời nhất để du lịch Hòn Khoai là từ tháng 11 đến tháng 4 năm sau. Lúc này là mùa khô, biển êm, sóng lặng và nước cực kỳ trong xanh, thuận lợi cho việc ngồi tàu cao tốc và lặn ngắm san hô.</p>
            </div>
          </div>

          <h2 className="text-[28px] font-bold text-[#0A3D62] mt-12 mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            2. Di chuyển ra đảo như thế nào?
          </h2>
          <p className="mb-6">
            Từ trung tâm thành phố Cà Mau, bạn cần di chuyển khoảng 50km xuống bến tàu Năm Căn bằng ô tô hoặc xe máy. Tại đây, bạn sẽ tiếp tục hành trình bằng tàu cao tốc ra đảo. Dưới đây là bảng thông tin tuyến tàu cơ bản:
          </p>

          {/* Table */}
          <div className="overflow-x-auto mb-8 border border-gray-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#EAF4FB] text-[#0A3D62] font-semibold text-xs uppercase">
                <tr>
                  <th className="px-4 py-3">Loại phương tiện</th>
                  <th className="px-4 py-3">Thời gian đi</th>
                  <th className="px-4 py-3">Giá vé tham khảo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Tàu cao tốc (Express)</td>
                  <td className="px-4 py-3 text-gray-600">2.5 tiếng</td>
                  <td className="px-4 py-3 text-gray-600">250.000đ/lượt</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Đò dọc / Tàu gỗ</td>
                  <td className="px-4 py-3 text-gray-600">4-5 tiếng</td>
                  <td className="px-4 py-3 text-gray-600">100.000đ/lượt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-[20px] font-semibold text-[#0A3D62] mb-4">Các thủ tục cần thiết</h3>
          <p className="mb-6">
            Do Hòn Khoai là khu vực quản lý của đồn biên phòng, mọi du khách đều phải đăng ký thủ tục lên đảo.
          </p>

          {/* Warning Box */}
          <div className="bg-[#FEF3C7] border border-[#F39C12] rounded-xl p-6 mb-8 flex gap-4 items-start shadow-sm">
            <AlertTriangle className="text-[#F39C12] shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-[#b45309] mb-1">Cảnh báo quan trọng:</h4>
              <p className="text-sm text-[#92400e] leading-relaxed m-0">Bạn bắt buộc phải mang theo Căn Cước Công Dân (CCCD) bản gốc. Cán bộ biên phòng sẽ không chấp nhận bản sao photo hay hình chụp trên điện thoại. Nếu thiếu, bạn sẽ bị buộc phải quay về bờ.</p>
            </div>
          </div>

          <h2 className="text-[28px] font-bold text-[#0A3D62] mt-12 mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            3. Những trải nghiệm không thể bỏ lỡ
          </h2>

          <div className="mb-8">
            <img src="/images/about-port.png" className="w-full h-auto rounded-xl shadow-md mb-3 object-cover" alt="Hòn Khoai Island" />
            <p className="text-center text-sm text-gray-500 italic">Khung cảnh nhìn từ trên cao xuống bãi biển hoang sơ của Hòn Khoai.</p>
          </div>

          <p className="mb-4">Hòn Khoai sở hữu hệ sinh thái rừng và biển đan xen, vì vậy đừng quên trải nghiệm:</p>
          <ul className="space-y-3 mb-8 pl-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#F39C12] shrink-0 mt-1.5" size={18} />
              <span><strong>Trekking ngọn Hải Đăng cổ:</strong> Con đường dốc ngoằn ngoèo xuyên qua rừng nguyên sinh sẽ đưa bạn đến ngọn hải đăng do Pháp xây dựng năm 1889.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#F39C12] shrink-0 mt-1.5" size={18} />
              <span><strong>Ngắm bình minh ở Bãi Lớn:</strong> Nơi có những tảng đá khổng lồ xếp chồng lên nhau tạo thành hình thù kỳ dị.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-[#F39C12] shrink-0 mt-1.5" size={18} />
              <span><strong>Thưởng thức ẩm thực địa phương:</strong> Thưởng thức các loại ốc biển, cá mú nướng và đặc biệt là cua đá Hòn Khoai siêu chắc thịt.</span>
            </li>
          </ul>

          {/* Highlight / Quote box */}
          <blockquote className="bg-[#FEF9EF] border-l-4 border-[#F39C12] p-6 mb-8 text-[18px] text-[#555] italic leading-relaxed">
            "Chưa đặt chân lên đỉnh ngọn hải đăng Hòn Khoai để phóng tầm mắt ra đại dương mênh mông, thì xem như bạn chưa từng đến Cực Nam của Tổ Quốc."
          </blockquote>

          <h2 className="text-[28px] font-bold text-[#0A3D62] mt-12 mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Kết luận
          </h2>
          <p className="mb-12">
            Hòn Khoai không phải là điểm đến dành cho những ai thích sự nghỉ dưỡng sang chảnh với resort 5 sao. Nơi đây là thiên đường của những tâm hồn yêu thiên nhiên hoang dã, thích khám phá và tìm kiếm sự bình yên thực sự. Hãy xách balo lên và khám phá viên ngọc xanh rực rỡ này nhé!
          </p>

          {/* Share Bar */}
          <div className="flex items-center gap-4 py-6 border-t border-b border-gray-100 mb-12">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Chia sẻ bài viết:</span>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-colors">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-colors">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <LinkIcon size={18} />
            </button>
          </div>

          {/* Author Bio Card */}
          <div className="bg-white border border-[#EAF4FB] rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start shadow-sm">
            <img src="/images/avatar1.png" alt="Nguyễn Minh Tuấn" className="w-20 h-20 rounded-full object-cover shrink-0 shadow-md" />
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-gray-900 mb-1">Nguyễn Minh Tuấn</h4>
              <div className="text-sm text-[#1E8449] font-semibold mb-3">Hướng dẫn viên du lịch & Blogger</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Sinh ra và lớn lên tại Cà Mau, Tuấn có niềm đam mê mãnh liệt với việc xê dịch và ghi lại những câu chuyện văn hóa, thiên nhiên của vùng Đất Mũi để giới thiệu đến bạn bè quốc tế.
              </p>
              <div className="flex justify-center md:justify-start gap-3">
                <a href="#" className="text-gray-400 hover:text-[#0A3D62] transition-colors"><Facebook size={16} /></a>
              </div>
            </div>
          </div>

        </article>
      </section>

      {/* --- RELATED ARTICLES --- */}
      <section className="w-full bg-[#F8FBFF] py-[80px] px-8 md:px-16 border-t border-[#EAF4FB]">
        <div className="max-w-[1248px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#0A3D62]" style={{ fontFamily: "Playfair Display, serif" }}>Bài Viết Liên Quan</h3>
            <div className="w-16 h-1 bg-[#F39C12] mx-auto mt-4 rounded-full" />
          </div>

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
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> 5p đọc</span>
                    <span className="flex items-center gap-1">10 Th11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
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
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> 6p đọc</span>
                    <span className="flex items-center gap-1">05 Th11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col h-full hidden lg:flex">
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
                  <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> 12p đọc</span>
                    <span className="flex items-center gap-1">08 Th11</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <HpFooter />
    </div>
  );
}
