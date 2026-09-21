import React, { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isLight: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, isLight }) => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
    { name: 'Hypeboard', path: '/hypeboard' },
    { name: "Let's Work", path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <nav className="flex items-center justify-between px-5 md:px-10 py-5">
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
                  className={`text-[15px] tracking-tight transition-colors font-medium ${
                    isActive
                      ? isLight ? 'text-black' : 'text-white'
                      : isLight ? 'text-neutral-500 hover:text-black' : 'text-neutral-400 hover:text-white'
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
                      stroke="#ff0022"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center: DGB Logo */}
        <div
          onClick={() => onNavigate('/')}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <svg
            className={`w-12 h-12 md:w-14 md:h-14 transition-colors ${
              isLight ? 'text-black' : 'text-white'
            }`}
            viewBox="0 0 1000 900"
            fill="currentColor"
          >
            <path d="M551.81,896.38H0l282.04-387.8c-9.4-3.04-18.69-6.49-27.86-10.37-40.28-17.04-76.44-41.41-107.48-72.45-30.45-30.45-54.49-65.84-71.48-105.21-18.51-42.91-27.58-89.31-27.58-136.04V0h504.17c60.47,0,119.17,11.86,174.48,35.25,53.38,22.58,101.37,55.51,142.66,97.89,41.28,42.37,73.18,91.82,94.8,146.96,21.62,55.14,32.58,114.73,32.58,177.13s-10.96,122-32.58,177.13c-21.62,55.14-53.52,104.59-94.8,146.96-41.28,42.38-89.28,75.31-142.66,97.89-55.31,23.39-114.01,35.25-174.48,35.25v-181.82c35.79,0,70.52-7.02,103.22-20.86,31.59-13.37,59.98-32.85,84.38-57.91,24.4-25.06,43.27-54.32,56.09-86.97,12.82-32.65,19.32-67.93,19.32-104.87s-6.5-72.22-19.32-104.87c-12.82-32.65-31.69-61.91-56.09-86.97-24.4-25.06-52.79-44.54-84.38-57.91-32.7-13.84-67.43-20.86-103.22-20.86H264.63v184.51c0,27.63,5.37,55.1,15.96,81.65,10.23,25.66,24.87,48.74,43.51,68.61,18.64,19.87,40.38,35.47,64.63,46.36,23.44,10.53,48.24,16.59,73.71,18.01l-10.63,14.62,100,137.51Z" />
          </svg>
        </div>

        {/* Right: Empty spacer for balance or mobile hamburger */}
        <div className="flex items-center space-x-4">
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
          className={`md:hidden fixed inset-0 top-[75px] z-40 p-8 flex flex-col justify-start space-y-8 ${
            isLight ? 'bg-neutral-100 text-black' : 'bg-black text-white'
          }`}
        >
          {navLinks.map((link) => (
            <div
              key={link.path}
              onClick={() => {
                onNavigate(link.path);
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-bold font-sans cursor-pointer hover:text-red-500"
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
