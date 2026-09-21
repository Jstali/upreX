import React from 'react';
import { HeroIcons } from '../components/HeroIcons';
import { HomeGallery } from '../components/HomeGallery';
import { WebglPorsche911 } from '../components/WebglPorsche911';
import { getHomeItems } from '../utils/sanity';

interface HomeProps {
  onNavigate: (path: string) => void;
  isLight: boolean;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, isLight }) => {
  const homeItems = getHomeItems();

  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center px-5 pt-20 overflow-hidden select-none">
        {/* Floating physics sticker icons */}
        <HeroIcons isLight={isLight} />

        {/* Subtitle tag */}
        <div className="z-10 mb-4 inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-300">
            Creative Agency & (Ad)venture™ Fund
          </span>
        </div>

        {/* Main Massive Headline */}
        <h1 className="z-10 font-serif text-[clamp(48px,11vw,160px)] leading-[0.9] tracking-tighter text-white font-normal uppercase max-w-6xl">
          Damn Good <br />
          <span className="italic font-light text-neutral-300">Brands</span>
        </h1>

        {/* Strapline */}
        <p className="z-10 mt-6 max-w-xl font-sans text-sm md:text-base text-neutral-400 font-normal leading-relaxed px-4">
          We build, launch, and invest in unapologetically bold brands across the digital landscape and retail world.
        </p>

        {/* Action Buttons */}
        <div className="z-10 mt-8 flex items-center space-x-4">
          <button
            onClick={() => onNavigate('/dashboard')}
            className="px-6 py-3 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 hover:scale-105"
          >
            Explore Dashboard
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 rounded-full border border-white/20 bg-transparent text-white font-sans font-medium text-xs uppercase tracking-wider hover:border-white transition-all duration-200"
          >
            Let's Work
          </button>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-6 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          [ Scroll to explore archive ]
        </div>
      </section>

      {/* INFINITE DUAL-ROW MARQUEE ARCHIVE */}
      <HomeGallery />

      {/* EDITORIAL CONTENT SECTIONS FROM SANITY */}
      <section className="w-full max-w-6xl mx-auto px-5 md:px-10 py-20 flex flex-col space-y-24">
        {homeItems.map((item, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={item.id || idx}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                isReversed ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Media */}
              {item.mediaUrl && (
                <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative group">
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Text */}
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  0{idx + 1} // Archive Focus
                </span>
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight">
                  {item.title}
                </h2>
                <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed">
                  {item.text ||
                    'Pushing creative limits through disruptive product positioning, culture-first narrative design, and high-octane executions.'}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3D PORSCHE 911 WRAP STUDIO */}
      <WebglPorsche911 />

      {/* BIG CTA FOOTER BANNER */}
      <section className="w-full max-w-6xl mx-auto px-5 my-24 text-center">
        <div className="p-12 md:p-20 rounded-3xl bg-neutral-900/40 border border-white/10 flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
            New Business
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white italic font-light mb-6">
            Ready to build something <span className="font-sans font-bold not-italic">unforgettable?</span>
          </h2>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 hover:scale-105"
          >
            Let's Collaborate
          </button>
        </div>
      </section>
    </div>
  );
};
