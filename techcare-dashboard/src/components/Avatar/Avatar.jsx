import { useState } from 'react';
import { getInitials } from '../../utils/patient.js';
import './Avatar.css';

/** Round portrait that falls back to the person's initials if the image fails. */
export default function Avatar({ src, name, size = 48, className = '' }) {
  const [failed, setFailed] = useState(false);
  const style = { width: size, height: size, fontSize: Math.round(size * 0.32) };

  if (!src || failed) {
    return (
      <span className={`avatar avatar--initials ${className}`} style={style} aria-hidden="true">
        {getInitials(name)}
      </span>
    );
  }

  return (
    <img
      className={`avatar ${className}`}
      style={style}
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
