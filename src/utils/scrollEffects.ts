/**
 * Cappella-style scroll engine:
 * 1. IntersectionObserver scroll reveals ([data-reveal], .is-in, delay staggered)
 * 2. Exponential count-up for statistics ([data-counter])
 * 3. 3D perspective card tilt with pointer tracking ([data-tilt], .tilt-card, .tilt-shine)
 * 4. Pinned sticky mask-reveal showcase ([data-pinned-reveal], .pinned-reveal__img, .pinned-module)
 */

export function runCountUp(el: HTMLElement) {
  if (el.getAttribute('data-counted') === 'true') return;
  el.setAttribute('data-counted', 'true');

  const orig = el.textContent || '';
  const match = orig.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return;

  const prefix = match[1];
  const target = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = (match[2].split('.')[1] || '').length;
  const duration = 1600;
  const startTime = performance.now();

  function tick(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (progress >= 1) {
      el.textContent = orig;
      return;
    }

    // Expo-out easing matching Cappella: 1 - 2^(-10 * progress)
    const ease = 1 - Math.pow(2, -10 * progress);
    const current = (target * ease).toFixed(decimals);
    el.textContent = `${prefix}${current}${suffix}`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export function initScrollReveals(): () => void {
  if (typeof window === 'undefined') return () => {};

  const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (elements.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        target.classList.add('is-in');

        // Check for counter
        if (target.hasAttribute('data-counter')) {
          runCountUp(target);
        } else {
          const counterChild = target.querySelector<HTMLElement>('[data-counter]');
          if (counterChild) {
            runCountUp(counterChild);
          }
        }

        io.unobserve(target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => {
    // If already in view on mount, immediately reveal
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-in');
      if (el.hasAttribute('data-counter')) runCountUp(el);
      const counterChild = el.querySelector<HTMLElement>('[data-counter]');
      if (counterChild) runCountUp(counterChild);
    } else {
      observer.observe(el);
    }
  });

  return () => {
    observer.disconnect();
  };
}

export function initTilt(): () => void {
  if (typeof window === 'undefined') return () => {};

  const grids = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
  if (grids.length === 0) return () => {};

  const cleanups: (() => void)[] = [];

  grids.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.tilt-card'));
    if (cards.length === 0) return;

    let frame: number | null = null;
    let pending: { card: HTMLElement; tx: number; ty: number; mx: number; my: number } | null = null;

    function apply() {
      frame = null;
      if (!pending) return;
      pending.card.style.setProperty('--tx', pending.tx.toFixed(3));
      pending.card.style.setProperty('--ty', pending.ty.toFixed(3));
      pending.card.style.setProperty('--mx', `${pending.mx.toFixed(1)}%`);
      pending.card.style.setProperty('--my', `${pending.my.toFixed(1)}%`);
    }

    function reset() {
      pending = null;
      if (frame) {
        cancelAnimationFrame(frame);
        frame = null;
      }
      cards.forEach((c) => {
        c.classList.remove('is-tilting');
        c.style.setProperty('--tx', '0');
        c.style.setProperty('--ty', '0');
      });
    }

    function handlePointerMove(e: PointerEvent) {
      if (e.pointerType !== 'mouse') return;
      const targetCard = (e.target as HTMLElement).closest<HTMLElement>('.tilt-card');
      if (!targetCard || !cards.includes(targetCard)) {
        reset();
        return;
      }

      const rect = targetCard.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      cards.forEach((c) => {
        if (c !== targetCard) {
          c.classList.remove('is-tilting');
          c.style.setProperty('--tx', '0');
          c.style.setProperty('--ty', '0');
        }
      });

      pending = {
        card: targetCard,
        tx: Math.max(-1, Math.min(1, (px - 0.5) * 2)),
        ty: Math.max(-1, Math.min(1, (py - 0.5) * 2)),
        mx: px * 100,
        my: py * 100,
      };
      targetCard.classList.add('is-tilting');

      if (!frame) {
        frame = requestAnimationFrame(apply);
      }
    }

    grid.addEventListener('pointermove', handlePointerMove);
    grid.addEventListener('pointerleave', reset);

    cleanups.push(() => {
      grid.removeEventListener('pointermove', handlePointerMove);
      grid.removeEventListener('pointerleave', reset);
      reset();
    });
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}

export function initPinnedReveal(): () => void {
  if (typeof window === 'undefined') return () => {};

  const reveal = document.querySelector<HTMLElement>('[data-pinned-reveal]');
  if (!reveal) return () => {};

  const imgs = Array.from(reveal.querySelectorAll<HTMLElement>('.pinned-reveal__img'));
  const modules = Array.from(reveal.querySelectorAll<HTMLElement>('.pinned-module'));
  if (imgs.length < 2) return () => {};

  const n = imgs.length;
  let pinned = false;
  let rafId = 0;
  let inView = false;
  let io: IntersectionObserver | null = null;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mqDesktop = window.matchMedia('(min-width: 901px)');

  function clearInline() {
    imgs.forEach((im) => {
      im.style.clipPath = '';
      im.style.transform = '';
    });
    modules.forEach((m) => {
      m.classList.remove('is-dim');
    });
  }

  function update() {
    rafId = 0;
    if (!pinned) return;
    const rect = reveal.getBoundingClientRect();
    const denom = reveal.offsetHeight - window.innerHeight;
    const p = denom > 0 ? Math.min(1, Math.max(0, -rect.top / denom)) : 0;

    // Hermite smoothstep wipe over HW = 0.12 window matching Cappella
    const HW = 0.12;
    for (let i = 0; i < n; i++) {
      let clip = 0;
      if (i < n - 1) {
        const c = (i + 1) / n;
        let r = (p - c) / (2 * HW) + 0.5;
        r = r < 0 ? 0 : r > 1 ? 1 : r;
        r = r * r * (3 - 2 * r); // cubic Hermite smoothstep
        clip = r * 100;
      }
      imgs[i].style.clipPath = `inset(0 0 ${clip.toFixed(2)}% 0)`;
    }

    let active = 0;
    for (let j = 0; j < n - 1; j++) {
      if (p > (j + 1) / n) active = j + 1;
    }

    for (let m = 0; m < modules.length; m++) {
      modules[m].classList.toggle('is-dim', m !== active);
    }
  }

  function onScroll() {
    if (!inView || rafId) return;
    rafId = window.requestAnimationFrame(update);
  }

  function enablePinned() {
    if (pinned) return;
    pinned = true;
    reveal.classList.add('is-pinned');
    window.addEventListener('scroll', onScroll, { passive: true });
    io = new IntersectionObserver(
      (entries) => {
        inView = entries[0].isIntersecting;
        if (inView) onScroll();
      },
      { rootMargin: '300px 0px 300px 0px' }
    );
    io.observe(reveal);
    inView = true;
    update();
  }

  function disablePinned() {
    if (!pinned) return;
    pinned = false;
    reveal.classList.remove('is-pinned');
    window.removeEventListener('scroll', onScroll);
    if (io) {
      io.disconnect();
      io = null;
    }
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    clearInline();
  }

  function evaluate() {
    if (!reduced && mqDesktop.matches) {
      enablePinned();
    } else {
      disablePinned();
    }
  }

  evaluate();

  let rt: ReturnType<typeof setTimeout>;
  const onResize = () => {
    clearTimeout(rt);
    rt = setTimeout(evaluate, 150);
  };
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    disablePinned();
    window.removeEventListener('resize', onResize);
    clearTimeout(rt);
  };
}

/**
 * Initializes all Cappella scroll effects across the document.
 * Returns a cleanup callback.
 */
export function initAllScrollEffects(): () => void {
  const cleanupReveals = initScrollReveals();
  const cleanupTilt = initTilt();
  const cleanupPinned = initPinnedReveal();

  return () => {
    cleanupReveals();
    cleanupTilt();
    cleanupPinned();
  };
}
