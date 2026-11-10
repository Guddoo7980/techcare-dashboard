import './DiagnosticList.css';

export default function DiagnosticList({ items }) {
  return (
    <section className="card diagnostic-list" aria-labelledby="diagnostic-list-title">
      <h2 id="diagnostic-list-title" className="card__title">
        Diagnostic List
      </h2>

      <div className="diagnostic-list__scroll scroll" tabIndex={0} role="region" aria-label="Diagnostic list table">
        <table className="diagnostic-list__table">
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
                <td>{item.name}</td>
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
