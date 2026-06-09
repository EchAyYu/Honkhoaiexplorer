import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/bookings', {
        headers: getAuthHeaders()
      });
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
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });
      fetchBookings();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const columns = [
    { key: 'customer_name', label: 'Khách hàng' },
    { key: 'customer_email', label: 'Email' },
    { key: 'tour_title', label: 'Tour' },
    { key: 'number_of_people', label: 'Số người' },
    { key: 'total_price', label: 'Tổng tiền', render: (v: any) => `${v?.toLocaleString()}đ` },
    { key: 'status', label: 'Trạng thái', render: (v: any) => <StatusBadge status={v} /> },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Quản lý Đặt Tour</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <DataTable columns={columns} data={bookings} loading={loading} />
      </div>
    </div>
  );
}