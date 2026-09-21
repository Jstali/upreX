import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Brand Identity & Strategy',
    budget: '$50k - $100k',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Brand Identity & Strategy',
    '3D WebGL & Digital Experience',
    'Product Packaging & Manufacturing',
    'Venture Co-Investment',
  ];

  const budgets = ['< $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen pt-24 pb-24 px-5 md:px-12 max-w-6xl mx-auto flex flex-col space-y-16">
      {/* Header Banner */}
      <section className="text-center md:text-left flex flex-col space-y-4 pt-8">
        <div className="inline-flex items-center space-x-2 self-center md:self-start px-3 py-1 rounded-full border border-white/10 bg-white/5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300">
            Let's Work // New Inquiries
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-8xl tracking-tight text-white font-normal uppercase">
          Build Something <br />
          <span className="italic font-light text-neutral-400">Epic With Us.</span>
        </h1>

        <p className="max-w-xl font-sans text-sm md:text-base text-neutral-400 leading-relaxed">
          Tell us about your company, your vision, and how we can collaborate to disrupt your market.
        </p>
      </section>

      {/* Main Grid: Form + HQ Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <div className="p-10 rounded-3xl bg-neutral-900/60 border border-white/20 flex flex-col items-center justify-center text-center space-y-4 py-20">
              <span className="text-5xl">⚡</span>
              <h3 className="font-sans font-bold text-3xl text-white">Transmission Received</h3>
              <p className="font-sans text-neutral-400 text-sm max-w-md">
                Thanks for reaching out. The team at Damn Good Brands HQ in Charlotte has received your brief and will review it shortly.
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
                className="mt-4 px-6 py-2.5 rounded-full border border-white/20 font-mono text-xs uppercase text-neutral-300 hover:border-white"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-white/10 flex flex-col space-y-8"
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
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Brand / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Apex Studio / Brand Inc."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div className="flex flex-col space-y-3">
                <label className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Focus Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`px-4 py-3 rounded-xl border text-left font-mono text-xs tracking-tight transition-all duration-200 ${
                        formData.service === srv
                          ? 'border-white bg-white/10 text-white font-bold'
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
                  Estimated Capital / Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-3 rounded-lg border text-center font-mono text-xs transition-all ${
                        formData.budget === b
                          ? 'border-white bg-white text-black font-bold'
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
                  Project Vision / Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about what you want to achieve, timeline, and current stage..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? 'Transmitting To HQ...' : 'Submit Collaboration Brief →'}
              </button>
            </form>
          )}
        </div>

        {/* HQ Column */}
        <div className="flex flex-col space-y-8 lg:pl-4">
          <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 flex flex-col space-y-6 font-mono text-xs text-neutral-400">
            <div>
              <span className="text-[10px] uppercase text-neutral-500 block mb-1">
                Headquarters
              </span>
              <p className="text-white font-sans font-bold text-base">Charlotte, North Carolina</p>
              <p className="text-neutral-500">35.2271° N, 80.8431° W</p>
            </div>

            <div>
              <span className="text-[10px] uppercase text-neutral-500 block mb-1">
                Direct Inquiries
              </span>
              <a
                href="mailto:hello@damngoodbrands.com"
                className="text-white font-sans font-medium text-sm hover:underline"
              >
                hello@damngoodbrands.com
              </a>
            </div>

            <div>
              <span className="text-[10px] uppercase text-neutral-500 block mb-1">
                Social Radar
              </span>
              <a
                href="https://www.instagram.com/damngoodbrands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-sans font-medium text-sm hover:underline block"
              >
                Instagram @damngoodbrands ↗
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase text-neutral-500 block mb-1">
                Founders & Partners
              </span>
              <p className="text-neutral-300 leading-snug">
                Always on the lookout for visionary brand builders and category creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
