import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}` };
  };

  useEffect(() => {
    fetchBookings();
  }, [selectedStatus]);

  const fetchBookings = async () => {
    try {
      const url = selectedStatus === 'all' 
        ? '/api/bookings' 
        : `/api/bookings?status=${selectedStatus}`;
      const res = await fetch(url, { headers: getAuthHeaders() });
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/bookings/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify({ status })
      });
      fetchBookings();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const statuses = [
    { value: 'all', label: 'Tất cả', icon: RefreshCw, color: 'gray' },
    { value: 'pending', label: 'Chờ xử lý', icon: Clock, color: 'yellow' },
    { value: 'confirmed', label: 'Đã xác nhận', icon: CheckCircle, color: 'green' },
    { value: 'completed', label: 'Hoàn thành', icon: CheckCircle, color: 'blue' },
    { value: 'cancelled', label: 'Đã hủy', icon: XCircle, color: 'red' },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Đặt Tour</h1>
      </div>

      {/* Status filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s.value}
            onClick={() => setSelectedStatus(s.value)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              selectedStatus === s.value 
                ? `bg-${s.color === 'yellow' ? 'yellow' : s.color === 'green' ? 'green' : s.color === 'blue' ? 'blue' : s.color === 'red' ? 'red' : 'gray'}-500 text-white`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <s.icon size={16} /> {s.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Khách hàng</th>
              <th className="text-left p-4">Tour</th>
              <th className="text-left p-4">Số người</th>
              <th className="text-left p-4">Tổng tiền</th>
              <th className="text-left p-4">Trạng thái</th>
              <th className="text-left p-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking: any) => (
              <tr key={booking.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div>
                    <div className="font-medium">{booking.customer_name}</div>
                    <div className="text-sm text-gray-500">{booking.customer_email}</div>
                    <div className="text-sm text-gray-400">{booking.customer_phone}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="font-medium">{booking.tour_title || 'Tour'}</div>
                  <div className="text-sm text-gray-500">Ngày: {new Date(booking.start_date).toLocaleDateString('vi-VN')}</div>
                </td>
                <td className="p-4">{booking.number_of_people} người</td>
                <td className="p-4 font-semibold text-[#0A3D62]">{booking.total_price?.toLocaleString()}đ</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    booking.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {booking.status === 'pending' ? 'Chờ xử lý' :
                     booking.status === 'confirmed' ? 'Đã xác nhận' :
                     booking.status === 'completed' ? 'Hoàn thành' : 'Đã hủy'}
                  </span>
                </td>
                <td className="p-4">
                  <select
                    value={booking.status}
                    onChange={(e) => updateStatus(booking.id, e.target.value)}
                    className="px-2 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#0A3D62]"
                  >
                    <option value="pending">Chờ xử lý</option>
                    <option value="confirmed">Xác nhận</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="cancelled">Hủy</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {bookings.length === 0 && <div className="text-center py-10 text-gray-500">Không có dữ liệu</div>}
      </div>
    </div>
  );
}