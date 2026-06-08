console.log("🔴 MAIN.TSX ĐANG CHẠY!");

import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const rootElement = document.getElementById("root");
console.log("🔴 Root element:", rootElement);

if (rootElement) {
  console.log("🔴 Đang render App...");
  createRoot(rootElement).render(<App />);
} else {
  console.error("🔴 Không tìm thấy element #root!");
}