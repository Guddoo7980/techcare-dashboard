import { DownloadIcon } from '../Icons/Icons.jsx';
import './LabResults.css';

export default function LabResults({ results }) {
  return (
    <section className="card lab-results" aria-labelledby="lab-results-title">
      <h2 id="lab-results-title" className="card__title">
        Lab Results
      </h2>

      <ul className="lab-results__list scroll">
        {results.map((name) => (
          <li key={name} className="lab-results__item">
            <span>{name}</span>
            <button type="button" className="lab-results__download" aria-label={`Download ${name}`}>
              <DownloadIcon />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
