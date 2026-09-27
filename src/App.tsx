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
import { FinseoLightHome } from './pages/FinseoLightHome';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Hypeboard } from './pages/Hypeboard';
import { Contact } from './pages/Contact';
import { initAllScrollEffects } from './utils/scrollEffects';

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
  const scrollCleanupRef = useRef<(() => void) | null>(null);

  // Initialize Lenis smooth inertial scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.14,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.2,
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

  // Initialize and attach Cappella-style scroll reveals, exponential counters, and 3D tilts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
      }
      scrollCleanupRef.current = initAllScrollEffects();
    }, 70);

    return () => {
      clearTimeout(timer);
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
        scrollCleanupRef.current = null;
      }
    };
  }, [currentPath, isLight]);

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

    // Refresh scroll reveals and 3D tilts after transition swap
    setTimeout(() => {
      if (scrollCleanupRef.current) {
        scrollCleanupRef.current();
      }
      scrollCleanupRef.current = initAllScrollEffects();
    }, 90);
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
        document.body.classList.add('bg-[#FAF9F5]', 'text-[#1A1A1A]');
        document.body.classList.remove('bg-black', 'text-white');
      } else {
        document.documentElement.classList.remove('light-theme');
        document.body.classList.add('bg-black', 'text-white');
        document.body.classList.remove('bg-[#FAF9F5]', 'text-[#1A1A1A]');
      }
      return next;
    });
  };

  return (
    <div className={`relative min-h-screen flex flex-col justify-between transition-colors duration-500 ${
      isLight ? 'bg-[#FAF9F5] text-[#1A1A1A]' : 'bg-black text-white'
    }`}>
      {/* Intro Preloader */}
      {!introFinished && (
        <Intro onComplete={() => setIntroFinished(true)} />
      )}

      {/* Global Navigation Header (FinseoLightHome renders its own authentic header on home page) */}
      {!(isLight && currentPath === '/') && (
        <Header
          currentPath={currentPath}
          onNavigate={navigate}
          isLight={isLight}
          onToggleTheme={toggleTheme}
        />
      )}

      {/* 3D Paintball Gun Model (Only active in dark studio mode) */}
      {!isLight && <PaintballGun isActive={paintballActive} />}

      {/* Paintball Splats & Audio Effects (Only active in dark studio mode) */}
      {!isLight && <PaintballSplats isActive={paintballActive} />}

      {/* Main Content Area with Smooth Page Transition */}
      <main className="flex-1 w-full relative">
        <PageTransition routeKey={`${currentPath}-${isLight ? 'light' : 'dark'}`} onContentSwap={handleContentSwap}>
          {currentPath === '/' && (
            isLight ? (
              <FinseoLightHome onNavigate={navigate} onToggleTheme={toggleTheme} />
            ) : (
              <Home onNavigate={navigate} />
            )
          )}
          {currentPath === '/dashboard' && <Dashboard onNavigate={navigate} />}
          {currentPath === '/about' && <About onNavigate={navigate} />}
          {currentPath === '/hypeboard' && <Hypeboard onNavigate={navigate} />}
          {currentPath === '/contact' && <Contact />}
        </PageTransition>
      </main>

      {/* Global Footer (FinseoLightHome renders its own authentic footer on home page) */}
      {!(isLight && currentPath === '/') && (
        <Footer
          paintballActive={paintballActive}
          onTogglePaintball={() => setPaintballActive((prev) => !prev)}
          isLight={isLight}
          onToggleTheme={toggleTheme}
          onNavigate={navigate}
        />
      )}
    </div>
  );
};
