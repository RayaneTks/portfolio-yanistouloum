import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

// Initialiser la langue du document HTML
const savedLanguage = localStorage.getItem('language') || 'fr';
if (typeof document !== 'undefined') {
  document.documentElement.lang = savedLanguage;
}

createRoot(document.getElementById("root")!).render(<App />);
