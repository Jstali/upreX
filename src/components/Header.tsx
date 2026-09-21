import React, { useState } from 'react';
import { UperXLogo } from './UperXLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isLight: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, isLight }) => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'OS Lab', path: '/dashboard' },
    { name: 'Expertise', path: '/about' },
    { name: 'Tech Pulse', path: '/hypeboard' },
    { name: "Initiate Project", path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md bg-black/40 border-b border-white/5">
      <nav className="flex items-center justify-between px-5 md:px-12 py-4">
        {/* Left: Nav Links with animated SVG underline */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            const isHovered = hoveredNav === link.path;
            return (
              <div
                key={link.path}
                className="relative pb-1 cursor-pointer group"
                onMouseEnter={() => setHoveredNav(link.path)}
                onMouseLeave={() => setHoveredNav(null)}
                onClick={() => onNavigate(link.path)}
              >
                <span
                  className={`text-[14px] tracking-tight transition-colors font-medium font-mono uppercase ${
                    isActive
                      ? isLight ? 'text-black font-bold' : 'text-cyan-400 font-bold'
                      : isLight ? 'text-neutral-600 hover:text-black' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated SVG underline effect */}
                <div
                  className={`absolute -bottom-1 left-0 w-full h-[6px] overflow-hidden pointer-events-none transition-all duration-300 ${
                    isActive || isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 4 Q 25 1, 50 4 T 100 4"
                      fill="none"
                      stroke="#00f2fe"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center: uperX Logo */}
        <div
          onClick={() => onNavigate('/')}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <UperXLogo size={42} showText={true} />
        </div>

        {/* Right: Quick Action button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-mono text-xs uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Deploy AI</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-current focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 top-[70px] z-40 p-8 flex flex-col justify-start space-y-8 backdrop-blur-xl ${
            isLight ? 'bg-neutral-100/95 text-black' : 'bg-black/95 text-white'
          }`}
        >
          {navLinks.map((link) => (
            <div
              key={link.path}
              onClick={() => {
                onNavigate(link.path);
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-bold font-mono uppercase cursor-pointer hover:text-cyan-400"
            >
              {link.name}
            </div>
          ))}
          <button
            onClick={() => {
              onNavigate('/contact');
              setMobileMenuOpen(false);
            }}
            className="w-full py-4 rounded-xl bg-cyan-400 text-black font-mono font-bold text-sm uppercase tracking-wider"
          >
            Deploy AI Agent Now
          </button>
        </div>
      )}
    </header>
  );
};
