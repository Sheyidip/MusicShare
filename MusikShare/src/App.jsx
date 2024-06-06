import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { Provider } from 'react-redux';
import store from './store/store'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ImportPage from "./pages/ImportPage";
import ConvertPage from "./pages/ConvertPage";
import ExportPage from "./pages/ExportPage";

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/import" element={<ImportPage />} />
        <Route path="/convert" element={<ConvertPage />} />
        <Route path="/export" element={<ExportPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
    </Provider>
    
  );
}
