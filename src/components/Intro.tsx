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
      }, 350);

      const timer2 = setTimeout(() => {
        setIsHidden(true);
        onComplete();
      }, 750);

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
        }, 250);
      }}
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />

      {/* New uperX Gold Logo Display */}
      <div className="relative w-64 sm:w-80 h-36 flex items-center justify-center overflow-hidden rounded-3xl border border-white/15 shadow-[0_0_60px_rgba(235,183,67,0.3)] bg-neutral-950/80 backdrop-blur-xl mb-6 p-6">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-amber-500/10 animate-pulse pointer-events-none" />
        <img
          src="/images/uperx_gold_logo.png"
          alt="uperX"
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(235,183,67,0.45)] transition-transform duration-500 scale-105"
        />
      </div>

      {/* Counter & System Status */}
      <div className="flex flex-col items-center space-y-2 z-10">
        <span className="font-mono font-bold text-4xl sm:text-5xl text-white tracking-widest tabular-nums">
          {progress}%
        </span>
        {/* Progress Bar Line */}
        <div className="w-48 h-1 bg-white/15 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-xs text-amber-300 tracking-[0.25em] uppercase pt-2 animate-pulse">
          uperX // Initializing Autonomous Core
        </span>
      </div>

      {/* Skip indicator */}
      <div className="absolute bottom-10 text-[11px] font-mono text-neutral-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
        [ Click Anywhere to Skip ]
      </div>
    </div>
  );
};
