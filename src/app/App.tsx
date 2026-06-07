import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import TourDetailPage from "./pages/TourDetailPage";
import TravelInfoPage from "./pages/TravelInfoPage";
import NewsBlogPage from "./pages/NewsBlogPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tour/:id" element={<TourDetailPage />} />
        <Route path="/info" element={<TravelInfoPage />} />
        <Route path="/news" element={<NewsBlogPage />} />
        <Route path="/news/:id" element={<ArticleDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
