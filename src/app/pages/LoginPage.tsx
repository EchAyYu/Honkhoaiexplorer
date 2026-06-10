import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import { HpNavbar } from "../components/hp-navbar";
import { HpFooter } from "../components/hp-footer";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    const payload = isLogin 
      ? { email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password, full_name: formData.full_name };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // Lưu token và user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        // Chuyển hướng về trang chủ
        navigate("/");
        window.location.reload(); // Refresh để cập nhật navbar
      } else {
        setError(data.error || "Đăng nhập thất bại");
      }
    } catch (err) {
      setError("Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <HpNavbar />
      
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#EAF4FB] rounded-full flex items-center justify-center mx-auto mb-4">
              {isLogin ? <LogIn size={28} className="text-[#0A3D62]" /> : <UserPlus size={28} className="text-[#0A3D62]" />}
            </div>
            <h2 className="text-2xl font-bold text-[#0A3D62]" style={{ fontFamily: "Playfair Display, serif" }}>
              {isLogin ? "Chào Mừng Trở Lại" : "Tạo Tài Khoản Mới"}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              {isLogin ? "Đăng nhập để đặt tour và quản lý chuyến đi" : "Đăng ký để trải nghiệm dịch vụ của chúng tôi"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và Tên</label>
                <div className="relative">
                  <UserPlus size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A3D62] focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/20 transition-all"
                    placeholder="Nhập họ và tên"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A3D62] focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/20 transition-all"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#0A3D62] focus:outline-none focus:ring-2 focus:ring-[#0A3D62]/20 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A3D62] to-[#1E8449] text-white font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Đang xử lý..." : (isLogin ? "Đăng Nhập" : "Đăng Ký")}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
                setFormData({ email: "", password: "", full_name: "" });
              }}
              className="text-sm text-[#0A3D62] hover:underline"
            >
              {isLogin ? "Chưa có tài khoản? Đăng ký ngay" : "Đã có tài khoản? Đăng nhập"}
            </button>
          </div>

          {/* Demo account */}
          {isLogin && (
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center mb-3">Hoặc đăng nhập với tài khoản demo:</p>
              <div className="flex gap-2 justify-center text-xs">
                <button
                  onClick={() => setFormData({ ...formData, email: "user@example.com", password: "123456" })}
                  className="px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  User: user@example.com
                </button>
                <button
                  onClick={() => setFormData({ ...formData, email: "admin@honkhoai.com", password: "admin123" })}
                  className="px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Admin
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <HpFooter />
    </div>
  );
}