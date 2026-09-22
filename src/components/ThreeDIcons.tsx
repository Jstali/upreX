import React from 'react';

interface Icon3DProps {
  className?: string;
  size?: number;
}

/**
 * 1. 3D AUTONOMOUS AI CORE
 * Multi-layer isometric neural sphere with floating orbital gimbal rings,
 * glassmorphic specular cap, and radiant cyber-synapse nodes.
 */
export const Icon3DAiCore: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none group/icon ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient Radial Backlight */}
      <div
        className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl opacity-60 group-hover/icon:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-3 drop-shadow-[0_10px_20px_rgba(0,242,254,0.35)]"
      >
        <defs>
          <linearGradient id="aiCoreGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="aiFacetTop" x1="50" y1="20" x2="50" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="aiFacetLeft" x1="20" y1="50" x2="50" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="aiFacetRight" x1="80" y1="50" x2="50" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>

          <radialGradient id="aiCoreGlow" cx="50" cy="50" r="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#00f2fe" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer 3D Gyroscope Ring */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="16"
          transform="rotate(-25 50 50)"
          stroke="url(#aiCoreGrad)"
          strokeWidth="2.5"
          strokeDasharray="4 2"
          opacity="0.8"
        />

        {/* Outer Orbital Orbiting Satellite Nodes */}
        <circle cx="20" cy="36" r="3.5" fill="#00f2fe" className="animate-pulse" />
        <circle cx="80" cy="64" r="3" fill="#a855f7" />

        {/* Main 3D Isometric Polyhedral Core */}
        {/* Top Facet */}
        <polygon points="50,18 78,35 50,52 22,35" fill="url(#aiFacetTop)" />
        {/* Left Bottom Facet */}
        <polygon points="22,35 50,52 50,84 22,67" fill="url(#aiFacetLeft)" />
        {/* Right Bottom Facet */}
        <polygon points="50,52 78,35 78,67 50,84" fill="url(#aiFacetRight)" />

        {/* Wireframe Bevel Edges */}
        <path
          d="M50,18 L78,35 L50,52 L22,35 Z M50,52 L50,84 M22,35 L22,67 L50,84 M78,35 L78,67 L50,84"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />

        {/* Internal Radiant Quantum Node */}
        <circle cx="50" cy="50" r="14" fill="url(#aiCoreGlow)" />
        <polygon points="50,42 57,50 50,58 43,50" fill="#ffffff" />
      </svg>
    </div>
  );
};

/**
 * 2. 3D QUANTUM SOFTWARE PROCESSOR
 * Isometric silicon monolith chip with dimensional bus conduits,
 * etched laser micro-traces, and electric high-throughput lightning core.
 */
export const Icon3DQuantumCode: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none group/icon ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-xl opacity-60 group-hover/icon:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-3 drop-shadow-[0_10px_20px_rgba(139,92,246,0.35)]"
      >
        <defs>
          <linearGradient id="codeGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="chipTop" x1="50" y1="16" x2="50" y2="52" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4338ca" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="chipLeft" x1="16" y1="52" x2="50" y2="84" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="chipRight" x1="84" y1="52" x2="50" y2="84" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>
        </defs>

        {/* 3D Dimensional Base Plate */}
        <polygon points="50,14 86,33 50,52 14,33" fill="url(#chipTop)" />
        <polygon points="14,33 50,52 50,82 14,63" fill="url(#chipLeft)" />
        <polygon points="50,52 86,33 86,63 50,82" fill="url(#chipRight)" />

        {/* Beveled Edge Highlight */}
        <polygon
          points="50,14 86,33 50,52 14,33"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />

        {/* Circuit Bus Pins on Sides */}
        <line x1="24" y1="68" x2="16" y2="72" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="34" y1="73" x2="26" y2="77" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="44" y1="78" x2="36" y2="82" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />

        <line x1="76" y1="68" x2="84" y2="72" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="66" y1="73" x2="74" y2="77" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="56" y1="78" x2="64" y2="82" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />

        {/* Glowing Quantum Lightning Cutout */}
        <path
          d="M52,22 L40,36 L48,36 L44,48 L58,34 L50,34 Z"
          fill="#ffffff"
          className="filter drop-shadow-[0_0_8px_#ffffff]"
        />

        {/* High-speed Logic Nodes */}
        <circle cx="32" cy="27" r="2.5" fill="#38bdf8" />
        <circle cx="68" cy="27" r="2.5" fill="#e879f9" />
        <circle cx="50" cy="48" r="2.5" fill="#34d399" />
      </svg>
    </div>
  );
};

/**
 * 3. 3D SPATIAL WEB & 60FPS SHADER ENGINE
 * Refractive 3D icosahedral crystal with chromatic dispersion,
 * floating coordinate axis pins, and tactile physics rings.
 */
export const Icon3DSpatialWeb: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none group/icon ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-pink-500/20 blur-xl opacity-60 group-hover/icon:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-6 drop-shadow-[0_10px_20px_rgba(236,72,153,0.35)]"
      >
        <defs>
          <linearGradient id="spatialGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>

          <radialGradient id="prismGlow" cx="50" cy="50" r="35" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Interlocking 3D Torus Rings */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="url(#spatialGrad)"
          strokeWidth="2"
          strokeDasharray="6 3"
          opacity="0.6"
        />

        <ellipse
          cx="50"
          cy="50"
          rx="38"
          ry="14"
          transform="rotate(45 50 50)"
          stroke="#f43f5e"
          strokeWidth="1.8"
          opacity="0.7"
        />

        {/* Central Refractive 3D Diamond / Icosahedron */}
        {/* Top Crystal Dome */}
        <polygon points="50,18 68,36 50,44 32,36" fill="#fb7185" fillOpacity="0.7" />
        <polygon points="32,36 50,44 50,68 24,52" fill="#e11d48" />
        <polygon points="50,44 68,36 76,52 50,68" fill="#9f1239" />
        <polygon points="50,68 76,52 50,84 24,52" fill="#fbbf24" fillOpacity="0.8" />

        {/* Facet Edge Highlights */}
        <path
          d="M50,18 L68,36 L76,52 L50,84 L24,52 L32,36 Z M32,36 L50,44 L68,36 M50,44 L50,68 L50,84 M24,52 L50,68 L76,52"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeOpacity="0.75"
        />

        {/* Core Radiance */}
        <circle cx="50" cy="50" r="10" fill="url(#prismGlow)" />
        <circle cx="50" cy="50" r="3" fill="#ffffff" />

        {/* Vertex Markers */}
        <circle cx="50" cy="18" r="2.5" fill="#fef08a" />
        <circle cx="76" cy="52" r="2.5" fill="#f43f5e" />
        <circle cx="24" cy="52" r="2.5" fill="#38bdf8" />
      </svg>
    </div>
  );
};

/**
 * 4. 3D SAAS PLATFORM & MODULAR SYSTEM
 * Tiered isometric floating glass platforms with database cylinder,
 * API connectors, and translucent multi-tenant strata.
 */
export const Icon3DSaasLayers: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none group/icon ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-amber-500/20 blur-xl opacity-60 group-hover/icon:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-1 drop-shadow-[0_10px_20px_rgba(245,158,11,0.35)]"
      >
        <defs>
          <linearGradient id="saasGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          <linearGradient id="tier1" x1="50" y1="56" x2="50" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="tier2" x1="50" y1="36" x2="50" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="tier3" x1="50" y1="16" x2="50" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Tier 1: Bottom Base Platform */}
        <polygon points="50,56 86,72 50,88 14,72" fill="url(#tier1)" />
        <polygon points="14,72 50,88 50,92 14,76" fill="#78350f" />
        <polygon points="50,88 86,72 86,76 50,92" fill="#451a03" />
        <polygon points="50,56 86,72 50,88 14,72" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />

        {/* Tier 2: Mid Stack Platform */}
        <polygon points="50,36 82,50 50,64 18,50" fill="url(#tier2)" />
        <polygon points="18,50 50,64 50,68 18,54" fill="#92400e" />
        <polygon points="50,64 82,50 82,54 50,68" fill="#78350f" />
        <polygon points="50,36 82,50 50,64 18,50" stroke="#fef08a" strokeWidth="1" strokeOpacity="0.6" />

        {/* Tier 3: Top Crown Platform */}
        <polygon points="50,16 78,28 50,40 22,28" fill="url(#tier3)" />
        <polygon points="22,28 50,40 50,44 22,32" fill="#b45309" />
        <polygon points="50,40 78,28 78,32 50,44" fill="#92400e" />
        <polygon points="50,16 78,28 50,40 22,28" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" />

        {/* Floating Database Cylinders & API Nodes */}
        <ellipse cx="50" cy="24" rx="8" ry="4" fill="#ffffff" />
        <ellipse cx="50" cy="27" rx="8" ry="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="0.8" />
        <circle cx="34" cy="46" r="3" fill="#38bdf8" className="animate-pulse" />
        <circle cx="66" cy="46" r="3" fill="#4ade80" />
      </svg>
    </div>
  );
};

/**
 * 5. 3D ALGORITHMIC GROWTH HELIX
 * High-velocity dimensional rocket trajectory passing through an ascending
 * multi-tier financial prism and cosmic spiral torus.
 */
export const Icon3DGrowthHelix: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none group/icon ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl opacity-60 group-hover/icon:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-1 drop-shadow-[0_10px_20px_rgba(16,185,129,0.35)]"
      >
        <defs>
          <linearGradient id="growthGrad" x1="15" y1="85" x2="85" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>

          <linearGradient id="bar1" x1="20" y1="55" x2="32" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>

          <linearGradient id="bar2" x1="44" y1="35" x2="56" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#064e3b" />
          </linearGradient>

          <linearGradient id="bar3" x1="68" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>

        {/* Isometric 3D Ascending Pillar 1 */}
        <polygon points="20,62 30,57 40,62 30,67" fill="#6ee7b7" />
        <polygon points="20,62 30,67 30,86 20,81" fill="#047857" />
        <polygon points="30,67 40,62 40,81 30,86" fill="#065f46" />

        {/* Isometric 3D Ascending Pillar 2 */}
        <polygon points="40,46 50,41 60,46 50,51" fill="#a7f3d0" />
        <polygon points="40,46 50,51 50,86 40,81" fill="#059669" />
        <polygon points="50,51 60,46 60,81 50,86" fill="#047857" />

        {/* Isometric 3D Ascending Pillar 3 */}
        <polygon points="60,30 70,25 80,30 70,35" fill="#d1fae5" />
        <polygon points="60,30 70,35 70,86 60,81" fill="#10b981" />
        <polygon points="70,35 80,30 80,81 70,86" fill="#059669" />

        {/* Dynamic Curved Vector Arrow Helix */}
        <path
          d="M16,74 Q42,66 54,38 T84,18"
          stroke="url(#growthGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* 3D Arrowhead Apex */}
        <polygon
          points="88,14 74,18 82,26"
          fill="#34d399"
          className="filter drop-shadow-[0_0_8px_#34d399]"
        />

        <circle cx="84" cy="18" r="4" fill="#ffffff" />
        <circle cx="54" cy="38" r="2.5" fill="#6ee7b7" />
        <circle cx="16" cy="74" r="2.5" fill="#047857" />
      </svg>
    </div>
  );
};

/**
 * 6. 3D ENTERPRISE CLOUD SHIELD
 * Heavy dimensional titanium shield with rotating security orbits,
 * cyan neon edge bevels, and central cryptographic lock prism.
 */
export const Icon3DCloudShield: React.FC<Icon3DProps> = ({ className = '', size = 56 }) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none group/icon ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-2xl bg-cyan-600/20 blur-xl opacity-60 group-hover/icon:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-3 drop-shadow-[0_10px_20px_rgba(6,182,212,0.35)]"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id="shieldBevel" x1="50" y1="12" x2="50" y2="88" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Orbital Orbit Ring */}
        <circle
          cx="50"
          cy="48"
          r="40"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeDasharray="5 3"
          opacity="0.5"
        />

        {/* 3D Dimensional Shield Outer Shell */}
        <path
          d="M50,14 L82,26 C82,58 66,78 50,88 C34,78 18,58 18,26 Z"
          fill="url(#shieldGrad)"
        />

        {/* Inner Beveled Plate (Left Facet) */}
        <path
          d="M50,18 L24,28 C24,54 36,72 50,82 Z"
          fill="#0369a1"
          fillOpacity="0.8"
        />

        {/* Inner Beveled Plate (Right Facet) */}
        <path
          d="M50,18 L76,28 C76,54 64,72 50,82 Z"
          fill="#0c4a6e"
          fillOpacity="0.9"
        />

        {/* Specular Edge Highlight */}
        <path
          d="M50,14 L82,26 C82,58 66,78 50,88 C34,78 18,58 18,26 Z"
          stroke="url(#shieldBevel)"
          strokeWidth="1.5"
        />

        {/* Central Cryptographic Lock Core */}
        <rect x="42" y="44" width="16" height="13" rx="3" fill="#ffffff" />
        <path
          d="M45,44 V39 C45,36.2 47.2,34 50,34 C52.8,34 55,36.2 55,39 V44"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="50" cy="50" r="2" fill="#0284c7" />

        {/* Corner Neon Telemetry Dots */}
        <circle cx="32" cy="30" r="2" fill="#38bdf8" />
        <circle cx="68" cy="30" r="2" fill="#38bdf8" />
      </svg>
    </div>
  );
};

/**
 * Universal 3D Icon Resolver
 * Maps any service ID or category to its bespoke 3D icon
 */
export const Icon3D: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 56,
  className = '',
}) => {
  const normalized = name.toLowerCase();

  if (normalized.includes('ai') || normalized.includes('agent') || normalized.includes('neural')) {
    return <Icon3DAiCore size={size} className={className} />;
  }
  if (normalized.includes('software') || normalized.includes('core') || normalized.includes('code') || normalized.includes('dev')) {
    return <Icon3DQuantumCode size={size} className={className} />;
  }
  if (normalized.includes('web') || normalized.includes('3d') || normalized.includes('spatial') || normalized.includes('front')) {
    return <Icon3DSpatialWeb size={size} className={className} />;
  }
  if (normalized.includes('saas') || normalized.includes('app') || normalized.includes('platform') || normalized.includes('service')) {
    return <Icon3DSaasLayers size={size} className={className} />;
  }
  if (normalized.includes('growth') || normalized.includes('marketing') || normalized.includes('velocity') || normalized.includes('scale')) {
    return <Icon3DGrowthHelix size={size} className={className} />;
  }
  if (normalized.includes('cloud') || normalized.includes('it') || normalized.includes('infra') || normalized.includes('security') || normalized.includes('shield')) {
    return <Icon3DCloudShield size={size} className={className} />;
  }

  // Default fallback to 3D AI Core
  return <Icon3DAiCore size={size} className={className} />;
};
