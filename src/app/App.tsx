console.log("🟢 APP.TSX IMPORT THÀNH CÔNG!");

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import TourDetailPage from "./pages/TourDetailPage";
import TravelInfoPage from "./pages/TravelInfoPage";
import NewsBlogPage from "./pages/NewsBlogPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ContactPage from "./pages/ContactPage";
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminTours from "./admin/pages/Tours";
import AdminBookings from "./admin/pages/Bookings";
import AdminContacts from "./admin/pages/Contacts";
import AdminBlogs from "./admin/pages/Blogs";
import AdminTestimonials from "./admin/pages/Testimonials";
import AdminGallery from "./admin/pages/Gallery";
import Settings from "./admin/pages/Settings";
import AdminLoginPage from "./admin/pages/AdminLoginPage";

export default function App() {
  console.log("✅ App component đang render!");
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tour/:id" element={<TourDetailPage />} />
        <Route path="/info" element={<TravelInfoPage />} />
        <Route path="/news" element={<NewsBlogPage />} />
        <Route path="/news/:id" element={<ArticleDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tours" element={<AdminTours />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}