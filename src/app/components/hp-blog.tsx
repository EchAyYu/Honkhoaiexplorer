import { useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function HpBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?limit=3');
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <section style={{ backgroundColor: "#F8FBFF", padding: "100px 0" }}>
        <div className="text-center">Đang tải bài viết...</div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section style={{ backgroundColor: "#F8FBFF", padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "3px", textTransform: "uppercase", color: "#1E8449" }}>
            TIN TỨC & CẨM NANG
          </span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "clamp(28px, 3.5vw, 44px)", color: "#1A1A2E" }}>
            Bài Viết Mới Nhất
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[12px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ boxShadow: "0 8px 32px rgba(10,61,98,0.08)" }}
            >
              <div className="relative overflow-hidden bg-sky-100" style={{ height: "200px" }}>
                <img src={post.featured_image || "https://images.unsplash.com/photo-1780397566138-50945af79e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=220&q=80"} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: "#1E8449", fontFamily: "Inter, sans-serif" }}
                  >
                    {post.category || "Cẩm Nang"}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3 flex-1">
                <h4
                  className="line-clamp-2"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "19px", color: "#1A1A2E", lineHeight: 1.35 }}
                >
                  {post.title}
                </h4>
                <p
                  className="line-clamp-3 flex-1"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "#555F6B" }}
                >
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "rgba(10,61,98,0.08)" }}
                >
                  <div className="flex items-center gap-1.5" style={{ color: "#555F6B" }}>
                    <Calendar size={12} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>{formatDate(post.published_at || post.created_at)}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-xs group transition-colors hover:text-blue-800"
                    style={{ fontFamily: "Inter, sans-serif", color: "#0A3D62" }}
                  >
                    Đọc Thêm
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-blue-900 hover:text-white group"
            style={{ border: "2px solid #0A3D62", color: "#0A3D62", fontFamily: "Inter, sans-serif", background: "transparent" }}
          >
            Xem Tất Cả Bài Viết
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}