import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ImportPage from "./pages/ImportPage";
import ConvertPage from "./pages/ConvertPage";
import ExportPage from "./pages/ExportPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/import" element={<ImportPage />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
