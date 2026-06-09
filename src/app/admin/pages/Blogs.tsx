import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Eye, X } from 'lucide-react';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    featured_image: '',
    status: 'draft',
    tags: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingPost 
        ? `/api/blogs/${editingPost.id}`
        : '/api/blogs';
      const method = editingPost ? 'PUT' : 'POST';
      
      const tagsArray = formData.tags.split(',').map(t => t.trim());
      
      await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify({
          ...formData,
          tags: tagsArray
        })
      });
      
      setShowModal(false);
      setEditingPost(null);
      setFormData({
        title: '', excerpt: '', content: '', category: '', featured_image: '', status: 'draft', tags: ''
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
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

  const handleEdit = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt || '',
      content: post.content || '',
      category: post.category || '',
      featured_image: post.featured_image || '',
      status: post.status,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : ''
    });
    setShowModal(true);
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Bài viết</h1>
        <button 
          onClick={() => { setEditingPost(null); setShowModal(true); }}
          className="bg-[#0A3D62] text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} /> Thêm bài viết
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{editingPost ? 'Sửa bài viết' : 'Thêm bài viết mới'}</h2>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-gray-100 rounded">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Tiêu đề *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Danh mục</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Ví dụ: Du lịch, Ẩm thực, Kinh nghiệm..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Tags (cách nhau bằng dấu phẩy)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Ví dụ: Hòn Khoai, Cà Mau, du lịch biển"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Mô tả ngắn</label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Nội dung *</label>
                <textarea
                  rows={6}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
                  {editingPost ? 'Cập nhật' : 'Thêm mới'}
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
              <th className="text-left p-4">Tiêu đề</th>
              <th className="text-left p-4">Danh mục</th>
              <th className="text-left p-4">Lượt xem</th>
              <th className="text-left p-4">Trạng thái</th>
              <th className="text-left p-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((post: any) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{post.title}</td>
                <td className="p-4">{post.category || '---'}</td>
                <td className="p-4">{post.view_count || 0}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {post.status === 'published' ? 'Đã xuất bản' : 'Nháp'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(post)} className="p-1 text-yellow-500 hover:bg-yellow-50 rounded">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(post.id)} className="p-1 text-red-500 hover:bg-red-50 rounded">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {blogs.length === 0 && <div className="text-center py-10 text-gray-500">Chưa có bài viết nào</div>}
      </div>
    </div>
  );
}