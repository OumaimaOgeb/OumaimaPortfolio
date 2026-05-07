import { Routes, Route } from 'react-router-dom';
import useLang from './hooks/useLang';
import translations from './data/translations';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';

export default function App() {
  const [lang, setLang] = useLang();
  const t = translations[lang];

  return (
    <>
      <Nav t={t} lang={lang} onLangChange={setLang} />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/work" element={<Work t={t} lang={lang} />} />
      </Routes>
      <Footer t={t} />
    </>
  );
}
