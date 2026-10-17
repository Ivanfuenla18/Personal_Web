import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import About from "./pages/About";
import { Suspense } from 'react';
import './css/App.css';
import Timeline from './pages/Timeline';
import NotFound from './pages/NotFound';

function Comps() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Suspense fallback="Cargando traducciones..." >
      <Comps />
    </Suspense>
  );
}

export default App;
