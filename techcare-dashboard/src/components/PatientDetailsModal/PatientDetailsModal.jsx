import { createPortal } from 'react-dom';
import { useModalBehavior } from '../../hooks/useModalBehavior.js';
import InfoRow from '../InfoRow/InfoRow.jsx';
import {
  BirthdayIcon,
  CloseIcon,
  DownloadIcon,
  FlaskIcon,
  GenderIcon,
  PhoneIcon,
  ShieldIcon,
} from '../Icons/Icons.jsx';
import { formatDateOfBirth } from '../../utils/patient.js';
import { DiagnosisHistoryTable, DiagnosticListTable } from './HistoryTables.jsx';
import LatestVitals from './LatestVitals.jsx';
import VitalsCharts from './VitalsCharts.jsx';
import './PatientDetailsModal.css';

/**
 * Full patient record. Everything shown here comes from the API response:
 * personal details, every month of diagnosis history (as charts + table),
 * the diagnostic list and the lab results.
 */
export default function PatientDetailsModal({ patient, history, onClose }) {
  const dialogRef = useModalBehavior(onClose);
  const latest = history[history.length - 1];

  return createPortal(
    <div className="details-modal" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div
        ref={dialogRef}
        className="details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="details-title"
      >
        <header className="details__header">
          <img className="details__portrait" src={patient.portrait} alt="" width="64" height="64" />
          <div className="details__heading">
            <h2 id="details-title" className="details__name">
              {patient.name}
            </h2>
            <p className="details__subtitle">
              {patient.gender} · {patient.age} years · Complete patient record
            </p>
          </div>
          <button type="button" className="details__close" onClick={onClose} aria-label="Close patient record">
            <CloseIcon />
          </button>
        </header>

        <div className="details__body scroll">
          <div className="details__layout">
            <aside className="details__side">
              <section className="details__panel" aria-labelledby="personal-title">
                <h3 id="personal-title" className="details__section-title">
                  Personal details
                </h3>
                <dl className="details__list">
                  <InfoRow icon={<BirthdayIcon />} label="Date of birth" value={formatDateOfBirth(patient.date_of_birth)} />
                  <InfoRow icon={<GenderIcon />} label="Gender" value={patient.gender} />
                  <InfoRow icon={<PhoneIcon />} label="Contact info." value={patient.phone_number} />
                  <InfoRow icon={<PhoneIcon />} label="Emergency contact" value={patient.emergency_contact} />
                  <InfoRow icon={<ShieldIcon />} label="Insurance provider" value={patient.insurance_type} />
                </dl>
              </section>

              <section className="details__panel" aria-labelledby="labs-title">
                <h3 id="labs-title" className="details__section-title">
                  Lab results
                </h3>
                <ul className="details__labs">
                  {patient.lab_results.map((name) => (
                    <li key={name} className="details__lab">
                      <FlaskIcon size={18} />
                      <span>{name}</span>
                      <button type="button" className="details__lab-download" aria-label={`Download ${name}`}>
                        <DownloadIcon size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>

            <div className="details__main">
              {latest && <LatestVitals latest={latest} />}
              {latest && <VitalsCharts history={history} />}
            </div>
          </div>

          {latest && <DiagnosisHistoryTable history={history} />}
          <DiagnosticListTable items={patient.diagnostic_list} />
        </div>
      </div>
    </div>,
    document.body,
  );
}
