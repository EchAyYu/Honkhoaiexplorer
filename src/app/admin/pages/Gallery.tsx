import { useEffect, useState } from 'react';
import { Plus, Trash2, Upload, X } from 'lucide-react';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    taken_date: '',
    is_featured: false
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}` };
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Vui lòng chọn ảnh');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // 1. Upload ảnh lên Cloudinary qua backend
      const formDataUpload = new FormData();
      formDataUpload.append('image', selectedFile);

      const uploadRes = await fetch('/api/upload/single', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formDataUpload
      });

      const uploadData = await uploadRes.json();
      
      if (!uploadData.success) {
        throw new Error(uploadData.error || 'Upload failed');
      }

      setUploadProgress(50);

      // 2. Lưu thông tin ảnh vào database
      const saveRes = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify({
          image_url: uploadData.imageUrl,
          thumbnail_url: uploadData.imageUrl,
          title: formData.title,
          description: formData.description,
          category: formData.category,
          taken_date: formData.taken_date,
          is_featured: formData.is_featured
        })
      });

      setUploadProgress(100);
      const saveData = await saveRes.json();

      if (saveData.success) {
        alert('Thêm ảnh thành công!');
        setShowUploadModal(false);
        resetForm();
        fetchImages();
      } else {
        throw new Error(saveData.error || 'Save failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Có lỗi xảy ra khi upload ảnh');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDelete = async (id: string, publicId?: string) => {
    if (!confirm('Bạn có chắc muốn xóa ảnh này?')) return;
    try {
      // Xóa trong database
      await fetch(`/api/gallery/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      
      // Nếu có publicId, xóa trên Cloudinary
      if (publicId) {
        await fetch('/api/upload/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
          body: JSON.stringify({ publicId })
        });
      }
      
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Xóa ảnh thất bại');
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setFormData({
      title: '',
      description: '',
      category: '',
      taken_date: '',
      is_featured: false
    });
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Thư viện ảnh</h1>
        <button 
          onClick={() => setShowUploadModal(true)}
          className="bg-[#0A3D62] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#082a45]"
        >
          <Plus size={20} /> Thêm ảnh
        </button>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Thêm ảnh mới</h2>
              <button 
                onClick={() => { setShowUploadModal(false); resetForm(); }} 
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Image Preview / Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                {previewUrl ? (
                  <div className="relative">
                    <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                    <button
                      onClick={() => { setSelectedFile(null); setPreviewUrl(''); }}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <div className="py-8">
                      <Upload size={48} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">Click để chọn ảnh</p>
                      <p className="text-xs text-gray-400 mt-1">Hỗ trợ: JPG, PNG, WEBP (Tối đa 5MB)</p>
                    </div>
                  </label>
                )}
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}

              {/* Image Info Form */}
              <div>
                <label className="block text-sm font-semibold mb-1">Tiêu đề</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                  placeholder="Ví dụ: Hoàng hôn trên biển Hòn Khoai"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Mô tả</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                  placeholder="Mô tả ngắn về bức ảnh..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">Danh mục</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                  >
                    <option value="">Chọn danh mục</option>
                    <option value="Cảnh quan">Cảnh quan</option>
                    <option value="Hoạt động">Hoạt động</option>
                    <option value="Ẩm thực">Ẩm thực</option>
                    <option value="Sự kiện">Sự kiện</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">Ngày chụp</label>
                  <input
                    type="date"
                    value={formData.taken_date}
                    onChange={(e) => setFormData({ ...formData, taken_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_featured"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="is_featured" className="text-sm">Đánh dấu là ảnh nổi bật</label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => { setShowUploadModal(false); resetForm(); }} 
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button 
                  onClick={handleUpload} 
                  disabled={!selectedFile || uploading}
                  className="px-4 py-2 bg-[#0A3D62] text-white rounded-lg hover:bg-[#082a45] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {uploading ? 'Đang upload...' : 'Upload ảnh'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img: any) => (
          <div key={img.id} className="group relative bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={img.image_url} 
              alt={img.title || 'Gallery image'} 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                onClick={() => handleDelete(img.id)} 
                className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                title="Xóa ảnh"
              >
                <Trash2 size={16} />
              </button>
            </div>
            {img.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 truncate">
                {img.title}
              </div>
            )}
            {img.is_featured && (
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                Nổi bật
              </div>
            )}
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-10 text-gray-500 bg-white rounded-xl">
          Chưa có ảnh nào. Hãy nhấn "Thêm ảnh" để upload!
        </div>
      )}
    </div>
  );
}