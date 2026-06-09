import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye, X } from 'lucide-react';

export default function Tours() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTour, setEditingTour] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration_days: '',
    location: '',
    featured_image: '',
    status: 'draft'
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingTour 
        ? `/api/tours/${editingTour.id}`
        : '/api/tours';
      const method = editingTour ? 'PUT' : 'POST';
      
      await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          duration_days: parseInt(formData.duration_days)
        })
      });
      
      setShowModal(false);
      setEditingTour(null);
      setFormData({
        title: '', description: '', price: '', duration_days: '', location: '', featured_image: '', status: 'draft'
      });
      fetchTours();
    } catch (error) {
      console.error('Error saving tour:', error);
    }
  };

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

  const handleEdit = (tour: any) => {
    setEditingTour(tour);
    setFormData({
      title: tour.title,
      description: tour.description || '',
      price: tour.price,
      duration_days: tour.duration_days,
      location: tour.location || '',
      featured_image: tour.featured_image || '',
      status: tour.status
    });
    setShowModal(true);
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Tours</h1>
        <button 
          onClick={() => { setEditingTour(null); setShowModal(true); }}
          className="bg-[#0A3D62] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#082a45]"
        >
          <Plus size={20} /> Thêm Tour
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{editingTour ? 'Sửa Tour' : 'Thêm Tour mới'}</h2>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Tên Tour *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Giá (VNĐ) *</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Số ngày *</label>
                  <input
                    type="number"
                    required
                    value={formData.duration_days}
                    onChange={(e) => setFormData({ ...formData, duration_days: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Địa điểm</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Mô tả</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">URL ảnh đại diện</label>
                <input
                  type="text"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Trạng thái</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                >
                  <option value="draft">Nháp</option>
                  <option value="published">Xuất bản</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  Hủy
                </button>
                <button type="submit" className="px-4 py-2 bg-[#0A3D62] text-white rounded-lg hover:bg-[#082a45]">
                  {editingTour ? 'Cập nhật' : 'Thêm mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
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
                    <button onClick={() => handleEdit(tour)} className="p-1 text-yellow-500 hover:bg-yellow-50 rounded">
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
        {tours.length === 0 && <div className="text-center py-10 text-gray-500">Chưa có tour nào</div>}
      </div>
    </div>
  );
}