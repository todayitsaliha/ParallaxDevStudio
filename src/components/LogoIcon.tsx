export const LogoIcon = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className}>
    <rect x="14" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="20" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="20" y1="14" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="2" className="fill-teal" />
    <path d="M27 13 L33 7 M33 7 H28 M33 7 V12" className="stroke-teal" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
