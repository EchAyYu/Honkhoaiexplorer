import { useEffect, useState } from 'react';
import { 
  Package, CalendarCheck, Mail, Users, 
  Eye, TrendingUp, Star, Image, 
  Newspaper, MessageSquare, CheckCircle, XCircle 
} from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, subValue }: any) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {subValue && <p className="text-xs text-gray-400 mt-1">{subValue}</p>}
      </div>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [stats, setStats] = useState({
    tours: { total: 0, published: 0, draft: 0 },
    bookings: { total: 0, pending: 0, confirmed: 0, completed: 0, cancelled: 0 },
    contacts: { total: 0, unread: 0, read: 0, replied: 0 },
    users: { total: 0, admin: 0, user: 0 },
    blogs: { total: 0, published: 0, draft: 0 },
    testimonials: { total: 0, pending: 0, approved: 0, rejected: 0 },
    gallery: { total: 0 }
  });
  const [recentBookings, setRecentBookings] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return { 'Authorization': `Bearer ${token}` };
  };

  useEffect(() => {
    fetchAllStats();
  }, []);

  const fetchAllStats = async () => {
    try {
      const headers = getAuthHeaders();
      
      // Fetch tours
      const toursRes = await fetch('/api/tours?limit=1000', { headers });
      const tours = await toursRes.json();
      const toursList = tours.tours || [];
      
      // Fetch bookings
      const bookingsRes = await fetch('/api/bookings?limit=1000', { headers });
      const bookings = await bookingsRes.json();
      const bookingsList = bookings.bookings || [];
      
      // Fetch contacts
      const contactsRes = await fetch('/api/contact?limit=1000', { headers });
      const contacts = await contactsRes.json();
      const contactsList = contacts.contacts || [];
      
      // Fetch users
      const usersRes = await fetch('/api/auth/users', { headers });
      const users = await usersRes.json();
      const usersList = users.users || [];
      
      // Fetch blogs
      const blogsRes = await fetch('/api/blogs?limit=1000', { headers });
      const blogs = await blogsRes.json();
      const blogsList = blogs.posts || [];
      
      // Fetch testimonials
      const testimonialsRes = await fetch('/api/testimonials/all', { headers });
      const testimonials = await testimonialsRes.json();
      const testimonialsList = testimonials.testimonials || [];
      
      // Fetch gallery
      const galleryRes = await fetch('/api/gallery?limit=1000');
      const gallery = await galleryRes.json();
      
      // Set stats
      setStats({
        tours: {
          total: toursList.length,
          published: toursList.filter((t: any) => t.status === 'published').length,
          draft: toursList.filter((t: any) => t.status === 'draft').length,
        },
        bookings: {
          total: bookingsList.length,
          pending: bookingsList.filter((b: any) => b.status === 'pending').length,
          confirmed: bookingsList.filter((b: any) => b.status === 'confirmed').length,
          completed: bookingsList.filter((b: any) => b.status === 'completed').length,
          cancelled: bookingsList.filter((b: any) => b.status === 'cancelled').length,
        },
        contacts: {
          total: contactsList.length,
          unread: contactsList.filter((c: any) => c.status === 'unread').length,
          read: contactsList.filter((c: any) => c.status === 'read').length,
          replied: contactsList.filter((c: any) => c.status === 'replied').length,
        },
        users: {
          total: usersList.length,
          admin: usersList.filter((u: any) => u.role === 'admin').length,
          user: usersList.filter((u: any) => u.role === 'user').length,
        },
        blogs: {
          total: blogsList.length,
          published: blogsList.filter((b: any) => b.status === 'published').length,
          draft: blogsList.filter((b: any) => b.status === 'draft').length,
        },
        testimonials: {
          total: testimonialsList.length,
          pending: testimonialsList.filter((t: any) => t.status === 'pending').length,
          approved: testimonialsList.filter((t: any) => t.status === 'approved').length,
          rejected: testimonialsList.filter((t: any) => t.status === 'rejected').length,
        },
        gallery: { total: gallery.images?.length || 0 }
      });
      
      // Recent bookings (last 5)
      setRecentBookings(bookingsList.slice(0, 5));
      setRecentContacts(contactsList.slice(0, 5));
      
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-10">Đang tải dữ liệu...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tổng quan</h1>
      
      {/* Main stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Tổng Tours" value={stats.tours.total} icon={Package} color="bg-blue-500" 
          subValue={`${stats.tours.published} đã xuất bản • ${stats.tours.draft} nháp`} />
        <StatCard title="Đặt Tour" value={stats.bookings.total} icon={CalendarCheck} color="bg-green-500"
          subValue={`${stats.bookings.pending} chờ • ${stats.bookings.confirmed} xác nhận`} />
        <StatCard title="Liên hệ" value={stats.contacts.total} icon={Mail} color="bg-yellow-500"
          subValue={`${stats.contacts.unread} chưa đọc`} />
        <StatCard title="Người dùng" value={stats.users.total} icon={Users} color="bg-purple-500"
          subValue={`${stats.users.admin} admin • ${stats.users.user} user`} />
      </div>
      
      {/* Secondary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Bài viết" value={stats.blogs.total} icon={Newspaper} color="bg-indigo-500"
          subValue={`${stats.blogs.published} đã đăng • ${stats.blogs.draft} nháp`} />
        <StatCard title="Đánh giá" value={stats.testimonials.total} icon={MessageSquare} color="bg-pink-500"
          subValue={`${stats.testimonials.pending} chờ duyệt • ${stats.testimonials.approved} đã duyệt`} />
        <StatCard title="Thư viện ảnh" value={stats.gallery.total} icon={Image} color="bg-teal-500" />
      </div>
      
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <CalendarCheck size={20} /> Đặt tour gần đây
          </h2>
          {recentBookings.length === 0 ? (
            <p className="text-gray-500 text-sm">Chưa có đặt tour nào</p>
          ) : (
            <div className="space-y-3">
              {recentBookings.map((booking: any) => (
                <div key={booking.id} className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <p className="font-medium">{booking.customer_name}</p>
                    <p className="text-sm text-gray-500">{booking.tour_title || 'Tour'}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#0A3D62]">{booking.total_price?.toLocaleString()}đ</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {booking.status === 'pending' ? 'Chờ' : booking.status === 'confirmed' ? 'Xác nhận' : 'Hoàn thành'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Mail size={20} /> Liên hệ gần đây
          </h2>
          {recentContacts.length === 0 ? (
            <p className="text-gray-500 text-sm">Chưa có liên hệ nào</p>
          ) : (
            <div className="space-y-3">
              {recentContacts.map((contact: any) => (
                <div key={contact.id} className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.subject || contact.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    contact.status === 'unread' ? 'bg-red-100 text-red-700' :
                    contact.status === 'read' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {contact.status === 'unread' ? 'Chưa đọc' : contact.status === 'read' ? 'Đã đọc' : 'Đã trả lời'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}