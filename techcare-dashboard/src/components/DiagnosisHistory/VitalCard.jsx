import LevelIndicator from './LevelIndicator.jsx';
import './VitalCard.css';

/** tone: "blue" | "pink" | "rose" */
export default function VitalCard({ tone, illustration, label, value, unit, levels }) {
  return (
    <article className={`vital vital--${tone}`}>
      <div className="vital__illustration">{illustration}</div>
      <div className="vital__text">
        <h3 className="vital__label">{label}</h3>
        <p className="vital__value">
          {value}
          {unit}
        </p>
        <LevelIndicator levels={levels} />
      </div>
    </article>
  );
}
