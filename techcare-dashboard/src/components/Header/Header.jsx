import { useEffect, useId, useState } from 'react';
import doctorPhoto from '../../assets/doctor.png';
import {
  CalendarIcon,
  CardIcon,
  HomeIcon,
  MenuIcon,
  MessageIcon,
  MoreVerticalIcon,
  PatientsIcon,
  SettingsIcon,
  CloseIcon,
} from '../Icons/Icons.jsx';
import Logo from './Logo.jsx';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Overview', Icon: HomeIcon },
  { label: 'Patients', Icon: PatientsIcon, active: true },
  { label: 'Schedule', Icon: CalendarIcon },
  { label: 'Message', Icon: MessageIcon },
  { label: 'Transactions', Icon: CardIcon },
];

export default function Header({ doctor }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="header">
      <a className="header__brand" href="/" aria-label="Tech.Care home">
        <Logo />
        <span className="header__brand-name">Tech.Care</span>
      </a>

      <nav
        id={navId}
        className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
        aria-label="Primary"
      >
        <ul className="header__nav-list">
          {NAV_ITEMS.map(({ label, Icon, active }) => (
            <li key={label}>
              <button
                type="button"
                className={`header__link ${active ? 'header__link--active' : ''}`}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                <Icon />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__user">
        <img className="header__avatar" src={doctorPhoto} alt="" width="44" height="44" />
        <div className="header__user-text">
          <p className="header__user-name">{doctor.name}</p>
          <p className="header__user-role">{doctor.role}</p>
        </div>
        <span className="header__divider" aria-hidden="true" />
        <button type="button" className="header__icon-button header__icon-button--desktop" aria-label="Settings">
          <SettingsIcon />
        </button>
        <button type="button" className="header__icon-button header__icon-button--desktop" aria-label="More options">
          <MoreVerticalIcon />
        </button>
        <button
          type="button"
          className="header__icon-button header__menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={navId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
