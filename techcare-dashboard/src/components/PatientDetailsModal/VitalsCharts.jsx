import { useMemo } from 'react';
import LineChart from '../LineChart/LineChart.jsx';
import {
  SERIES_COLORS,
  buildBloodPressureChart,
  buildHeartAndRespiratoryChart,
  buildTemperatureChart,
} from '../../utils/chartData.js';

function ChartCard({ title, chart, ariaLabel, legend }) {
  return (
    <figure className="chart-card">
      <figcaption className="chart-card__head">
        <h3 className="details__section-title">{title}</h3>
        <ul className="chart-card__legend">
          {legend.map((item) => (
            <li key={item.label}>
              <span className="chart-card__dot" style={{ backgroundColor: item.color }} />
              {item.label}
            </li>
          ))}
        </ul>
      </figcaption>
      <div className="chart-card__canvas">
        <LineChart labels={chart.labels} datasets={chart.datasets} yAxis={chart.yAxis} ariaLabel={ariaLabel} />
      </div>
    </figure>
  );
}

/** Full-history charts: blood pressure, heart/respiratory rate and temperature. */
export default function VitalsCharts({ history }) {
  const charts = useMemo(
    () => ({
      bloodPressure: buildBloodPressureChart(history),
      rates: buildHeartAndRespiratoryChart(history),
      temperature: buildTemperatureChart(history),
    }),
    [history],
  );

  return (
    <div className="details__charts">
      <ChartCard
        title="Blood pressure report"
        chart={charts.bloodPressure}
        ariaLabel="Line chart of systolic and diastolic blood pressure for the full history"
        legend={[
          { label: 'Systolic', color: SERIES_COLORS.systolic },
          { label: 'Diastolic', color: SERIES_COLORS.diastolic },
        ]}
      />
      <div className="details__charts-row">
        <ChartCard
          title="Heart & respiratory rate"
          chart={charts.rates}
          ariaLabel="Line chart of heart rate and respiratory rate for the full history"
          legend={[
            { label: 'Heart rate', color: SERIES_COLORS.heartRate },
            { label: 'Respiratory', color: SERIES_COLORS.respiratoryRate },
          ]}
        />
        <ChartCard
          title="Temperature"
          chart={charts.temperature}
          ariaLabel="Line chart of body temperature for the full history"
          legend={[{ label: '°F', color: SERIES_COLORS.temperature }]}
        />
      </div>
    </div>
  );
}
