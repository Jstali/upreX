import React, { useState } from 'react';

interface InsightCard {
  id: string;
  category: string;
  title: string;
  quote: string;
  author: string;
}

const UPERX_PULSE_CARDS: InsightCard[] = [
  {
    id: '1',
    category: 'AI AGENTS',
    title: 'Autonomous Multi-Agent Swarms',
    quote: 'The future of software is not writing more deterministic code. It is orchestrating goal-driven autonomous agent swarms that decompose, verify, and execute tasks dynamically.',
    author: 'uperX AI Labs',
  },
  {
    id: '2',
    category: 'SOFTWARE',
    title: 'Zero-Downtime Microservices',
    quote: 'Resilience is not an afterthought. Build decoupled, asynchronous, event-driven architectures that degrade gracefully under peak load.',
    author: 'uperX Systems Lead',
  },
  {
    id: '3',
    category: '3D WEB',
    title: 'Spatial Web & Emotion',
    quote: 'Websites that convert are websites that evoke emotional resonance. WebGL and spatial physics turn passive visitors into engaged explorers.',
    author: 'uperX Creative Tech',
  },
  {
    id: '4',
    category: 'GROWTH',
    title: 'Algorithmic Distribution',
    quote: 'A 10x product with 1x distribution will always lose to a 5x product with 10x algorithmic acquisition. Engineering and marketing must be symbiotic.',
    author: 'uperX Growth Engine',
  },
  {
    id: '5',
    category: 'AI AGENTS',
    title: 'Cognitive RAG vs Naive Search',
    quote: 'Traditional vector embeddings only scratch the surface. Hybrid graph-relational RAG creates deep associative contextual awareness for LLMs.',
    author: 'uperX Research',
  },
  {
    id: '6',
    category: 'CLOUD & IT',
    title: 'Zero-Trust Infrastructure',
    quote: 'Never trust, always verify. Isolate blast radiuses, enforce mutual TLS, and automate credential rotation across all Kubernetes pods.',
    author: 'uperX Security Team',
  },
  {
    id: '7',
    category: 'SOFTWARE',
    title: 'Type Safety & Speed',
    quote: 'Strict TypeScript across the boundary with Rust-powered backends eliminates 90% of production errors before the first build completes.',
    author: 'uperX Dev Guild',
  },
  {
    id: '8',
    category: '3D WEB',
    title: '60FPS Framerate Law',
    quote: 'Every dropped frame is a micro-friction in user trust. Optimize geometry buffers, compile shaders early, and minimize draw calls.',
    author: 'uperX 3D Lab',
  },
];

interface HypeboardProps {
  onNavigate: (path: string) => void;
}

export const Hypeboard: React.FC<HypeboardProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeCard, setActiveCard] = useState<InsightCard | null>(null);

  const categories = ['ALL', 'AI AGENTS', 'SOFTWARE', '3D WEB', 'GROWTH', 'CLOUD & IT'];

  const filteredCards =
    selectedCategory === 'ALL'
      ? UPERX_PULSE_CARDS
      : UPERX_PULSE_CARDS.filter((c) => c.category === selectedCategory);

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-12 max-w-7xl mx-auto flex flex-col space-y-12 select-none">
      {/* Header Banner */}
      <section className="text-center flex flex-col items-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
            Tech Pulse // Engineering Insights
          </span>
        </div>

        <h1 className="font-sans font-black text-5xl md:text-8xl tracking-tight text-white uppercase">
          Signals From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 font-serif italic font-light normal-case">Frontier.</span>
        </h1>

        <p className="max-w-xl font-sans text-sm md:text-base text-neutral-400">
          Curated paradigms, architectural laws, and strategic insights from the engineers and creators at uperX.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-400 text-black font-bold scale-105 shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* CARD MATRIX GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCards.map((card, idx) => (
          <div
            key={card.id || idx}
            onClick={() => setActiveCard(card)}
            className="relative p-7 rounded-3xl bg-neutral-950/70 border border-white/10 hover:border-cyan-400/50 cursor-pointer flex flex-col justify-between min-h-[280px] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)]"
          >
            {/* Top Category Tag */}
            <div className="flex justify-between items-center text-[10px] font-mono uppercase">
              <span className="text-cyan-400 font-bold tracking-wider">{card.category}</span>
              <span className="text-neutral-500">#{String(idx + 1).padStart(2, '0')}</span>
            </div>

            {/* Title & Quote */}
            <div className="my-4">
              <h4 className="font-sans font-bold text-sm text-neutral-300 mb-2 group-hover:text-white transition-colors">
                {card.title}
              </h4>
              <p className="font-sans font-medium text-base text-white/90 leading-snug group-hover:text-cyan-200 transition-colors">
                "{card.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-400">
              <span>— {card.author}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400">
                ↗
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* DETAIL MODAL */}
      {activeCard && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActiveCard(null)}
        >
          <div
            className="max-w-lg w-full bg-neutral-950 border border-cyan-500/40 rounded-3xl p-8 relative flex flex-col space-y-6 shadow-[0_0_50px_rgba(0,242,254,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center text-xs font-mono text-cyan-400 border-b border-white/10 pb-4">
              <span className="uppercase tracking-wider">{activeCard.category} // SIGNAL</span>
              <button
                onClick={() => setActiveCard(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <h3 className="font-sans font-bold text-lg text-white mb-3">
                {activeCard.title}
              </h3>
              <p className="font-sans text-xl text-neutral-200 leading-relaxed">
                "{activeCard.quote}"
              </p>
            </div>

            <div className="font-mono text-xs text-neutral-400 border-t border-white/10 pt-4 flex justify-between items-center">
              <span>Source: {activeCard.author}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(activeCard.quote);
                  alert('Copied insight to clipboard!');
                }}
                className="px-3 py-1.5 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-colors uppercase font-mono text-[11px]"
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
