import React from 'react';

interface UperXLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  isLight?: boolean;
}

export const UperXLogo: React.FC<UperXLogoProps> = ({
  className = '',
  size = 34,
  showText = false,
  isLight = false,
}) => {
  return (
    <div className={`flex items-center space-x-2.5 select-none ${className}`}>
      <img
        src={isLight ? '/images/uperx_black_logo.png' : '/images/uperx_gold_logo.png'}
        alt="uperX Logo"
        style={{ height: `${size}px`, width: 'auto' }}
        className="object-contain transition-transform duration-300 hover:scale-105"
      />
      {showText && (
        <span
          className={`hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.25em] pl-2 border-l ${
            isLight ? 'border-neutral-300 text-neutral-600' : 'border-white/20 text-neutral-400'
          }`}
        >
          Engineering Studio
        </span>
      )}
    </div>
  );
};
