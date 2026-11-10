import { getLevelTone } from '../../utils/patient.js';

/** Colour-coded pill for "Higher than Average" / "Lower than Average" / "Normal". */
export default function LevelBadge({ levels }) {
  return <span className={`level-badge level-badge--${getLevelTone(levels)}`}>{levels}</span>;
}
