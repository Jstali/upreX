import React, { useRef } from 'react';
import gsap from 'gsap';
import {
  Icon3DAiCore,
  Icon3DQuantumCode,
  Icon3DSpatialWeb,
  Icon3DCloudShield,
} from './ThreeDIcons';

interface HeroIconsProps {
  isLight: boolean;
}

interface ArtifactItem {
  id: string;
  title: string;
  tag: string;
  component: React.ReactNode;
  floatClass: string;
  position: string;
  accentGlow: string;
}

export const HeroIcons: React.FC<HeroIconsProps> = ({ isLight }) => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const artifacts: ArtifactItem[] = [
    {
      id: 'ai-core',
      title: 'Autonomous Swarms',
      tag: '01 // Neural Core',
      component: <Icon3DAiCore size={84} />,
      floatClass: 'animate-float-1',
      position: 'top-[16%] left-[4%] md:left-[9%]',
      accentGlow: 'rgba(0, 242, 254, 0.35)',
    },
    {
      id: 'spatial-web',
      title: '60FPS Spatial WebGL',
      tag: '02 // GPU Shaders',
      component: <Icon3DSpatialWeb size={84} />,
      floatClass: 'animate-float-2',
      position: 'top-[20%] right-[4%] md:right-[10%]',
      accentGlow: 'rgba(236, 72, 153, 0.35)',
    },
    {
      id: 'quantum-code',
      title: 'Rust Microservices',
      tag: '03 // Sub-MS Core',
      component: <Icon3DQuantumCode size={84} />,
      floatClass: 'animate-float-3',
      position: 'bottom-[22%] left-[5%] md:left-[11%]',
      accentGlow: 'rgba(139, 92, 246, 0.35)',
    },
    {
      id: 'cloud-shield',
      title: 'Zero-Trust Cloud',
      tag: '04 // Cyber Aegis',
      component: <Icon3DCloudShield size={84} />,
      floatClass: 'animate-float-4',
      position: 'bottom-[24%] right-[5%] md:right-[11%]',
      accentGlow: 'rgba(6, 182, 212, 0.35)',
    },
  ];

  const handleArtifactHover = (el: HTMLDivElement | null) => {
    if (!el) return;
    const rot = (Math.random() - 0.5) * 20;
    gsap.to(el, {
      rotate: rot,
      scale: 1.12,
      duration: 0.4,
      ease: 'back.out(2)',
    });
  };

  const handleArtifactLeave = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.to(el, {
      rotate: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleArtifactClick = (el: HTMLDivElement | null) => {
    if (!el) return;
    gsap.timeline()
      .to(el, { scale: 0.88, duration: 0.12, ease: 'power2.in' })
      .to(el, { scale: 1.18, duration: 0.28, ease: 'back.out(3)' })
      .to(el, { scale: 1, duration: 0.24, ease: 'power2.out' });
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {artifacts.map((art, idx) => (
        <div
          key={art.id}
          className={`absolute pointer-events-auto cursor-pointer select-none ${art.position}`}
          style={{ willChange: 'transform' }}
          title={`${art.title} - Click for kinetic pulse`}
        >
          {/* Outer continuous floating wrapper */}
          <div className={art.floatClass}>
            {/* Interactive container */}
            <div
              ref={(node) => (containerRefs.current[idx] = node)}
              onMouseEnter={() => handleArtifactHover(containerRefs.current[idx])}
              onMouseLeave={() => handleArtifactLeave(containerRefs.current[idx])}
              onClick={() => handleArtifactClick(containerRefs.current[idx])}
              className={`group relative p-3 md:p-4 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
                isLight
                  ? 'bg-white/70 border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.1)]'
                  : 'bg-neutral-950/60 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-cyan-400/50'
              }`}
            >
              {/* Dynamic ambient backlight */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: art.accentGlow }}
              />

              {/* 3D Component */}
              <div className="relative z-10 flex flex-col items-center">
                {art.component}

                {/* Floating Micro Label Pill on Hover */}
                <div className="mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 pointer-events-none">
                  <div className="px-2.5 py-1 rounded-full bg-black/80 border border-white/15 backdrop-blur-md flex items-center space-x-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-300 font-bold whitespace-nowrap">
                      {art.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
