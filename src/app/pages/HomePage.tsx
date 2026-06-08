console.log("🏠 HomePage đang render...");
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
      <HpNavbar />
      <HpHero />
      <HpAbout />
      <HpTours />
      <HpWhy />
      <HpGallery />
      <HpTravelInfo />
      <HpTestimonials />
      <HpBlog />
      <HpCta />
      <HpFooter />
    </div>
  );
}