import React from 'react';
import { HeroIcons } from '../components/HeroIcons';
import { HomeGallery } from '../components/HomeGallery';
import { WebglPorsche911 } from '../components/WebglPorsche911';
import { ServicesGrid } from '../components/ServicesGrid';
import { AiAgentSandbox } from '../components/AiAgentSandbox';

interface HomeProps {
  onNavigate: (path: string) => void;
  isLight: boolean;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, isLight }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center text-center px-5 pt-24 pb-12 overflow-hidden select-none">
        {/* Floating physics sticker icons */}
        <HeroIcons isLight={isLight} />

        {/* Brand Tag Pill */}
        <div className="z-10 mb-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
            Next-Gen Digital Engineering Studio
          </span>
        </div>

        {/* Main Massive Headline */}
        <h1 className="z-10 font-sans font-black text-[clamp(44px,9vw,140px)] leading-[0.92] tracking-tighter text-white uppercase max-w-6xl">
          SUPERCHARGED <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 font-serif font-light italic normal-case">
            By Intelligence.
          </span>
        </h1>

        {/* Strapline */}
        <p className="z-10 mt-6 max-w-2xl font-sans text-sm md:text-lg text-neutral-300 font-normal leading-relaxed px-4">
          <strong className="text-white font-semibold">uperX</strong> architects autonomous AI agents, enterprise-grade software, high-octane 3D web experiences, and algorithmic growth engines that scale companies globally.
        </p>

        {/* Action Buttons */}
        <div className="z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/dashboard')}
            className="px-8 py-4 rounded-full bg-cyan-400 text-black font-sans font-bold text-sm tracking-wide hover:bg-cyan-300 transition-all duration-200 hover:scale-105 shadow-[0_0_25px_rgba(0,242,254,0.35)]"
          >
            Explore Our Services →
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 rounded-full border border-white/30 bg-black/60 text-white font-sans font-medium text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Capabilities Ticker */}
        <div className="z-10 mt-12 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
          <span>• AI Agent Creation</span>
          <span>• Software Engineering</span>
          <span>• 3D WebGL Web</span>
          <span>• SaaS Platforms</span>
          <span>• Growth Marketing</span>
          <span>• Cloud IT</span>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-4 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          [ Scroll to explore engineering archive ]
        </div>
      </section>

      {/* CORE 6 OFFERINGS GRID */}
      <ServicesGrid onSelectService={() => onNavigate('/contact')} />

      {/* INTERACTIVE AI AGENT TERMINAL */}
      <AiAgentSandbox />

      {/* INFINITE DUAL-ROW MARQUEE ARCHIVE */}
      <HomeGallery />

      {/* 3D CONCEPT VEHICLE WRAP STUDIO */}
      <WebglPorsche911 />

      {/* BIG CTA FOOTER BANNER */}
      <section className="w-full max-w-6xl mx-auto px-5 my-24 text-center">
        <div className="p-12 md:p-20 rounded-3xl bg-neutral-900/40 border border-white/10 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-transparent pointer-events-none" />

          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
            uperX Global Lab
          </span>
          <h2 className="font-sans font-black text-3xl md:text-6xl text-white uppercase tracking-tight mb-6 max-w-3xl">
            Have an audacious software or AI vision?
          </h2>
          <p className="font-sans text-sm md:text-base text-neutral-400 max-w-xl mb-8 leading-relaxed">
            From zero to autonomous deployment, we turn complex engineering problems into market-defining digital products.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-sans font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-[0_0_30px_rgba(0,242,254,0.4)]"
          >
            Contact Our Team →
          </button>
        </div>
      </section>
    </div>
  );
};
