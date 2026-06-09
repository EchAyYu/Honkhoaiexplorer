import { Menu, User } from 'lucide-react';

export default function Header({ setSidebarOpen }: { setSidebarOpen: (v: boolean) => void }) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <button onClick={() => setSidebarOpen(v => !v)} className="p-1 rounded-lg hover:bg-gray-100">
        <Menu size={24} />
      </button>
      
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-semibold">{user.full_name || 'Admin'}</div>
          <div className="text-xs text-gray-500">{user.role || 'admin'}</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#0A3D62] text-white flex items-center justify-center">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}