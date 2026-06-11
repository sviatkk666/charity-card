/* Charity Card — Про збір (collection) + Про фонд (fund) */

function SectionHead({ eyebrow, title, intro, align = 'left', dark }) {
  return (
    <div style={{ maxWidth: 720, margin: align === 'center' ? '0 auto' : 0, textAlign: align }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="cc-h2" style={{ margin: '12px 0 0', color: dark ? '#fff' : 'var(--cc-text)' }}>{title}</h2>
      {intro ? <p className="cc-body-lg" style={{ margin: '16px 0 0', color: dark ? 'var(--cc-text-on-dark)' : 'var(--cc-text-2)' }}>{intro}</p> : null}
    </div>
  );
}

function ImageSlot({ id, ratio, label, placeholder, src }) {
  return (
    <figure style={{ margin: 0 }}>
      <image-slot id={id} shape="rounded" radius="18" placeholder={placeholder || 'Перетягніть фото'}
        {...(src ? { src } : {})}
        style={{ display: 'block', width: '100%', aspectRatio: ratio || '4 / 3', boxShadow: 'var(--cc-shadow-md)' }} />
      {label ? <figcaption className="cc-caption" style={{ marginTop: 10 }}>{label}</figcaption> : null}
    </figure>
  );
}

function CollectionSection({ data }) {
  const why = data.why;
  return (
    <section id="collection" style={{ background: 'var(--cc-cream)', padding: '88px 0' }}>
      <Container width={1180}>
        <div className="cc-split" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Reveal><SectionHead eyebrow="Про збір" title={why[0].h} intro={why[0].p} /></Reveal>
            <Reveal delay={120}><div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              {data.campaign.partners.map((p) => (
                <span key={p} style={{ flex: '1 1 220px', display: 'flex', gap: 10, alignItems: 'flex-start',
                  background: 'var(--cc-white)', border: '1px solid var(--cc-line)', borderRadius: 'var(--cc-r-md)',
                  padding: '13px 15px', fontFamily: 'var(--cc-font-body)', fontSize: 13.5, fontWeight: 600,
                  color: 'var(--cc-text-2)', lineHeight: 1.35, boxShadow: 'var(--cc-shadow-sm)' }}>
                  <IconShield size={18} style={{ color: 'var(--cc-blue)', flex: 'none', marginTop: 1 }} />{p}
                </span>
              ))}
            </div></Reveal>
          </div>
          <Reveal delay={160}><ImageSlot id="cc-premises" ratio="4 / 3"
            src={window.ccRes('premisesCurrent', 'assets/premises-current.jpg')}
            label="Поточний стан приміщення майбутньої клініки" /></Reveal>
        </div>

        <div className="cc-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 64 }}>
          {why.slice(1).concat([{ h: 'Куди підуть кошти', p: 'Високотехнологічне обладнання операційного блоку, мікрохірургічні системи, сучасний інфекційний контроль і безпечні умови для надскладних втручань.' }]).map((w, i) => (
            <Reveal key={i} delay={i * 90}><article style={{ background: 'var(--cc-white)', border: '1px solid var(--cc-line)',
              borderRadius: 'var(--cc-r-lg)', padding: 24, boxShadow: 'var(--cc-shadow-sm)', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--cc-r-md)', background: 'var(--cc-teal-soft)',
                color: 'var(--cc-teal-deep)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                {[<IconActivity size={22} />, <IconHeart size={22} />, <IconAtom size={22} />][i]}
              </div>
              <h3 className="cc-h4" style={{ margin: '0 0 8px' }}>{w.h}</h3>
              <p className="cc-body" style={{ margin: 0, fontSize: 15.5 }}>{w.p}</p>
            </article></Reveal>
          ))}
        </div>

        {/* What the new operating room will enable — leaflet checklist */}
        {data.capabilities ? (
          <Reveal><div style={{ marginTop: 64 }}>
            <h3 className="cc-h3" style={{ margin: 0 }}>Це дозволить</h3>
            <ul className="cc-split" style={{ listStyle: 'none', padding: 0, margin: '24px 0 0',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {data.capabilities.map((s) => (
                <li key={s} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 24, height: 24, flex: 'none', borderRadius: 99, background: 'var(--cc-teal-soft)',
                    color: 'var(--cc-teal-deep)', display: 'grid', placeItems: 'center', marginTop: 1 }}><IconCheck size={15} /></span>
                  <span className="cc-body" style={{ margin: 0, color: 'var(--cc-text)' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div></Reveal>
        ) : null}

        {/* Transparency of the request — university letter */}
        <Reveal><div className="cc-split" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 48,
          alignItems: 'center', marginTop: 64, background: 'var(--cc-cream-2)', borderRadius: 'var(--cc-r-xl)', padding: 32 }}>
          <ImageSlot id="cc-letter" ratio="3 / 4" placeholder="Скан листа-звернення від Університету"
            src={window.ccRes('letterScan', 'assets/letter-scan.jpg')}
            label="Офіційне звернення ЛНМУ — для прозорості" />
          <div>
            <Eyebrow>Підстава збору</Eyebrow>
            <h3 className="cc-h3" style={{ margin: '12px 0 0' }}>Офіційне звернення від Університету</h3>
            <p className="cc-body" style={{ margin: '14px 0 0' }}>
              Збір створено на підставі офіційного листа ЛНМУ імені Данила Галицького
              «Щодо організації збору коштів» — відповідно до Меморандуму про співпрацю
              між Університетом і Фондом. Документ публікуємо, щоб кожен донор бачив
              підставу та призначення коштів.
            </p>
            <div style={{ marginTop: 20 }}>
              <Button variant="secondary" icon={<IconFile />}
                onClick={() => window.open(window.ccDoc('lyst-shchodo-orhanizatsii-zboru.pdf'), '_blank')}>Переглянути звернення</Button>
            </div>
          </div>
        </div></Reveal>
      </Container>
    </section>
  );
}

function FundSection({ data }) {
  const fa = data.fundAbout;
  const pillars = [
    { t: 'Освіта', d: 'Знання, що рятують життя', icon: <IconBook size={24} />, c: 'var(--cc-blue)' },
    { t: 'Наука', d: 'Дослідження та технології', icon: <IconAtom size={24} />, c: 'var(--cc-teal)' },
    { t: 'Медицина', d: 'Сучасна допомога пацієнтам', icon: <IconActivity size={24} />, c: 'var(--cc-teal-deep)' },
  ];
  return (
    <section id="fund" style={{ background: 'var(--cc-white)', padding: '88px 0', borderTop: '1px solid var(--cc-line)' }}>
      <Container width={1180}>
        <Reveal><SectionHead eyebrow="Про фонд" title="Освіта. Наука. Медицина — три опори нашої місії"
          intro={fa.mission} align="center" /></Reveal>
        <div className="cc-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 48 }}>
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 90}><article style={{ textAlign: 'center', background: 'var(--cc-cream)',
              border: '1px solid var(--cc-line)', borderRadius: 'var(--cc-r-lg)', padding: '32px 24px', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ width: 60, height: 60, borderRadius: 'var(--cc-r-lg)', margin: '0 auto 16px',
                display: 'grid', placeItems: 'center', color: '#fff', background: p.c }}>{p.icon}</div>
              <h3 className="cc-h3" style={{ margin: '0 0 6px', fontSize: 24 }}>{p.t}</h3>
              <p className="cc-sm" style={{ margin: 0 }}>{p.d}</p>
            </article></Reveal>
          ))}
        </div>

        <div className="cc-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 56,
          alignItems: 'center' }}>
          <Reveal><div>
            <h3 className="cc-h3" style={{ margin: 0 }}>Основні принципи статуту</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {fa.statutePoints.map((s) => (
                <li key={s} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ width: 24, height: 24, flex: 'none', borderRadius: 99, background: 'var(--cc-teal-soft)',
                    color: 'var(--cc-teal-deep)', display: 'grid', placeItems: 'center', marginTop: 1 }}><IconCheck size={15} /></span>
                  <span className="cc-body" style={{ margin: 0, color: 'var(--cc-text)' }}>{s}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 24 }}>
              <Button variant="primary" icon={<IconDownload />}
                onClick={() => window.open(window.ccDoc('statut-fondu.pdf'), '_blank')}>Завантажити статут</Button>
            </div>
          </div></Reveal>
          <Reveal delay={130}><div style={{ background: 'var(--cc-hero-bg)', borderRadius: 'var(--cc-r-xl)', padding: 32, color: '#fff' }}>
            <img src={window.ccRes('logoMark','assets/logo-mark.png')} alt="" style={{ height: 64, marginBottom: 18 }} />
            <p style={{ fontFamily: 'var(--cc-font-head)', fontWeight: 700, fontSize: 22, lineHeight: 1.3, margin: 0 }}>
              «Кожен внесок — це більше, ніж обладнання. Це шанс для людини знову усміхнутися.
              Знову відчути дотик. Знову стати собою.»
            </p>
            <p className="cc-body" style={{ color: 'var(--cc-text-on-dark-2)', margin: '14px 0 0' }}>
              Команда фонду «Освіта. Наука. Медицина»
            </p>
          </div></Reveal>
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { SectionHead, ImageSlot, CollectionSection, FundSection });
