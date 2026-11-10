import LevelBadge from './LevelBadge.jsx';

export default function LatestVitals({ latest }) {
  const { blood_pressure: bp } = latest;
  const tiles = [
    {
      label: 'Blood pressure',
      value: `${bp.systolic.value}/${bp.diastolic.value}`,
      unit: 'mmHg',
      levels: [bp.systolic.levels, bp.diastolic.levels],
    },
    { label: 'Heart rate', value: latest.heart_rate.value, unit: 'bpm', levels: [latest.heart_rate.levels] },
    {
      label: 'Respiratory rate',
      value: latest.respiratory_rate.value,
      unit: 'bpm',
      levels: [latest.respiratory_rate.levels],
    },
    { label: 'Temperature', value: latest.temperature.value, unit: '°F', levels: [latest.temperature.levels] },
  ];

  return (
    <section aria-labelledby="latest-vitals-title">
      <h3 id="latest-vitals-title" className="details__section-title">
        Latest readings · {latest.month} {latest.year}
      </h3>
      <div className="details__stats">
        {tiles.map((tile) => (
          <article key={tile.label} className="stat">
            <p className="stat__label">{tile.label}</p>
            <p className="stat__value">
              {tile.value} <span className="stat__unit">{tile.unit}</span>
            </p>
            <div className="stat__badges">
              {tile.levels.map((levels, index) => (
                <LevelBadge key={`${levels}-${index}`} levels={levels} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
