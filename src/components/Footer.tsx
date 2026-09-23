import React, { useEffect, useState } from 'react';
import { UperXLogo } from './UperXLogo';

interface FooterProps {
  paintballActive: boolean;
  onTogglePaintball: () => void;
  isLight: boolean;
  onToggleTheme: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  paintballActive,
  onTogglePaintball,
  isLight,
  onToggleTheme,
  onNavigate,
}) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`w-full py-8 px-5 md:px-12 flex flex-col md:flex-row items-center justify-between text-xs tracking-tight select-none border-t transition-colors z-40 relative ${
      isLight
        ? 'bg-white/70 backdrop-blur-xl border-white/80 text-[#070b14] shadow-[0_-4px_20px_rgba(0,0,0,0.03)]'
        : 'bg-neutral-950/90 border-white/10 text-white backdrop-blur-xl'
    }`}>
      {/* Left: Easter Egg / Interactive Splat Mode */}
      <div className="flex items-center space-x-4 mb-6 md:mb-0">
        <button
          id="paintball--toggle"
          onClick={onTogglePaintball}
          className={`flex items-center space-x-2.5 px-4 py-2 rounded-full border transition-all duration-300 ${
            paintballActive
              ? 'bg-gradient-to-r from-pink-600 to-cyan-500 border-transparent text-white shadow-[0_0_20px_rgba(0,242,254,0.6)]'
              : isLight
              ? 'bg-white/80 border-black/10 text-neutral-800 hover:border-black shadow-sm'
              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-cyan-400'
          }`}
          aria-label="Toggle Interactive Mode"
        >
          <div
            className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
              paintballActive ? 'bg-white animate-ping' : isLight ? 'bg-cyan-600' : 'bg-cyan-400'
            }`}
          />
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
            {paintballActive ? 'Active // Fire At Will!' : 'Execute Splat Mode'}
          </span>
        </button>
      </div>

      {/* Center: uperX Logo, Global Node Coordinates, Time */}
      <div className="flex items-center space-x-6 mb-6 md:mb-0 text-center md:text-left">
        <UperXLogo size={32} showText={false} />

        <div className="font-mono text-[11px] leading-tight space-y-0.5">
          <p className={`font-sans font-bold tracking-wider text-[12px] ${isLight ? 'text-[#070b14]' : 'text-white'}`}>
            uperX <span className={`uppercase ${isLight ? 'text-neutral-500' : 'text-neutral-300'}`}>Global Engineering Studio</span>
          </p>
          <p className={isLight ? 'text-neutral-600' : 'text-neutral-400'}>
            Node: Active <span className="mx-1.5">•</span> UTC+5:30 <span className="mx-1.5">•</span> {localTime || '00:00:00'} <span className="mx-1.5">•</span> 99.99% Core Uptime
          </p>
        </div>
      </div>

      {/* Right: Quick Page Navigation Links & Theme Toggle */}
      <div className="flex items-center space-x-5 font-sans text-xs">
        {onNavigate && (
          <div className={`hidden lg:flex items-center space-x-4 ${isLight ? 'text-neutral-600' : 'text-neutral-400'}`}>
            <button onClick={() => onNavigate('/')} className={`transition-colors ${isLight ? 'hover:text-black font-medium' : 'hover:text-white'}`}>Home</button>
            <span>•</span>
            <button onClick={() => onNavigate('/dashboard')} className={`transition-colors ${isLight ? 'hover:text-black font-medium' : 'hover:text-white'}`}>Services & Work</button>
            <span>•</span>
            <button onClick={() => onNavigate('/about')} className={`transition-colors ${isLight ? 'hover:text-black font-medium' : 'hover:text-white'}`}>About Us</button>
            <span>•</span>
            <button onClick={() => onNavigate('/contact')} className={`font-semibold transition-colors ${isLight ? 'text-cyan-700 hover:text-black' : 'hover:text-cyan-400'}`}>Contact Us</button>
          </div>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
          className={`p-1.5 rounded-full border transition-colors ${
            isLight
              ? 'border-black/10 hover:border-black/40 text-black bg-white/50'
              : 'border-white/10 hover:border-white/40 text-cyan-400 bg-white/5'
          }`}
        >
          {isLight ? (
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="8" cy="8" r="3" />
              <line x1="8" y1="1" x2="8" y2="3" />
              <line x1="8" y1="13" x2="8" y2="15" />
              <line x1="1" y1="8" x2="1" y2="8" />
              <line x1="13" y1="8" x2="15" y2="8" />
              <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" />
              <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
              <line x1="3.05" y1="12.95" x2="4.46" y2="11.54" />
              <line x1="11.54" y1="4.46" x2="12.95" y2="3.05" />
            </svg>
          )}
        </button>
      </div>
    </footer>
  );
};
