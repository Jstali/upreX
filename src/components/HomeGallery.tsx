import React from 'react';
import { getHomeGalleryItems } from '../utils/sanity';

export const HomeGallery: React.FC = () => {
  const allItems = getHomeGalleryItems();
  if (allItems.length === 0) return null;

  // Curate top 14 items (7 per row) for instantaneous 60fps/120fps GPU performance
  const curated = allItems.slice(0, 14);
  const row1 = curated.slice(0, 7);
  const row2 = curated.slice(7, 14);

  const renderCard = (item: typeof allItems[0], keyPrefix: string, idx: number) => (
    <div
      key={`${keyPrefix}-${item.id}-${idx}`}
      className="flex-none w-56 md:w-64 aspect-[4/5] rounded-2xl overflow-hidden relative group bg-neutral-950 border border-white/10 select-none cursor-pointer"
      style={{
        contain: 'paint layout',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
      }}
    >
      <img
        src={item.image}
        alt={item.title || 'Brand Project Archive'}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      {/* Low-cost dark overlay that clears on hover */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-200 pointer-events-none" />

      {/* Caption overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4 pointer-events-none">
        <span className="font-mono font-bold text-xs uppercase tracking-wider text-cyan-300">
          {item.title || 'Client Solution'}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-20 overflow-hidden w-full select-none relative">
      {/* Zero-cost GPU radial gradient ambient lighting (replaces expensive blur filters) */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        }}
      />

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
