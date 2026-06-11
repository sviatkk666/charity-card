/* Charity Card — reusable primitives */

function Button({ variant = 'primary', size = 'md', icon, iconRight, children, onClick, style, type }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--cc-font-body)', fontWeight: 700, lineHeight: 1,
    borderRadius: 'var(--cc-r-pill)', cursor: 'pointer', border: '1.5px solid transparent',
    transition: 'transform .12s ease, background .15s ease, box-shadow .15s ease, border-color .15s',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    lg: { padding: '15px 28px', fontSize: 17 },
    md: { padding: '12px 22px', fontSize: 15 },
    sm: { padding: '9px 16px', fontSize: 13.5 },
  };
  const variants = {
    donate:   { background: 'var(--cc-teal)', color: '#fff', boxShadow: 'var(--cc-shadow-teal)' },
    primary:  { background: 'var(--cc-blue)', color: '#fff', boxShadow: 'var(--cc-shadow-blue)' },
    secondary:{ background: 'transparent', color: 'var(--cc-blue)', borderColor: 'var(--cc-blue)' },
    onDark:   { background: 'rgba(255,255,255,0.10)', color: '#fff', borderColor: 'rgba(255,255,255,0.30)' },
    ghost:    { background: 'transparent', color: 'var(--cc-text-2)' },
  };
  const [hov, setHov] = React.useState(false);
  const hoverStyle = hov ? {
    transform: 'translateY(-1px)',
    filter: (variant === 'donate' || variant === 'primary') ? 'brightness(1.05)' : 'none',
    background: variant === 'secondary' ? 'var(--cc-blue-soft)' : (variant === 'ghost' ? 'var(--cc-n50)' : (variant === 'onDark' ? 'rgba(255,255,255,0.18)' : variants[variant].background)),
  } : {};
  return (
    <button type={type || 'button'} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ ...base, ...sizes[size], ...variants[variant], ...hoverStyle, ...style }}>
      {icon ? React.cloneElement(icon, { size: size === 'sm' ? 15 : 17 }) : null}
      {children}
      {iconRight ? React.cloneElement(iconRight, { size: size === 'sm' ? 15 : 17 }) : null}
    </button>
  );
}

function Badge({ children, tone = 'teal', dot }) {
  const tones = {
    teal: { background: 'var(--cc-teal-soft)', color: 'var(--cc-teal-deep)' },
    blue: { background: 'var(--cc-blue-soft)', color: 'var(--cc-blue-deep)' },
    cream:{ background: 'var(--cc-cream-2)', color: 'var(--cc-text-2)', border: '1px solid var(--cc-line)' },
    dark: { background: 'rgba(255,255,255,0.12)', color: '#EAF1F6', border: '1px solid rgba(255,255,255,0.18)' },
    amber:{ background: 'var(--cc-amber)', color: '#3a2a06' },
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--cc-font-body)',
      fontWeight: 700, fontSize: 13, padding: '6px 13px', borderRadius: 'var(--cc-r-pill)', ...tones[tone] }}>
      {dot ? <span style={{ width: 7, height: 7, borderRadius: 99, background: 'currentColor' }} /> : null}
      {children}
    </span>
  );
}

function Meter({ raised, goal, dark }) {
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  const [trackRef, fillIn] = useInView();
  return (
    <div style={{ fontFamily: 'var(--cc-font-body)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 9 }}>
        <span className="cc-num" style={{ fontSize: 28, color: dark ? '#fff' : 'var(--cc-blue)' }}>
          <CountUp value={raised} /> <span style={{ fontSize: 14, fontWeight: 600, color: dark ? 'var(--cc-text-on-dark-2)' : 'var(--cc-text-3)' }}>грн</span>
        </span>
        <span className="cc-num" style={{ fontSize: 16, color: 'var(--cc-teal)' }}><CountUp value={pct} format={(v) => v + '%'} /></span>
      </div>
      <div ref={trackRef} style={{ height: 14, background: dark ? 'rgba(255,255,255,0.14)' : 'var(--cc-meter-track)', borderRadius: 99, overflow: 'hidden' }}>
        <div className={'cc-meter-anim' + (fillIn ? ' is-in' : '')}
          style={{ height: '100%', width: pct + '%', background: 'var(--cc-meter-fill)', borderRadius: 99 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 9, fontSize: 13.5,
        color: dark ? 'var(--cc-text-on-dark-2)' : 'var(--cc-text-3)' }}>
        <span>мета {window.fmtUAH(goal)} грн</span>
        <span>залишилось {window.fmtUAH(goal - raised)} грн</span>
      </div>
    </div>
  );
}

function AmountPicker({ presets, value, onChange, custom, onCustom }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {presets.map((p) => {
        const sel = value === p && !custom;
        return (
          <button key={p} onClick={() => onChange(p)} style={{
            flex: '1 1 70px', minWidth: 70, padding: '12px 0', textAlign: 'center',
            fontFamily: 'var(--cc-font-num)', fontVariantNumeric: 'tabular-nums', fontWeight: 800, fontSize: 16,
            borderRadius: 'var(--cc-r-sm)', cursor: 'pointer',
            border: '1.5px solid ' + (sel ? 'var(--cc-teal)' : 'var(--cc-line)'),
            background: sel ? 'var(--cc-teal-soft)' : 'var(--cc-white)',
            color: sel ? 'var(--cc-teal-deep)' : 'var(--cc-text-2)', transition: '.12s',
          }}>{window.fmtUAH(p)}</button>
        );
      })}
      <input value={custom || ''} onChange={(e) => onCustom(e.target.value.replace(/[^0-9]/g, ''))}
        placeholder="Інша" inputMode="numeric" style={{
          flex: '1 1 80px', minWidth: 80, padding: '12px 12px', font: 'inherit',
          fontFamily: 'var(--cc-font-num)', fontWeight: 700, fontSize: 15,
          borderRadius: 'var(--cc-r-sm)', textAlign: 'center',
          border: '1.5px solid ' + (custom ? 'var(--cc-teal)' : 'var(--cc-line)'),
          background: custom ? 'var(--cc-teal-soft)' : 'var(--cc-white)', color: 'var(--cc-text)', outline: 'none',
        }} />
    </div>
  );
}

function Eyebrow({ children, style }) {
  return <div className="cc-overline" style={style}>{children}</div>;
}

function Container({ children, style, width = 1080 }) {
  return <div style={{ width: '100%', maxWidth: width, margin: '0 auto', padding: '0 24px', ...style }}>{children}</div>;
}

Object.assign(window, { Button, Badge, Meter, AmountPicker, Eyebrow, Container });
