const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** Orders diagnosis history oldest → newest (the API returns newest first). */
export function sortHistoryAscending(history = []) {
  const key = (entry) => entry.year * 12 + MONTH_NAMES.indexOf(entry.month);
  return [...history].sort((a, b) => key(a) - key(b));
}

/** "1996-08-23" → "August 23, 1996" (parsed by hand to avoid timezone drift). */
export function formatDateOfBirth(isoDate) {
  if (!isoDate) return '—';
  const [year, month, day] = isoDate.split('-').map(Number);
  return `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}

/** { month: "March", year: 2024 } → "Mar. 2024" (matches the chart in the design). */
export function formatMonthLabel({ month, year }) {
  const abbreviation = month.slice(0, 3);
  return `${abbreviation}${month.length > 3 ? '.' : ''} ${year}`;
}

/** "Higher than Average" → "up", "Lower than Average" → "down", otherwise null. */
export function getLevelDirection(levels = '') {
  if (levels.startsWith('Higher')) return 'up';
  if (levels.startsWith('Lower')) return 'down';
  return null;
}

/** Maps a level label to a tone used for colour-coded badges. */
export function getLevelTone(levels = '') {
  if (levels.startsWith('Higher')) return 'high';
  if (levels.startsWith('Lower')) return 'low';
  return 'normal';
}

export function getInitials(name = '') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}
