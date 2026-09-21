import React, { useState } from 'react';
import { getHypeboardItems } from '../utils/sanity';

interface HypeboardProps {
  onNavigate: (path: string) => void;
}

export const Hypeboard: React.FC<HypeboardProps> = ({ onNavigate }) => {
  const allCards = getHypeboardItems();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeCard, setActiveCard] = useState<any | null>(null);

  // Extract unique categories
  const categories = ['ALL', 'MINDSET', 'EXECUTION', 'CULTURE', 'DISRUPTION'];

  const filteredCards =
    selectedCategory === 'ALL'
      ? allCards
      : allCards.filter(
          (c) =>
            (c.category && c.category.toUpperCase() === selectedCategory) ||
            c.title.toUpperCase().includes(selectedCategory)
        );

  return (
    <div className="w-full min-h-screen pt-24 pb-24 px-5 md:px-12 max-w-7xl mx-auto flex flex-col space-y-12">
      {/* Header Banner */}
      <section className="text-center flex flex-col items-center space-y-4 pt-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            Hypeboard // Daily Motivation
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl tracking-tight text-white font-normal uppercase">
          Fuel For The <span className="italic font-light text-neutral-400">Obsessed.</span>
        </h1>

        <p className="max-w-xl font-sans text-sm md:text-base text-neutral-400">
          Daily reminders, raw mindset, and relentless motivation to get your game head on and make that dent.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold scale-105'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* CARD MATRIX GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 select-none">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, idx) => (
            <div
              key={card.id || idx}
              onClick={() => setActiveCard(card)}
              className="relative p-6 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/40 cursor-pointer flex flex-col justify-between min-h-[260px] group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Category Tag */}
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase">
                <span>{card.category || 'Mindset'}</span>
                <span>#{String(idx + 1).padStart(2, '0')}</span>
              </div>

              {/* Quote / Headline */}
              <div className="my-4">
                <p className="font-sans font-bold text-lg md:text-xl text-white group-hover:text-amber-300 transition-colors leading-snug">
                  "{card.quote || card.title || 'Make things people actually talk about.'}"
                </p>
              </div>

              {/* Author / Source */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-400">
                <span>— {card.author || 'DGB Manifesto'}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  ↗
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center font-mono text-sm text-neutral-500">
            No cards found in this category.
          </div>
        )}
      </section>

      {/* ACTIVE CARD DETAIL MODAL */}
      {activeCard && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="max-w-lg w-full bg-neutral-900 border border-white/20 rounded-3xl p-8 relative flex flex-col space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400 border-b border-white/10 pb-4">
              <span className="uppercase tracking-wider">{activeCard.category || 'MINDSET'}</span>
              <button
                onClick={() => setActiveCard(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            <p className="font-serif text-3xl md:text-4xl text-white italic leading-tight">
              "{activeCard.quote || activeCard.title}"
            </p>

            <div className="font-mono text-sm text-neutral-400 border-t border-white/10 pt-4 flex justify-between items-center">
              <span>Author: {activeCard.author || 'Damn Good Brands HQ'}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(activeCard.quote || activeCard.title);
                  alert('Copied quote to clipboard!');
                }}
                className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs text-white uppercase font-mono"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
