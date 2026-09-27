import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Activity,
  Shield,
  Zap,
  BarChart3,
  Code2,
  Box,
  Check,
  ChevronRight,
  X,
  ExternalLink,
} from 'lucide-react';
import { UperXLogo } from '../components/UperXLogo';

interface FinseoLightHomeProps {
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
}

export const FinseoLightHome: React.FC<FinseoLightHomeProps> = ({ onNavigate, onToggleTheme }) => {
  const [activeTab, setActiveTab] = useState<'agents' | 'microservices' | 'spatial' | 'growth' | 'cloud'>('agents');
  const [activeTelemetryTask, setActiveTelemetryTask] = useState<string>('rag-swarm');
  const [solutionLabOpen, setSolutionLabOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [simulatedMetrics, setSimulatedMetrics] = useState({
    opsSec: 52400,
    activeAgents: 18,
    latency: 142,
    accuracy: 99.98,
    nodes: 120,
  });

  // Dynamic simulation ticker for the cockpit
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedMetrics((prev) => ({
        opsSec: Math.floor(52000 + Math.random() * 800),
        activeAgents: 18 + (Math.random() > 0.6 ? 1 : 0),
        latency: Math.floor(138 + Math.random() * 8),
        accuracy: +(99.97 + Math.random() * 0.02).toFixed(2),
        nodes: 120,
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const enterpriseLogos = [
    { name: 'PORSCHE', type: 'Automotive Digital' },
    { name: 'OPENAI', type: 'Frontier AI' },
    { name: 'ANTHROPIC', type: 'Claude Partner' },
    { name: 'VERCEL', type: 'Edge Compute' },
    { name: 'STRIPE', type: 'Fintech Engine' },
    { name: 'CLOUDFLARE', type: 'Zero-Trust Edge' },
    { name: 'AWS', type: 'Cloud Clusters' },
    { name: 'DATADOG', type: 'Telemetry SLA' },
  ];

  const services = [
    {
      id: 'ai-agents',
      num: '01',
      tag: 'Autonomous Systems',
      title: 'AI Agent Creation & Workflows',
      desc: 'Autonomous multi-agent swarms, customized LLM reasoning pipelines, cognitive automation, and enterprise RAG architectures that execute complex operations without human intervention.',
      features: ['Multi-Agent Swarm Orchestration', 'Custom Tool-Calling & Fine-Tuning', 'Automated Research & Ops Bots'],
      badge: '99.98% Accuracy',
      accent: 'border-cyan-500/30 hover:border-cyan-500',
    },
    {
      id: 'software-dev',
      num: '02',
      tag: 'Core Engineering',
      title: 'Custom Software Development',
      desc: 'Mission-critical distributed architectures, robust backend microservices, resilient APIs, and full-stack software built to handle high throughput with zero downtime.',
      features: ['Distributed Cloud Microservices', 'High-Frequency Data Pipelines', 'Custom Enterprise Portals'],
      badge: '< 5ms Latency',
      accent: 'border-indigo-500/30 hover:border-indigo-500',
    },
    {
      id: 'web-development',
      num: '03',
      tag: 'Digital Experience',
      title: 'High-End 3D Web & Creative Frontends',
      desc: 'Bespoke web applications that fuse Three.js WebGL spatial graphics, GSAP physics micro-interactions, responsive architectures, and ultra-fast Next.js/React performance.',
      features: ['Interactive Three.js / WebGL', 'Fluid GSAP Motion Systems', 'Ultra-Optimized Headless Stacks'],
      badge: '60 FPS Solid',
      accent: 'border-pink-500/30 hover:border-pink-500',
    },
    {
      id: 'service-apps',
      num: '04',
      tag: 'Scalable Platforms',
      title: 'Service-Based App Creation & SaaS',
      desc: 'End-to-end digital service platforms, on-demand marketplaces, and multi-tenant SaaS products engineered with automated billing, user roles, and real-time messaging.',
      features: ['Multi-Tenant SaaS Architecture', 'Stripe Billing & Subscription Engines', 'Real-Time WebSockets & Queues'],
      badge: 'Multi-Tenant',
      accent: 'border-amber-500/30 hover:border-amber-500',
    },
    {
      id: 'growth-marketing',
      num: '05',
      tag: 'Velocity & Scale',
      title: 'Growth Marketing & Brand Strategy',
      desc: 'Algorithmic customer acquisition, conversion rate optimization, data-backed funnel experimentation, and high-impact digital narratives that turn users into cult followers.',
      features: ['Full-Funnel Growth Engineering', 'Conversion Rate Optimization (CRO)', 'Viral Product Positioning'],
      badge: '10x Multiplier',
      accent: 'border-emerald-500/30 hover:border-emerald-500',
    },
    {
      id: 'it-infrastructure',
      num: '06',
      tag: 'Cloud & Reliability',
      title: 'Enterprise IT & Cloud Operations',
      desc: 'Comprehensive cloud architecture (AWS, GCP, Azure), Kubernetes orchestration, automated CI/CD pipelines, cybersecurity hardening, and 24/7 system monitoring.',
      features: ['Kubernetes & Docker Containerization', 'Automated CI/CD DevOps Pipelines', 'Zero-Trust Security & Cloud Hardening'],
      badge: '99.99% Uptime',
      accent: 'border-blue-500/30 hover:border-blue-500',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF9F5] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white font-sans overflow-x-hidden">

      {/* =====================================================================
          1. FINSEO TOP SLEEK ANNOUNCEMENT BANNER
          ===================================================================== */}
      <div className="w-full bg-[#111111] text-white py-2.5 px-4 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm font-medium">
          {/* Animated Synapse Pulse */}
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping mr-1" />
          <span className="text-white/85">
            <span className="hidden sm:inline">Introducing uperX Core v3.0: Autonomous Multi-Agent Swarms &amp; Real-Time Engineering</span>
            <span className="sm:hidden">uperX Core v3.0: Autonomous AI Swarms</span>
          </span>
          <button
            onClick={() => setSolutionLabOpen(true)}
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-semibold underline underline-offset-2 cursor-pointer ml-1 transition-colors"
          >
            Explore Blueprint <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* =====================================================================
          2. FINSEO CLEAN LIGHT NAVIGATION BAR
          ===================================================================== */}
      <nav className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-xl border-b border-black/[0.06] transition-all">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => onNavigate('/')}
            className="cursor-pointer flex items-center space-x-2"
          >
            <UperXLogo size={34} showText={true} isLight={true} />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-7 text-[14px] font-medium text-neutral-600">
            <button
              onClick={() => onNavigate('/dashboard')}
              className="hover:text-black transition-colors"
            >
              Services &amp; Work
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="hover:text-black transition-colors"
            >
              About Studio
            </button>
            <button
              onClick={() => onNavigate('/hypeboard')}
              className="hover:text-black transition-colors"
            >
              Insights
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="hover:text-black transition-colors"
            >
              Deployment Portal
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button to return to Dark Creative Studio */}
            <button
              onClick={onToggleTheme}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-black/15 bg-white text-xs font-mono font-bold text-[#1A1A1A] hover:bg-neutral-100 transition-all shadow-sm"
              title="Switch back to Studio Dark Mode"
            >
              <span>🌙 Dark Mode</span>
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg border border-neutral-300 text-xs font-semibold text-[#1A1A1A] bg-white hover:bg-neutral-50 transition-colors shadow-sm"
            >
              Book Scoping Call
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 rounded-lg bg-[#1C1C1C] text-white text-xs font-semibold hover:bg-black transition-colors shadow-sm"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================================
          3. FINSEO SIGNATURE HERO SECTION
          ===================================================================== */}
      <section className="relative w-full pt-16 sm:pt-24 pb-20 px-5 sm:px-8 max-w-6xl mx-auto text-center">
        {/* Subtle Ambient Background Gradient Disc */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full blur-[100px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(235, 183, 67, 0.25) 0%, rgba(34, 211, 238, 0.15) 50%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        {/* Eyebrow Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-white/80 shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[12px] font-medium text-neutral-600 tracking-wide">
            Next-Gen Digital Engineering Studio // Autonomous AI Era
          </span>
        </div>

        {/* Massive High-Impact Finseo-Style Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-semibold text-[#1A1A1A] tracking-[-0.04em] leading-[1.04] max-w-5xl mx-auto">
          Engineer autonomous software <br className="hidden sm:inline" />
          <span className="text-neutral-400 font-normal">in every dimension.</span>
        </h1>

        {/* Strapline */}
        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
          <strong className="text-black font-semibold">uperX</strong> architects autonomous AI agent swarms, distributed software, high-octane 3D spatial web experiences, and algorithmic growth engines that scale companies globally.
        </p>

        {/* Double CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#1C1C1C] text-white text-sm font-semibold hover:bg-black transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Start A Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setSolutionLabOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-neutral-300 bg-white text-sm font-semibold text-[#1A1A1A] hover:bg-neutral-50 transition-all shadow-xs cursor-pointer"
          >
            <span>Book Architecture Review</span>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </button>
        </div>

        {/* Enterprise Logos Marquee */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-black/[0.06]">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Trusted By Engineering Teams Building The Next Frontier
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {enterpriseLogos.map((client) => (
              <div key={client.name} className="flex flex-col items-center">
                <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-neutral-800">
                  {client.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 mt-0.5">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. FINSEO LIVE INTERACTIVE TELEMETRY COCKPIT (Product Showcase)
          ===================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="rounded-3xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Cockpit Window Header */}
          <div className="px-6 py-4 bg-neutral-50 border-b border-black/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              <span className="ml-3 font-mono text-xs font-semibold text-neutral-700">
                uperX Cockpit // Live Autonomous Swarm Telemetry
              </span>
            </div>

            {/* Model Badges */}
            <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono text-neutral-500">
              <span className="px-2 py-0.5 rounded bg-neutral-200/70 font-semibold text-neutral-700">Claude 3.7</span>
              <span className="px-2 py-0.5 rounded bg-neutral-200/70 font-semibold text-neutral-700">GPT-4.5</span>
              <span className="px-2 py-0.5 rounded bg-neutral-200/70 font-semibold text-neutral-700">DeepSeek R1</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Active Mesh</span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="px-6 pt-4 bg-white border-b border-black/5 flex overflow-x-auto space-x-2 sm:space-x-4">
            {[
              { id: 'agents', label: 'AI Agent Swarm Mesh', icon: Cpu },
              { id: 'microservices', label: 'Rust/Go Microservices', icon: Terminal },
              { id: 'spatial', label: '60FPS 3D Spatial Web', icon: Box },
              { id: 'growth', label: 'Algorithmic Growth Engine', icon: BarChart3 },
              { id: 'cloud', label: 'Kubernetes Cloud Ops', icon: Shield },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 pb-3.5 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'border-black text-black'
                      : 'border-transparent text-neutral-500 hover:text-black'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Cockpit Interactive Content */}
          <div className="p-6 sm:p-10 bg-[#FCFCFA]">
            {/* Real-Time KPI Stats Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">Throughput</span>
                <span className="font-sans font-bold text-2xl text-neutral-900">{simulatedMetrics.opsSec.toLocaleString()}</span>
                <span className="font-mono text-[10px] text-emerald-600 block mt-1">▲ Ops / Sec Core</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">Active Swarms</span>
                <span className="font-sans font-bold text-2xl text-neutral-900">{simulatedMetrics.activeAgents} Swarms</span>
                <span className="font-mono text-[10px] text-cyan-600 block mt-1">Autonomous Reasoning</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">Edge Latency</span>
                <span className="font-sans font-bold text-2xl text-neutral-900">{simulatedMetrics.latency}ms</span>
                <span className="font-mono text-[10px] text-neutral-500 block mt-1">Global 14 Regions</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-black/5 shadow-xs">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">Autonomous SLA</span>
                <span className="font-sans font-bold text-2xl text-neutral-900">{simulatedMetrics.accuracy}%</span>
                <span className="font-mono text-[10px] text-emerald-600 block mt-1">Task Resolution</span>
              </div>
            </div>

            {/* Tab Specific Content */}
            {activeTab === 'agents' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 p-6 rounded-2xl bg-[#141414] text-white font-mono text-xs shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-neutral-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      SWARM RUNTIME // STAGE 3 EXECUTION
                    </span>
                    <span className="text-[10px]">UPERX-AGENT-09</span>
                  </div>
                  <div className="space-y-2.5 text-neutral-300 leading-relaxed">
                    <p className="text-cyan-400">&gt; [SwarmCoordinator] Ingesting enterprise business rules and OpenAPI schema...</p>
                    <p className="text-neutral-400">&gt; [RAG-Engine] Hybrid dense-sparse vector index queried in 18ms. 42 context chunks retrieved.</p>
                    <p className="text-emerald-400">&gt; [CodeGen-Bot] Generated Rust Tokio async handlers with zero heap allocations.</p>
                    <p className="text-pink-400">&gt; [VerificationLoop] Running fuzz testing: 1,000 edge payloads passed in 84ms.</p>
                    <p className="text-white font-semibold">&gt; [DeploymentPipeline] Blue/Green canary rollout live across 3 AWS clusters.</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>Memory: 24.8 GB Alloc</span>
                    <span className="text-cyan-400 font-bold">STATE: AUTONOMOUS STABLE</span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <h4 className="font-sans font-bold text-lg text-neutral-900">
                    Autonomous Multi-Agent Swarms
                  </h4>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    Unlike simple chatbots, uperX builds interconnected agent meshes with persistent memory, tool-calling capabilities, and self-correcting validation cycles.
                  </p>
                  <ul className="space-y-2 text-xs font-medium text-neutral-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Zero human-in-the-loop required for routine workflows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Enterprise RAG with Milvus and Pinecone vector DBs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Automated unit test synthesis and code review bots</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="self-start mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:underline"
                  >
                    Deploy Agents For Your Enterprise <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'microservices' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-black/10">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-indigo-600 font-bold mb-2">
                    Distributed Performance Profile
                  </h5>
                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-600">Rust Core Latency (p99)</span>
                        <span className="font-bold text-neutral-900">1.8 ms</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full w-[96%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-600">Go Microservices Ingress</span>
                        <span className="font-bold text-neutral-900">150,000 req/sec</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-neutral-600">Redis Cluster Cache Hit Ratio</span>
                        <span className="font-bold text-neutral-900">99.4%</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <h4 className="font-sans font-bold text-lg text-neutral-900">
                    High-Concurrency Core Engineering
                  </h4>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    We replace sluggish legacy stacks with compiled high-performance languages. Rust and Go provide memory safety, sub-millisecond query responses, and predictable scaling.
                  </p>
                  <button
                    onClick={() => onNavigate('/dashboard')}
                    className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:underline"
                  >
                    Inspect Microservice Blueprints <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'spatial' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col justify-between min-h-[220px]">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-amber-400">THREE.JS WEBGL 2.0 PIPELINE</span>
                    <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">60-120 FPS</span>
                  </div>
                  <div className="text-center my-6">
                    <h5 className="font-sans font-black text-3xl text-white">Dynamic 3D Experiences</h5>
                    <p className="font-mono text-xs text-neutral-400 mt-2">GPU raymarched physics &amp; ACESFilmic tonemapping</p>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 border-t border-white/10 pt-3">
                    <span>Draw calls: &lt; 14 / frame</span>
                    <span>Physics: GPU Compute</span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <h4 className="font-sans font-bold text-lg text-neutral-900">
                    Spatial Web &amp; Emotional Brand Impact
                  </h4>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    Stand out in a world of boring templates. We create cinematic 3D web experiences that evoke emotion, capture user imagination, and convert visitors into believers.
                  </p>
                  <button
                    onClick={() => onNavigate('/')}
                    className="self-start inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:underline"
                  >
                    Experience 3D Porsche Wrap Studio <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'growth' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-black/10">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-emerald-600 font-bold mb-3">
                    Compound Algorithmic Growth Metrics
                  </h5>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-neutral-50 rounded-xl">
                      <span className="font-bold text-xl text-neutral-900 block">+314%</span>
                      <span className="text-[10px] text-neutral-500 font-mono">Organic Acquisition</span>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-xl">
                      <span className="font-bold text-xl text-neutral-900 block">4.8x</span>
                      <span className="text-[10px] text-neutral-500 font-mono">CRO Velocity</span>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-xl">
                      <span className="font-bold text-xl text-neutral-900 block">$450M+</span>
                      <span className="text-[10px] text-neutral-500 font-mono">Valuation Generated</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <h4 className="font-sans font-bold text-lg text-neutral-900">
                    Engineered Product Growth
                  </h4>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    We embed viral loops, programmatic SEO, and data-backed conversion experiments directly into code so your product grows automatically from day one.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'cloud' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-black/10">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-blue-600 font-bold mb-3">
                    Zero-Trust Infrastructure Topology
                  </h5>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 flex justify-between">
                      <span>Multi-Region Kubernetes (EKS / GKE)</span>
                      <span className="text-emerald-600 font-bold">14 Active Clusters</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 flex justify-between">
                      <span>Cloudflare Workers Edge Network</span>
                      <span className="text-emerald-600 font-bold">&lt; 10ms Global DNS</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200 flex justify-between">
                      <span>Automated Canary Rollback SLA</span>
                      <span className="text-emerald-600 font-bold">Zero-Downtime Guarantee</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col space-y-4">
                  <h4 className="font-sans font-bold text-lg text-neutral-900">
                    24/7 Resilience &amp; DevOps
                  </h4>
                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    Bulletproof security protocols, mutual TLS between pods, automated credential rotation, and proactive Datadog monitoring ensure 99.99% system availability.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* =====================================================================
          5. FINSEO STATS BAND ("Software is shifting more than ever")
          ===================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 block mb-2">
            The Industry Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1A1A1A] tracking-tight">
            Software engineering is changing <br />
            <span className="text-neutral-400 font-normal">more than ever before.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Organizations relying on deterministic manual code and slow agency cycles are being superseded by teams wielding autonomous AI swarms and ultra-fast distributed architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs">
            <span className="font-sans font-black text-4xl sm:text-5xl text-[#1A1A1A] block tracking-tight">
              84%
            </span>
            <h4 className="font-sans font-bold text-sm text-neutral-800 mt-2 mb-1">
              Autonomous Swarm Adoption
            </h4>
            <p className="font-sans text-xs text-neutral-500 leading-relaxed">
              Of high-scale engineering organizations are replacing manual code review with autonomous agent swarms.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs">
            <span className="font-sans font-black text-4xl sm:text-5xl text-[#1A1A1A] block tracking-tight">
              10x
            </span>
            <h4 className="font-sans font-bold text-sm text-neutral-800 mt-2 mb-1">
              Shipping Velocity
            </h4>
            <p className="font-sans text-xs text-neutral-500 leading-relaxed">
              Faster time-to-market compared to traditional consultancies through our proprietary SolutionLab methodology.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs">
            <span className="font-sans font-black text-4xl sm:text-5xl text-[#1A1A1A] block tracking-tight">
              99.99%
            </span>
            <h4 className="font-sans font-bold text-sm text-neutral-800 mt-2 mb-1">
              SLA Uptime
            </h4>
            <p className="font-sans text-xs text-neutral-500 leading-relaxed">
              Enterprise reliability across distributed Rust and Go microservice clusters with zero single points of failure.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs">
            <span className="font-sans font-black text-4xl sm:text-5xl text-[#1A1A1A] block tracking-tight">
              60 FPS
            </span>
            <h4 className="font-sans font-bold text-sm text-neutral-800 mt-2 mb-1">
              Spatial Framerate
            </h4>
            <p className="font-sans text-xs text-neutral-500 leading-relaxed">
              Fluid GPU particle motion and WebGL shaders delivering digital luxury experiences that captivate visitors.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. FINSEO BENTO GRID OF CORE OFFERINGS
          ===================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-black/10 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
              Everything your enterprise needs <br className="hidden sm:inline" />
              <span className="text-neutral-400 font-normal">to dominate the digital era.</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/dashboard')}
            className="mt-4 sm:mt-0 text-xs font-mono font-bold text-neutral-800 hover:text-black hover:underline"
          >
            Explore Interactive OS Dashboard →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onNavigate('/contact')}
              className={`p-8 rounded-2xl bg-white border ${srv.accent} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs font-bold text-neutral-400">{srv.num}</span>
                  <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">
                    {srv.badge}
                  </span>
                </div>

                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                  {srv.tag}
                </span>
                <h3 className="font-sans font-bold text-xl text-[#1A1A1A] mb-3">
                  {srv.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              <div>
                <ul className="space-y-2 border-t border-black/5 pt-4 font-sans text-xs text-neutral-700">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between text-xs font-semibold text-black">
                  <span>Scope Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          7. THE 4-PHASE DELIVERY METHODOLOGY (SolutionLab Roadmap)
          ===================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] text-white">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
              Proprietary Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              The SolutionLab Execution Engine.
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Before writing a single line of code, our SolutionLab sessions eliminate uncertainty. We blueprint system architecture, user flows, and sprint milestones to guarantee on-time, on-budget delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-cyan-400 font-bold block mb-2">PHASE 01</span>
              <h4 className="font-sans font-bold text-base text-white mb-2">Architectural Blueprint</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Full technical scoping, domain modeling, and user journey mapping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-indigo-400 font-bold block mb-2">PHASE 02</span>
              <h4 className="font-sans font-bold text-base text-white mb-2">Swarm &amp; Backend Build</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Autonomous LLM reasoning pipelines and compiled Rust/Go microservices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-pink-400 font-bold block mb-2">PHASE 03</span>
              <h4 className="font-sans font-bold text-base text-white mb-2">Spatial 3D &amp; Frontend</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Liquid 60FPS Three.js graphics and ultra-fast Next.js/React interfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-mono text-xs text-emerald-400 font-bold block mb-2">PHASE 04</span>
              <h4 className="font-sans font-bold text-base text-white mb-2">Scale &amp; Distribution</h4>
              <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                Algorithmic acquisition, multi-region Kubernetes, and 24/7 monitoring.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-400 font-mono">
              Ready to schedule your SolutionLab session?
            </span>
            <button
              onClick={() => setContactOpen(true)}
              className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Schedule SolutionLab →
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. TESTIMONIALS & SOCIAL PROOF
          ===================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] tracking-tight">
            Trusted by founders and engineering leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs flex flex-col justify-between">
            <p className="font-sans text-sm text-neutral-700 leading-relaxed italic mb-6">
              &ldquo;uperX delivered an autonomous multi-agent pipeline in 4 weeks that our internal team thought would take 6 months. It reduced our customer onboarding manual operations by 92%.&rdquo;
            </p>
            <div className="border-t border-black/5 pt-4">
              <span className="font-bold text-sm text-[#1A1A1A] block">Marcus Vance</span>
              <span className="font-mono text-[11px] text-neutral-500">VP of Technology // Apex Cloud</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs flex flex-col justify-between">
            <p className="font-sans text-sm text-neutral-700 leading-relaxed italic mb-6">
              &ldquo;The 3D WebGL experience they built for our product launch generated over 1.4 million organic impressions and won Site of the Day. Uncompromising attention to frame rates and performance.&rdquo;
            </p>
            <div className="border-t border-black/5 pt-4">
              <span className="font-bold text-sm text-[#1A1A1A] block">Elena Rostova</span>
              <span className="font-mono text-[11px] text-neutral-500">Chief Brand Officer // Horizon Labs</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-black/10 shadow-xs flex flex-col justify-between">
            <p className="font-sans text-sm text-neutral-700 leading-relaxed italic mb-6">
              &ldquo;Their Rust microservices handle over 80,000 transactions per second with sub-3ms latency. Zero downtime through our biggest Black Friday surge. Truly elite engineering.&rdquo;
            </p>
            <div className="border-t border-black/5 pt-4">
              <span className="font-bold text-sm text-[#1A1A1A] block">Julian Hayes</span>
              <span className="font-mono text-[11px] text-neutral-500">Head of Platform Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. HIGH-CONVERTING BOTTOM CALL TO ACTION
          ===================================================================== */}
      <section className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-20 text-center">
        <div className="p-12 sm:p-16 rounded-3xl bg-white border border-black/10 shadow-lg relative overflow-hidden">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">
            Initiate Deployment
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#1A1A1A] tracking-tight max-w-3xl mx-auto">
            Ready to scale with <br />
            <span className="text-neutral-400 font-normal">intelligent engineering?</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tell us about your venture, custom application, or autonomous AI goals. Our engineering leads respond with a comprehensive scoping proposal within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#1C1C1C] text-white text-sm font-semibold hover:bg-black transition-all shadow-md cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-neutral-300 bg-white text-sm font-semibold text-[#1A1A1A] hover:bg-neutral-50 transition-all cursor-pointer"
            >
              <span>Direct Inquiry</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. FINSEO REFINED LIGHT FOOTER
          ===================================================================== */}
      <footer className="w-full border-t border-black/10 bg-white py-12 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Logo & Info */}
          <div className="md:col-span-2 space-y-4">
            <UperXLogo size={36} showText={true} isLight={true} />
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              uperX architects autonomous AI agent swarms, distributed software, high-octane 3D spatial web experiences, and algorithmic growth engines.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Core Uptime: 99.99% • UTC+5:30</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3 font-sans text-xs">
            <h5 className="font-bold text-[#1A1A1A] uppercase tracking-wider font-mono text-[11px]">Capabilities</h5>
            <ul className="space-y-2 text-neutral-600">
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-black">Autonomous AI Agents</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-black">Custom Software (Rust/Go)</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-black">3D WebGL Experiences</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-black">SaaS App Creation</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-black">Growth &amp; CRO</button></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3 font-sans text-xs">
            <h5 className="font-bold text-[#1A1A1A] uppercase tracking-wider font-mono text-[11px]">Pages</h5>
            <ul className="space-y-2 text-neutral-600">
              <li><button onClick={() => onNavigate('/')} className="hover:text-black">Home</button></li>
              <li><button onClick={() => onNavigate('/dashboard')} className="hover:text-black">Services &amp; Work</button></li>
              <li><button onClick={() => onNavigate('/about')} className="hover:text-black">About Studio</button></li>
              <li><button onClick={() => onNavigate('/hypeboard')} className="hover:text-black">Engineering Insights</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-black">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 4: Studio Command */}
          <div className="space-y-3 font-sans text-xs">
            <h5 className="font-bold text-[#1A1A1A] uppercase tracking-wider font-mono text-[11px]">Studio Command</h5>
            <p className="text-neutral-600">
              Direct: <a href="mailto:hello@uperx.dev" className="text-black font-semibold hover:underline">hello@uperx.dev</a>
            </p>
            <p className="text-neutral-500 leading-snug">
              Initial technical scoping call and architecture proposal delivered within 24 hours.
            </p>
            <button
              onClick={onToggleTheme}
              className="mt-2 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-black/20 text-xs font-mono font-bold hover:bg-neutral-100 transition-colors"
            >
              <span>🌙 Switch to Dark Studio</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} uperX Global Engineering Studio. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span>Security: Zero-Trust</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          11. INTERACTIVE SOLUTIONLAB MODAL DRAWER
          ===================================================================== */}
      {solutionLabOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-black/10 rounded-3xl p-8 sm:p-10 shadow-2xl text-[#1A1A1A]">
            <button
              onClick={() => setSolutionLabOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 text-lg transition-colors cursor-pointer"
              aria-label="Close SolutionLab Modal"
            >
              ✕
            </button>

            <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold block mb-2">
              Proprietary Methodology
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              The SolutionLab Roadmap
            </h3>
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
              Before writing a single line of code, our SolutionLab sessions eliminate uncertainty. We blueprint your app architecture, user flows, and sprint milestones to guarantee on-time, on-budget delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-mono text-xs">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="text-cyan-600 font-bold block mb-1">Phase 01</span>
                <span className="font-bold text-neutral-900 block text-sm">Discovery &amp; Spec</span>
                <p className="text-neutral-500 text-[11px] mt-1 font-sans">Full feature scope and user story mapping.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="text-indigo-600 font-bold block mb-1">Phase 02</span>
                <span className="font-bold text-neutral-900 block text-sm">Interactive UI/UX</span>
                <p className="text-neutral-500 text-[11px] mt-1 font-sans">Clickable Figma prototype tested with real users.</p>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <span className="text-emerald-600 font-bold block mb-1">Phase 03</span>
                <span className="font-bold text-neutral-900 block text-sm">Agile Sprint Build</span>
                <p className="text-neutral-500 text-[11px] mt-1 font-sans">Bi-weekly releases with live staging access.</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-black/5">
              <span className="text-xs text-neutral-500 font-mono">Ready to schedule your session?</span>
              <button
                onClick={() => {
                  setSolutionLabOpen(false);
                  setContactOpen(true);
                }}
                className="px-6 py-2.5 rounded-lg bg-[#1C1C1C] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
              >
                Schedule SolutionLab →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          12. INTERACTIVE CONTACT MODAL DRAWER
          ===================================================================== */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-white border border-black/10 rounded-3xl p-8 sm:p-10 shadow-2xl text-[#1A1A1A]">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 text-lg transition-colors cursor-pointer"
              aria-label="Close Contact Modal"
            >
              ✕
            </button>

            <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-bold block mb-2">
              Start A Conversation
            </span>
            <h3 className="font-sans font-black text-3xl text-[#1A1A1A] mb-2">
              Let’s Build Together.
            </h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
              Tell us about your venture, custom application, or digital product goals. Our engineering leads will respond within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your inquiry has been received. Our team will contact you shortly.');
                setContactOpen(false);
              }}
              className="space-y-4 text-xs font-mono"
            >
              <div>
                <label className="block text-neutral-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-700 mb-1">Project Overview</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you'd like to build..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-black transition-colors font-sans text-xs resize-none"
                />
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-[#1C1C1C] text-white font-sans font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                >
                  Send Inquiry Now →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setContactOpen(false);
                    onNavigate('/contact');
                  }}
                  className="px-5 py-3.5 rounded-xl border border-neutral-300 text-neutral-700 hover:text-black hover:border-black text-xs font-sans transition-colors cursor-pointer"
                >
                  Full Page Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
