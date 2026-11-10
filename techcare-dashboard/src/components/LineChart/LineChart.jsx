import { useEffect, useRef } from 'react';
import {
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import './LineChart.css';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);
Chart.defaults.font.family = "'Manrope', system-ui, sans-serif";
Chart.defaults.color = '#072635';

const toChartDataset = ({ label, data, color, unit }) => ({
  label,
  data,
  unit,
  borderColor: color,
  backgroundColor: color,
  borderWidth: 2,
  tension: 0.42,
  pointRadius: 5.5,
  pointHoverRadius: 8,
  pointBackgroundColor: color,
  pointBorderColor: '#ffffff',
  pointBorderWidth: 1.5,
});

const buildOptions = (yAxis) => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: 'index', intersect: false },
  layout: { padding: { top: 6, right: 6 } },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#072635',
      padding: 10,
      cornerRadius: 8,
      boxPadding: 4,
      titleFont: { weight: '700' },
      callbacks: {
        label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y}${ctx.dataset.unit ?? ''}`,
      },
    },
  },
  scales: {
    y: {
      ...yAxis,
      ticks: { stepSize: yAxis?.stepSize, font: { size: 12 }, padding: 8 },
      grid: { color: 'rgba(7, 38, 53, 0.08)' },
      border: { display: false },
    },
    x: {
      ticks: { font: { size: 12 }, maxRotation: 0, autoSkipPadding: 12 },
      grid: { display: false },
      border: { display: false },
    },
  },
});

/**
 * Thin React wrapper around a Chart.js line chart.
 * `datasets`: [{ label, data, color, unit? }]   `yAxis`: { min, max, stepSize }
 */
export default function LineChart({ labels, datasets, yAxis, ariaLabel, className = '' }) {
  const canvasRef = useRef(null);
  // Re-create the chart only when the data actually changes.
  const signature = JSON.stringify({ labels, datasets, yAxis });

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: 'line',
      data: { labels, datasets: datasets.map(toChartDataset) },
      options: buildOptions(yAxis),
    });
    return () => chart.destroy();
    // `signature` captures labels, datasets and yAxis, so it is the only dependency needed.
  }, [signature]);

  return (
    <div className={`line-chart ${className}`}>
      <canvas ref={canvasRef} role="img" aria-label={ariaLabel} />
    </div>
  );
}
