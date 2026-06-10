import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
      fetchBookings(user.email);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const fetchBookings = async (email: string) => {
    try {
      const response = await fetch(`/api/bookings/track/${email}`);
      const data = await response.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; icon: any; text: string }> = {
      pending: { color: "#F39C12", icon: Clock, text: "Chờ xác nhận" },
      confirmed: { color: "#1E8449", icon: CheckCircle, text: "Đã xác nhận" },
      cancelled: { color: "#e74c3c", icon: XCircle, text: "Đã hủy" },
      completed: { color: "#0A3D62", icon: CheckCircle, text: "Hoàn thành" },
    };
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${config.color}15`, color: config.color }}>
        <Icon size={12} /> {config.text}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN");
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <HpNavbar />
        <div className="flex items-center justify-center h-96">Đang tải...</div>
        <HpFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HpNavbar />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-[#0A3D62] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
          Đặt Tour Của Tôi
        </h1>
        <p className="text-gray-500 mb-8">Quản lý các tour đã đặt của bạn</p>

        {bookings.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">Bạn chưa có đặt tour nào</p>
            <Link to="/tours" className="inline-block px-6 py-3 bg-[#F39C12] text-white rounded-xl font-semibold hover:bg-amber-500 transition-colors">
              Đặt Tour Ngay
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{booking.tour_title || "Tour"}</h3>
                      {getStatusBadge(booking.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-[#0A3D62]" />
                        Ngày khởi hành: {formatDate(booking.start_date)}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={16} className="text-[#0A3D62]" />
                        Số người: {booking.number_of_people}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-[#0A3D62]" />
                        Điểm đến: Hòn Khoai, Cà Mau
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#0A3D62]">
                        Tổng tiền: {formatPrice(booking.total_price)}
                      </div>
                    </div>
                    
                    {booking.special_requests && (
                      <p className="mt-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                        <span className="font-medium">Yêu cầu đặc biệt:</span> {booking.special_requests}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {booking.status === "pending" && (
                      <button className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors">
                        Hủy Đặt Tour
                      </button>
                    )}
                    <Link to={`/tour/${booking.tour_slug}`} className="px-4 py-2 text-sm bg-[#0A3D62] text-white rounded-lg hover:bg-[#082a45] transition-colors">
                      Xem Chi Tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <HpFooter />
    </div>
  );
}