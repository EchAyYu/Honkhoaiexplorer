import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, LogOut, Calendar, Heart, Settings, ChevronDown } from "lucide-react";

interface UserMenuProps {
  user: any;
  onLogout: () => void;
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Hồ Sơ Của Tôi", path: "/profile" },
    { icon: Calendar, label: "Đặt Tour Của Tôi", path: "/my-bookings" },
    { icon: Heart, label: "Yêu Thích", path: "/wishlist" },
  ];

  if (user?.role === "admin") {
    menuItems.push({ icon: Settings, label: "Quản Trị", path: "/admin" });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#0A3D62] transition-all"
      >
        <div className="w-8 h-8 rounded-full bg-[#EAF4FB] flex items-center justify-center">
          <User size={16} className="text-[#0A3D62]" />
        </div>
        <span className="text-sm font-medium text-gray-700">{user?.full_name?.split(" ").pop() || user?.email}</span>
        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-20">
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-900">{user?.full_name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
              <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-[#EAF4FB] text-[#0A3D62]">
                {user?.role === "admin" ? "Quản trị viên" : "Khách hàng"}
              </span>
            </div>

            <div className="py-1">
              {menuItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <item.icon size={16} className="text-gray-400" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-1">
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                Đăng Xuất
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}