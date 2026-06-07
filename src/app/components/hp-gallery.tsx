import { useState } from "react";
import { Eye, X, ArrowRight } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1748102289451-da1109f5c3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=85",
    alt: "Boats on turquoise water near islands",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1732243395944-cb3ff9311091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=85",
    alt: "Tropical beach with palm trees",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1780397566138-50945af79e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=85",
    alt: "Sunset tropical beach",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=85",
    alt: "School of fish underwater",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1773589972650-1bbfe8d12c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=85",
    alt: "Sunset over calm ocean with boat",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1612971432130-04d239cb6706?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=85",
    alt: "Mangrove forest",
  },
];

export function HpGallery() {
  const [lightbox, setLightbox] = useState<null | typeof photos[0]>(null);

  return (
    <section className="w-full bg-white" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Header */}
        <h2
          className="text-center mb-10"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            color: "#1A1A2E",
          }}
        >
          Khoảnh Khắc Hòn Khoai
        </h2>

        {/* Bento grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1: large + tall */}
          <div className="grid grid-cols-3 gap-4" style={{ height: "400px" }}>
            <GalleryPhoto photo={photos[0]} className="col-span-2" onOpen={setLightbox} />
            <GalleryPhoto photo={photos[1]} className="col-span-1" onOpen={setLightbox} />
          </div>
          {/* Row 2: three equal */}
          <div className="grid grid-cols-3 gap-4" style={{ height: "280px" }}>
            {photos.slice(2, 5).map((p) => (
              <GalleryPhoto key={p.id} photo={p} onOpen={setLightbox} />
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-8">
          <button
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-blue-900 hover:text-white group"
            style={{
              border: "2px solid #0A3D62",
              color: "#0A3D62",
              fontFamily: "Inter, sans-serif",
              background: "transparent",
            }}
          >
            📷 Xem Toàn Bộ Thư Viện
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightbox.src.replace("w=500", "w=1200")}
            alt={lightbox.alt}
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function GalleryPhoto({
  photo,
  className = "",
  onOpen,
}: {
  photo: typeof photos[0];
  className?: string;
  onOpen: (p: typeof photos[0]) => void;
}) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      style={{ borderRadius: "12px" }}
      onClick={() => onOpen(photo)}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: "rgba(10,61,98,0.55)" }}
      >
        <Eye size={28} color="white" />
      </div>
    </div>
  );
}
