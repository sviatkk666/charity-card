/* Charity Card icon set — Lucide-style 1.8px round strokes (open substitute;
   no icon assets existed in the source repo). Swap for the real set if provided. */
const Icon = ({ d, size = 20, fill = 'none', sw = 1.8, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {d ? <path d={d} /> : children}
  </svg>
);

const IconHeart = (p) => <Icon {...p} d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />;
const IconArrow = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const IconFile = (p) => <Icon {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><polyline points="14 3 14 8 19 8"/></Icon>;
const IconDownload = (p) => <Icon {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></Icon>;
const IconMail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></Icon>;
const IconCheck = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z"/><polyline points="9 12 11.5 14.5 16 9.5"/></Icon>;
const IconMenu = (p) => <Icon {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></Icon>;
const IconX = (p) => <Icon {...p}><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></Icon>;
const IconCalendar = (p) => <Icon {...p}><rect x="3" y="4" width="18" height="17" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></Icon>;
const IconPin = (p) => <Icon {...p}><path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.6"/></Icon>;
const IconUsers = (p) => <Icon {...p}><path d="M16 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1"/><circle cx="9" cy="8" r="3.2"/><path d="M22 20v-1a4 4 0 0 0-3-3.8"/><path d="M16 4.2a4 4 0 0 1 0 7.6"/></Icon>;
const IconBook = (p) => <Icon {...p}><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v16H5.5A2.5 2.5 0 0 0 3 21.5z"/><path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H12v16h6.5a2.5 2.5 0 0 1 2.5 2.5z"/></Icon>;
const IconActivity = (p) => <Icon {...p}><polyline points="3 12 8 12 11 4 14 20 16 12 21 12"/></Icon>;
const IconAtom = (p) => <Icon {...p}><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4.4"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(120 12 12)"/></Icon>;
const IconChevron = (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>;

Object.assign(window, {
  Icon, IconHeart, IconArrow, IconFile, IconDownload, IconMail, IconCheck,
  IconShield, IconMenu, IconX, IconCalendar, IconPin, IconUsers, IconBook,
  IconActivity, IconAtom, IconChevron,
});
