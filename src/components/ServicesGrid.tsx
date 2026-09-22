import React from 'react';

export const SERVICES = [
  {
    id: 'ai-agents',
    tag: '01 // Autonomous Systems',
    title: 'AI Agent Creation & Workflows',
    desc: 'Autonomous multi-agent swarms, customized LLM reasoning pipelines, cognitive automation, and enterprise RAG architectures that execute complex operations without human intervention.',
    icon: '🤖',
    accent: 'from-cyan-500 to-blue-600',
    features: ['Multi-Agent Swarm Orchestration', 'Custom Tool-Calling & Fine-Tuning', 'Automated Research & Ops Bots'],
  },
  {
    id: 'software-dev',
    tag: '02 // Core Engineering',
    title: 'Custom Software Development',
    desc: 'Mission-critical distributed architectures, robust backend microservices, resilient APIs, and full-stack software built to handle high throughput with zero downtime.',
    icon: '⚡',
    accent: 'from-purple-500 to-indigo-600',
    features: ['Distributed Cloud Microservices', 'High-Frequency Data Pipelines', 'Custom Enterprise Portals'],
  },
  {
    id: 'web-development',
    tag: '03 // Digital Experience',
    title: 'High-End 3D Web & Creative Frontends',
    desc: 'Bespoke web applications that fuse Three.js WebGL spatial graphics, GSAP physics micro-interactions, responsive architectures, and ultra-fast Next.js/React performance.',
    icon: '🌐',
    accent: 'from-pink-500 to-rose-600',
    features: ['Interactive Three.js / WebGL', 'Fluid GSAP Motion Systems', 'Ultra-Optimized Headless Stacks'],
  },
  {
    id: 'service-apps',
    tag: '04 // Scalable Platforms',
    title: 'Service-Based App Creation & SaaS',
    desc: 'End-to-end digital service platforms, on-demand marketplaces, and multi-tenant SaaS products engineered with automated billing, user roles, and real-time messaging.',
    icon: '📦',
    accent: 'from-amber-500 to-orange-600',
    features: ['Multi-Tenant SaaS Architecture', 'Stripe Billing & Subscription Engines', 'Real-Time WebSockets & Queues'],
  },
  {
    id: 'growth-marketing',
    tag: '05 // Velocity & Scale',
    title: 'Growth Marketing & Brand Strategy',
    desc: 'Algorithmic customer acquisition, conversion rate optimization, data-backed funnel experimentation, and high-impact digital narratives that turn users into cult followers.',
    icon: '📈',
    accent: 'from-emerald-500 to-teal-600',
    features: ['Full-Funnel Growth Engineering', 'Conversion Rate Optimization (CRO)', 'Viral Product Positioning'],
  },
  {
    id: 'it-infrastructure',
    tag: '06 // Cloud & Reliability',
    title: 'Enterprise IT & Cloud Operations',
    desc: 'Comprehensive cloud architecture (AWS, GCP, Azure), Kubernetes orchestration, automated CI/CD pipelines, cybersecurity hardening, and 24/7 system monitoring.',
    icon: '🛡️',
    accent: 'from-blue-500 to-cyan-600',
    features: ['Kubernetes & Docker Containerization', 'Automated CI/CD DevOps Pipelines', 'Zero-Trust Security & Cloud Hardening'],
  },
];

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-12 py-24 select-none">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="font-mono text-xs tracking-widest text-cyan-400 block mb-2">
            uperX <span className="uppercase">// Core Capabilities</span>
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl text-white tracking-tight uppercase">
            Engineering The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300">
              Future of Technology.
            </span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-sm">
          From self-governing AI agent swarms to multi-million user cloud platforms and viral growth machines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            onClick={() => onSelectService && onSelectService(srv.title)}
            className="group relative p-8 rounded-3xl bg-neutral-950/80 border border-white/10 hover:border-cyan-500/50 transition-transform transition-colors duration-200 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1.5"
            style={{ contain: 'content', transform: 'translate3d(0, 0, 0)' }}
          >
            {/* Top gradient highlight */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${srv.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {srv.icon}
                </span>
                <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider">
                  {srv.tag}
                </span>
              </div>

              <h3 className="font-sans font-bold text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {srv.title}
              </h3>

              <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-6">
                {srv.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col space-y-2">
              {srv.features.map((feat, fidx) => (
                <div key={fidx} className="flex items-center space-x-2 text-xs font-mono text-neutral-300">
                  <span className="text-cyan-400">▹</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
