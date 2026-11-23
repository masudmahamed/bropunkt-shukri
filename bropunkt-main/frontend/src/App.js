import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { YouthPage } from './pages/YouthPage';
import { ParentsPage } from './pages/ParentsPage';
import { CollaborationPage } from './pages/CollaborationPage';
import { ContactPage } from './pages/ContactPage';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/om-oss" element={<AboutPage />} />
            <Route path="/tjenester" element={<ServicesPage />} />
            <Route path="/ungdom" element={<YouthPage />} />
            <Route path="/foreldre" element={<ParentsPage />} />
            <Route path="/samarbeid" element={<CollaborationPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;
