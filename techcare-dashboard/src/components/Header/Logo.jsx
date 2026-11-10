export default function Logo() {
  return (
    <svg
      className="header__logo"
      viewBox="0 0 77 70"
      width="56"
      height="51"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logo-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#12c27a" />
          <stop offset="1" stopColor="#0fe0c8" />
        </linearGradient>
        <linearGradient id="logo-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f9fe0" />
          <stop offset="1" stopColor="#0b5fb0" />
        </linearGradient>
      </defs>
      <path d="M28 8 43 18.5V31H28Z" fill="url(#logo-green)" />
      <path d="M43 24 61 32 43 38Z" fill="#0fe0c8" />
      <path d="M9 35 28 28V44Z" fill="#7cc4ee" opacity="0.85" />
      <path d="M28 31H43V60L28 49Z" fill="url(#logo-blue)" />
    </svg>
  );
}
