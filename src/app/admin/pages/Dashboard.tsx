import { useEffect, useState } from 'react';
import { Package, CalendarCheck, Mail, Users } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [stats, setStats] = useState({
    tours: 0,
    bookings: 0,
    contacts: 0,
    users: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        // Đảm bảo token có định dạng đúng
        const headers = { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
        
        const [toursRes, bookingsRes, contactsRes, usersRes] = await Promise.all([
          fetch('/api/tours?limit=1', { headers }),
          fetch('/api/bookings?limit=1', { headers }),
          fetch('/api/contact?limit=1', { headers }),
          fetch('/api/auth/users', { headers }),
        ]);
        
        const tours = await toursRes.json();
        const bookings = await bookingsRes.json();
        const contacts = await contactsRes.json();
        const users = await usersRes.json();
        
        setStats({
          tours: tours.pagination?.total || 0,
          bookings: bookings.pagination?.total || 0,
          contacts: contacts.pagination?.total || 0,
          users: users.users?.length || 0
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <div className="text-center py-10">Đang tải...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Tổng Tours" value={stats.tours} icon={Package} color="bg-blue-500" />
        <StatCard title="Đặt Tour" value={stats.bookings} icon={CalendarCheck} color="bg-green-500" />
        <StatCard title="Liên hệ" value={stats.contacts} icon={Mail} color="bg-yellow-500" />
        <StatCard title="Người dùng" value={stats.users} icon={Users} color="bg-purple-500" />
      </div>
      
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Chào mừng bạn đến với Admin Panel</h2>
        <p className="text-gray-500 text-sm">Sử dụng menu bên trái để quản lý dữ liệu.</p>
      </div>
    </div>
  );
}