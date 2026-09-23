import React, { useState, useEffect, useRef } from 'react';

interface LightStudioProps {
  onNavigate: (path: string) => void;
  onToggleTheme: () => void;
}

export const LightStudio: React.FC<LightStudioProps> = ({ onNavigate, onToggleTheme }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);
  const [activeSection, setActiveSection] = useState<'story' | 'mission' | 'advantages' | 'success'>('story');
  const [solutionLabOpen, setSolutionLabOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [autoTourPlaying, setAutoTourPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Sync scroll position with video currentTime
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      if (autoTourPlaying) return;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      // 0.0s is Hero, 10.2s is the bottom of the descent
      targetTimeRef.current = progress * 10.2;

      // Update active section indicator
      if (progress < 0.22) {
        setActiveSection('story');
      } else if (progress < 0.52) {
        setActiveSection('mission');
      } else if (progress < 0.78) {
        setActiveSection('advantages');
      } else {
        setActiveSection('success');
      }
    };

    const smoothVideoLoop = () => {
      if (video && !autoTourPlaying && video.readyState >= 2) {
        const diff = targetTimeRef.current - video.currentTime;
        if (Math.abs(diff) > 0.03) {
          // Lerp for butter-smooth continuous tracking
          video.currentTime += diff * 0.35;
        }
      }
      animFrameRef.current = requestAnimationFrame(smoothVideoLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animFrameRef.current = requestAnimationFrame(smoothVideoLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [autoTourPlaying]);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle Auto Tour playback
  const toggleAutoTour = () => {
    const video = videoRef.current;
    if (!video) return;

    if (autoTourPlaying) {
      video.pause();
      setAutoTourPlaying(false);
    } else {
      video.currentTime = 0;
      video.play().catch(() => {});
      setAutoTourPlaying(true);
    }
  };

  // Sync scroll if video is playing in auto tour mode
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoTourPlaying) return;

    const interval = setInterval(() => {
      const duration = 10.2;
      const current = Math.min(video.currentTime, duration);
      const progress = current / duration;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: progress * maxScroll,
        behavior: 'auto',
      });

      if (video.currentTime >= 10.2) {
        video.pause();
        setAutoTourPlaying(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [autoTourPlaying]);

  return (
    <div className="relative w-full bg-[#0d0714] text-white selection:bg-pink-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* =====================================================================
          1. FIXED SEGESTA ULTRA-HIGH-RESOLUTION BACKGROUND VIDEO & FALLBACKS
          ===================================================================== */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Fallback Poster (Instant LCP) */}
        <img
          src="/images/segesta/hero.jpg"
          alt="Segesta Scenery"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Interactive Scrubbable Video */}
        <video
          ref={videoRef}
          src="/videos/segesta_optimized.mp4"
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Cinematic Vignette & Ambient Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* =====================================================================
          2. ICONIC SEGESTA NAVIGATION BAR (PIXEL-PERFECT REPLICA)
          ===================================================================== */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-5 flex items-center justify-between text-xs tracking-wide bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-[2px]">
        {/* Left Links */}
        <div className="flex items-center space-x-6 sm:space-x-10 text-[13px] font-medium text-white/90">
          <button
            onClick={() => scrollTo('story')}
            className={`hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'story' ? 'text-white font-bold' : 'text-white/75'}`}
          >
            Our Story
          </button>
          <button
            onClick={() => setSolutionLabOpen(true)}
            className="hover:text-white transition-colors duration-200 cursor-pointer text-white/75 hover:scale-105 transform"
          >
            SolutionLab
          </button>
          <button
            onClick={() => scrollTo('advantages')}
            className={`hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'advantages' ? 'text-white font-bold' : 'text-white/75'}`}
          >
            Clients
          </button>
        </div>

        {/* Center: The Iconic Geometric Triangle / Delta Logo */}
        <div
          onClick={() => scrollTo('story')}
          className="cursor-pointer transform hover:scale-110 transition-transform duration-300 flex items-center justify-center py-1"
          title="SEGESTA // Return to Top"
        >
          <svg viewBox="0 0 36 32" fill="none" className="w-8 h-7 drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)]">
            <path
              d="M18 2L35 30H1L18 2Z"
              fill="#ffffff"
            />
            {/* Horizontal Split Accent */}
            <path
              d="M18 13L26.5 27.5H9.5L18 13Z"
              fill="#181326"
            />
          </svg>
        </div>

        {/* Right Links & Action Buttons */}
        <div className="flex items-center space-x-5 sm:space-x-8 text-[13px] font-medium">
          <button
            onClick={() => scrollTo('success')}
            className={`hidden md:block hover:text-white transition-colors duration-200 cursor-pointer ${activeSection === 'success' ? 'text-white font-bold' : 'text-white/75'}`}
          >
            Portfolio
          </button>
          <button
            onClick={() => onNavigate('/hypeboard')}
            className="hidden md:block hover:text-white transition-colors duration-200 cursor-pointer text-white/75"
          >
            Blog
          </button>

          {/* Contact Box Button (Outlined, exact to video) */}
          <button
            onClick={() => setContactOpen(true)}
            className="px-5 py-2 border border-white/80 rounded-md text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 shadow-sm cursor-pointer"
          >
            Contact
          </button>

          {/* Dark / Light Universe Switcher */}
          <button
            onClick={onToggleTheme}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-[11px] font-mono text-white/90 hover:bg-white hover:text-black transition-all"
            title="Switch back to Studio Dark Mode"
          >
            <span>🌙 Dark Mode</span>
          </button>
        </div>
      </nav>

      {/* Floating Auto-Tour / Scrub Controller */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
        <button
          onClick={toggleAutoTour}
          className="px-4 py-2 rounded-full border border-white/40 bg-black/60 backdrop-blur-xl text-white font-mono text-[11px] font-semibold tracking-wider flex items-center space-x-2 hover:bg-white hover:text-black hover:border-white transition-all shadow-xl"
        >
          <span className={`w-2 h-2 rounded-full ${autoTourPlaying ? 'bg-emerald-400 animate-ping' : 'bg-white'}`} />
          <span>{autoTourPlaying ? 'PAUSE FILM' : 'AUTO TOUR'}</span>
        </button>

        <button
          onClick={onToggleTheme}
          className="sm:hidden px-3 py-2 rounded-full border border-white/40 bg-black/60 backdrop-blur-xl text-white text-[11px] font-mono font-bold"
        >
          🌙 Dark
        </button>
      </div>

      {/* Floating Section Progress Indicator Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
        {[
          { id: 'story', label: '01 / Story' },
          { id: 'mission', label: '02 / Mission' },
          { id: 'advantages', label: '03 / Advantages' },
          { id: 'success', label: '04 / Success' },
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group relative flex items-center justify-end"
            title={s.label}
          >
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] uppercase text-white bg-black/80 px-2 py-0.5 rounded whitespace-nowrap">
              {s.label}
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === s.id
                  ? 'bg-white scale-125 ring-4 ring-white/30'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* =====================================================================
          3. SCROLLABLE STORY JOURNEY (4 FULL-HEIGHT SECTIONS)
          ===================================================================== */}
      <div className="relative z-10 w-full">

        {/* SECTION 1: HERO (S E G E S T A) */}
        <section
          id="story"
          className="w-full min-h-screen flex flex-col justify-between items-center px-6 pt-36 pb-12 relative"
        >
          {/* Top spacer */}
          <div />

          {/* Center Brand Typography (Exact reproduction of video title) */}
          <div className="text-center flex flex-col items-center select-none">
            <h1 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.22em] text-white uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] pl-[0.22em]">
              SEGESTA
            </h1>
            <p className="mt-4 font-sans font-light text-sm sm:text-base md:text-lg tracking-[0.35em] text-white/95 uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] pl-[0.35em]">
              INNOVATIVE SOLUTIONS
            </p>
          </div>

          {/* Bottom Prompt: Scroll Down */}
          <div
            onClick={() => scrollTo('mission')}
            className="cursor-pointer flex flex-col items-center space-y-2 text-white/75 hover:text-white transition-colors pb-4"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em]">Scroll To Explore</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* SECTION 2: OUR MISSION (Descending waterfall & subterranean lab) */}
        <section
          id="mission"
          className="w-full min-h-screen flex items-center px-6 sm:px-16 md:px-24 py-24 relative"
        >
          <div className="max-w-xl flex flex-col items-start space-y-7 bg-black/40 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <div>
              <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                Our Mission
              </h2>
              {/* Thin Accent Underline */}
              <div className="w-full h-[1px] bg-white/30 mt-4" />
            </div>

            <p className="font-sans text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              At <strong className="text-white font-semibold">uperX // SEGESTA</strong>, our purpose is to empower digital relationships through mobility. By designing and developing custom apps and mobile web-apps, we act as a guide - leading our clients through the process of building complex digital products.
            </p>

            <p className="font-sans text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              By designing and developing custom apps and mobile web-apps, we act as a guide - leading our clients to enduring industry leadership.
            </p>

            <button
              onClick={() => setContactOpen(true)}
              className="px-8 py-3.5 bg-white text-black font-sans font-bold text-sm tracking-wide rounded-md hover:bg-neutral-200 hover:scale-105 transition-all duration-200 shadow-xl cursor-pointer"
            >
              Let’s Build!
            </button>
          </div>
        </section>

        {/* SECTION 3: OUR ADVANTAGES (Hydraulic waterwheel machinery) */}
        <section
          id="advantages"
          className="w-full min-h-screen flex items-center justify-end px-6 sm:px-16 md:px-24 py-24 relative"
        >
          <div className="max-w-xl flex flex-col items-start space-y-8 bg-black/40 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <div className="w-full">
              <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                Our Advantages
              </h2>
              <div className="w-full h-[1px] bg-white/30 mt-4" />
            </div>

            {/* Block 1 */}
            <div className="space-y-3">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                We’ve Been There.
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                In just over four years we’ve founded our own start-up, built over 100 app projects for our clients, and created proprietary software to make our own business more efficient.
              </p>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                So if you need help growing your new venture, or want to lift your existing business to new heights with the help of custom applications, we’re your team.
              </p>
            </div>

            {/* Block 2 */}
            <div className="space-y-3 pt-2">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                Boldly Transparent.
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                We know how easy it is for complex projects like custom applications to go overbudget. We don’t want that to happen to you.
              </p>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                At uperX, we’ve crafted our development processes for maximum efficiency and transparency, helping you manage your costs and keeping you up to date on your project in case anything may affect the bottom line.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: A MODEL FOR SUCCESS (Geothermal conduits & holographic HUDs) */}
        <section
          id="success"
          className="w-full min-h-screen flex items-center px-6 sm:px-16 md:px-24 py-24 relative"
        >
          <div className="max-w-xl flex flex-col items-start space-y-8 bg-black/40 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            {/* Block 1 */}
            <div className="space-y-3 w-full">
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
                A Model For Success.
              </h2>
              <div className="w-full h-[1px] bg-white/30 my-3" />
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                We’ve crafted a modular approach to conceptualizing, designing, implementing, and - most importantly - iterating on custom software projects over time. Our process, which starts with our proprietary SolutionLab roadmapping session, helps us ensure the success of our clients time and time again.
              </p>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                Don’t leave the success of your digital product to chance. Our team accelerates your learning curve and guides you past the many potholes of building custom software.
              </p>
            </div>

            {/* Block 2 */}
            <div className="space-y-3 pt-2 w-full">
              <h3 className="font-sans font-bold text-2xl text-white">
                Attentiveness as a Priority.
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                You and your project are important to us. Once we kick things off, you’ll receive updates on your project in two ways.
              </p>
              <p className="font-sans text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                First, your project manager - who knows and understands your businesses’ goals will be available to you whenever you need during each phase of development. Second, we’ll track progress and time input against our structured breakdown of work and expected timeline on a weekly basis. This focuses on creating clarity and honest expectations for everyone involved.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-3.5 bg-white text-black font-sans font-bold text-sm tracking-wide rounded-md hover:bg-neutral-200 hover:scale-105 transition-all duration-200 shadow-xl cursor-pointer"
              >
                Start A Project →
              </button>
              <button
                onClick={() => scrollTo('story')}
                className="px-6 py-3.5 border border-white/60 text-white font-sans font-medium text-sm rounded-md hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
              >
                Back To Top ↑
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* =====================================================================
          4. INTERACTIVE SOLUTIONLAB MODAL DRAWER
          ===================================================================== */}
      {solutionLabOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-neutral-900 border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl text-white">
            <button
              onClick={() => setSolutionLabOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg transition-colors cursor-pointer"
              aria-label="Close SolutionLab Modal"
            >
              ✕
            </button>

            <span className="font-mono text-xs uppercase tracking-widest text-pink-400 font-bold block mb-2">
              Proprietary Methodology
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-white mb-4">
              The SolutionLab Roadmap
            </h3>
            <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
              Before writing a single line of code, our SolutionLab sessions eliminate uncertainty. We blueprint your app architecture, user flows, and sprint milestones to guarantee on-time, on-budget delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-pink-400 font-bold block mb-1">Phase 01</span>
                <span className="font-bold text-white block text-sm">Discovery &amp; Spec</span>
                <p className="text-neutral-400 text-[11px] mt-1 font-sans">Full feature scope and user story mapping.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-cyan-400 font-bold block mb-1">Phase 02</span>
                <span className="font-bold text-white block text-sm">Interactive UI/UX</span>
                <p className="text-neutral-400 text-[11px] mt-1 font-sans">Clickable Figma prototype tested with real users.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-emerald-400 font-bold block mb-1">Phase 03</span>
                <span className="font-bold text-white block text-sm">Agile Sprint Build</span>
                <p className="text-neutral-400 text-[11px] mt-1 font-sans">Bi-weekly releases with live staging access.</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-neutral-400 font-mono">Ready to schedule your session?</span>
              <button
                onClick={() => {
                  setSolutionLabOpen(false);
                  setContactOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Schedule SolutionLab →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          5. INTERACTIVE CONTACT MODAL DRAWER
          ===================================================================== */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-xl bg-neutral-900 border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl text-white">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-lg transition-colors cursor-pointer"
              aria-label="Close Contact Modal"
            >
              ✕
            </button>

            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Start A Conversation
            </span>
            <h3 className="font-sans font-black text-3xl text-white mb-2">
              Let’s Build Together.
            </h3>
            <p className="font-sans text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
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
                <label className="block text-neutral-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Project Overview</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you'd like to build..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors font-sans text-xs resize-none"
                />
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Send Inquiry Now →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setContactOpen(false);
                    onNavigate('/contact');
                  }}
                  className="px-5 py-3.5 rounded-xl border border-white/20 text-neutral-300 hover:text-white hover:border-white text-xs font-sans transition-colors cursor-pointer"
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
