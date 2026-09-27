import React, { useState } from 'react';

interface ContactProps {
  isLight?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isLight = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Autonomous AI Agent Creation',
    budget: '$25k - $50k',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Autonomous AI Agent Creation',
    'Custom Software Development',
    'High-End 3D Web & Creative Frontends',
    'Service-Based App Creation & SaaS',
    'Growth Marketing & Brand Strategy',
    'Enterprise IT & Cloud Operations',
  ];

  const budgets = ['< $15k', '$15k - $30k', '$30k - $75k', '$75k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className={`w-full min-h-screen pt-28 pb-24 px-5 md:px-12 max-w-6xl mx-auto flex flex-col space-y-16 select-none ${
      isLight ? 'text-[#1A1A1A]' : 'text-white'
    }`}>
      {/* Header Banner */}
      <section className="text-center md:text-left flex flex-col space-y-4" data-reveal>
        <div className={`inline-flex items-center space-x-2 self-center md:self-start px-4 py-1.5 rounded-full border ${
          isLight ? 'border-black/10 bg-white shadow-xs' : 'border-cyan-500/30 bg-cyan-500/10'
        }`} data-reveal="scale">
          <span className={`w-2 h-2 rounded-full ${isLight ? 'bg-emerald-500' : 'bg-cyan-400'} animate-ping`} />
          <span className={`font-mono text-xs uppercase tracking-widest ${isLight ? 'text-neutral-700 font-semibold' : 'text-cyan-300'}`}>
            Initiate Project // Deployment Portal
          </span>
        </div>

        <h1 data-reveal="chars" className={`font-sans font-black text-5xl md:text-8xl tracking-tight uppercase leading-[0.95] ${
          isLight ? 'text-[#1A1A1A]' : 'text-white'
        }`}>
          Let's Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 font-serif font-light italic normal-case">
            Extraordinary.
          </span>
        </h1>

        <p data-reveal="lines" className={`max-w-xl font-sans text-sm md:text-base leading-relaxed ${
          isLight ? 'text-neutral-600' : 'text-neutral-400'
        }`}>
          Tell us about your organization, technical bottlenecks, or product vision. Our engineers will scope a tailored deployment plan.
        </p>
      </section>

      {/* Main Grid: Form + HQ Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" data-reveal="scale">
        {/* Form Column */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <div className={`p-10 rounded-3xl border flex flex-col items-center justify-center text-center space-y-4 py-20 ${
              isLight
                ? 'bg-white border-black/10 shadow-xl text-neutral-900'
                : 'bg-neutral-950/80 border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,254,0.2)] text-white'
            }`}>
              <span className="text-5xl">⚡</span>
              <h3 className="font-sans font-black text-3xl uppercase">Project Brief Dispatched</h3>
              <p className={`font-sans text-sm max-w-md ${isLight ? 'text-neutral-600' : 'text-neutral-300'}`}>
                Thank you. The uperX engineering and AI team has received your submission and will review requirements within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    service: services[0],
                    budget: budgets[1],
                    message: '',
                  });
                }}
                className={`mt-4 px-6 py-2.5 rounded-full border font-mono text-xs uppercase ${
                  isLight
                    ? 'border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                    : 'border-white/20 text-neutral-300 hover:border-cyan-400'
                }`}
              >
                Submit Additional Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`p-8 md:p-12 rounded-3xl border flex flex-col space-y-8 ${
                isLight ? 'bg-white border-black/10 shadow-md' : 'bg-neutral-950/70 border-white/10'
              }`}
            >
              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600 font-semibold' : 'text-neutral-400'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black'
                        : 'bg-black/60 border-white/10 text-white focus:border-cyan-400'
                    }`}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600 font-semibold' : 'text-neutral-400'}`}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-colors ${
                      isLight
                        ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black'
                        : 'bg-black/60 border-white/10 text-white focus:border-cyan-400'
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600 font-semibold' : 'text-neutral-400'}`}>
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Apex Technologies / Stealth AI"
                  className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black'
                      : 'bg-black/60 border-white/10 text-white focus:border-cyan-400'
                  }`}
                />
              </div>

              {/* Service Selection */}
              <div className="flex flex-col space-y-3">
                <label className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600 font-semibold' : 'text-neutral-400'}`}>
                  Core Area of Engagement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`px-4 py-3.5 rounded-xl border text-left font-mono text-xs tracking-tight transition-all duration-200 ${
                        formData.service === srv
                          ? isLight
                            ? 'border-black bg-[#1C1C1C] text-white font-bold shadow-sm'
                            : 'border-cyan-400 bg-cyan-500/20 text-white font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                          : isLight
                          ? 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-400'
                          : 'border-white/10 bg-black/40 text-neutral-400 hover:border-white/30'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="flex flex-col space-y-3">
                <label className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600 font-semibold' : 'text-neutral-400'}`}>
                  Target Capital / Project Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs transition-all ${
                        formData.budget === b
                          ? isLight
                            ? 'border-black bg-black text-white font-bold'
                            : 'border-cyan-400 bg-cyan-400 text-black font-bold'
                          : isLight
                          ? 'border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-400'
                          : 'border-white/10 bg-black/40 text-neutral-400 hover:border-white/30'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Brief */}
              <div className="flex flex-col space-y-2">
                <label className={`font-mono text-xs uppercase tracking-wider ${isLight ? 'text-neutral-600 font-semibold' : 'text-neutral-400'}`}>
                  Project Description &amp; Key Deliverables *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current product, timeline, key technical goals, or autonomous agent requirements..."
                  className={`w-full px-4 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black'
                      : 'bg-black/60 border-white/10 text-white focus:border-cyan-400'
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-full font-mono font-bold text-xs uppercase tracking-widest transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-md ${
                  isLight
                    ? 'bg-[#1C1C1C] text-white hover:bg-black'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-[0_0_25px_rgba(0,242,254,0.3)]'
                }`}
              >
                {isSubmitting ? 'Transmitting To uperX Core...' : 'Deploy Project Brief →'}
              </button>
            </form>
          )}
        </div>

        {/* HQ Column */}
        <div className="flex flex-col space-y-8 lg:pl-4" data-tilt>
          <div className={`tilt-card p-8 rounded-3xl border flex flex-col space-y-6 font-mono text-xs overflow-hidden relative shadow-lg ${
            isLight
              ? 'bg-white border-black/10 text-neutral-700'
              : 'bg-neutral-950/70 border-white/10 hover:border-cyan-500/40 text-neutral-400 shadow-[0_16px_40px_rgba(0,0,0,0.5)]'
          }`}>
            <span className="tilt-shine" aria-hidden="true" />

            <div className="tilt-badge">
              <span className={`text-[10px] block mb-1 font-bold ${isLight ? 'text-black' : 'text-cyan-400'}`}>
                uperX <span className="uppercase">Studio Command</span>
              </span>
              <p className={`font-sans font-bold text-lg ${isLight ? 'text-neutral-900' : 'text-white'}`}>Global Digital Labs</p>
              <p className={isLight ? 'text-neutral-500' : 'text-neutral-500'}>Autonomous Engineering &amp; Growth</p>
            </div>

            <div className="tilt-body">
              <span className={`text-[10px] uppercase block mb-1 font-bold ${isLight ? 'text-black' : 'text-cyan-400'}`}>
                Direct Inquiries
              </span>
              <a
                href="mailto:hello@uperx.dev"
                className={`font-sans font-medium text-sm hover:underline ${isLight ? 'text-neutral-900' : 'text-white hover:text-cyan-300'}`}
              >
                hello@uperx.dev
              </a>
            </div>

            <div className="tilt-body">
              <span className={`text-[10px] uppercase block mb-1 font-bold ${isLight ? 'text-black' : 'text-cyan-400'}`}>
                Engagement SLA
              </span>
              <p className={`leading-snug ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                Initial technical scoping call and architecture proposal delivered within 24 hours.
              </p>
            </div>

            <div className="tilt-body pt-4 border-t border-black/10">
              <span className={`text-[10px] uppercase block mb-1 font-bold ${isLight ? 'text-black' : 'text-cyan-400'}`}>
                Focus Verticals
              </span>
              <p className={`leading-snug ${isLight ? 'text-neutral-700' : 'text-neutral-300'}`}>
                AI Agents • SaaS Platforms • High-Octane 3D Web • Performance Marketing • Cloud DevOps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
