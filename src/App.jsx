import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import ServiceDetail from './pages/ServiceDetail';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language) {
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  const fontClass = i18n.language === 'ar' ? 'font-ar' : 'font-en';

  return (
    <div className={`bg-rich-black min-h-screen text-white selection:bg-gold selection:text-rich-black overflow-x-hidden ${fontClass}`}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </main>

      <footer className="bg-rich-black py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-start">
              <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white block mb-4">
                FAVOURMAN<span className="text-gold">.</span>
              </Link>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed font-light">
                Specialized in Oil & Gas, Global Logistics, and Strategic Consultancy since 2018.
              </p>
            </div>

            <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold">
              <Link to="/" className="hover:text-gold transition-colors">{t('navbar.home')}</Link>
              <Link to="/documentation" className="hover:text-gold transition-colors">{t('navbar.documents')}</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">{t('navbar.contact')}</Link>
            </div>

            <div className="text-center md:text-end">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                {t('common.copyright', { year: new Date().getFullYear() })}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
