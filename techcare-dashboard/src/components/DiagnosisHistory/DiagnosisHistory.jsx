import {
  HeartIllustration,
  LungsIllustration,
  ThermometerIllustration,
} from '../Icons/VitalIllustrations.jsx';
import BloodPressurePanel from './BloodPressurePanel.jsx';
import VitalCard from './VitalCard.jsx';
import './DiagnosisHistory.css';

/** `history` must be sorted oldest → newest. */
export default function DiagnosisHistory({ history }) {
  const latest = history[history.length - 1];

  return (
    <section className="card diagnosis" aria-labelledby="diagnosis-title">
      <h2 id="diagnosis-title" className="card__title">
        Diagnosis History
      </h2>

      {latest ? (
        <>
          <BloodPressurePanel history={history} />

          <div className="diagnosis__vitals">
            <VitalCard
              tone="blue"
              illustration={<LungsIllustration />}
              label="Respiratory Rate"
              value={latest.respiratory_rate.value}
              unit=" bpm"
              levels={latest.respiratory_rate.levels}
            />
            <VitalCard
              tone="pink"
              illustration={<ThermometerIllustration />}
              label="Temperature"
              value={latest.temperature.value}
              unit="°F"
              levels={latest.temperature.levels}
            />
            <VitalCard
              tone="rose"
              illustration={<HeartIllustration />}
              label="Heart Rate"
              value={latest.heart_rate.value}
              unit=" bpm"
              levels={latest.heart_rate.levels}
            />
          </div>
        </>
      ) : (
        <p className="diagnosis__empty">No diagnosis history recorded for this patient.</p>
      )}
    </section>
  );
}
