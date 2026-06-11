# Handoff — продовження розробки локально

Цей архів — повний знімок дизайн-проекту **Charity Card** («Освіта. Наука. Медицина»).

## Що тут що

| Шлях | Призначення |
|---|---|
| `colors_and_type.css` | Токени дизайн-системи (кольори, типографіка, радіуси, тіні) — джерело правди |
| `ui_kits/website/` | **Робочий вихідний код** сайту збору: React + Babel, розбитий на jsx-модулі |
| `ui_kits/website/index.html` | Жива дев-версія (вантажить jsx напряму, з панеллю Tweaks) |
| `ui_kits/website/index-standalone.html` | Вихідник для офлайн-збірки |
| `index.html` | **Скомпільований** офлайн-файл (2МБ, все інлайновано; колишній `Charity Card Donation Site.html`). НЕ редагуйте вручну — він генерується з `index-standalone.html`; контентні правки вносьте в jsx/data.js і переносьте патчем ресурсів манифеста |
| `assets/`, `ui_kits/website/assets/` | Логотип, постер ЛНМУ, скан листа ЛНМУ (`letter-scan.jpg`) |
| `preview/` | Картки прев'ю дизайн-системи (Design System tab) |
| `docs/` | Публічні документи фонду з вебвимогами до назв: витяг з Реєстру неприбуткових, лист ЛНМУ щодо збору |
| `uploads/` | Оригінали документів фонду (PDF/DOCX), додані вручну |
| `README.md` | Опис дизайн-системи |
| `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` | Автозгенеровані артефакти компілятора дизайн-системи — можна не комітити |

> HTML-файли тут — **дизайн-референси**: hi-fi прототипи вигляду й поведінки.
> Для продакшену переносьте їх у свій стек (Next.js тощо), зберігаючи токени з `colors_and_type.css`.

## GitHub

Репозиторій: `git@github.com:sviatkk666/charity-card.git` (гілка `main`).
Кореневий `index.html` — повністю офлайн-збірка сайту, тож GitHub Pages
(`main` / root) віддає сайт без жодного білда.

## Як запустити локально

Потрібен будь-який статичний сервер (jsx транспілюється Babel'ом у браузері):

```bash
npx serve .
# відкрити http://localhost:3000/ui_kits/website/index.html
```

## Анімації

Скрол-анімації живуть у `ui_kits/website/motion.jsx` (`Reveal`, `CountUp`, `useInView`).
CSS-класи `.cc-anim .cc-reveal` / `.cc-meter-anim` — у `<style>` обох index-файлів.
Поважають `prefers-reduced-motion`; вимикаються тогглом «Анімації» в Tweaks.
