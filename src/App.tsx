import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';
import { PaintballGun } from './components/PaintballGun';
import { PaintballSplats } from './components/PaintballSplats';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Hypeboard } from './pages/Hypeboard';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });
  const [paintballActive, setPaintballActive] = useState<boolean>(false);
  const [isLight, setIsLight] = useState<boolean>(false);
  const [introFinished, setIntroFinished] = useState<boolean>(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth inertial scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      autoRaf: false,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleContentSwap = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navigate = (path: string) => {
    if (path === currentPath) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { duration: 0.6 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('bg-[#f5f5f5]', 'text-[#111]');
        document.body.classList.remove('bg-black', 'text-white');
      } else {
        document.documentElement.classList.remove('light-theme');
        document.body.classList.add('bg-black', 'text-white');
        document.body.classList.remove('bg-[#f5f5f5]', 'text-[#111]');
      }
      return next;
    });
  };

  return (
    <div className={`relative min-h-screen flex flex-col justify-between transition-colors duration-300 ${isLight ? 'bg-[#f5f5f5] text-[#111]' : 'bg-black text-white'}`}>
      {/* Intro Preloader */}
      {!introFinished && (
        <Intro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Global Navigation Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        isLight={isLight}
      />

      {/* 3D Paintball Gun Model (Follows cursor, recoils on fire) */}
      <PaintballGun isActive={paintballActive} />

      {/* Paintball Splats & Audio Effects */}
      <PaintballSplats isActive={paintballActive} />

      {/* Main Content Area with Smooth Page Transition */}
      <main className="flex-1 w-full relative">
        <PageTransition routeKey={currentPath} onContentSwap={handleContentSwap}>
          {currentPath === '/' && <Home onNavigate={navigate} isLight={isLight} />}
          {currentPath === '/dashboard' && <Dashboard onNavigate={navigate} />}
          {currentPath === '/about' && <About onNavigate={navigate} />}
          {currentPath === '/hypeboard' && <Hypeboard onNavigate={navigate} />}
          {currentPath === '/contact' && <Contact />}
        </PageTransition>
      </main>

      {/* Global Footer */}
      <Footer
        paintballActive={paintballActive}
        onTogglePaintball={() => setPaintballActive((prev) => !prev)}
        isLight={isLight}
        onToggleTheme={toggleTheme}
        onNavigate={navigate}
      />
    </div>
  );
};
