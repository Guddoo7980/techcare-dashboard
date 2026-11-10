import './InfoRow.css';

/** Icon + label + value row used for patient contact details. */
export default function InfoRow({ icon, label, value }) {
  return (
    <div className="info-row">
      <span className="info-row__icon">{icon}</span>
      <div className="info-row__text">
        <dt className="info-row__label">{label}</dt>
        <dd className="info-row__value">{value || '—'}</dd>
      </div>
    </div>
  );
}
