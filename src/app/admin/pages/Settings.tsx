import { useEffect, useState } from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  const [travelInfo, setTravelInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  useEffect(() => {
    fetchTravelInfo();
  }, []);

  const fetchTravelInfo = async () => {
    try {
      const res = await fetch('/api/travel-info');
      const data = await res.json();
      setTravelInfo(data.travelInfo || []);
    } catch (error) {
      console.error('Error fetching travel info:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateInfo = async (id: string, field: string, value: any) => {
    try {
      await fetch(`/api/travel-info/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ [field]: value })
      });
      fetchTravelInfo();
    } catch (error) {
      console.error('Error updating:', error);
    }
  };

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Cài đặt Thông tin Du lịch</h1>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          {travelInfo.map((item: any) => (
            <div key={item.id} className="mb-6 pb-6 border-b last:border-0">
              <div className="flex items-center justify-between mb-2">
                <label className="font-semibold text-gray-700">{item.title}</label>
                <button 
                  onClick={() => updateInfo(item.id, 'is_active', !item.is_active)}
                  className={`px-3 py-1 rounded-full text-xs ${item.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}
                >
                  {item.is_active ? 'Đang hiển thị' : 'Đã ẩn'}
                </button>
              </div>
              <textarea
                defaultValue={item.content}
                onBlur={(e) => updateInfo(item.id, 'content', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A3D62]"
                rows={3}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}