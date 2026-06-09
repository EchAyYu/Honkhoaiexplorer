import { useEffect, useState } from 'react';
import { Mail, MailOpen, RefreshCw, Reply } from 'lucide-react';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  };

  useEffect(() => {
    fetchContacts();
  }, [selectedStatus]);

  const fetchContacts = async () => {
    try {
      const url = selectedStatus === 'all' 
        ? '/api/contact' 
        : `/api/contact?status=${selectedStatus}`;
      const res = await fetch(url, { headers: getAuthHeaders() });
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/contact/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify({ status })
      });
      fetchContacts();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Bạn có chắc muốn xóa liên hệ này?')) return;
    try {
      await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const statuses = [
    { value: 'all', label: 'Tất cả', icon: RefreshCw },
    { value: 'unread', label: 'Chưa đọc', icon: Mail },
    { value: 'read', label: 'Đã đọc', icon: MailOpen },
    { value: 'replied', label: 'Đã trả lời', icon: Reply },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Liên hệ</h1>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s.value}
            onClick={() => setSelectedStatus(s.value)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              selectedStatus === s.value 
                ? 'bg-[#0A3D62] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <s.icon size={16} /> {s.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-4">Người gửi</th>
              <th className="text-left p-4">Chủ đề</th>
              <th className="text-left p-4">Nội dung</th>
              <th className="text-left p-4">Trạng thái</th>
              <th className="text-left p-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact: any) => (
              <tr key={contact.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-sm text-gray-500">{contact.email}</div>
                  <div className="text-sm text-gray-400">{contact.phone || 'Không có SĐT'}</div>
                </td>
                <td className="p-4 font-medium">{contact.subject || 'Không có tiêu đề'}</td>
                <td className="p-4 max-w-md">
                  <div className="text-gray-600 line-clamp-2">{contact.message}</div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    contact.status === 'unread' ? 'bg-red-100 text-red-700' :
                    contact.status === 'read' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {contact.status === 'unread' ? 'Chưa đọc' :
                     contact.status === 'read' ? 'Đã đọc' : 'Đã trả lời'}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatus(contact.id, e.target.value)}
                      className="px-2 py-1 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="unread">Chưa đọc</option>
                      <option value="read">Đã đọc</option>
                      <option value="replied">Đã trả lời</option>
                    </select>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {contacts.length === 0 && <div className="text-center py-10 text-gray-500">Không có dữ liệu</div>}
      </div>
    </div>
  );
}