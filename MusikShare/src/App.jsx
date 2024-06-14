import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { Provider } from 'react-redux';
import store from './store/store'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PlaylistImport from "./components/PlaylistImport";
import ConvertPage from "./pages/ConvertPage";
import PlaylistExport from "./components/PlaylistExport";
import Footer from "./pages/FooterPage";
import FAQPage from "./pages/FAQPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from './pages/BlogPage'
import SpotifyLogin from "./pages/SpotifyLogin";
import YouTubeLogin from "./pages/YouTubeLogin";
import { useState } from "react";
import SpotifyCallback from "./components/SpotifyCallback";
import YouTubeCallback from "./components/YouTubeCallback";


export default function App() {
  const [importedPlaylists, setImportedPlaylists] = useState([]);

  const handleImport = (playlists) => {
    setImportedPlaylists(playlists);
    console.log("Imported playlists:", playlists);
  };

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/import" element={<PlaylistImport onImport={handleImport}/>} />
        <Route path="/convert" element={<ConvertPage importedPlaylists={importedPlaylists}/>} />
        <Route path="/export" element={<PlaylistExport playlists={importedPlaylists.length ? importedPlaylists : []}/>} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/spotify/login" element={<SpotifyLogin />} />
        <Route path="/spotify/callback" element={<SpotifyCallback />} />
        <Route path="/youtube/login" element={<YouTubeLogin />} />
        <Route path="/youtube/callback" element={<YouTubeCallback />} />
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
    <Footer />
    </Provider>
    
  );
}
