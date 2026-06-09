import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs?limit=100', {
        headers: getAuthHeaders()
      });
      const data = await res.json();
      setBlogs(data.posts || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return;
    try {
      await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const columns = [
    { key: 'title', label: 'Tiêu đề' },
    { key: 'category', label: 'Danh mục' },
    { key: 'view_count', label: 'Lượt xem' },
    { key: 'status', label: 'Trạng thái', render: (v: any) => <StatusBadge status={v} /> },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Bài viết</h1>
        <button className="bg-[#0A3D62] text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} /> Thêm bài viết
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <DataTable columns={columns} data={blogs} onDelete={handleDelete} loading={loading} />
      </div>
    </div>
  );
}