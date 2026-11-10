import LevelBadge from './LevelBadge.jsx';

function Reading({ value, unit = '', levels }) {
  return (
    <div className="reading">
      <span className="reading__value">
        {value}
        {unit}
      </span>
      <LevelBadge levels={levels} />
    </div>
  );
}

/** Month-by-month readings, newest first. */
export function DiagnosisHistoryTable({ history }) {
  const rows = [...history].reverse();

  return (
    <section className="details__panel" aria-labelledby="history-table-title">
      <h3 id="history-table-title" className="details__section-title">
        Diagnosis history ({rows.length} {rows.length === 1 ? 'month' : 'months'})
      </h3>
      <div className="details__table-wrap scroll" tabIndex={0} role="region" aria-label="Diagnosis history table">
        <table className="details__table">
          <thead>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Systolic</th>
              <th scope="col">Diastolic</th>
              <th scope="col">Heart rate</th>
              <th scope="col">Respiratory rate</th>
              <th scope="col">Temperature</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((entry) => (
              <tr key={`${entry.month}-${entry.year}`}>
                <th scope="row">
                  {entry.month} {entry.year}
                </th>
                <td><Reading {...entry.blood_pressure.systolic} /></td>
                <td><Reading {...entry.blood_pressure.diastolic} /></td>
                <td><Reading {...entry.heart_rate} unit=" bpm" /></td>
                <td><Reading {...entry.respiratory_rate} unit=" bpm" /></td>
                <td><Reading {...entry.temperature} unit="°F" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function DiagnosticListTable({ items }) {
  return (
    <section className="details__panel" aria-labelledby="diagnostic-table-title">
      <h3 id="diagnostic-table-title" className="details__section-title">
        Diagnostic list
      </h3>
      <div className="details__table-wrap scroll" tabIndex={0} role="region" aria-label="Diagnostic list table">
        <table className="details__table">
          <thead>
            <tr>
              <th scope="col">Problem/Diagnosis</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
