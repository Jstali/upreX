import React, { useState } from 'react';

export const Contact: React.FC = () => {
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
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-12 max-w-6xl mx-auto flex flex-col space-y-16 select-none">
      {/* Header Banner */}
      <section className="text-center md:text-left flex flex-col space-y-4">
        <div className="inline-flex items-center space-x-2 self-center md:self-start px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
            Initiate Project // Deployment Portal
          </span>
        </div>

        <h1 className="font-sans font-black text-5xl md:text-8xl tracking-tight text-white uppercase leading-[0.95]">
          Let's Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-300 font-serif font-light italic normal-case">
            Extraordinary.
          </span>
        </h1>

        <p className="max-w-xl font-sans text-sm md:text-base text-neutral-400 leading-relaxed">
          Tell us about your organization, technical bottlenecks, or product vision. Our engineers will scope a tailored deployment plan.
        </p>
      </section>

      {/* Main Grid: Form + HQ Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <div className="p-10 rounded-3xl bg-neutral-950/80 border border-cyan-500/30 flex flex-col items-center justify-center text-center space-y-4 py-20 shadow-[0_0_50px_rgba(0,242,254,0.2)]">
              <span className="text-5xl">⚡</span>
              <h3 className="font-sans font-black text-3xl text-white uppercase">Project Brief Dispatched</h3>
              <p className="font-sans text-neutral-300 text-sm max-w-md">
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
                className="mt-4 px-6 py-2.5 rounded-full border border-white/20 font-mono text-xs uppercase text-neutral-300 hover:border-cyan-400"
              >
                Submit Additional Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-12 rounded-3xl bg-neutral-950/70 border border-white/10 flex flex-col space-y-8"
            >
              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Apex Technologies / Stealth AI"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div className="flex flex-col space-y-3">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
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
                          ? 'border-cyan-400 bg-cyan-500/20 text-white font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
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
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
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
                          ? 'border-cyan-400 bg-cyan-400 text-black font-bold'
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
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Project Description & Key Deliverables *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current product, timeline, key technical goals, or autonomous agent requirements..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 shadow-[0_0_25px_rgba(0,242,254,0.3)]"
              >
                {isSubmitting ? 'Transmitting To uperX Core...' : 'Deploy Project Brief →'}
              </button>
            </form>
          )}
        </div>

        {/* HQ Column */}
        <div className="flex flex-col space-y-8 lg:pl-4">
          <div className="p-8 rounded-3xl bg-neutral-950/70 border border-white/10 flex flex-col space-y-6 font-mono text-xs text-neutral-400">
            <div>
              <span className="text-[10px] text-cyan-400 block mb-1 font-bold">
                uperX <span className="uppercase">Studio Command</span>
              </span>
              <p className="text-white font-sans font-bold text-lg">Global Digital Labs</p>
              <p className="text-neutral-500">Autonomous Engineering & Growth</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-cyan-400 block mb-1 font-bold">
                Direct Inquiries
              </span>
              <a
                href="mailto:hello@uperx.dev"
                className="text-white font-sans font-medium text-sm hover:underline hover:text-cyan-300"
              >
                hello@uperx.dev
              </a>
            </div>

            <div>
              <span className="text-[10px] uppercase text-cyan-400 block mb-1 font-bold">
                Engagement SLA
              </span>
              <p className="text-neutral-300 leading-snug">
                Initial technical scoping call and architecture proposal delivered within 24 hours.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase text-cyan-400 block mb-1 font-bold">
                Focus Verticals
              </span>
              <p className="text-neutral-300 leading-snug">
                AI Agents • SaaS Platforms • High-Octane 3D Web • Performance Marketing • Cloud DevOps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
