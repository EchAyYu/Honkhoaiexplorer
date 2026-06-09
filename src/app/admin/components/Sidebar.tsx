import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  CalendarCheck, 
  Mail, 
  Newspaper, 
  MessageSquare, 
  Images,
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/admin/tours', icon: Package, label: 'Quản lý Tours' },
  { path: '/admin/bookings', icon: CalendarCheck, label: 'Quản lý Đặt Tour' },
  { path: '/admin/contacts', icon: Mail, label: 'Liên hệ' },
  { path: '/admin/blogs', icon: Newspaper, label: 'Bài viết' },
  { path: '/admin/testimonials', icon: MessageSquare, label: 'Đánh giá' },
  { path: '/admin/gallery', icon: Images, label: 'Thư viện ảnh' },
  { path: '/admin/settings', icon: Settings, label: 'Cài đặt' },
];

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/admin/login';
  };

  return (
    <aside className={`bg-[#0A3D62] text-white transition-all duration-300 ${open ? 'w-64' : 'w-20'}`}>
      <div className="p-4 border-b border-white/20 flex items-center justify-between">
        <h2 className={`font-bold text-xl ${!open && 'hidden'}`}>Admin Panel</h2>
        <button onClick={() => setOpen(!open)} className="text-white/70 hover:text-white">
          {open ? '◀' : '▶'}
        </button>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                isActive ? 'bg-white/20 border-l-4 border-[#F39C12]' : 'hover:bg-white/10'
              }`}
            >
              <item.icon size={20} />
              <span className={!open ? 'hidden' : ''}>{item.label}</span>
            </Link>
          );
        })}
        
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors text-red-300 mt-4"
        >
          <LogOut size={20} />
          <span className={!open ? 'hidden' : ''}>Đăng xuất</span>
        </button>
      </nav>
    </aside>
  );
}