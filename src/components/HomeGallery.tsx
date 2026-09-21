import React from 'react';
import { getHomeGalleryItems } from '../utils/sanity';

export const HomeGallery: React.FC = () => {
  const items = getHomeGalleryItems();
  if (items.length === 0) return null;

  // Split items into two equal rows
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  const renderCard = (item: typeof items[0], keyPrefix: string, idx: number) => (
    <div
      key={`${keyPrefix}-${item.id}-${idx}`}
      className="flex-none w-60 md:w-72 aspect-[4/5] rounded-2xl overflow-hidden relative group bg-neutral-950 border border-white/10 select-none cursor-pointer"
      style={{
        contain: 'layout paint',
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      <img
        src={item.image}
        alt={item.title || 'Brand Project Archive'}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      {/* Low-cost dark overlay that clears on hover (replaces costly GPU grayscale filter) */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

      {/* Caption overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 pointer-events-none">
        <span className="font-mono font-bold text-xs uppercase tracking-wider text-cyan-300">
          {item.title || 'Client Solution'}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden w-full select-none relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-10 px-5 relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-1">
          Featured Engineering & Brand Archive
        </span>
        <h3 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
          Production Deployments Across The Globe
        </h3>
      </div>

      {/* Row 1: Leftward Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-2.5 flex">
        {/* Track A */}
        <div className="marquee-track-left">
          {row1.map((item, idx) => renderCard(item, 'r1a', idx))}
        </div>
        {/* Track B (Identical clone for gapless seamless loop) */}
        <div className="marquee-track-left" aria-hidden="true">
          {row1.map((item, idx) => renderCard(item, 'r1b', idx))}
        </div>
      </div>

      {/* Row 2: Rightward Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-2.5 flex mt-2">
        {/* Track A */}
        <div className="marquee-track-right">
          {row2.map((item, idx) => renderCard(item, 'r2a', idx))}
        </div>
        {/* Track B (Identical clone for gapless seamless loop) */}
        <div className="marquee-track-right" aria-hidden="true">
          {row2.map((item, idx) => renderCard(item, 'r2b', idx))}
        </div>
      </div>
    </section>
  );
};
