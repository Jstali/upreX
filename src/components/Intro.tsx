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
    const duration = 1400; // 1.4s progression
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
      }, 850);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [progress, onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-auto transition-opacity duration-700 select-none ${
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
      {/* Background Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Video Loop from User Video */}
      <div className="relative w-64 md:w-80 aspect-[400/440] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,242,254,0.3)] bg-black mb-6">
        <video
          src="/videos/uperx_logo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      </div>

      {/* Counter & System Status */}
      <div className="flex flex-col items-center space-y-2 z-10">
        <span className="font-mono font-bold text-4xl md:text-5xl text-white tracking-widest tabular-nums">
          {progress}%
        </span>
        <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] animate-pulse">
          uperX <span className="uppercase">// Initializing Autonomous Core</span>
        </span>
      </div>

      {/* Skip indicator */}
      <div className="absolute bottom-10 text-[11px] font-mono text-neutral-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
        [ Click Anywhere to Skip ]
      </div>
    </div>
  );
};
