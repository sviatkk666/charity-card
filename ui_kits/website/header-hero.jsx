/* Charity Card — Header + Hero + DonationCard */

function Header({ data, accent, onDonate, scrolled }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250,247,242,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(1.1) blur(10px)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--cc-line)' : 'transparent'),
      transition: 'background .25s, border-color .25s',
    }}>
      <Container width={1180} style={{ display: 'flex', alignItems: 'center', gap: 16, height: 72 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <img src={window.ccRes('logoMark','assets/logo-mark.png')} alt="" style={{ height: 40 }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span style={{ fontFamily: 'var(--cc-font-head)', fontWeight: 700, fontSize: 13, color: 'var(--cc-text-2)' }}>Благодійний фонд</span>
            <span style={{ fontFamily: 'var(--cc-font-head)', fontWeight: 800, fontSize: 15, color: 'var(--cc-blue)' }}>Освіта · Наука · Медицина</span>
          </span>
        </a>
        <nav className="cc-desk-nav" style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          {data.nav.map((n) => (
            <a key={n.id} href={'#' + n.id} style={{
              fontFamily: 'var(--cc-font-body)', fontWeight: 600, fontSize: 15, color: 'var(--cc-text-2)',
              textDecoration: 'none', padding: '8px 13px', borderRadius: 'var(--cc-r-sm)',
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--cc-n50)'}
               onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>{n.label}</a>
          ))}
        </nav>
        <div className="cc-desk-nav" style={{ marginLeft: 8 }}>
          <Button variant={accent} size="sm" icon={<IconHeart />} onClick={onDonate}>Підтримати збір</Button>
        </div>
        <button className="cc-burger" onClick={() => setOpen(!open)} style={{
          display: 'none', marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--cc-text)', cursor: 'pointer', padding: 6 }}>
          {open ? <IconX size={26} /> : <IconMenu size={26} />}
        </button>
      </Container>
      {open && (
        <div className="cc-burger" style={{ background: 'var(--cc-cream)', borderBottom: '1px solid var(--cc-line)', padding: '8px 0 16px' }}>
          <Container width={1180} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {data.nav.map((n) => (
              <a key={n.id} href={'#' + n.id} onClick={() => setOpen(false)} style={{
                fontFamily: 'var(--cc-font-body)', fontWeight: 600, fontSize: 16, color: 'var(--cc-text)',
                textDecoration: 'none', padding: '11px 6px', borderBottom: '1px solid var(--cc-line)' }}>{n.label}</a>
            ))}
            <Button variant={accent} icon={<IconHeart />} onClick={() => { setOpen(false); onDonate(); }} style={{ marginTop: 10 }}>Підтримати збір</Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function DonationCard({ data, accent, onDonate, dark }) {
  const c = data.campaign;
  const [amt, setAmt] = React.useState(c.presets[1]);
  const [custom, setCustom] = React.useState('');
  const surface = dark ? {
    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)',
    backdropFilter: 'blur(8px)', color: '#fff',
  } : {
    background: 'var(--cc-white)', border: '1px solid var(--cc-line)', boxShadow: 'var(--cc-shadow-lg)',
  };
  return (
    <div style={{ borderRadius: 'var(--cc-r-xl)', padding: 22, ...surface }}>
      <Meter raised={c.raised} goal={c.goal} dark={dark} />
      <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.14)' : 'var(--cc-line)', margin: '18px 0' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 }}>
        <span style={{ fontFamily: 'var(--cc-font-body)', fontWeight: 700, fontSize: 14, color: dark ? '#EAF1F6' : 'var(--cc-text)' }}>Оберіть суму внеску, грн</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: dark ? 'var(--cc-text-on-dark-2)' : 'var(--cc-text-3)' }}>
          <IconUsers size={15} />{window.fmtUAH(c.donors)} донорів
        </span>
      </div>
      <AmountPicker presets={c.presets} value={amt} onChange={(v) => { setAmt(v); setCustom(''); }}
        custom={custom} onCustom={setCustom} />
      <Button variant={accent} size="lg" icon={<IconHeart />} onClick={onDonate}
        style={{ width: '100%', marginTop: 14 }}>
        {`Підтримати на ${window.fmtUAH(custom ? Number(custom) : amt)} грн`}
      </Button>
      <p style={{ margin: '12px 2px 0', fontFamily: 'var(--cc-font-body)', fontSize: 12.5, lineHeight: 1.5,
        color: dark ? 'var(--cc-text-on-dark-2)' : 'var(--cc-text-3)', display: 'flex', gap: 7 }}>
        <IconShield size={26} style={{ flex: 'none', marginTop: -2 }} />
        Неприбуткова організація. Кошти спрямовуються виключно на створення клініки.
      </p>
    </div>
  );
}

function Hero({ data, accent, heroStyle, onDonate }) {
  const c = data.campaign, ev = data.event;
  const dark = heroStyle === 'dramatic';
  const wrapStyle = dark
    ? { background: 'var(--cc-hero-bg)', color: '#fff' }
    : { background: 'linear-gradient(180deg, var(--cc-cream-2) 0%, var(--cc-cream) 60%)', color: 'var(--cc-text)' };
  const titleColor = dark ? '#fff' : 'var(--cc-text)';
  const ledeColor = dark ? 'var(--cc-text-on-dark)' : 'var(--cc-text-2)';
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', ...wrapStyle }}>
      {dark && (
        <img src={window.ccRes('posterLnmu','assets/poster-lnmu.jpg')} alt="" aria-hidden="true" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: 0.16, mixBlendMode: 'luminosity', maskImage: 'linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent)' }} />
      )}
      {!dark && (
        <img src={window.ccRes('logoMark','assets/logo-mark.png')} alt="" aria-hidden="true" style={{
          position: 'absolute', right: -80, top: -40, width: 460, opacity: 0.05, pointerEvents: 'none' }} />
      )}
      <Container width={1180} style={{ position: 'relative', display: 'grid',
        gridTemplateColumns: 'minmax(0,1.15fr) minmax(320px,0.85fr)', gap: 48, alignItems: 'center',
        padding: '64px 24px 72px' }} >
        <div className="cc-hero-copy">
          <Reveal><Badge tone={dark ? 'dark' : 'teal'} dot>{c.eyebrow}</Badge></Reveal>
          <Reveal delay={70}><h1 className="cc-h1" style={{ color: titleColor, margin: '20px 0 0', whiteSpace: 'pre-line', fontSize: 'clamp(34px,4.6vw,58px)' }}>{c.title}</h1></Reveal>
          <Reveal delay={150}><p className="cc-body-lg" style={{ color: ledeColor, margin: '20px 0 0', maxWidth: 560 }}>{c.lede}</p></Reveal>
          <Reveal delay={220}><p style={{ fontFamily: 'var(--cc-font-head)', fontWeight: 800, fontSize: 'clamp(17px,1.7vw,21px)',
            color: dark ? 'var(--cc-teal)' : 'var(--cc-teal-deep)', margin: '18px 0 0', letterSpacing: '-0.01em' }}>
            {c.pledge}
            {c.pledgeSub ? <span style={{ display: 'block', fontWeight: 700, fontSize: '0.85em',
              color: dark ? 'var(--cc-text-on-dark)' : 'var(--cc-text-2)', marginTop: 4 }}>{c.pledgeSub}</span> : null}
          </p></Reveal>
          <Reveal delay={300}><div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <Button variant={accent} size="lg" icon={<IconHeart />} onClick={onDonate}>Підтримати збір</Button>
            <Button variant={dark ? 'onDark' : 'secondary'} size="lg" iconRight={<IconArrow />}
              onClick={() => {
                const el = document.getElementById('collection');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
              }}>Про збір</Button>
          </div></Reveal>
          <Reveal delay={380}><div style={{ display: 'flex', gap: 18, marginTop: 30, flexWrap: 'wrap', alignItems: 'center',
            paddingTop: 22, borderTop: '1px solid ' + (dark ? 'var(--cc-line-on-dark)' : 'var(--cc-line)') }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: dark ? 'var(--cc-text-on-dark-2)' : 'var(--cc-text-3)' }}><IconCalendar size={16} />{ev.date}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: dark ? 'var(--cc-text-on-dark-2)' : 'var(--cc-text-3)' }}><IconPin size={16} />{ev.place}</span>
          </div></Reveal>
        </div>
        <Reveal delay={240} className="cc-hero-card"><DonationCard data={data} accent={accent} onDonate={onDonate} dark={dark} /></Reveal>
      </Container>
    </section>
  );
}

Object.assign(window, { Header, Hero, DonationCard });
