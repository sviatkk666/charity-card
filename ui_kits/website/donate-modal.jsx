/* Charity Card — Donate modal: платіжний QR НБУ.
   Без форм і платіжної логіки: донор сканує QR у застосунку свого банку
   (monobank, Privat24, …) або відкриває посилання з телефона. */
function DonateModal({ data, accent, open, onClose }) {
  if (!open) return null;
  const pay = data.payment;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,34,54,0.55)',
      backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', padding: 20, animation: 'ccFade .2s ease' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(420px,100%)', maxHeight: '92vh', overflow: 'auto',
        background: 'var(--cc-cream)', borderRadius: 'var(--cc-r-xl)', boxShadow: 'var(--cc-shadow-lg)',
        animation: 'ccPop .22s cubic-bezier(.2,.8,.2,1)', padding: 26, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <Eyebrow>Підтримати збір</Eyebrow>
            <h3 className="cc-h3" style={{ margin: '8px 0 0' }}>Скануйте QR у застосунку банку</h3>
          </div>
          <button onClick={onClose} style={{ background: 'var(--cc-n100)', border: 'none', borderRadius: 99,
            width: 34, height: 34, display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--cc-text-2)', flex: 'none' }}><IconX size={18} /></button>
        </div>

        <div style={{ marginTop: 18, background: 'var(--cc-white)', border: '1px solid var(--cc-line)',
          borderRadius: 'var(--cc-r-lg)', padding: 14 }}>
          <img src={window.ccRes('qrDonate', 'assets/qr-donate.jpg')} alt="QR-код для благодійного внеску"
            style={{ display: 'block', width: '100%', borderRadius: 8 }} />
        </div>

        <Button variant={accent} size="lg" icon={<IconHeart />}
          onClick={() => window.open(pay.qrLink, '_blank')} style={{ width: '100%', marginTop: 16 }}>
          Відкрити в застосунку банку
        </Button>

        <p style={{ margin: '16px 2px 0', fontFamily: 'var(--cc-font-body)', fontSize: 12.5, lineHeight: 1.6, color: 'var(--cc-text-3)' }}>
          Отримувач: <b style={{ color: 'var(--cc-text-2)' }}>{data.fund.short}</b> · ЄДРПОУ {data.fund.edrpou}<br />
          IBAN: <span className="cc-num" style={{ fontSize: 12.5, color: 'var(--cc-text-2)', userSelect: 'all' }}>{pay.iban}</span><br />
          Призначення: {pay.purpose}
        </p>
      </div>
    </div>
  );
}
Object.assign(window, { DonateModal });
