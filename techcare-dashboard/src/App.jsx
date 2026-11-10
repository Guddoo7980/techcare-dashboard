import { useCallback, useMemo, useState } from 'react';
import { resolvePortrait } from './assets/portraits.js';
import DiagnosisHistory from './components/DiagnosisHistory/DiagnosisHistory.jsx';
import DiagnosticList from './components/DiagnosticList/DiagnosticList.jsx';
import Header from './components/Header/Header.jsx';
import LabResults from './components/LabResults/LabResults.jsx';
import PatientDetailsModal from './components/PatientDetailsModal/PatientDetailsModal.jsx';
import PatientList from './components/PatientList/PatientList.jsx';
import PatientProfile from './components/PatientProfile/PatientProfile.jsx';
import StatusScreen from './components/StatusScreen/StatusScreen.jsx';
import { usePatients } from './hooks/usePatients.js';
import { sortHistoryAscending } from './utils/patient.js';
import './App.css';

const SELECTED_PATIENT_NAME = 'Jessica Taylor';
const DOCTOR = { name: 'Dr. Jose Simmons', role: 'General Practitioner' };

export default function App() {
  const { status, patients, isFallback, retry } = usePatients();
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const closeDetails = useCallback(() => setDetailsOpen(false), []);

  const patientsWithPortraits = useMemo(
    () => patients.map((patient) => ({ ...patient, portrait: resolvePortrait(patient) })),
    [patients],
  );
  const selected = patientsWithPortraits.find((patient) => patient.name === SELECTED_PATIENT_NAME);
  const history = useMemo(() => sortHistoryAscending(selected?.diagnosis_history), [selected]);

  if (status === 'loading') {
    return <StatusScreen busy title="Loading patient data…" />;
  }

  if (!selected) {
    return (
      <StatusScreen
        title="Patient not found"
        message={`“${SELECTED_PATIENT_NAME}” is not in the data returned by the API.`}
        actionLabel="Try again"
        onAction={retry}
      />
    );
  }

  return (
    <div className="app">
      <Header doctor={DOCTOR} />

      {isFallback && (
        <div className="app__notice" role="status">
          <span>Couldn’t reach the Patient API — showing sample data.</span>
          <button type="button" className="app__notice-action" onClick={retry}>
            Retry
          </button>
        </div>
      )}

      <main className="dashboard">
        <PatientList patients={patientsWithPortraits} activeName={SELECTED_PATIENT_NAME} />
        <DiagnosisHistory history={history} />
        <PatientProfile patient={selected} onShowAll={() => setDetailsOpen(true)} />
        <DiagnosticList items={selected.diagnostic_list ?? []} />
        <LabResults results={selected.lab_results ?? []} />
      </main>

      {isDetailsOpen && (
        <PatientDetailsModal
          patient={{ ...selected, diagnostic_list: selected.diagnostic_list ?? [], lab_results: selected.lab_results ?? [] }}
          history={history}
          onClose={closeDetails}
        />
      )}
    </div>
  );
}
