import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let start: number | null = null;
    const duration = 1400; // 1.4s total counter duration
    let animId: number;

    const tick = (time: number) => {
      if (!start) start = time;
      const elapsed = time - start;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        animId = requestAnimationFrame(tick);
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer1 = setTimeout(() => {
        setIsFading(true);
      }, 400);

      const timer2 = setTimeout(() => {
        setIsHidden(true);
        onComplete();
      }, 900);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [progress, onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto transition-opacity duration-700 select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={() => {
        setIsFading(true);
        setTimeout(() => {
          setIsHidden(true);
          onComplete();
        }, 300);
      }}
    >
      {/* Center Video Container */}
      <div className="relative w-[75vw] max-w-[480px] aspect-square flex items-center justify-center overflow-hidden rounded-md opacity-40">
        <video
          src="/videos/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Large Counter Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-[clamp(48px,8vw,140px)] text-white tracking-tighter tabular-nums drop-shadow-lg">
          {progress}
        </span>
      </div>

      {/* Skip indicator */}
      <div className="absolute bottom-10 text-[11px] font-mono text-neutral-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
        [ Click to Skip ]
      </div>
    </div>
  );
};
