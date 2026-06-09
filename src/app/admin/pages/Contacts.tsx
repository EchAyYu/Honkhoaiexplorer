import { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch('/api/contact', {
        headers: getAuthHeaders()
      });
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
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });
      fetchContacts();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const columns = [
    { key: 'name', label: 'Họ tên' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'SĐT' },
    { key: 'subject', label: 'Chủ đề' },
    { key: 'message', label: 'Nội dung', render: (v: any) => v?.substring(0, 50) + '...' },
    { key: 'status', label: 'Trạng thái', render: (v: any) => <StatusBadge status={v} /> },
  ];

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Quản lý Liên hệ</h1>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <DataTable columns={columns} data={contacts} loading={loading} />
      </div>
    </div>
  );
}