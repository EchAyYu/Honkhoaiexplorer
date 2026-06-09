import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Clock, Star } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}` };
  };

  useEffect(() => {
    fetchTestimonials();
  }, [selectedStatus]);

  const fetchTestimonials = async () => {
    try {
      const url = selectedStatus === 'all' 
        ? '/api/testimonials/all' 
        : `/api/testimonials/all?status=${selectedStatus}`;
      const res = await fetch(url, { headers: getAuthHeaders() });
      const data = await res.json();
      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string, isFeatured?: boolean) => {
    try {
      const body: any = { status };
      if (isFeatured !== undefined) body.is_featured = isFeatured;
      
      await fetch(`/api/testimonials/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(body)
      });
      fetchTestimonials();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa đánh giá này?')) return;
    try {
      await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  const statuses = [
    { value: 'all', label: 'Tất cả' },
    { value: 'pending', label: 'Chờ duyệt' },
    { value: 'approved', label: 'Đã duyệt' },
    { value: 'rejected', label: 'Từ chối' },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Đánh giá</h1>
      </div>

      {/* Status filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s.value}
            onClick={() => setSelectedStatus(s.value)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedStatus === s.value 
                ? 'bg-[#0A3D62] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item: any) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#EAF4FB] flex items-center justify-center">
                  <span className="text-[#0A3D62] font-bold">
                    {item.customer_name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{item.customer_name}</div>
                  <div className="text-sm text-gray-500">{item.customer_email || 'Không có email'}</div>
                </div>
              </div>
              <div className="flex text-[#F39C12]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < item.rating ? '#F39C12' : 'none'} color={i < item.rating ? '#F39C12' : '#ddd'} />
                ))}
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.content}</p>
            
            <div className="flex items-center justify-between pt-3 border-t">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === 'approved' ? 'bg-green-100 text-green-700' :
                item.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {item.status === 'approved' ? 'Đã duyệt' :
                 item.status === 'pending' ? 'Chờ duyệt' : 'Từ chối'}
              </span>
              
              <div className="flex gap-2">
                {item.status === 'pending' && (
                  <>
                    <button
                      onClick={() => updateStatus(item.id, 'approved')}
                      className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      <CheckCircle size={16} />
                    </button>
                    <button
                      onClick={() => updateStatus(item.id, 'rejected')}
                      className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      <XCircle size={16} />
                    </button>
                  </>
                )}
                <button
                  onClick={() => updateStatus(item.id, item.status, !item.is_featured)}
                  className={`p-1 rounded ${item.is_featured ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  title={item.is_featured ? 'Bỏ nổi bật' : 'Đánh dấu nổi bật'}
                >
                  ⭐
                </button>
                <button
                  onClick={() => deleteTestimonial(item.id)}
                  className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <XCircle size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {testimonials.length === 0 && (
        <div className="text-center py-10 text-gray-500 bg-white rounded-xl">Không có dữ liệu</div>
      )}
    </div>
  );
}