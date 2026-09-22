import React from 'react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const techStack = [
    {
      category: 'AI & Autonomous Swarms',
      badge: 'Cognitive',
      items: ['PyTorch & JAX', 'LangChain & LangGraph', 'LlamaIndex Enterprise RAG', 'Claude & OpenAI Frontier Models', 'Milvus & Pinecone Vector DBs'],
    },
    {
      category: 'Distributed Software',
      badge: 'High-Scale',
      items: ['Rust & Tokio Core', 'Go Microservices', 'TypeScript & Node.js', 'FastAPI & Python Async', 'PostgreSQL & Redis Clusters'],
    },
    {
      category: 'Spatial 3D & Creative Web',
      badge: '60 FPS',
      items: ['Three.js & WebGL 2.0', 'Custom GLSL Shaders', 'React & Next.js Headless', 'GSAP Motion & Physics', 'Tailwind CSS Modern Engine'],
    },
    {
      category: 'Cloud & Infrastructure',
      badge: 'Zero-Downtime',
      items: ['Kubernetes (EKS / GKE)', 'Docker Swarm & MicroVMs', 'Cloudflare Workers Edge', 'Terraform & Pulumi CI/CD', 'Datadog & OpenTelemetry'],
    },
  ];

  return (
    <div className="w-full min-h-screen pt-28 pb-32 px-5 md:px-12 max-w-7xl mx-auto flex flex-col space-y-32 select-none">

      {/* =====================================================================
          1. HERO SECTION (Canvas Glow + Cappella Revealed Headline)
          ===================================================================== */}
      <section className="relative text-center flex flex-col items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Ambient Top Glow & Crimson/Cyan Haze */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[950px] h-[600px] md:h-[950px] pointer-events-none rounded-full blur-[90px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0, 242, 254, 0.4) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Micro Category Pill */}
        <div
          data-reveal="scale"
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-8 z-10"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-cyan-300 uppercase">
            uperX // Engineering DNA
          </span>
        </div>

        {/* Main Headline */}
        <h1
          data-reveal="chars"
          className="font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.92] max-w-5xl z-10 text-balance"
        >
          Architecting The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 font-serif font-light italic normal-case">
            Autonomous Digital Era.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-reveal="lines"
          className="mt-8 max-w-3xl font-sans text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-normal z-10"
        >
          <strong className="text-white font-semibold">uperX</strong> is a next-generation technology startup and digital engineering studio. We bridge the frontier between autonomous artificial intelligence, distributed software architectures, spatial 3D web experiences, and high-velocity algorithmic growth.
        </p>
      </section>


      {/* =====================================================================
          2. CAPPELLA STATS BAND WITH EXPONENTIAL COUNT-UP
          ===================================================================== */}
      <section aria-label="Key Performance Indicators" className="w-full">
        <dl
          data-reveal="scale"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Stat 1 */}
          <div
            data-reveal
            data-reveal-delay="1"
            className="relative p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/40 transition-colors flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">SLA Uptime</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <dd
              data-counter
              className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none"
            >
              99.99%
            </dd>
            <dt className="mt-4 font-mono text-xs text-neutral-400 border-t border-white/10 pt-4">
              Fault-Tolerant Enterprise Core
            </dt>
          </div>

          {/* Stat 2 */}
          <div
            data-reveal
            data-reveal-delay="2"
            className="relative p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-pink-500/40 transition-colors flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">Swarm Velocity</span>
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            </div>
            <dd
              data-counter
              className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none"
            >
              50,000+
            </dd>
            <dt className="mt-4 font-mono text-xs text-neutral-400 border-t border-white/10 pt-4">
              Autonomous Agent Ops / Sec
            </dt>
          </div>

          {/* Stat 3 */}
          <div
            data-reveal
            data-reveal-delay="3"
            className="relative p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-amber-500/40 transition-colors flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">Spatial Physics</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>
            <dd
              data-counter
              className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none"
            >
              60 FPS
            </dd>
            <dt className="mt-4 font-mono text-xs text-neutral-400 border-t border-white/10 pt-4">
              WebGL Raymarched Shaders
            </dt>
          </div>

          {/* Stat 4 */}
          <div
            data-reveal
            data-reveal-delay="4"
            className="relative p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-emerald-500/40 transition-colors flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Production Deploy</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <dd
              data-counter
              className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none"
            >
              120+
            </dd>
            <dt className="mt-4 font-mono text-xs text-neutral-400 border-t border-white/10 pt-4">
              Global Multi-Region Nodes
            </dt>
          </div>
        </dl>
      </section>


      {/* =====================================================================
          3. WHO WE ARE · EDITORIAL SPLIT (Sticky Desktop Heading)
          ===================================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-b border-white/10 py-20 items-start">
        <div className="md:col-span-5 md:sticky md:top-28 self-start flex flex-col space-y-4" data-reveal>
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            uperX // Identity &amp; Purpose
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            Who We Are
          </h2>
          <p className="font-mono text-xs text-neutral-500">
            Engineers, system architects, and creative technologists refusing compromise.
          </p>
        </div>

        <div className="md:col-span-7 flex flex-col space-y-8 font-sans text-neutral-300 text-base md:text-lg leading-relaxed">
          <p data-reveal="lines" className="border-l-2 border-cyan-400/50 pl-6 text-white font-medium text-lg md:text-xl">
            We don&apos;t just build websites or write routine code. We engineer autonomous digital ecosystems designed to outcompete, outscale, and captivate.
          </p>
          <p data-reveal="lines">
            Founded on the conviction that traditional software consulting is too slow, bureaucratic, and detached from cutting-edge AI breakthroughs, <strong className="text-white">uperX</strong> operates as an elite strike team.
          </p>
          <p data-reveal="lines">
            We combine high-reasoning autonomous LLM swarms with battle-hardened distributed backend services (written in Rust and Go), coupled with visually breathtaking 3D WebGL interfaces running at a relentless 60 frames per second.
          </p>
          <p data-reveal="lines">
            From emerging hyper-growth startups to enterprise leaders seeking radical digital transformation, we construct software that functions as an enduring competitive moat.
          </p>
        </div>
      </section>


      {/* =====================================================================
          4. THE uperX EDGE · 3D PERSPECTIVE TILT CARDS
          ===================================================================== */}
      <section className="flex flex-col space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6" data-reveal>
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
              Competitive Moat
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              The uperX Edge
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-500 mt-2 md:mt-0">
            Hover to explore 3D surface physics
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal="scale" data-tilt>
          {/* Edge Card 1 */}
          <div
            data-reveal
            data-reveal-delay="1"
            className="tilt-card p-8 md:p-10 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/50 flex flex-col justify-between overflow-hidden"
          >
            <span className="tilt-shine" aria-hidden="true" />
            <div>
              <div className="tilt-badge inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono font-bold text-xl mb-8 shadow-[0_12px_24px_-8px_rgba(0,242,254,0.5)]">
                01
              </div>
              <h3 className="tilt-head font-sans font-bold text-2xl md:text-3xl text-white mb-4">
                Agentic-First Architecture
              </h3>
              <p className="tilt-body font-sans text-neutral-400 leading-relaxed text-sm md:text-base">
                We engineer systems with intelligence baked into the foundation. Our self-governing AI swarms automate complex operational decisions, parse unstructured documents, and execute continuous reasoning loops without human bottlenecks.
              </p>
            </div>
            <div className="tilt-body pt-6 mt-8 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-cyan-300">
              <span>▹ Autonomous Workflows</span>
              <span className="text-neutral-600">•</span>
              <span>Vector RAG</span>
              <span className="text-neutral-600">•</span>
              <span>Self-Healing</span>
            </div>
          </div>

          {/* Edge Card 2 */}
          <div
            data-reveal
            data-reveal-delay="2"
            className="tilt-card p-8 md:p-10 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-pink-500/50 flex flex-col justify-between overflow-hidden"
          >
            <span className="tilt-shine" aria-hidden="true" />
            <div>
              <div className="tilt-badge inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white font-mono font-bold text-xl mb-8 shadow-[0_12px_24px_-8px_rgba(236,72,153,0.5)]">
                02
              </div>
              <h3 className="tilt-head font-sans font-bold text-2xl md:text-3xl text-white mb-4">
                Zero-Defect Microservices
              </h3>
              <p className="tilt-body font-sans text-neutral-400 leading-relaxed text-sm md:text-base">
                Built in Rust and Go, our backend systems are engineered for uncompromising speed and resilience. We design event-driven distributed topologies capable of ingesting millions of payloads with single-digit millisecond latency.
              </p>
            </div>
            <div className="tilt-body pt-6 mt-8 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-pink-300">
              <span>▹ Sub-MS Latency</span>
              <span className="text-neutral-600">•</span>
              <span>Zero-Downtime</span>
              <span className="text-neutral-600">•</span>
              <span>Rust Core</span>
            </div>
          </div>

          {/* Edge Card 3 */}
          <div
            data-reveal
            data-reveal-delay="3"
            className="tilt-card p-8 md:p-10 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-amber-500/50 flex flex-col justify-between overflow-hidden"
          >
            <span className="tilt-shine" aria-hidden="true" />
            <div>
              <div className="tilt-badge inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white font-mono font-bold text-xl mb-8 shadow-[0_12px_24px_-8px_rgba(245,158,11,0.5)]">
                03
              </div>
              <h3 className="tilt-head font-sans font-bold text-2xl md:text-3xl text-white mb-4">
                60FPS Spatial Web Craft
              </h3>
              <p className="tilt-body font-sans text-neutral-400 leading-relaxed text-sm md:text-base">
                Generic template designs bore users. We push the digital frontier with customized Three.js WebGL graphics, GPU particle physics simulations, and bespoke GLSL shaders that captivate audiences and define brand authority.
              </p>
            </div>
            <div className="tilt-body pt-6 mt-8 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-amber-300">
              <span>▹ Three.js WebGL</span>
              <span className="text-neutral-600">•</span>
              <span>GPU Shaders</span>
              <span className="text-neutral-600">•</span>
              <span>Fluid 120Hz</span>
            </div>
          </div>

          {/* Edge Card 4 */}
          <div
            data-reveal
            data-reveal-delay="4"
            className="tilt-card p-8 md:p-10 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-emerald-500/50 flex flex-col justify-between overflow-hidden"
          >
            <span className="tilt-shine" aria-hidden="true" />
            <div>
              <div className="tilt-badge inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-mono font-bold text-xl mb-8 shadow-[0_12px_24px_-8px_rgba(16,185,129,0.5)]">
                04
              </div>
              <h3 className="tilt-head font-sans font-bold text-2xl md:text-3xl text-white mb-4">
                Algorithmic Growth Velocity
              </h3>
              <p className="tilt-body font-sans text-neutral-400 leading-relaxed text-sm md:text-base">
                Engineering excellence without market reach is wasted. We build programmatic distribution engines, conversion-optimized user flows, and viral loops directly into product code to drive organic compound growth.
              </p>
            </div>
            <div className="tilt-body pt-6 mt-8 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-emerald-300">
              <span>▹ Programmatic SEO</span>
              <span className="text-neutral-600">•</span>
              <span>Viral Loops</span>
              <span className="text-neutral-600">•</span>
              <span>CRO Engineering</span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================================
          5. THE SIGNATURE PINNED STICKY MASK-REVEAL SHOWCASE
             (Exact Hermite Smoothstep Clip-Wipe from Cappella's Skolen Engine)
          ===================================================================== */}
      <section className="flex flex-col space-y-12">
        <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end" data-reveal>
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-2">
              System Architecture // Deep Dive
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Foundational Pillars
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-sm mt-3 md:mt-0">
            Scroll smoothly to witness the pinned mask-reveal transition across our 3 core architectural layers.
          </p>
        </div>

        {/* Pinned Sticky Container */}
        <div className="pinned-reveal" data-pinned-reveal>

          {/* Left Column: Scrolling Module Text Articles */}
          <div className="pinned-reveal__text space-y-16">
            {/* Module 1 */}
            <article className="pinned-module p-8 md:p-12 rounded-3xl bg-neutral-950/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300" data-reveal>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-3 block">
                01 // Autonomous Reasoning
              </span>
              <h3 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
                Self-Governing AI Swarms
              </h3>
              <p className="font-sans text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                We design decentralized AI agent networks with persistent memory indexing and autonomous tool execution. Rather than single prompt-response wrappers, our agents collaborate in parallel swarms to execute multi-step business logic, test code integrity, and resolve complex edge cases.
              </p>
              <dl className="border-t border-white/10 divide-y divide-white/10 font-mono text-xs">
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Architecture</dt>
                  <dd className="text-cyan-300 font-semibold">Multi-Agent Swarm Mesh</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Reasoning Speed</dt>
                  <dd className="text-white font-semibold">&lt; 160ms Per Token Cycle</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Reliability Index</dt>
                  <dd className="text-emerald-400 font-semibold">99.94% Autonomous Completion</dd>
                </div>
              </dl>
            </article>

            {/* Module 2 */}
            <article className="pinned-module p-8 md:p-12 rounded-3xl bg-neutral-950/90 border border-white/10 hover:border-pink-500/40 transition-all duration-300" data-reveal>
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest mb-3 block">
                02 // Distributed Cloud
              </span>
              <h3 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
                High-Scale Microservices
              </h3>
              <p className="font-sans text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                Engineered in Rust, Go, and event-driven TypeScript. Our microservices run across global edge clusters with automated load balancing, zero-trust cryptographic security, and automated rollback pipelines to safeguard millions of real-time transactions.
              </p>
              <dl className="border-t border-white/10 divide-y divide-white/10 font-mono text-xs">
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Throughput Capacity</dt>
                  <dd className="text-pink-300 font-semibold">150,000+ Req / Sec</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Edge Latency</dt>
                  <dd className="text-white font-semibold">Sub-10ms Global DNS</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Cluster Resilience</dt>
                  <dd className="text-emerald-400 font-semibold">Active-Active Multi-Region</dd>
                </div>
              </dl>
            </article>

            {/* Module 3 */}
            <article className="pinned-module p-8 md:p-12 rounded-3xl bg-neutral-950/90 border border-white/10 hover:border-amber-500/40 transition-all duration-300" data-reveal>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest mb-3 block">
                03 // Spatial Experiences
              </span>
              <h3 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
                60FPS WebGL &amp; Custom Shaders
              </h3>
              <p className="font-sans text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
                A masterpiece of GPU shader engineering. We integrate custom Three.js WebGL scenes, interactive raymarched geometry, particle physics systems, and buttery Lenis momentum scrolling to create unforgettable digital luxury.
              </p>
              <dl className="border-t border-white/10 divide-y divide-white/10 font-mono text-xs">
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Graphics Engine</dt>
                  <dd className="text-amber-300 font-semibold">Three.js + GLSL 3.0</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Target Frame Rate</dt>
                  <dd className="text-white font-semibold">Solid 60 - 120 FPS</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-neutral-500 uppercase">Inertia Physics</dt>
                  <dd className="text-emerald-400 font-semibold">Lenis Cubic Expo Smoothing</dd>
                </div>
              </dl>
            </article>
          </div>

          {/* Right Column: Pinned Sticky Visual Canvas with Hermite Clip-Wipe */}
          <div className="pinned-reveal__media">
            <div className="pinned-reveal__pin">

              {/* Visual Card 0: AI Swarm Neural Core */}
              <div
                className="pinned-reveal__img bg-gradient-to-br from-neutral-950 via-cyan-950/30 to-black p-8 md:p-12 flex flex-col justify-between border border-cyan-500/30"
                data-pinned-img="0"
              >
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest font-bold">
                      uperX // Neural Swarm Node 01
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">STATUS: REASONING</span>
                </div>

                <div className="my-auto py-10 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-32 h-32 rounded-full border border-cyan-400/40 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,242,254,0.3)] animate-spin-slow">
                    <div className="w-20 h-20 rounded-full border border-pink-500/50 flex items-center justify-center">
                      <span className="font-mono font-black text-2xl text-cyan-400">AI</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-2xl text-white">Autonomous Agent Core</h4>
                    <p className="font-mono text-xs text-cyan-300 mt-2">Self-healing multi-model orchestration</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-cyan-500/20 pt-4 font-mono text-[11px]">
                  <div>
                    <span className="text-neutral-500 block">NODES</span>
                    <span className="text-white font-bold">2,048</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">LATENCY</span>
                    <span className="text-cyan-400 font-bold">142ms</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">SUCCESS</span>
                    <span className="text-emerald-400 font-bold">99.98%</span>
                  </div>
                </div>
              </div>

              {/* Visual Card 1: Distributed Microservice Topology */}
              <div
                className="pinned-reveal__img bg-gradient-to-br from-neutral-950 via-pink-950/30 to-black p-8 md:p-12 flex flex-col justify-between border border-pink-500/30"
                data-pinned-img="1"
              >
                <div className="flex items-center justify-between border-b border-pink-500/20 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
                    <span className="font-mono text-xs text-pink-300 uppercase tracking-widest font-bold">
                      uperX // Cloud Mesh Node 02
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">STATUS: DISTRIBUTED</span>
                </div>

                <div className="my-auto py-10 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="relative flex items-center justify-center">
                    <div className="w-40 h-28 rounded-2xl border border-pink-400/40 bg-pink-950/20 backdrop-blur-md flex flex-col justify-center items-center shadow-[0_0_50px_rgba(236,72,153,0.3)]">
                      <span className="font-mono text-xs text-pink-300 uppercase tracking-widest">Global Edge</span>
                      <span className="font-sans font-black text-2xl text-white mt-1">150k TPS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-2xl text-white">High-Throughput Rust Clusters</h4>
                    <p className="font-mono text-xs text-pink-300 mt-2">Zero-downtime multi-region Kubernetes</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-pink-500/20 pt-4 font-mono text-[11px]">
                  <div>
                    <span className="text-neutral-500 block">REGIONS</span>
                    <span className="text-white font-bold">14 Global</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">INGRESS</span>
                    <span className="text-pink-400 font-bold">10 Gbps</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">AVAILABILITY</span>
                    <span className="text-emerald-400 font-bold">99.999%</span>
                  </div>
                </div>
              </div>

              {/* Visual Card 2: Spatial 3D WebGL Engine */}
              <div
                className="pinned-reveal__img bg-gradient-to-br from-neutral-950 via-amber-950/30 to-black p-8 md:p-12 flex flex-col justify-between border border-amber-500/30"
                data-pinned-img="2"
              >
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-mono text-xs text-amber-300 uppercase tracking-widest font-bold">
                      uperX // Spatial Engine Node 03
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">STATUS: 60 FPS SOLID</span>
                </div>

                <div className="my-auto py-10 flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-32 h-32 rounded-3xl border border-amber-400/40 bg-amber-950/20 backdrop-blur-md flex flex-col justify-center items-center shadow-[0_0_50px_rgba(245,158,11,0.3)] rotate-6">
                    <span className="font-mono text-xs text-amber-300">GPU PIPELINE</span>
                    <span className="font-sans font-black text-3xl text-white mt-1">60 FPS</span>
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-2xl text-white">WebGL &amp; Particle Shaders</h4>
                    <p className="font-mono text-xs text-amber-300 mt-2">Hardware-accelerated creative motion</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-amber-500/20 pt-4 font-mono text-[11px]">
                  <div>
                    <span className="text-neutral-500 block">PARTICLES</span>
                    <span className="text-white font-bold">100,000</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">SHADERS</span>
                    <span className="text-amber-400 font-bold">GLSL 3.0</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">DRAW CALLS</span>
                    <span className="text-emerald-400 font-bold">&lt; 12 / Frame</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================================
          6. PRODUCTION TECH STACK ARSENAL (3D Tilt Cards)
          ===================================================================== */}
      <section className="flex flex-col space-y-8">
        <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end" data-reveal>
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
              Production Arsenal
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
              Technology Stack
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-500 mt-2 md:mt-0">
            Battle-Tested Industrial Engines
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="scale" data-tilt>
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              data-reveal
              data-reveal-delay={String((idx % 4) + 1)}
              className="tilt-card p-6 md:p-8 rounded-2xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/40 transition-colors flex flex-col justify-between overflow-hidden"
            >
              <span className="tilt-shine" aria-hidden="true" />
              <div>
                <div className="flex items-center justify-between mb-4 tilt-badge">
                  <span className="font-mono text-[10px] uppercase text-cyan-400 tracking-wider">
                    {tech.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                </div>
                <h4 className="tilt-head font-sans font-bold text-lg text-white border-b border-white/10 pb-3 mb-4">
                  {tech.category}
                </h4>
                <ul className="space-y-2.5 tilt-body">
                  {tech.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="font-mono text-xs text-neutral-300 flex items-center space-x-2">
                      <span className="text-cyan-400">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =====================================================================
          7. CALL TO ACTION (High-Impact Next-Step Consultation)
          ===================================================================== */}
      <section className="text-center pt-20 border-t border-white/10 relative overflow-hidden" data-reveal>
        <div
          className="absolute inset-0 pointer-events-none opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at 50% 100%, rgba(0, 242, 254, 0.4) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <h3 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6 max-w-4xl mx-auto">
          Ready to engineer your next digital frontier?
        </h3>
        <p className="font-sans text-neutral-400 max-w-xl mx-auto mb-10 text-sm md:text-base">
          Connect directly with <strong className="text-white">uperX</strong> architects to design custom AI swarms, high-scale software, or 60FPS spatial web applications.
        </p>
        <button
          onClick={() => onNavigate('/contact')}
          className="px-10 py-5 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all duration-200 hover:scale-105 shadow-[0_0_35px_rgba(0,242,254,0.5)]"
        >
          Consult With uperX Engineers →
        </button>
      </section>

    </div>
  );
};
