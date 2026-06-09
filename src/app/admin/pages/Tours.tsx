import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function Tours() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  const fetchTours = async () => {
    try {
      const res = await fetch('/api/tours?limit=100', {
        headers: getAuthHeaders()
      });
      const data = await res.json();
      setTours(data.tours || []);
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa tour này?')) return;
    try {
      await fetch(`/api/tours/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchTours();
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Tours</h1>
        <button className="bg-[#0A3D62] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#082a45]">
          <Plus size={20} /> Thêm Tour
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Tên Tour</th>
              <th className="text-left p-4">Giá</th>
              <th className="text-left p-4">Thời gian</th>
              <th className="text-left p-4">Trạng thái</th>
              <th className="text-left p-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{tour.title}</td>
                <td className="p-4">{tour.price?.toLocaleString()}đ</td>
                <td className="p-4">{tour.duration_days} ngày</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tour.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {tour.status === 'published' ? 'Đã xuất bản' : 'Nháp'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                      <Eye size={18} />
                    </button>
                    <button className="p-1 text-yellow-500 hover:bg-yellow-50 rounded">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(tour.id)} className="p-1 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}