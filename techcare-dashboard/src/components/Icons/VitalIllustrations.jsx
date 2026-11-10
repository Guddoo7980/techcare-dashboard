/* Coloured illustrations shown inside the vital-sign cards. */

const INK = '#072635';

export function LungsIllustration() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g stroke={INK} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M20.5 13c-5.6 3.6-11 13.6-12 24.4-.3 4 2.5 6 6 5 3.5-1 6-4 6-8V22c0-3.4.2-6.2 0-9Z"
          fill="#7cc8ee"
        />
        <path
          d="M27.5 13c5.6 3.6 11 13.6 12 24.4.3 4-2.5 6-6 5-3.5-1-6-4-6-8V22c0-3.4-.2-6.2 0-9Z"
          fill="#7cc8ee"
        />
        <path d="M22.4 5.5h3.2v15.2h-3.2z" fill="#fff" />
        <path d="M22.4 20.7 20.4 25M25.6 20.7l2 4.3" fill="none" />
      </g>
    </svg>
  );
}

export function ThermometerIllustration() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g stroke={INK} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M17 7.5a6 6 0 0 1 12 0v21.2a9 9 0 1 1-12 0Z" fill="#fff" />
        <circle cx="23" cy="36" r="5.4" fill="#e8505b" stroke="none" />
        <path d="M23 15v21" stroke="#e8505b" strokeWidth="4.4" fill="none" />
        <path d="M33 9.5h5M33 15h3.4M33 20.5h5M33 26h3.4" fill="none" />
      </g>
    </svg>
  );
}

export function HeartIllustration() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <g stroke={INK} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path
          d="M24 41S6 30.6 6 18.6C6 12.7 10.4 8.5 15.6 8.5c3.5 0 6.6 1.9 8.4 5 1.8-3.1 4.9-5 8.4-5C37.6 8.5 42 12.7 42 18.6 42 30.6 24 41 24 41Z"
          fill="#ee5560"
        />
        <path d="M4 22.5h11l3.4-6.5 5 13 3.6-6.5H44" fill="none" />
      </g>
    </svg>
  );
}
