import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { getHeroIcons } from '../utils/sanity';

interface HeroIconItem {
  id: string;
  title: string;
  image: string;
  darkImage: string;
}

interface HeroIconsProps {
  isLight: boolean;
}

export const HeroIcons: React.FC<HeroIconsProps> = ({ isLight }) => {
  const [allIcons, setAllIcons] = useState<HeroIconItem[]>([]);
  const [activeIcons, setActiveIcons] = useState<HeroIconItem[]>([]);

  useEffect(() => {
    const icons = getHeroIcons();
    setAllIcons(icons);
    if (icons.length >= 4) {
      // Pick 4 random icons initially
      const shuffled = [...icons].sort(() => 0.5 - Math.random());
      setActiveIcons(shuffled.slice(0, 4));
    }
  }, []);

  const handleIconHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rot = (Math.random() - 0.5) * 35;
    gsap.to(el, {
      rotate: rot,
      scale: 1.12,
      duration: 0.35,
      ease: 'back.out(2)',
      yoyo: true,
      repeat: 1,
    });
  };

  const handleIconClick = (index: number) => {
    if (allIcons.length <= 4) return;
    // Find an icon not currently active
    const activeIds = new Set(activeIcons.map((i) => i.id));
    const available = allIcons.filter((i) => !activeIds.has(i.id));
    if (available.length > 0) {
      const nextIcon = available[Math.floor(Math.random() * available.length)];
      setActiveIcons((prev) => {
        const next = [...prev];
        next[index] = nextIcon;
        return next;
      });
    }
  };

  // Fixed positions across the hero screen: top-left, top-right, bottom-left, bottom-right
  const positions = [
    'top-[18%] left-[8%] md:left-[14%]',
    'top-[22%] right-[8%] md:right-[15%]',
    'bottom-[25%] left-[10%] md:left-[18%]',
    'bottom-[28%] right-[10%] md:right-[16%]',
  ];

  if (activeIcons.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {activeIcons.map((icon, idx) => (
        <div
          key={`${icon.id}-${idx}`}
          onClick={() => handleIconClick(idx)}
          onMouseEnter={handleIconHover}
          className={`absolute pointer-events-auto cursor-pointer transition-transform duration-300 select-none ${positions[idx]}`}
          style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
          title="Click to swap sticker"
        >
          <div className="w-24 h-24 md:w-36 md:h-36 relative group">
            <img
              src={isLight ? icon.image : icon.darkImage}
              alt={icon.title || 'Damn Good Brands Icon'}
              className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-105"
              draggable={false}
            />
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          </div>
        </div>
      ))}
    </div>
  );
};
