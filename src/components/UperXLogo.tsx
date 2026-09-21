import React from 'react';

interface UperXLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const UperXLogo: React.FC<UperXLogoProps> = ({
  className = '',
  size = 48,
  showText = false,
}) => {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Geometric Neon Icon */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 400 440"
          className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,255,200,0.6)]"
        >
          <defs>
            <linearGradient id="uperxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe">
                <animate
                  attributeName="stop-color"
                  values="#00f2fe;#4facfe;#ff0844;#ffb199;#00f2fe"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#4facfe">
                <animate
                  attributeName="stop-color"
                  values="#4facfe;#ff0844;#ffb199;#00f2fe;#4facfe"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            <linearGradient id="uperxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff0844">
                <animate
                  attributeName="stop-color"
                  values="#ff0844;#f7ee8e;#43e97b;#00f2fe;#ff0844"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#f7ee8e">
                <animate
                  attributeName="stop-color"
                  values="#f7ee8e;#43e97b;#00f2fe;#ff0844;#f7ee8e"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          {/* Top Chevron (Upward Pointing / U) */}
          <path
            d="M 100 180 L 200 80 L 300 180"
            fill="none"
            stroke="url(#uperxGrad1)"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bottom Intersecting Cross (X) */}
          <line
            x1="100"
            y1="220"
            x2="300"
            y2="380"
            stroke="url(#uperxGrad2)"
            strokeWidth="32"
            strokeLinecap="round"
          />
          <line
            x1="300"
            y1="220"
            x2="100"
            y2="380"
            stroke="url(#uperxGrad1)"
            strokeWidth="32"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-sans font-black text-2xl tracking-tighter uppercase text-white leading-none">
            uper<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300">X</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">
            Digital Engineering
          </span>
        </div>
      )}
    </div>
  );
};
