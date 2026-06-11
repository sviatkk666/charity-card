/* Charity Card — website content (Ukrainian primary). Текст — з листівки фонду
   (uploads/«листівка повний ткст.docx») та листа ЛНМУ (docs/). Лічильники
   обнулені до старту збору — оновлюйте raised/donors реальними даними. */
window.CC_DATA = {
  fund: {
    name: 'Благодійний фонд',
    nameAccent: '«Освіта. Наука. Медицина»',
    short: 'Фонд «Освіта. Наука. Медицина»',
    edrpou: '46237538',
    email: 'co.cf.esm@gmail.com',
  },
  nav: [
    { id: 'collection', label: 'Про збір' },
    { id: 'fund',       label: 'Про фонд' },
    { id: 'transparency', label: 'Прозорість' },
    { id: 'contacts',   label: 'Контакти' },
  ],
  campaign: {
    eyebrow: 'Збір ЛНМУ · активний',
    title: 'Клініка, яка повертає\nобличчя і майбутнє',
    lede: 'Збираємо кошти на сучасну гібридну операційну для розвитку нового напрямку — реконструктивно-пластичної хірургії в Університетській лікарні. Місця, де найскладніші випадки отримають сучасне, професійне та системне лікування в Україні.',
    pledge: 'Це інвестиція у життя. У відновлення. У майбутнє,',
    pledgeSub: 'де кожен захисник має шанс повернути себе.',
    goal: 20000000,
    raised: 0,
    donors: 0,
    partners: [
      'Міністерство охорони здоровʼя України',
      'Львівська обласна військова адміністрація',
      'ДНТ «ЛНМУ імені Данила Галицького»',
      'Університетська лікарня ЛНМУ',
    ],
  },
  payment: {
    qrLink: 'https://bank.gov.ua/qr/QkNECjAwMgoxClVDVAoK0JHQu9Cw0LPQvtC00ZbQudC90LAg0L7RgNCz0LDQvdGW0LfQsNGG0ZbRjyDigJzQkdC70LDQs9C-0LTRltC50L3QuNC5INCk0L7QvdC0IOKAnNCe0YHQstGW0YLQsC4g0J3QsNGD0LrQsC4g0JzQtdC00LjRhtC40L3QsOKAneKAnQpVQTQ2MzM5NTAwMjYwMDQwMTgzNjc2OTAwMDAwMQpVQUgwCjQ2MjM3NTM4CgoK0JHQu9Cw0LPQvtC00ZbQudC90LjQuSDQstC90LXRgdC-0LoKCg',
    iban: 'UA46 3395 0026 0040 1836 7690 0000 1',
    purpose: 'Благодійний внесок',
  },
  event: {
    badge: 'Благодійний вечір «Простір світла, гідності та підтримки»',
    date: '3 липня, 18:00–21:00',
    place: 'Митрополичі сади, Львів',
    items: ['Презентація проєкту', 'Тихий аукціон', 'Нетворкінг'],
  },
  why: [
    {
      h: 'Чому це потрібно зараз',
      p: 'Щодня в Україні зростає кількість пацієнтів, які потребують складних реконструктивних операцій після бойових травм, важких поранень обличчя та кінцівок, втрати тканин, ушкодження нервів і судин. Операцій, які повертають можливість говорити, їсти, ходити, обіймати дітей, дивитися у дзеркало без болю.',
    },
    {
      h: 'Що ми будуємо',
      p: 'Сучасну гібридну операційну — простір, де можна виконувати найскладніші мікросудинні операції, реконструкцію обличчя та кінцівок із використанням вільних клаптів тканин, відновлення нервів і судин.',
    },
    {
      h: 'Для кого',
      p: 'Для тих, хто після важкої травми має шанс не просто вижити — а повернутися до життя. Для багатьох наших пацієнтів боротьба не завершується після порятунку життя — вона лише починається.',
    },
  ],
  capabilities: [
    'Виконувати мікросудинні операції та реконструкції з використанням вільних клаптів із інших частин тіла',
    'Проводити відновлення нервів, судин, мʼяких тканин та кісткових структур',
    'Забезпечити сучасний інфекційний контроль і безпечні умови для надскладних втручань',
    'Використовувати високотехнологічне обладнання для операцій тривалістю у багато годин',
    'Сформувати мультидисциплінарну команду повного циклу допомоги — від гострої травми до функціонального й естетичного відновлення',
    'Залучати провідні іноземні хірургічні команди та проводити спільні операції й навчання в Україні',
  ],
  fundAbout: {
    mission: 'Підтримувати освіту, науку та медицину — щоб лікарі мали сучасні умови, а пацієнти — шанс на повне відновлення. Маємо команду, яка навчалася у провідних світових центрах, працює з міжнародними партнерами та вже сьогодні виконує складні реконструктивні втручання.',
    statutePoints: [
      'Неприбуткова організація — усі кошти спрямовуються на статутні цілі.',
      'Прозора звітність за кожним збором та закупівлею.',
      'Співпраця з ЛНМУ та Університетською лікарнею.',
    ],
  },
  documents: [
    { t: 'Статут фонду', m: 'PDF', file: 'statut-fondu.pdf' },
    { t: 'Виписка з ЄДР', m: 'PDF', file: 'vypyska-z-yedr.pdf' },
    { t: 'Витяг з Реєстру неприбуткових установ і організацій', m: 'PDF', file: 'vytiah-z-reiestru-neprybutkovykh.pdf' },
    { t: 'Лист ЛНМУ щодо організації збору коштів', m: 'PDF', file: 'lyst-shchodo-orhanizatsii-zboru.pdf' },
  ],
};
window.fmtUAH = (n) => n.toLocaleString('uk-UA').replace(/,/g, ' ');
/* Живий лічильник: опублікована Google-таблиця (Файл → Поширити → Опублікувати
   в Інтернеті → CSV). Клієнт редагує клітинки — сайт підтягує цифри при кожному
   завантаженні. Рядки CSV: "зібрано,7000000" / "донорів,123" / "мета,20000000".
   Поки URL порожній — використовуються значення з campaign вище. */
window.CC_COUNTER_URL = '';
window.ccLoadCounter = async () => {
  if (!window.CC_COUNTER_URL) return;
  try {
    const res = await fetch(window.CC_COUNTER_URL, { cache: 'no-store' });
    if (!res.ok) return;
    const text = await res.text();
    const num = (v) => parseInt(String(v || '').replace(/[^\d]/g, ''), 10);
    const c = window.CC_DATA.campaign;
    text.split(/\r?\n/).forEach((line) => {
      const cells = line.split(',');
      const key = (cells[0] || '').toLowerCase();
      const val = num(cells[1]);
      if (isNaN(val)) return;
      if (/зібрано|raised/.test(key)) c.raised = val;
      else if (/донор|donors/.test(key)) c.donors = val;
      else if (/мета|goal/.test(key)) { if (val > 0) c.goal = val; }
    });
    window.dispatchEvent(new Event('cc:data'));
  } catch (e) { /* офлайн або таблиця недоступна — лишаємо значення з data.js */ }
};
window.ccLoadCounter();
/* Resolve an asset: use the inlined blob (standalone bundle) when present,
   otherwise fall back to the relative path (live/dev). */
window.ccRes = (id, path) => (window.__resources && window.__resources[id]) || path;
/* Resolve a fund document in docs/ from either the root page or the nested dev page. */
window.ccDoc = (file) => (location.pathname.includes('/ui_kits/') ? '../../docs/' : 'docs/') + file;
