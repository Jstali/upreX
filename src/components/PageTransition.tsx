import React, { useEffect, useState } from 'react';

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
  const [transitionState, setTransitionState] = useState<'visible' | 'exiting' | 'entering'>('visible');
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  useEffect(() => {
    // If route didn't change, keep children updated
    if (children === displayedChildren) return;

    // Start Exit Animation & Laser Indicator
    setTransitionState('exiting');
    setIsIndicatorActive(true);

    const exitTimer = setTimeout(() => {
      // Swap content while invisible and reset scroll
      setDisplayedChildren(children);
      if (onContentSwap) {
        onContentSwap();
      } else {
        window.scrollTo(0, 0);
      }
      setTransitionState('entering');

      // Trigger Enter Animation
      const enterTimer = setTimeout(() => {
        setTransitionState('visible');
        setIsIndicatorActive(false);
      }, 260);

      return () => clearTimeout(enterTimer);
    }, 180);

    return () => clearTimeout(exitTimer);
  }, [routeKey, children, onContentSwap]);

  return (
    <>
      {/* Top Laser Progress Beam */}
      <div
        className={`fixed top-0 left-0 h-[2.5px] z-[999] pointer-events-none transition-all duration-300 ease-out bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 shadow-[0_0_12px_rgba(0,242,254,0.9)] ${
          isIndicatorActive
            ? 'w-full opacity-100'
            : 'w-0 opacity-0'
        }`}
      />

      {/* Main Page Animated Container */}
      <div
        className={`w-full will-change-transform transition-all duration-200 ease-out ${
          transitionState === 'exiting'
            ? 'opacity-0 -translate-y-3 scale-[0.995] pointer-events-none'
            : transitionState === 'entering'
            ? 'opacity-0 translate-y-4 scale-[0.995]'
            : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {displayedChildren}
      </div>
    </>
  );
};
