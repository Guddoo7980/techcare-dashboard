/* Line icons (24×24 grid, inherit `currentColor`). */

function Icon({ size = 20, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function SolidIcon({ size = 20, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const HomeIcon = (props) => (
  <Icon {...props}>
    <path d="M3.5 11 12 3.8l8.5 7.2" />
    <path d="M5.5 9.8V20h4.2v-5.6h4.6V20h4.2V9.8" />
  </Icon>
);

export const PatientsIcon = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.8 20c.4-3.5 3-5.6 6.2-5.6s5.8 2.1 6.2 5.6" />
    <path d="M15.6 4.8a3.4 3.4 0 0 1 0 6.4" />
    <path d="M18 14.7c1.9.7 3.1 2.4 3.4 5.3" />
  </Icon>
);

export const CalendarIcon = (props) => (
  <Icon {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.6" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Icon>
);

export const MessageIcon = (props) => (
  <Icon {...props}>
    <path d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-7l-4.5 3.5V16.5H5A1.5 1.5 0 0 1 3.5 15V6A1.5 1.5 0 0 1 5 4.5Z" />
  </Icon>
);

export const CardIcon = (props) => (
  <Icon {...props}>
    <rect x="2.8" y="5" width="18.4" height="14" rx="2.6" />
    <path d="M2.8 10h18.4M6.5 15h3" />
  </Icon>
);

export const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="6.6" />
    <path d="m20 20-4.1-4.1" />
  </Icon>
);

export const SettingsIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 14.6a1.6 1.6 0 0 0 .3 1.8l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5v.2a1.9 1.9 0 0 1-3.8 0V20a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H4a1.9 1.9 0 0 1 0-3.8h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a1.9 1.9 0 1 1 2.7-2.7l.1.1a1.6 1.6 0 0 0 1.8.3h0a1.6 1.6 0 0 0 1-1.5V4a1.9 1.9 0 0 1 3.8 0v.2a1.6 1.6 0 0 0 1 1.5h0a1.6 1.6 0 0 0 1.8-.3l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.6 1.6 0 0 0-.3 1.8v0a1.6 1.6 0 0 0 1.5 1h.2a1.9 1.9 0 0 1 0 3.8h-.2a1.6 1.6 0 0 0-1.5 1Z" />
  </Icon>
);

export const MenuIcon = (props) => (
  <Icon {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const CloseIcon = (props) => (
  <Icon {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const MoreVerticalIcon = (props) => (
  <SolidIcon {...props}>
    <circle cx="12" cy="5" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="12" cy="19" r="1.7" />
  </SolidIcon>
);

export const MoreHorizontalIcon = (props) => (
  <SolidIcon {...props}>
    <circle cx="5" cy="12" r="1.7" />
    <circle cx="12" cy="12" r="1.7" />
    <circle cx="19" cy="12" r="1.7" />
  </SolidIcon>
);

export const DownloadIcon = (props) => (
  <Icon {...props}>
    <path d="M12 4v11M7.5 10.8l4.5 4.5 4.5-4.5M4.5 20h15" />
  </Icon>
);

export const BirthdayIcon = (props) => (
  <Icon {...props}>
    <rect x="4" y="5" width="16" height="15" rx="2.6" />
    <path d="M4 10h16M8.5 3v4M15.5 3v4" />
  </Icon>
);

export const GenderIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="9" r="4.6" />
    <path d="M12 13.6V21M8.8 17.6h6.4" />
  </Icon>
);

export const PhoneIcon = (props) => (
  <Icon {...props}>
    <path d="M5.2 4h3.6l1.8 4.6-2.2 1.4a11 11 0 0 0 5.6 5.6l1.4-2.2 4.6 1.8v3.6a1.8 1.8 0 0 1-1.8 1.8A16.4 16.4 0 0 1 3.4 5.8 1.8 1.8 0 0 1 5.2 4Z" />
  </Icon>
);

export const ShieldIcon = (props) => (
  <Icon {...props}>
    <path d="M12 3 4.5 6v5.6c0 4.4 3 7.7 7.5 9.4 4.5-1.7 7.5-5 7.5-9.4V6L12 3Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </Icon>
);

export const FlaskIcon = (props) => (
  <Icon {...props}>
    <path d="M9.5 3.5h5M10.5 3.5v6L5 19a1.6 1.6 0 0 0 1.4 2.4h11.2A1.6 1.6 0 0 0 19 19l-5.5-9.5v-6" />
    <path d="M7.5 15h9" />
  </Icon>
);
