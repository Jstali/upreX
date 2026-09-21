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

  // Clear, intuitive names that any visitor instantly understands
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Work', path: '/dashboard' },
    { name: 'About Us', path: '/about' },
    { name: 'Insights & Blog', path: '/hypeboard' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-white/10 ${isLight ? 'bg-white/95 text-black' : 'bg-black/95 text-white'}`}>
      <nav className="flex items-center justify-between px-5 md:px-10 py-3.5">
        {/* Left: Brand Logo */}
        <div
          onClick={() => onNavigate('/')}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <UperXLogo size={38} showText={true} />
        </div>

        {/* Center: Clear, Simple Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            const isHovered = hoveredNav === link.path;
            return (
              <div
                key={link.path}
                className="relative py-1 cursor-pointer group"
                onMouseEnter={() => setHoveredNav(link.path)}
                onMouseLeave={() => setHoveredNav(null)}
                onClick={() => onNavigate(link.path)}
              >
                <span
                  className={`text-[14px] font-sans font-medium tracking-wide transition-colors ${
                    isActive
                      ? isLight ? 'text-black font-bold' : 'text-cyan-400 font-bold'
                      : isLight ? 'text-neutral-600 hover:text-black' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated SVG underline indicator */}
                <div
                  className={`absolute -bottom-1 left-0 w-full h-[5px] overflow-hidden pointer-events-none transition-all duration-300 ${
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

        {/* Right: Prominent "Get In Touch" Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
          >
            <span>Get in Touch</span>
            <span>→</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-current focus:outline-none"
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
          className={`lg:hidden fixed inset-0 top-[65px] z-40 p-8 flex flex-col justify-start space-y-6 backdrop-blur-2xl ${
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
              className={`text-2xl font-bold font-sans cursor-pointer transition-colors ${
                currentPath === link.path ? 'text-cyan-400' : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.name}
            </div>
          ))}
          <button
            onClick={() => {
              onNavigate('/contact');
              setMobileMenuOpen(false);
            }}
            className="w-full py-4 rounded-2xl bg-cyan-400 text-black font-sans font-bold text-sm uppercase tracking-wider mt-4 shadow-lg shadow-cyan-500/20"
          >
            Contact Us Now →
          </button>
        </div>
      )}
    </header>
  );
};
