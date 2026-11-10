import { useId, useMemo, useState } from 'react';
import LineChart from '../LineChart/LineChart.jsx';
import LevelIndicator from './LevelIndicator.jsx';
import { SERIES_COLORS, buildBloodPressureChart } from '../../utils/chartData.js';
import './BloodPressurePanel.css';

/** Range options are only offered when the history is long enough to differ. */
function getRangeOptions(historyLength) {
  const options = [{ value: 6, label: 'Last 6 months' }];
  if (historyLength > 6) options.push({ value: 12, label: 'Last 12 months' });
  if (historyLength > 12) options.push({ value: 0, label: 'All time' });
  return options;
}

function LegendItem({ color, label, reading }) {
  return (
    <div className="bp-panel__legend-item">
      <p className="bp-panel__legend-label">
        <span className="bp-panel__dot" style={{ backgroundColor: color }} />
        {label}
      </p>
      <p className="bp-panel__legend-value">{reading.value}</p>
      <LevelIndicator levels={reading.levels} />
    </div>
  );
}

/** `history` must be sorted oldest → newest. */
export default function BloodPressurePanel({ history }) {
  const selectId = useId();
  const [range, setRange] = useState(6);
  const options = getRangeOptions(history.length);

  const visibleHistory = useMemo(
    () => (range === 0 ? history : history.slice(-range)),
    [history, range],
  );
  const chart = useMemo(() => buildBloodPressureChart(visibleHistory), [visibleHistory]);

  const latest = history[history.length - 1];
  const { systolic, diastolic } = latest.blood_pressure;

  return (
    <div className="bp-panel">
      <div className="bp-panel__chart">
        <div className="bp-panel__header">
          <h3 className="bp-panel__title">Blood Pressure</h3>
          <label className="visually-hidden" htmlFor={selectId}>
            Time range
          </label>
          <select
            id={selectId}
            className="bp-panel__range"
            value={range}
            onChange={(event) => setRange(Number(event.target.value))}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bp-panel__canvas">
          <LineChart
            labels={chart.labels}
            datasets={chart.datasets}
            yAxis={chart.yAxis}
            ariaLabel="Line chart of systolic and diastolic blood pressure by month"
          />
        </div>
      </div>

      <div className="bp-panel__legend">
        <LegendItem color={SERIES_COLORS.systolic} label="Systolic" reading={systolic} />
        <hr className="bp-panel__rule" />
        <LegendItem color={SERIES_COLORS.diastolic} label="Diastolic" reading={diastolic} />
      </div>
    </div>
  );
}
