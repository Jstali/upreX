import React from 'react';
import { getAboutItems } from '../utils/sanity';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const aboutItems = getAboutItems();

  return (
    <div className="w-full min-h-screen pt-24 pb-24 px-5 md:px-12 max-w-7xl mx-auto flex flex-col space-y-24">
      {/* Header Banner */}
      <section className="text-center md:text-left flex flex-col space-y-6 pt-10 border-b border-white/10 pb-16">
        <div className="inline-flex items-center space-x-2 self-center md:self-start px-3 py-1 rounded-full border border-white/10 bg-white/5">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            About Us // The Manifesto
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl tracking-tight text-white font-normal uppercase">
          Unapologetically <br />
          <span className="italic font-light text-neutral-400">Bold By Design.</span>
        </h1>

        <p className="max-w-2xl font-sans text-lg text-neutral-300 leading-relaxed">
          Damn Good Brands is an (Ad)venture™ fund and creative agency that specializes in launching products and brands in today's digital landscape, both online and in brick-and-mortar retail.
        </p>
      </section>

      {/* THREE PILLARS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col space-y-4">
          <span className="font-mono text-xs text-neutral-500 uppercase">01 // The Model</span>
          <h3 className="font-sans font-bold text-2xl text-white">Skin in the Game</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            We aren't a traditional agency that dumps deliverables and clocks out. We co-invest, partner on equity, and build brand equity alongside our partners.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col space-y-4">
          <span className="font-mono text-xs text-neutral-500 uppercase">02 // The Craft</span>
          <h3 className="font-sans font-bold text-2xl text-white">High-Octane Creative</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            From 3D product visualization to bespoke packaging, editorial typography, and high-velocity digital campaigns, we make sure you can't look away.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10 flex flex-col space-y-4">
          <span className="font-mono text-xs text-neutral-500 uppercase">03 // The Scale</span>
          <h3 className="font-sans font-bold text-2xl text-white">Digital to Shelf</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            From viral internet launch moments to Target, Sephora, and international retail distribution, we build brands that dominate physical and digital shelves.
          </p>
        </div>
      </section>

      {/* TIMELINE / ABOUT ITEMS FROM SANITY */}
      <section className="flex flex-col space-y-16">
        <div className="border-b border-white/10 pb-6 flex justify-between items-end">
          <div>
            <span className="font-mono text-xs text-neutral-500 uppercase block mb-1">
              Chapter History
            </span>
            <h2 className="font-sans font-bold text-3xl text-white">Milestones & Breakthroughs</h2>
          </div>
          <span className="font-mono text-xs text-neutral-400">Charlotte, NC HQ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {aboutItems.length > 0 ? (
            aboutItems.map((item, idx) => (
              <div
                key={item.id || idx}
                className="flex flex-col space-y-4 p-6 rounded-2xl bg-neutral-900/30 border border-white/10 group hover:border-white/30 transition-all"
              >
                {item.image && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-neutral-800 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>{item.year || `202${idx + 1}`}</span>
                  <span>{item.subtitle || 'Milestone'}</span>
                </div>
                <h3 className="font-sans font-bold text-2xl text-white">{item.title}</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed">
                  {item.body || 'Engineering iconic cultural moments through disruptive design.'}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-neutral-500 font-mono text-center py-12">
              Loading milestones archive...
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center pt-16 border-t border-white/10">
        <h3 className="font-serif text-4xl md:text-5xl text-white italic mb-6">
          Want to know how we can elevate your product?
        </h3>
        <button
          onClick={() => onNavigate('/contact')}
          className="px-8 py-4 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 hover:scale-105"
        >
          Let's Work Together
        </button>
      </section>
    </div>
  );
};
