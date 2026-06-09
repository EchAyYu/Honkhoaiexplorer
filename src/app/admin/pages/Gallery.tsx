import { useEffect, useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery?limit=50');
      const data = await res.json();
      setImages(data.images || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa ảnh này?')) return;
    try {
      await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Thư viện ảnh</h1>
        <button className="bg-[#0A3D62] text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={20} /> Thêm ảnh
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img: any) => (
          <div key={img.id} className="group relative bg-gray-100 rounded-lg overflow-hidden">
            <img src={img.image_url} alt={img.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button onClick={() => handleDelete(img.id)} className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600">
                <Trash2 size={16} />
              </button>
            </div>
            {img.title && <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 truncate">{img.title}</div>}
          </div>
        ))}
      </div>

      {images.length === 0 && <div className="text-center py-10 text-gray-500">Chưa có ảnh nào</div>}
    </div>
  );
}