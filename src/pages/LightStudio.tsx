import React from 'react';
import { Icon3D } from '../components/ThreeDIcons';

interface LightStudioProps {
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
}

export const LightStudio: React.FC<LightStudioProps> = ({ onNavigate, onToggleTheme }) => {
  const enterpriseServices = [
    {
      id: 'ai-agents',
      tag: '01 // Autonomous Systems',
      title: 'Autonomous AI Agent Swarms',
      desc: 'Self-governing multi-agent networks equipped with recursive reasoning, persistent vector memory indexing, and automated tool dispatch without human latency.',
      specs: ['Multi-Agent Swarm Orchestration', 'Hybrid Graph-Vector RAG', 'Automated QA & Self-Correction'],
    },
    {
      id: 'software-dev',
      tag: '02 // Core Engineering',
      title: 'Distributed Cloud Microservices',
      desc: 'Mission-critical distributed architectures engineered in Rust, Go, and TypeScript. Designed for 150,000+ operations/sec with sub-millisecond network latency.',
      specs: ['Sub-Millisecond Message Brokers', 'Active-Active Multi-Region Mesh', 'Zero-Downtime CI/CD Pipelines'],
    },
    {
      id: 'web-development',
      tag: '03 // Digital Experience',
      title: 'High-Velocity Modern Web Platforms',
      desc: 'Bespoke web applications fusing responsive modern architecture, silky Lenis smooth physics, and headless high-performance frontends for unforgettable digital authority.',
      specs: ['Modern React & Next.js Architecture', 'Sub-Second Page Loads', 'Full-Spectrum Accessibility'],
    },
    {
      id: 'service-apps',
      tag: '04 // Scalable Platforms',
      title: 'Multi-Tenant SaaS Architecture',
      desc: 'End-to-end digital service platforms engineered with automated tiered subscription billing, usage metering, granular RBAC, and real-time WebSocket state synchronization.',
      specs: ['Stripe Enterprise Metering', 'High-Scale Multi-Tenancy', 'Real-Time Event Streams'],
    },
    {
      id: 'growth-marketing',
      tag: '05 // Algorithmic Growth',
      title: 'Growth Marketing & Data Engines',
      desc: 'Algorithmic customer acquisition pipelines, real-time multi-armed bandit CRO experimentation, and viral digital mechanics that transform enterprise products into market leaders.',
      specs: ['Programmatic SEO Automation', 'Dynamic A/B Funnel Optimization', 'Viral Retention Loops'],
    },
    {
      id: 'it-infrastructure',
      tag: '06 // Cloud & Reliability',
      title: 'Zero-Trust Cloud & DevOps IT',
      desc: 'Comprehensive cloud architecture across AWS, GCP, and Azure. Kubernetes container orchestration, automated canary deployments, and 24/7 automated telemetry.',
      specs: ['Kubernetes Cluster Hardening', 'Zero-Trust mTLS Architecture', 'Automated Disaster Recovery'],
    },
  ];

  const caseStudies = [
    {
      client: 'Apex FinTech Global',
      title: 'Sub-Millisecond Distributed Trading Mesh',
      metric: '180k req/s',
      result: 'Processed 50M+ daily transactions with 99.999% uptime and zero latency spikes.',
      badge: 'Rust & Go',
    },
    {
      client: 'Synthetix BioHealth',
      title: 'Autonomous Clinical Intelligence Swarm',
      metric: '99.94% accuracy',
      result: 'Automated 12,000 weekly clinical case reviews using multi-agent hybrid vector RAG.',
      badge: 'Autonomous AI',
    },
    {
      client: 'AeroSpatial Data Systems',
      title: 'Real-Time Industrial IoT Operations Hub',
      metric: 'Sub-50ms Sync',
      result: 'Orchestrated 250,000 real-time telemetry sensors with WebSocket state synchronization.',
      badge: 'Distributed Cloud',
    },
  ];

  const techArsenal = [
    { name: 'Autonomous AI', items: ['PyTorch', 'LangChain', 'LangGraph', 'Claude 3.5 & GPT-4o', 'Milvus Vector DB'] },
    { name: 'Core Microservices', items: ['Rust / Tokio', 'Go (Golang)', 'TypeScript / Node.js', 'PostgreSQL', 'Redis Cluster'] },
    { name: 'Modern Web Engineering', items: ['React 18', 'TypeScript', 'Next.js', 'Tailwind CSS', 'WebSocket State'] },
    { name: 'Cloud Infrastructure', items: ['Kubernetes', 'Docker', 'AWS / GCP / Cloudflare', 'Terraform CI/CD', 'OpenTelemetry'] },
  ];

  return (
    <div className="w-full min-h-screen text-[#0f172a] bg-[#fafaf9] selection:bg-cyan-200 selection:text-black select-none overflow-x-hidden relative">

      {/* =====================================================================
          LUMINOUS SKY THEME AMBIENT COLOR GRADIENTS (FAST CSS, ZERO LAG)
          ===================================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Sky Theme Color Atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 12%, rgba(56, 189, 248, 0.22) 0%, transparent 45%),
              radial-gradient(circle at 90% 18%, rgba(129, 140, 248, 0.18) 0%, transparent 45%),
              radial-gradient(circle at 50% 45%, rgba(14, 165, 233, 0.14) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(244, 114, 182, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 20% 85%, rgba(45, 212, 191, 0.14) 0%, transparent 45%),
              radial-gradient(rgba(15, 23, 42, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 28px 28px',
          }}
        />
        {/* Soft Celestial Veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/20 via-transparent to-[#fafaf9]/80" />
      </div>

      {/* =====================================================================
          1. HERO SECTION WITH GLASSMORPHISM
          ===================================================================== */}
      <section className="relative w-full min-h-[96vh] pt-28 pb-16 px-5 md:px-12 max-w-7xl mx-auto flex flex-col justify-between z-10">
        
        {/* Top Floating Controls Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div
            data-reveal="scale"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/80 bg-white/70 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#070b14] font-bold">
              uperX // Enterprise IT &amp; AI Engineering
            </span>
          </div>

          {/* Quick Universe Switch Button */}
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/80 bg-white/70 backdrop-blur-xl text-xs font-mono font-bold text-[#070b14] hover:bg-black hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)]"
            title="Switch back to Studio Dark Universe"
          >
            <span>Switch to Studio Dark Mode</span>
            <span>🌙</span>
          </button>
        </div>

        {/* Hero Grid: Left Copy + Right Glassmorphic Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1 my-auto">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h1
              data-reveal="chars"
              className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#070b14] uppercase leading-[0.92] drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]"
            >
              The New <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-600 font-serif font-light italic normal-case">
                Standard In
              </span> <br />
              Autonomous IT.
            </h1>

            {/* Glassmorphic Legibility Capsule */}
            <div
              data-reveal="lines"
              className="p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] max-w-2xl"
            >
              <p className="font-sans text-base sm:text-lg md:text-xl text-[#1e293b] leading-relaxed font-normal">
                <strong className="text-[#070b14] font-bold">uperX</strong> architects high-velocity autonomous AI swarms, mission-critical cloud infrastructure, and 60FPS spatial web applications for enterprises scaling into the future.
              </p>
            </div>

            {/* Action Buttons */}
            <div data-reveal data-reveal-delay="2" className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-8 py-4 rounded-full bg-[#070b14] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-600 hover:scale-105 transition-all duration-200 shadow-[0_12px_30px_rgba(7,11,20,0.25)]"
              >
                Schedule Architecture Review →
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('solutions-matrix');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full border border-white/80 bg-white/70 backdrop-blur-xl text-[#070b14] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white hover:border-black/20 transition-all duration-200 shadow-sm"
              >
                Explore Enterprise Solutions ↓
              </button>
            </div>
          </div>

          {/* Right Column: Glassmorphic Enterprise Architecture & AI Swarm Telemetry Cockpit */}
          <div
            data-reveal="scale"
            className="lg:col-span-5 w-full rounded-3xl overflow-hidden border border-white/80 bg-white/75 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.07),inset_0_1px_2px_rgba(255,255,255,0.95)] p-6 sm:p-7 flex flex-col justify-between space-y-5"
          >
            {/* Header: Live System Status */}
            <div className="flex items-center justify-between pb-4 border-b border-black/5">
              <div className="flex items-center space-x-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="font-mono text-xs font-black uppercase text-[#070b14] tracking-wider">
                    Global Swarm Engine
                  </h4>
                  <span className="font-mono text-[10px] text-neutral-500">Active Mesh v4.8.2 // Real-Time</span>
                </div>
              </div>
              <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                Systems Optimal
              </span>
            </div>

            {/* Architecture Node Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm flex flex-col justify-between space-y-2">
                <span className="text-[10px] uppercase text-neutral-500 font-bold">Inference Speed</span>
                <span className="text-xl font-black text-[#070b14]">142 tok/s</span>
                <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full w-[88%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm flex flex-col justify-between space-y-2">
                <span className="text-[10px] uppercase text-neutral-500 font-bold">Network Latency</span>
                <span className="text-xl font-black text-cyan-700">0.82 ms</span>
                <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[94%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm flex flex-col justify-between space-y-2">
                <span className="text-[10px] uppercase text-neutral-500 font-bold">Agent Density</span>
                <span className="text-xl font-black text-[#070b14]">1,024 Nodes</span>
                <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full w-[76%]" />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm flex flex-col justify-between space-y-2">
                <span className="text-[10px] uppercase text-neutral-500 font-bold">Zero-Trust Auth</span>
                <span className="text-xl font-black text-emerald-700">100% mTLS</span>
                <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* Live Event Stream Terminal */}
            <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md text-slate-100 font-mono text-[11px] space-y-2 shadow-inner border border-white/10">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5">
                <span className="uppercase tracking-wider">Telemetry Event Log</span>
                <span className="text-emerald-400 font-bold">LIVE STREAM</span>
              </div>
              <p className="flex items-center space-x-2 text-slate-300">
                <span className="text-cyan-400">[12:44:02]</span>
                <span>Swarm coordinator spawned 64 worker threads</span>
              </p>
              <p className="flex items-center space-x-2 text-slate-300">
                <span className="text-indigo-400">[12:44:04]</span>
                <span>Hybrid Vector RAG synchronized (4.8M vectors)</span>
              </p>
              <p className="flex items-center space-x-2 text-slate-300">
                <span className="text-emerald-400">[12:44:06]</span>
                <span>Sub-millisecond broker routed 180k req/s</span>
              </p>
            </div>
          </div>
        </div>

        {/* Live KPI Metric Pill Strip */}
        <div
          data-reveal="scale"
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] font-mono text-xs"
        >
          <div className="p-3 border-r border-black/5">
            <span className="text-neutral-600 font-semibold uppercase block text-[10px]">SLA Uptime</span>
            <span className="font-extrabold text-[#070b14] text-lg" data-counter>99.999%</span>
          </div>
          <div className="p-3 md:border-r border-black/5">
            <span className="text-neutral-600 font-semibold uppercase block text-[10px]">Swarm Latency</span>
            <span className="font-extrabold text-cyan-700 text-lg" data-counter>&lt; 140ms</span>
          </div>
          <div className="p-3 border-r border-black/5">
            <span className="text-neutral-600 font-semibold uppercase block text-[10px]">Daily Ingestion</span>
            <span className="font-extrabold text-[#070b14] text-lg" data-counter>150,000+</span>
          </div>
          <div className="p-3">
            <span className="text-neutral-600 font-semibold uppercase block text-[10px]">Architecture</span>
            <span className="font-extrabold text-emerald-700 text-lg">Zero-Trust Verified</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ENTERPRISE SOLUTIONS MATRIX (Glassmorphic 3D Tilt Cards)
          ===================================================================== */}
      <section id="solutions-matrix" className="w-full max-w-7xl mx-auto px-5 md:px-12 py-28 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/10 pb-8" data-reveal>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 font-extrabold block mb-2">
              Enterprise Offerings // Production Grade
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-6xl text-[#070b14] uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              Enterprise Solutions.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#334155] font-semibold max-w-sm mt-4 md:mt-0">
            Hover over cards to engage physical perspective tilt and specular reflections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal="scale" data-tilt>
          {enterpriseServices.map((srv, idx) => (
            <div
              key={srv.id}
              data-reveal
              data-reveal-delay={String((idx % 3) + 1)}
              onClick={() => onNavigate('/contact')}
              className="tilt-card group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 hover:border-cyan-400/60 shadow-[0_15px_40px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300"
            >
              <span className="tilt-shine" aria-hidden="true" />

              <div>
                <div className="flex items-center justify-between mb-6 tilt-badge">
                  <div className="p-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 group-hover:border-cyan-500/40 transition-colors duration-300 shadow-sm">
                    <Icon3D name={srv.id} size={54} />
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[#070b14] bg-white/80 backdrop-blur-sm border border-white/90 px-2.5 py-1 rounded-full font-bold tracking-wider">
                    {srv.tag}
                  </span>
                </div>

                <h3 className="tilt-head font-sans font-black text-2xl text-[#070b14] mb-3 group-hover:text-cyan-700 transition-colors">
                  {srv.title}
                </h3>

                <p className="tilt-body font-sans text-sm text-[#334155] leading-relaxed mb-6 font-medium">
                  {srv.desc}
                </p>
              </div>

              <div className="tilt-body pt-6 border-t border-black/5 flex flex-col space-y-2.5">
                {srv.specs.map((spec, sidx) => (
                  <div key={sidx} className="flex items-center space-x-2 text-xs font-mono text-[#070b14] font-medium">
                    <span className="text-cyan-600 font-bold">▹</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          3. HIGH-PERFORMANCE CLOUD INFRASTRUCTURE & TELEMETRY SECTION
          ===================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-5 md:px-12 py-24 relative z-10">
        <div className="p-8 md:p-14 rounded-3xl bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" data-reveal>
          
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 font-extrabold">
              Global Multi-Region Mesh
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-5xl text-[#070b14] uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              High-Velocity Cloud Architecture.
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#1e293b] leading-relaxed font-normal">
              Every system architected by <strong className="text-[#070b14] font-bold">uperX</strong> runs on active-active multi-region Kubernetes clusters. Automated health probes, zero-trust mTLS encryption, and sub-millisecond event buses ensure 99.999% availability at enterprise scale.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm">
                <span className="text-neutral-600 font-bold uppercase block text-[10px]">Cluster Engine</span>
                <span className="font-extrabold text-[#070b14] text-sm">Kubernetes 1.30+</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm">
                <span className="text-neutral-600 font-bold uppercase block text-[10px]">Network Security</span>
                <span className="font-extrabold text-cyan-700 text-sm">mTLS Zero-Trust</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm">
                <span className="text-neutral-600 font-bold uppercase block text-[10px]">Failover Recovery</span>
                <span className="font-extrabold text-[#070b14] text-sm">&lt; 250ms Auto</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-sm">
                <span className="text-neutral-600 font-bold uppercase block text-[10px]">Global Throughput</span>
                <span className="font-extrabold text-emerald-700 text-sm">180,000+ req/s</span>
              </div>
            </div>
          </div>

          {/* Right Column: Global Edge Regions Topology Card (Glassmorphic) */}
          <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 border border-white/80 relative shadow-inner bg-white/60 backdrop-blur-xl flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 font-extrabold block">
                  Distributed Cloud Mesh
                </span>
                <h4 className="font-sans font-black text-xl text-[#070b14]">
                  Active Edge Datacenters
                </h4>
              </div>
              <span className="font-mono text-[10px] uppercase font-bold text-neutral-600 bg-white/80 backdrop-blur-sm border border-white/90 px-2.5 py-1 rounded-full">
                Active-Active Multi-Region
              </span>
            </div>

            {/* Region Health Cards */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="font-bold text-[#070b14] block">us-east-1 (N. Virginia)</span>
                    <span className="text-[10px] text-neutral-500">Autonomous Core Swarm</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-cyan-700">0.4 ms</span>
                  <span className="text-[10px] text-emerald-700 font-bold block">99.999% SLA</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="font-bold text-[#070b14] block">eu-central-1 (Frankfurt)</span>
                    <span className="text-[10px] text-neutral-500">Secure Vector Knowledge Mesh</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-cyan-700">0.9 ms</span>
                  <span className="text-[10px] text-emerald-700 font-bold block">99.999% SLA</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div>
                    <span className="font-bold text-[#070b14] block">ap-northeast-1 (Tokyo)</span>
                    <span className="text-[10px] text-neutral-500">Sub-Millisecond Edge Ingestion</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-cyan-700">1.2 ms</span>
                  <span className="text-[10px] text-emerald-700 font-bold block">99.999% SLA</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-900 font-bold">
                ✓ Automated Failover Replicated in &lt; 250ms
              </span>
              <span className="font-mono text-[10px] text-emerald-800 font-extrabold uppercase">
                Kubernetes Mesh
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PROVEN ENTERPRISE IMPACT & CASE STUDIES
          ===================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-5 md:px-12 py-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-black/10 pb-8" data-reveal>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 font-extrabold block mb-2">
              Proven Results // Case Deployments
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-6xl text-[#070b14] uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              Enterprise Impact.
            </h2>
          </div>
          <span className="font-mono text-xs text-[#334155] font-semibold">
            Engineered for high-scale enterprise leaders
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal="scale" data-tilt>
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              data-reveal
              data-reveal-delay={String(idx + 1)}
              className="tilt-card p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 hover:border-cyan-400/60 shadow-[0_15px_40px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between transition-all duration-300"
            >
              <span className="tilt-shine" aria-hidden="true" />
              <div>
                <div className="flex items-center justify-between mb-4 tilt-badge">
                  <span className="font-mono text-[10px] uppercase text-cyan-800 bg-white/80 backdrop-blur-sm border border-white/90 px-2.5 py-1 rounded-full tracking-wider font-bold">
                    {cs.badge}
                  </span>
                  <span className="font-mono text-xs text-[#070b14] font-bold">{cs.client}</span>
                </div>
                <h4 className="tilt-head font-sans font-bold text-xl text-[#070b14] mb-4">
                  {cs.title}
                </h4>
                <p className="tilt-body font-sans text-sm text-[#334155] leading-relaxed mb-6 font-medium">
                  {cs.result}
                </p>
              </div>

              <div className="tilt-body pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="font-mono text-xs text-neutral-600 uppercase font-bold">Throughput</span>
                <span className="font-mono font-extrabold text-cyan-800 text-sm">{cs.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. PRODUCTION TECHNOLOGY ARSENAL
          ===================================================================== */}
      <section className="w-full max-w-7xl mx-auto px-5 md:px-12 py-24 relative z-10">
        <div className="border-b border-black/10 pb-6 mb-12 flex justify-between items-end" data-reveal>
          <div>
            <span className="font-mono text-xs text-cyan-700 uppercase tracking-widest font-extrabold block mb-1">
              Production Arsenal
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-[#070b14] uppercase tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
              Technology Stack.
            </h2>
          </div>
          <span className="font-mono text-xs text-[#334155] font-semibold">Zero-Compromise Tools</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal="scale" data-tilt>
          {techArsenal.map((tech, idx) => (
            <div
              key={idx}
              data-reveal
              data-reveal-delay={String((idx % 4) + 1)}
              className="tilt-card p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col justify-between transition-all duration-300"
            >
              <span className="tilt-shine" aria-hidden="true" />
              <div>
                <h4 className="tilt-head font-sans font-black text-base text-[#070b14] border-b border-black/5 pb-2.5 mb-4">
                  {tech.name}
                </h4>
                <ul className="space-y-2 tilt-body">
                  {tech.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="font-mono text-xs text-[#1e293b] font-medium flex items-center space-x-2">
                      <span className="text-cyan-600 font-bold">▹</span>
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
          6. EXECUTIVE CALL TO ACTION & CONSULTATION
          ===================================================================== */}
      <section className="w-full max-w-5xl mx-auto px-5 my-28 text-center relative z-10" data-reveal>
        <div className="p-12 md:p-20 rounded-3xl bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_25px_70px_rgba(15,23,42,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] flex flex-col items-center relative overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 font-extrabold mb-3">
            Initiate Architecture Review
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl text-[#070b14] uppercase tracking-tight mb-6 max-w-3xl drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
            Ready to architect your enterprise digital future?
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1e293b] max-w-xl mb-10 leading-relaxed font-medium">
            Connect directly with <strong className="text-[#070b14] font-bold">uperX</strong> enterprise architects for a comprehensive technical roadmap, autonomous swarm scoping, or cloud migration proposal.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-10 py-5 rounded-full bg-[#070b14] text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-600 hover:scale-105 transition-all duration-200 shadow-[0_15px_35px_rgba(7,11,20,0.3)]"
          >
            Consult With uperX Architects →
          </button>
        </div>
      </section>

    </div>
  );
};
