import React, { useState } from 'react';
import { getWallpapers } from '../utils/sanity';
import { Icon3D } from '../components/ThreeDIcons';

interface DashboardProps {
  onNavigate: (path: string) => void;
}

const UPERX_FOLDERS = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    items: [
      { id: '1', title: 'AgentSwarm-Alpha', type: 'Multi-Agent Framework', desc: 'Autonomous multi-agent orchestration for asynchronous task decomposition, self-correction, and tool execution.', url: 'https://github.com/uperx/swarm-alpha' },
      { id: '2', title: 'CognitiveRAG-v3', type: 'Vector Search & Knowledge Base', desc: 'High-speed hybrid semantic retrieval pipeline combining Milvus vector embeddings with graph knowledge trees.', url: 'https://github.com/uperx/cognitive-rag' },
      { id: '3', title: 'CodeSynth-Engine', type: 'LLM Code Generator', desc: 'Automated code review, unit test synthesis, and pull request refactoring bot integrated with GitHub Actions.', url: 'https://github.com/uperx/codesynth' },
    ],
  },
  {
    id: 'software',
    title: 'Full-Stack Software',
    items: [
      { id: '4', title: 'CorePlatform API', type: 'High-Throughput Microservice', desc: 'Rust + Go distributed event broker handling 50,000+ operations/second with sub-5ms latency.', url: 'https://uperx.dev' },
      { id: '5', title: 'OmniStream Broker', type: 'Real-Time WebSockets', desc: 'Scalable distributed state synchronization engine for multi-user collaborative interfaces.', url: 'https://uperx.dev' },
    ],
  },
  {
    id: 'web3d',
    title: '3D WebGL Experiences',
    items: [
      { id: '6', title: 'Spatial Studio Engine', type: 'Three.js & Shaders', desc: 'Production-ready WebGL runtime with ACESFilmic tonemapping, physics cloth simulation, and 60FPS fluid motion.', url: 'https://uperx.dev' },
      { id: '7', title: 'Neon Kinetic Shaders', type: 'GLSL Post-Processing', desc: 'Bespoke chromatic aberration and blooming shader pipelines for ultra-modern digital brands.', url: 'https://uperx.dev' },
    ],
  },
  {
    id: 'saas',
    title: 'SaaS Platforms',
    items: [
      { id: '8', title: 'HyperScale Billing', type: 'Multi-Tenant Billing', desc: 'Automated tiered subscription engine, usage-based metering, and customer invoice automation.', url: 'https://uperx.dev' },
      { id: '9', title: 'Agentic CRM Portal', type: 'Enterprise Dashboard', desc: 'Intelligent customer relationship portal where AI agents automatically draft responses and schedule workflows.', url: 'https://uperx.dev' },
    ],
  },
  {
    id: 'growth',
    title: 'Growth & Marketing',
    items: [
      { id: '10', title: 'Algorithmic Funnels', type: 'CRO & Experimentation', desc: 'Real-time multi-armed bandit A/B testing engine optimizing landing page conversion dynamically.', url: 'https://uperx.dev' },
      { id: '11', title: 'Viral Distribution Model', type: 'Brand Acquisition Strategy', desc: 'Engineering cult-level brand narratives that achieve organic user adoption through interactive digital stunts.', url: 'https://uperx.dev' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps IT',
    items: [
      { id: '12', title: 'ZeroTrust Kubernetes', type: 'Cloud Infrastructure', desc: 'Automated multi-region cluster deployment with automated canary rollouts and automated failover.', url: 'https://uperx.dev' },
      { id: '13', title: 'Edge Shield Firewall', type: 'Cybersecurity Hardening', desc: 'DDoS mitigation layer, automated SSL rotation, and secret vault orchestration.', url: 'https://uperx.dev' },
    ],
  },
];

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const wallpapers = getWallpapers();

  const [activeFolderId, setActiveFolderId] = useState<string>(UPERX_FOLDERS[0].id);
  const [windowOpen, setWindowOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [activeWallpaper, setActiveWallpaper] = useState<string>('');
  const [wallpaperModalOpen, setWallpaperModalOpen] = useState(false);

  const currentFolder = UPERX_FOLDERS.find((f) => f.id === activeFolderId) || UPERX_FOLDERS[0];

  const stickyMemos = [
    { title: 'ENGINEERING LAW #1', text: 'Never ship boring software. If it does not spark awe, refine the craft.', color: '#dcfce7', rot: -2 },
    { title: 'AGENT DIRECTIVE', text: 'Autonomous multi-agent swarms > static deterministic scripts.', color: '#e0e7ff', rot: 3 },
    { title: 'PERFORMANCE TARGET', text: '60FPS fluid physics across all spatial viewports.', color: '#fef3c7', rot: -1 },
  ];

  return (
    <div
      className="relative w-full min-h-[92vh] pt-24 px-6 pb-20 select-none overflow-hidden"
      style={{
        backgroundColor: '#050508',
        backgroundImage: activeWallpaper
          ? `url(${activeWallpaper})`
          : 'radial-gradient(circle at 50% 15%, rgba(0, 242, 254, 0.05) 0%, transparent 60%), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: activeWallpaper ? 'cover' : '100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay */}
      {activeWallpaper && <div className="absolute inset-0 bg-black/60 z-0" />}

      {/* Desktop Header Info */}
      <div className="relative z-10 flex justify-between items-center mb-8 text-xs font-mono text-neutral-400">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="tracking-wider text-neutral-200">
            uperX <span className="uppercase">OS v3.0 // Neural Command Center</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setWallpaperModalOpen(true)}
            className="hover:text-cyan-400 transition-colors underline font-mono text-xs"
          >
            [ Change Desktop Wallpaper ]
          </button>
        </div>
      </div>

      {/* DESKTOP ICONS GRID (Left Side) */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        {/* Desktop Folder Icons */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 w-full md:w-44">
          {UPERX_FOLDERS.map((folder) => {
            const isSelected = activeFolderId === folder.id;
            return (
              <div
                key={folder.id}
                onClick={() => {
                  setActiveFolderId(folder.id);
                  setWindowOpen(true);
                }}
                className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                  isSelected ? 'bg-cyan-500/20 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,242,254,0.3)]' : 'hover:bg-white/10'
                }`}
              >
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon3D name={folder.id} size={36} />
                </div>
                <span className="mt-1.5 text-center font-mono text-[11px] text-white tracking-tight leading-tight px-1.5 py-0.5 rounded bg-black/60">
                  {folder.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* MAIN OS FINDER WINDOW */}
        {windowOpen && (
          <div className="flex-1 max-w-4xl rounded-2xl border border-white/20 bg-neutral-950/90 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
            {/* Window Titlebar */}
            <div className="h-11 px-5 bg-neutral-900/80 border-b border-white/10 flex items-center justify-between">
              {/* Traffic Lights */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setWindowOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
                  title="Close Window"
                />
                <button
                  onClick={() => setWindowOpen(false)}
                  className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"
                  title="Minimize"
                />
                <button
                  className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity"
                  title="Maximize"
                />
              </div>

              {/* Title */}
              <div className="font-mono text-xs text-neutral-200 flex items-center space-x-2">
                <Icon3D name={currentFolder.id} size={22} />
                <span className="font-bold">{currentFolder.title}</span>
                <span className="text-neutral-500">({currentFolder.items.length} modules)</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Window Content Grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-h-[550px] overflow-y-auto">
              {currentFolder.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="flex flex-col p-5 rounded-xl border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/5 cursor-pointer transition-all duration-200 group relative"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                      <Icon3D name={currentFolder.id} size={30} />
                    </div>
                    <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                      Active
                    </span>
                  </div>

                  <span className="font-sans text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 mt-0.5 mb-2">
                    {item.type}
                  </span>
                  <p className="font-sans text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-cyan-400">
                    <span>Inspect Spec ↗</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Window Status Bar */}
            <div className="h-9 px-5 bg-neutral-900/60 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>System: Ready • {currentFolder.items.length} items loaded</span>
              <span>Architecture: Multi-Agent Microkernel</span>
            </div>
          </div>
        )}

        {/* STICKY NOTES ON DESKTOP (Right Side) */}
        <div className="hidden lg:flex flex-col space-y-6 w-72">
          {stickyMemos.map((memo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl shadow-2xl font-mono text-xs text-neutral-900 transition-transform duration-300 hover:scale-105 select-none"
              style={{
                backgroundColor: memo.color,
                transform: `rotate(${memo.rot}deg)`,
              }}
            >
              <div className="font-bold text-[10px] uppercase tracking-wider text-neutral-700 mb-1 border-b border-black/10 pb-1">
                {memo.title}
              </div>
              <p className="leading-snug text-neutral-900 font-medium">{memo.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ITEM PREVIEW MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="max-w-xl w-full bg-neutral-950 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,242,254,0.2)] p-8 relative flex flex-col space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-cyan-400 block mb-1">
                  Module Blueprint
                </span>
                <h3 className="font-sans font-black text-2xl text-white">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                ✕
              </button>
            </div>

            <div className="font-mono text-xs text-neutral-300 bg-black/60 p-4 rounded-xl border border-white/10 space-y-2">
              <div><span className="text-neutral-500">Category:</span> {selectedItem.type}</div>
              <div><span className="text-neutral-500">Status:</span> Production Verified</div>
              <div><span className="text-neutral-500">Engine:</span> uperX Core 2026</div>
            </div>

            <p className="font-sans text-sm text-neutral-300 leading-relaxed">
              {selectedItem.desc}
            </p>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onNavigate('/contact');
                }}
                className="px-6 py-3 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors"
              >
                Request Custom Deployment →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WALLPAPER SWITCHER MODAL */}
      {wallpaperModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setWallpaperModalOpen(false)}
        >
          <div
            className="max-w-xl w-full bg-neutral-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans font-bold text-lg text-white">Select OS Wallpaper</h3>
              <button
                onClick={() => setWallpaperModalOpen(false)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => {
                  setActiveWallpaper('');
                  setWallpaperModalOpen(false);
                }}
                className={`aspect-video rounded-xl border-2 cursor-pointer p-2 flex items-center justify-center font-mono text-xs ${
                  !activeWallpaper ? 'border-cyan-400 bg-neutral-900 text-white' : 'border-neutral-800 bg-black text-neutral-500'
                }`}
              >
                Deep Cyber Void
              </div>
              {wallpapers.map((wp) => (
                <div
                  key={wp.id}
                  onClick={() => {
                    setActiveWallpaper(wp.image);
                    setWallpaperModalOpen(false);
                  }}
                  className={`aspect-video rounded-xl border-2 overflow-hidden cursor-pointer relative group ${
                    activeWallpaper === wp.image ? 'border-cyan-400' : 'border-neutral-800 hover:border-white/50'
                  }`}
                >
                  <img src={wp.image} alt={wp.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-xs text-white">{wp.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
