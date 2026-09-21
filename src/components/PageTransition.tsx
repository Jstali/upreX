import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
  onContentSwap?: () => void;
}

const ROUTE_DATA: Record<string, { title: string; index: string; category: string }> = {
  '/': { title: 'SUPERCHARGED LABS', index: '01 / 05', category: 'HEADQUARTERS & ARCHIVE' },
  '/dashboard': { title: 'SERVICES & WORKSPACE', index: '02 / 05', category: 'UPERX OS V3.0' },
  '/about': { title: 'ENGINEERING DNA', index: '03 / 05', category: 'ABOUT UPERX' },
  '/hypeboard': { title: 'INSIGHTS & DISPATCHES', index: '04 / 05', category: 'EDITORIAL // HYPE' },
  '/contact': { title: 'CONTACT & INITIATION', index: '05 / 05', category: 'GLOBAL DEPLOYMENT' },
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  routeKey,
  onContentSwap,
}) => {
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [currentRouteKey, setCurrentRouteKey] = useState(routeKey);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const columnRefs = useRef<HTMLDivElement[]>([]);
  const hudRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Safe ref assignment for the 5 vertical shutter columns
  const addToColumnRefs = (el: HTMLDivElement | null) => {
    if (el && !columnRefs.current.includes(el)) {
      columnRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (routeKey === currentRouteKey) {
      setDisplayedChildren(children);
      return;
    }

    // New navigation initiated
    const nextRoute = ROUTE_DATA[routeKey] || {
      title: 'UPERX EXPERIENCE',
      index: '00 // --',
      category: 'NAVIGATION',
    };

    setIsTransitioning(true);
    setCurrentRouteKey(routeKey);

    const cols = columnRefs.current;
    const hud = hudRef.current;
    const laser = laserRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;

    if (!overlay || cols.length === 0) {
      setDisplayedChildren(children);
      if (onContentSwap) onContentSwap();
      return;
    }

    // Master Awwwards Kinetic Shutter Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    // 1. Enable overlay pointer events & reset column origin
    overlay.style.pointerEvents = 'all';
    gsap.set(cols, { transformOrigin: 'bottom center', scaleY: 0 });
    gsap.set(hud, { opacity: 0, y: 25, scale: 0.96 });
    if (laser) gsap.set(laser, { width: '0%', opacity: 1 });

    // 2. Animate Columns UP (Bottom to Top Shutter Cover)
    tl.to(cols, {
      scaleY: 1,
      duration: 0.4,
      stagger: 0.04,
      ease: 'power4.inOut',
    });

    // 3. Simultaneously fire the laser progress bar & reveal HUD telemetry
    if (laser) {
      tl.to(
        laser,
        {
          width: '100%',
          duration: 0.35,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }

    if (hud) {
      tl.to(
        hud,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: 'back.out(1.6)',
        },
        '-=0.2'
      );
    }

    // 4. Exact millisecond when screen is 100% covered:
    tl.add(() => {
      setDisplayedChildren(children);
      if (onContentSwap) {
        onContentSwap();
      } else {
        window.scrollTo(0, 0);
      }
    });

    // 5. Brief hold to let the user register the destination telemetry
    tl.to({}, { duration: 0.1 });

    // 6. Fade out the HUD telemetry
    if (hud) {
      tl.to(hud, {
        opacity: 0,
        y: -15,
        duration: 0.18,
        ease: 'power3.in',
      });
    }

    // 7. Animate Columns AWAY (Bottom to Top Unveil)
    tl.set(cols, { transformOrigin: 'top center' });
    tl.to(cols, {
      scaleY: 0,
      duration: 0.4,
      stagger: 0.04,
      ease: 'power4.inOut',
    });

    // 8. Fade out the laser beam
    if (laser) {
      tl.to(
        laser,
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '-=0.2'
      );
    }

    // 9. Soft gentle reveal on new page content
    if (content) {
      tl.fromTo(
        content,
        { opacity: 0.4, y: 12 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.25'
      );
    }

    tl.add(() => {
      if (overlay) overlay.style.pointerEvents = 'none';
    });

    return () => {
      tl.kill();
    };
  }, [routeKey, children, onContentSwap]);

  const activeRoute = ROUTE_DATA[currentRouteKey] || {
    title: 'UPERX SYSTEM',
    index: '01 / 05',
    category: 'SYSTEM',
  };

  return (
    <>
      {/* Top Laser Progress Bar */}
      <div
        ref={laserRef}
        className="fixed top-0 left-0 h-[2.5px] z-[1001] pointer-events-none opacity-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 shadow-[0_0_15px_rgba(0,242,254,0.9)]"
      />

      {/* Full-Screen Awwwards Kinetic Shutter Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[1000] pointer-events-none flex overflow-hidden"
        style={{ perspective: 1000 }}
      >
        {/* 5 Vertical Architectural Columns */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={addToColumnRefs}
            className="w-1/5 h-full relative bg-[#09090b] border-r border-white/[0.04] shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            style={{ transform: 'scaleY(0)', willChange: 'transform' }}
          >
            {/* Subtle vertical laser hairline accent */}
            <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
          </div>
        ))}

        {/* Center Futuristic Telemetry HUD */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 z-10">
          <div
            ref={hudRef}
            className="opacity-0 flex flex-col items-center text-center max-w-lg px-8 py-6 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-[0_0_60px_rgba(0,242,254,0.2)]"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono text-[10px] uppercase text-cyan-300 tracking-widest font-semibold">
                uperX // Router Protocol
              </span>
            </div>

            <h2 className="font-sans font-black text-2xl md:text-3xl text-white tracking-tight uppercase mb-1">
              {activeRoute.title}
            </h2>

            <div className="flex items-center space-x-3 font-mono text-[11px] text-neutral-400 uppercase tracking-wider mt-1">
              <span className="text-cyan-400">{activeRoute.index}</span>
              <span>•</span>
              <span>{activeRoute.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <div ref={contentRef} className="w-full">
        {displayedChildren}
      </div>
    </>
  );
};
