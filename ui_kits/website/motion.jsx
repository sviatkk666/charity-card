/* Charity Card — motion helpers: scroll-reveal + count-up.
   Restrained, on-brand: fades + small rises, no bounces, no infinite loops.
   Gated by the `cc-anim` class on .cc-root (Tweaks → «Анімації») and by
   prefers-reduced-motion (see CSS in index.html). */

const CCMotionCtx = React.createContext(false); // default off — pages opt in via provider (print stays static)

const ccReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Hidden documents (capture iframes, prerender, print) freeze CSS transitions and rAF —
   pages should skip entrance animations entirely there and render the final state. */
const ccHiddenAtLoad = document.visibilityState === 'hidden';

/* Observe an element; flips to true once it enters the viewport (fires once).
   In hidden documents (screenshots, prerender, print capture) IO/rAF never fire —
   show the final state immediately instead of leaving content invisible. */
function useInView() {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || document.visibilityState === 'hidden') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setInView(true); io.disconnect(); }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    io.observe(el);
    /* safety net: if the tab was visible but IO is unavailable in practice */
    const onVis = () => { if (document.visibilityState === 'hidden') { setInView(true); io.disconnect(); } };
    document.addEventListener('visibilitychange', onVis);
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', onVis); };
  }, []);
  return [ref, inView];
}

/* Spreadable reveal props for any element:
   const r = useReveal(120); <article ref={r.ref} className={r.className} style={{...r.style, ...}} /> */
function useReveal(delay = 0) {
  const [ref, inView] = useInView();
  return {
    ref,
    className: 'cc-reveal' + (inView ? ' is-in' : ''),
    style: delay ? { transitionDelay: delay + 'ms' } : undefined,
  };
}

/* Block-level wrapper version. */
function Reveal({ children, delay = 0, style, className }) {
  const r = useReveal(delay);
  return (
    <div ref={r.ref} className={r.className + (className ? ' ' + className : '')}
      style={{ ...r.style, ...style }}>
      {children}
    </div>
  );
}

/* Animated number: counts 0 → value when scrolled into view (~1.1s, ease-out). */
function CountUp({ value, format, duration = 1100 }) {
  const enabled = React.useContext(CCMotionCtx) && !ccReducedMotion() && document.visibilityState !== 'hidden';
  const fmt = format || window.fmtUAH;
  const [ref, inView] = useInView();
  const [n, setN] = React.useState(enabled ? 0 : value);
  React.useEffect(() => {
    if (!enabled) { setN(value); return; }
    if (!inView) return;
    let raf;
    const t0 = performance.now();
    const ease = (x) => 1 - Math.pow(1 - x, 3);
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      setN(Math.round(value * ease(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, enabled]);
  return <span ref={ref}>{fmt(n)}</span>;
}

Object.assign(window, { CCMotionCtx, ccHiddenAtLoad, useInView, useReveal, Reveal, CountUp });
