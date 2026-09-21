import React, { useEffect, useState } from 'react';

interface FooterProps {
  paintballActive: boolean;
  onTogglePaintball: () => void;
  isLight: boolean;
  onToggleTheme: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  paintballActive,
  onTogglePaintball,
  isLight,
  onToggleTheme,
}) => {
  const [charlotteTime, setCharlotteTime] = useState('');
  const [weatherTemp, setWeatherTemp] = useState('72°F');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCharlotteTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch live weather for Charlotte, NC (or fallback gracefully)
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Charlotte,US&units=imperial&appid=cda30b1182e9e745a01bf2651cb88e3d'
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.main?.temp) {
          setWeatherTemp(`${Math.round(data.main.temp)}°F`);
        }
      })
      .catch(() => {
        setWeatherTemp('72°F');
      });
  }, []);

  return (
    <footer className="w-full py-8 px-5 md:px-10 flex flex-col md:flex-row items-center justify-between text-xs tracking-tight select-none border-t border-white/10 dark:border-white/10 transition-colors z-40 relative">
      {/* Left: Paintball Mode Toggle */}
      <div className="flex items-center space-x-3 mb-6 md:mb-0">
        <button
          id="paintball--toggle"
          onClick={onTogglePaintball}
          className={`flex items-center space-x-2.5 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            paintballActive
              ? 'bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(255,0,0,0.5)]'
              : isLight
              ? 'bg-neutral-200 border-neutral-300 text-neutral-800 hover:border-black'
              : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-white/40'
          }`}
          aria-label="Toggle Paintball Mode"
        >
          <div
            className={`w-3.5 h-3.5 rounded-full transition-colors duration-300 ${
              paintballActive ? 'bg-white animate-ping' : isLight ? 'bg-black' : 'bg-white/40'
            }`}
          />
          <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
            {paintballActive ? 'Hit it!' : 'Shoot the shit'}
          </span>
        </button>
      </div>

      {/* Center: Scroll indicator, Globe wireframe, Charlotte NC details */}
      <div className="flex items-center space-x-6 mb-6 md:mb-0 text-center md:text-left">
        {/* Animated Chevron Indicator */}
        <div className="hidden lg:flex flex-col items-center justify-center opacity-70">
          <svg width="24" height="24" viewBox="0 0 75 100" fill="currentColor">
            <polygon className="scroll-indicator-arrow-1" points="0 0 37.5 24.11 75 0 75 15.89 37.5 40 0 15.89 0 0" />
            <polygon className="scroll-indicator-arrow-2" points="0 30 37.5 54.11 75 30 75 45.89 37.5 70 0 45.89 0 30" />
            <polygon className="scroll-indicator-arrow-3" points="0 60 37.5 84.11 75 60 75 75.89 37.5 100 0 75.89 0 60" />
          </svg>
        </div>

        {/* Wireframe Globe SVG */}
        <div className="hidden sm:block opacity-60 hover:opacity-100 transition-opacity">
          <svg className="w-10 h-6" viewBox="0 0 902 490.22" fill="currentColor">
            <path d="M847.04,249.62c-.6-60.9-61.86-115.07-156.4-149.56-.9-.77-1.97-1.16-3.12-1.17-66.48-23.76-149.03-37.85-238.36-37.85h-.01s-.02,0-.04,0c-89.3,0-171.82,14.09-238.29,37.85-.98.05-1.9.39-2.69,1.01C112.86,134.55,51.24,189.17,51.24,250.53s61.53,115.89,156.67,150.55c.85.7,1.86,1.07,2.94,1.1,66.46,23.74,148.97,37.83,238.26,37.83.01,0,.02,0,.04,0h.01c89.23,0,171.69-14.06,238.14-37.77.03,0,.05.03.08.03,1.08,0,2.08-.48,2.95-1.16,94.72-34.48,156.1-88.71,156.7-149.67.06-.3.18-.58.18-.9s-.12-.6-.18-.9ZM676.44,105.01c-7.46,4.46-16.03,8.64-25.43,12.55-22.26-15.08-48.26-27.67-76.99-37.12,36.95,5.83,71.4,14.16,102.42,24.57ZM454.06,322.86c4.28-20.23,11.27-34.67,21.95-45.27,10.98-10.88,25.89-17.83,46.92-21.88v-.29h59.82c-.7,34.56-8.62,66.71-21.91,93.77-32.94-5.29-69.12-8.24-106.78-8.47v-17.86ZM175.48,245.63c1.86-45.12,29.13-86.13,72.83-117.07,22.52,8.96,49.42,16.26,79.3,21.61-13.25,27.84-21.15,60.45-21.83,95.47h-130.29ZM327.6,350.89c-29.88,5.34-56.79,12.63-79.33,21.59-43.67-30.94-70.94-71.95-72.79-117.05h130.29c.68,35.01,8.59,67.63,21.83,95.46Z" />
          </svg>
        </div>

        {/* Location & Time / Weather */}
        <div className="font-mono text-[11px] leading-tight space-y-0.5">
          <p className="font-sans font-bold uppercase tracking-wider text-[12px]">Unapologetically Bold</p>
          <p className="text-neutral-400">
            Charlotte — NC <span className="mx-1.5">•</span> {charlotteTime || '12:00:00 PM'} <span className="mx-1.5">•</span> {weatherTemp}
          </p>
        </div>
      </div>

      {/* Right: Credits, Instagram link, Theme Toggle */}
      <div className="flex items-center space-x-6 font-mono text-[11px]">
        <a
          href="https://www.madebyanalogue.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-neutral-400 hover:text-current transition-colors"
        >
          Madebyanalogue
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/damngoodbrands"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram"
          className="text-neutral-400 hover:text-current transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
          className="p-1 rounded hover:bg-neutral-800/40 transition-colors"
        >
          {isLight ? (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="8" cy="8" r="3" />
              <line x1="8" y1="1" x2="8" y2="3" />
              <line x1="8" y1="13" x2="8" y2="15" />
              <line x1="1" y1="8" x2="3" y2="8" />
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
