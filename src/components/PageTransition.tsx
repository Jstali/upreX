import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
  onContentSwap?: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  routeKey,
  onContentSwap,
}) => {
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [currentRouteKey, setCurrentRouteKey] = useState(routeKey);

  const containerRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (routeKey === currentRouteKey) {
      setDisplayedChildren(children);
      return;
    }

    setCurrentRouteKey(routeKey);
    const container = containerRef.current;
    const laser = laserRef.current;
    const flare = flareRef.current;

    if (!container) {
      setDisplayedChildren(children);
      if (onContentSwap) onContentSwap();
      return;
    }

    // High-end Liquid Glass & Depth Dissolve Transition
    const tl = gsap.timeline();

    // 1. Soft exit dissolve & gentle upward departure
    tl.to(container, {
      opacity: 0,
      y: -10,
      scale: 0.992,
      filter: 'blur(5px)',
      duration: 0.16,
      ease: 'power2.in',
    });

    // 2. Light flare & laser streak activation
    if (laser && flare) {
      tl.set(laser, { width: '0%', opacity: 1, left: '0%' }, 0);
      tl.set(flare, { opacity: 0.8, scale: 0.9 }, 0);

      tl.to(
        laser,
        {
          width: '100%',
          duration: 0.35,
          ease: 'power3.out',
        },
        0.05
      );

      tl.to(
        flare,
        {
          opacity: 0,
          scale: 1.2,
          duration: 0.5,
          ease: 'power2.out',
        },
        0.1
      );
    }

    // 3. Swap children at the exact moment of peak invisibility & reset scroll
    tl.add(() => {
      setDisplayedChildren(children);
      if (onContentSwap) {
        onContentSwap();
      } else {
        window.scrollTo(0, 0);
      }
    });

    // 4. Liquid Glass Arrival: Gentle entrance with liquid easing (Apple/Linear curve)
    tl.fromTo(
      container,
      {
        opacity: 0,
        y: 18,
        scale: 1.008,
        filter: 'blur(6px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.38,
        ease: 'power3.out',
        clearProps: 'filter,transform',
      }
    );

    // 5. Fade out top laser beam
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

    return () => {
      tl.kill();
    };
  }, [routeKey, children, onContentSwap]);

  return (
    <>
      {/* Top Cyber Laser Light Streak */}
      <div
        ref={laserRef}
        className="fixed top-0 left-0 h-[2px] z-[999] pointer-events-none opacity-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 shadow-[0_0_12px_rgba(0,242,254,0.9)]"
      />

      {/* Ambient Top Lens Refraction Glow */}
      <div
        ref={flareRef}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-4xl h-48 pointer-events-none z-[998] opacity-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 242, 254, 0.18) 0%, rgba(236, 72, 153, 0.08) 40%, transparent 70%)',
        }}
      />

      {/* Main Animated Page Container */}
      <div
        ref={containerRef}
        className="w-full will-change-[transform,opacity,filter]"
        style={{ transformOrigin: '50% 20%' }}
      >
        {displayedChildren}
      </div>
    </>
  );
};
