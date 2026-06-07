import { HpNavbar } from "../components/hp-navbar";
import { HpHero } from "../components/hp-hero";
import { HpAbout } from "../components/hp-about";
import { HpTours } from "../components/hp-tours";
import { HpWhy } from "../components/hp-why";
import { HpGallery } from "../components/hp-gallery";
import { HpTravelInfo } from "../components/hp-travel-info";
import { HpTestimonials } from "../components/hp-testimonials";
import { HpBlog } from "../components/hp-blog";
import { HpCta } from "../components/hp-cta";
import { HpFooter } from "../components/hp-footer";

export default function HomePage() {
  return (
    <div
      className="w-full min-h-screen"
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#EAF4FB" }}
    >
      {/* Section 1 — Fixed Navbar */}
      <HpNavbar />

      {/* Section 2 — Hero (100vh) */}
      <HpHero />

      {/* Section 3 — About */}
      <HpAbout />

      {/* Section 4 — Featured Tours */}
      <HpTours />

      {/* Section 5 — Why Choose Us */}
      <HpWhy />

      {/* Section 6 — Photo Gallery (Bento) */}
      <HpGallery />

      {/* Section 7 — Travel Info */}
      <HpTravelInfo />

      {/* Section 8 — Testimonials */}
      <HpTestimonials />

      {/* Section 9 — Blog */}
      <HpBlog />

      {/* Section 10 — CTA Banner */}
      <HpCta />

      {/* Section 11 — Footer */}
      <HpFooter />
    </div>
  );
}
