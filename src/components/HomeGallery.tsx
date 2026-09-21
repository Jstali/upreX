import React from 'react';
import { getHomeGalleryItems } from '../utils/sanity';

export const HomeGallery: React.FC = () => {
  const items = getHomeGalleryItems();
  if (items.length === 0) return null;

  // Split items into two rows
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  // Duplicate arrays to allow seamless CSS infinite loop
  const row1Loop = [...row1, ...row1, ...row1];
  const row2Loop = [...row2, ...row2, ...row2];

  return (
    <section className="py-20 overflow-hidden w-full select-none">
      <div className="text-center mb-8 px-5">
        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          Featured Brand Archive
        </span>
      </div>

      {/* Row 1: Marquee Left */}
      <div className="flex overflow-hidden py-3 whitespace-nowrap">
        <div className="flex space-x-6 animate-marquee-left">
          {row1Loop.map((item, idx) => (
            <div
              key={`r1-${item.id}-${idx}`}
              className="flex-none w-64 md:w-80 aspect-[4/5] rounded-xl overflow-hidden relative group bg-neutral-900 border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="font-sans font-bold text-sm text-white">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Marquee Right */}
      <div className="flex overflow-hidden py-3 whitespace-nowrap">
        <div className="flex space-x-6 animate-marquee-right">
          {row2Loop.map((item, idx) => (
            <div
              key={`r2-${item.id}-${idx}`}
              className="flex-none w-64 md:w-80 aspect-[4/5] rounded-xl overflow-hidden relative group bg-neutral-900 border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="font-sans font-bold text-sm text-white">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
