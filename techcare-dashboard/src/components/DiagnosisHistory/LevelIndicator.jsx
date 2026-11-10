import { getLevelDirection } from '../../utils/patient.js';
import './LevelIndicator.css';

/** "▲ Higher than Average" / "▼ Lower than Average" / "Normal" */
export default function LevelIndicator({ levels }) {
  const direction = getLevelDirection(levels);
  return (
    <span className="level">
      {direction && <span className={`level__arrow level__arrow--${direction}`} aria-hidden="true" />}
      {levels}
    </span>
  );
}
