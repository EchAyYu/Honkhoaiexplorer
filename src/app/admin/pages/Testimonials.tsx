import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials/all', {
        headers: getAuthHeaders()
      });
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });
      fetchTestimonials();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const columns = [
    { key: 'customer_name', label: 'Khách hàng' },
    { key: 'rating', label: 'Đánh giá', render: (v: any) => '⭐'.repeat(v) },
    { key: 'content', label: 'Nội dung', render: (v: any) => v?.substring(0, 60) + '...' },
    { key: 'status', label: 'Trạng thái', render: (v: any) => <StatusBadge status={v} /> },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Quản lý Đánh giá</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <DataTable columns={columns} data={testimonials} loading={loading} />
      </div>
    </div>
  );
}