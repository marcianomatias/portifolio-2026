import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatedBackground } from '../components/layout/AnimatedBackground';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

// Lazy loading das páginas
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

// Componente de loading simplificado
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center text-primary text-xl">
    Carregando...
  </div>
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
