/* Charity Card — Прозорість (documents) + Політики + Контакти + Footer */

function DocTile({ t, m, href, onClick }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={href} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined}
      onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', gap: 14, alignItems: 'center', textDecoration: 'none', cursor: 'pointer',
        background: 'var(--cc-white)', border: '1px solid ' + (hov ? 'var(--cc-blue)' : 'var(--cc-line)'),
        borderRadius: 'var(--cc-r-md)', padding: 16, boxShadow: hov ? 'var(--cc-shadow-md)' : 'var(--cc-shadow-sm)',
        transition: '.15s', transform: hov ? 'translateY(-2px)' : 'none' }}>
      <span style={{ width: 46, height: 46, flex: 'none', borderRadius: 'var(--cc-r-sm)', background: 'var(--cc-blue-soft)',
        color: 'var(--cc-blue)', display: 'grid', placeItems: 'center' }}><IconFile size={24} /></span>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', fontFamily: 'var(--cc-font-body)', fontWeight: 700, fontSize: 15.5, color: 'var(--cc-text)' }}>{t}</span>
        <span style={{ fontFamily: 'var(--cc-font-body)', fontSize: 12.5, color: 'var(--cc-text-3)' }}>{m}{href ? ' · переглянути' : ''}</span>
      </span>
      <IconDownload size={20} style={{ color: hov ? 'var(--cc-blue)' : 'var(--cc-n400)' }} />
    </a>
  );
}

function TransparencySection({ data }) {
  return (
    <section id="transparency" style={{ background: 'var(--cc-cream)', padding: '88px 0', borderTop: '1px solid var(--cc-line)' }}>
      <Container width={1180}>
        <div className="cc-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Reveal><SectionHead eyebrow="Прозорість" title="Документи фонду — у відкритому доступі"
              intro="Ми публікуємо установчі документи й регулярну звітність. Перелік документів поступово розширюється." />
            <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
              <Badge tone="teal" dot>Збір активний</Badge>
              <Badge tone="blue">Неприбуткова організація</Badge>
            </div></Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {data.documents.map((d, i) => <Reveal key={d.t} delay={i * 70}><DocTile t={d.t} m={d.m} href={d.file ? window.ccDoc(d.file) : undefined} /></Reveal>)}
          </div>
        </div>

      </Container>
    </section>
  );
}

function ContactsSection({ data, accent, onDonate }) {
  return (
    <section id="contacts" style={{ background: 'var(--cc-hero-bg)', color: '#fff', padding: '80px 0' }}>
      <Container width={1180} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }} className="cc-split">
        <div>
          <Reveal>
          <Eyebrow style={{ color: 'var(--cc-teal)' }}>Контакти</Eyebrow>
          <h2 className="cc-h2" style={{ color: '#fff', margin: '12px 0 0' }}>Маєте питання чи хочете долучитися?</h2>
          <p className="cc-body-lg" style={{ color: 'var(--cc-text-on-dark)', margin: '16px 0 0', maxWidth: 520 }}>
            Напишіть нам — відповімо щодо збору, партнерства або звітності.
          </p>
          <a href={'mailto:' + data.fund.email} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 26,
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 'var(--cc-r-pill)',
            padding: '13px 22px', textDecoration: 'none', color: '#fff', fontFamily: 'var(--cc-font-body)', fontWeight: 700, fontSize: 17 }}>
            <IconMail size={20} style={{ color: 'var(--cc-teal)' }} />{data.fund.email}
          </a>
          </Reveal>
        </div>
        <Reveal delay={130}><div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)',
          borderRadius: 'var(--cc-r-xl)', padding: 28, textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--cc-font-head)', fontWeight: 800, fontSize: 20, margin: '0 0 6px' }}>Долучитися до збору</p>
          <p className="cc-sm" style={{ color: 'var(--cc-text-on-dark-2)', margin: '0 0 18px' }}>Кожен внесок наближає мету</p>
          <Button variant={accent} size="lg" icon={<IconHeart />} onClick={onDonate} style={{ width: '100%' }}>Підтримати збір</Button>
        </div></Reveal>
      </Container>
    </section>
  );
}

function Footer({ data }) {
  return (
    <footer style={{ background: 'var(--cc-ink)', color: 'var(--cc-text-on-dark-2)', padding: '48px 0 40px' }}>
      <Container width={1180}>
        <div className="cc-split" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={window.ccRes('logoMark','assets/logo-mark.png')} alt="" style={{ height: 42 }} />
              <span style={{ fontFamily: 'var(--cc-font-head)', fontWeight: 800, fontSize: 16, color: '#fff' }}>
                Благодійний фонд<br /><span style={{ color: 'var(--cc-teal)' }}>«Освіта. Наука. Медицина»</span>
              </span>
            </div>
            <p className="cc-sm" style={{ color: 'var(--cc-text-on-dark-2)', margin: '16px 0 0', maxWidth: 420 }}>
              Підтримуємо освіту, науку та медицину задля сучасної допомоги пацієнтам і відновлення життя.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {data.nav.map((n) => (
                <a key={n.id} href={'#' + n.id} style={{ color: 'var(--cc-text-on-dark-2)', textDecoration: 'none',
                  fontFamily: 'var(--cc-font-body)', fontSize: 14.5 }}>{n.label}</a>
              ))}
            </div>
            <a href={'mailto:' + data.fund.email} style={{ color: 'var(--cc-text-on-dark)', textDecoration: 'none',
              fontFamily: 'var(--cc-font-body)', fontSize: 14.5, display: 'inline-flex', alignItems: 'center', gap: 8, height: 'fit-content' }}>
              <IconMail size={17} />{data.fund.email}
            </a>
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.10)', margin: '32px 0 20px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, fontFamily: 'var(--cc-font-body)', fontSize: 12.5 }}>
          <span>© 2026 БФ «Освіта. Наука. Медицина». Неприбуткова організація.{data.fund.edrpou ? ' ЄДРПОУ ' + data.fund.edrpou + '.' : ''}</span>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { DocTile, TransparencySection, ContactsSection, Footer });
