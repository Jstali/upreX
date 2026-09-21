import React from 'react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const techStack = [
    { name: 'AI & Machine Learning', items: ['PyTorch', 'LangChain', 'LlamaIndex', 'Claude & OpenAI APIs', 'Vector DBs (Milvus, Pinecone)'] },
    { name: 'Full-Stack Software', items: ['TypeScript', 'Rust', 'Go', 'Python / FastAPI', 'PostgreSQL', 'Redis'] },
    { name: 'Creative Web & 3D', items: ['React / Next.js', 'Three.js / WebGL', 'GLSL Custom Shaders', 'GSAP Motion', 'Tailwind CSS'] },
    { name: 'Cloud & Infrastructure', items: ['Kubernetes', 'Docker', 'AWS / GCP', 'Cloudflare Workers', 'Terraform CI/CD'] },
  ];

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-12 max-w-7xl mx-auto flex flex-col space-y-24 select-none">
      {/* Header Banner */}
      <section className="text-center md:text-left flex flex-col space-y-6 border-b border-white/10 pb-16">
        <div className="inline-flex items-center space-x-2 self-center md:self-start px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
            About uperX // Engineering DNA
          </span>
        </div>

        <h1 className="font-sans font-black text-5xl md:text-8xl tracking-tight text-white uppercase leading-[0.95]">
          Architecting The <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 font-serif font-light italic normal-case">
            Autonomous Digital Era.
          </span>
        </h1>

        <p className="max-w-3xl font-sans text-base md:text-xl text-neutral-300 leading-relaxed font-normal">
          <strong className="text-white">uperX</strong> is a next-generation technology startup and digital engineering company. We bridge the frontier between cutting-edge artificial intelligence, high-scale software development, spatial 3D web experiences, and algorithmic growth marketing.
        </p>
      </section>

      {/* THREE CORE PRINCIPLES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-neutral-950/70 border border-white/10 flex flex-col space-y-4 hover:border-cyan-400/40 transition-colors">
          <span className="font-mono text-xs text-cyan-400 uppercase">01 // Agentic First</span>
          <h3 className="font-sans font-bold text-2xl text-white">Autonomous by Design</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            We don't just write code; we deploy self-correcting AI agent networks that automate workflows, perform continuous reasoning, and solve enterprise bottlenecks at scale.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-neutral-950/70 border border-white/10 flex flex-col space-y-4 hover:border-pink-400/40 transition-colors">
          <span className="font-mono text-xs text-pink-400 uppercase">02 // Spatial Craft</span>
          <h3 className="font-sans font-bold text-2xl text-white">60FPS Web Experiences</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            We reject boring, cookie-cutter web design. Our digital platforms leverage custom Three.js WebGL graphics, physics simulations, and bespoke animations that leave memorable marks.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-neutral-950/70 border border-white/10 flex flex-col space-y-4 hover:border-amber-400/40 transition-colors">
          <span className="font-mono text-xs text-amber-400 uppercase">03 // Full-Spectrum</span>
          <h3 className="font-sans font-bold text-2xl text-white">Engineering to Growth</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed">
            From initial microservice architecture to customer acquisition algorithms, we provide end-to-end software development, IT operations, and aggressive growth marketing under one roof.
          </p>
        </div>
      </section>

      {/* TECH STACK ARSENAL */}
      <section className="flex flex-col space-y-8">
        <div className="border-b border-white/10 pb-6 flex justify-between items-end">
          <div>
            <span className="font-mono text-xs text-cyan-400 uppercase block mb-1">
              Production Arsenal
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-white uppercase">
              Technology Stack
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-500">Battle-Tested Engines</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 flex flex-col space-y-4"
            >
              <h4 className="font-sans font-bold text-base text-white border-b border-white/10 pb-2">
                {tech.name}
              </h4>
              <ul className="space-y-2">
                {tech.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="font-mono text-xs text-neutral-400 flex items-center space-x-2">
                    <span className="text-cyan-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center pt-16 border-t border-white/10">
        <h3 className="font-sans font-black text-3xl md:text-5xl text-white uppercase mb-6">
          Ready to scale your next digital product?
        </h3>
        <button
          onClick={() => onNavigate('/contact')}
          className="px-8 py-4 rounded-full bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-300 transition-all duration-200 hover:scale-105 shadow-[0_0_25px_rgba(0,242,254,0.4)]"
        >
          Consult With uperX Engineers →
        </button>
      </section>
    </div>
  );
};
