/* Charity Card — Donate modal (fake checkout flow) */
function DonateModal({ data, accent, open, onClose }) {
  const c = data.campaign;
  const [amt, setAmt] = React.useState(c.presets[1]);
  const [custom, setCustom] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [monthly, setMonthly] = React.useState(false);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { if (open) { setDone(false); } }, [open]);
  if (!open) return null;
  const value = custom ? Number(custom) : amt;
  const accentBg = accent === 'donate' ? 'var(--cc-teal)' : 'var(--cc-blue)';

  const field = (label, node) => (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontFamily: 'var(--cc-font-body)', fontWeight: 600, fontSize: 13.5, color: 'var(--cc-text-2)' }}>{label}</span>
      {node}
    </label>
  );
  const inputStyle = {
    font: 'inherit', fontFamily: 'var(--cc-font-body)', fontSize: 15, padding: '12px 14px',
    border: '1.5px solid var(--cc-line-strong)', borderRadius: 'var(--cc-r-sm)', background: 'var(--cc-white)',
    color: 'var(--cc-text)', outline: 'none', width: '100%',
  };

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,34,54,0.55)',
      backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', padding: 20, animation: 'ccFade .2s ease' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(480px,100%)', maxHeight: '92vh', overflow: 'auto',
        background: 'var(--cc-cream)', borderRadius: 'var(--cc-r-xl)', boxShadow: 'var(--cc-shadow-lg)',
        animation: 'ccPop .22s cubic-bezier(.2,.8,.2,1)' }}>
        {!done ? (
          <div style={{ padding: 26 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <Eyebrow>Підтримати збір</Eyebrow>
                <h3 className="cc-h3" style={{ margin: '8px 0 0' }}>Клініка голови та шиї, ЛНМУ</h3>
              </div>
              <button onClick={onClose} style={{ background: 'var(--cc-n100)', border: 'none', borderRadius: 99,
                width: 34, height: 34, display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--cc-text-2)', flex: 'none' }}><IconX size={18} /></button>
            </div>

            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {field('Сума внеску, грн', <AmountPicker presets={c.presets} value={amt}
                onChange={(v) => { setAmt(v); setCustom(''); }} custom={custom} onCustom={setCustom} />)}
              <button onClick={() => setMonthly(!monthly)} style={{ display: 'flex', alignItems: 'center', gap: 11,
                background: monthly ? 'var(--cc-teal-soft)' : 'var(--cc-white)', cursor: 'pointer', textAlign: 'left',
                border: '1.5px solid ' + (monthly ? 'var(--cc-teal)' : 'var(--cc-line)'), borderRadius: 'var(--cc-r-sm)', padding: '11px 14px' }}>
                <span style={{ width: 20, height: 20, borderRadius: 6, flex: 'none', border: '1.5px solid ' + (monthly ? 'var(--cc-teal-deep)' : 'var(--cc-n400)'),
                  background: monthly ? 'var(--cc-teal-deep)' : 'transparent', color: '#fff', display: 'grid', placeItems: 'center' }}>
                  {monthly ? <IconCheck size={13} /> : null}</span>
                <span style={{ fontFamily: 'var(--cc-font-body)', fontSize: 14, fontWeight: 600, color: 'var(--cc-text)' }}>Робити внесок щомісяця</span>
              </button>
              {field('Імʼя (за бажанням)', <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Олена" style={inputStyle} />)}
              {field('Email для квитанції', <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" type="email" style={inputStyle} />)}
            </div>

            <Button variant={accent} size="lg" icon={<IconHeart />} onClick={() => setDone(true)}
              style={{ width: '100%', marginTop: 20 }}>
              {`Підтримати на ${window.fmtUAH(value)} грн${monthly ? '/міс' : ''}`}
            </Button>
            <p style={{ display: 'flex', gap: 8, margin: '13px 2px 0', fontFamily: 'var(--cc-font-body)', fontSize: 12, color: 'var(--cc-text-3)', lineHeight: 1.5 }}>
              <IconShield size={24} style={{ flex: 'none', marginTop: -2 }} />
              Демо-форма UI-кіта. У бойовій версії тут підключається платіжний провайдер (LiqPay / Fondy / monobank).
            </p>
          </div>
        ) : (
          <div style={{ padding: 36, textAlign: 'center' }}>
            <div style={{ width: 76, height: 76, margin: '0 auto 18px', borderRadius: 99, background: 'var(--cc-teal-soft)',
              color: 'var(--cc-teal-deep)', display: 'grid', placeItems: 'center', animation: 'ccPop .3s ease' }}><IconCheck size={40} sw={2.4} /></div>
            <h3 className="cc-h2" style={{ margin: 0 }}>Дякуємо, що ви поруч!</h3>
            <p className="cc-body" style={{ margin: '12px auto 0', maxWidth: 340 }}>
              Ваш внесок <b style={{ color: 'var(--cc-text)' }}>{window.fmtUAH(value)} грн</b> наближає нас до мети.
              Квитанцію надішлемо{email ? <> на <b style={{ color: 'var(--cc-text)' }}>{email}</b></> : ' на вашу пошту'}.
            </p>
            <Button variant={accent} size="lg" onClick={onClose} style={{ marginTop: 24 }}>Повернутись до збору</Button>
          </div>
        )}
      </div>
    </div>
  );
}
Object.assign(window, { DonateModal });
