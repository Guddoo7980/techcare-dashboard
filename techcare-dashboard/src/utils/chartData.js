import { formatMonthLabel } from './patient.js';

export const SERIES_COLORS = {
  systolic: '#e66fd2',
  diastolic: '#8c6fe6',
  heartRate: '#e5566b',
  respiratoryRate: '#2b9fd8',
  temperature: '#f59e0b',
};

/**
 * Picks round axis bounds around the data. A value sitting exactly on a grid
 * line gets one extra step of headroom (e.g. a max of 160 → axis top of 180).
 */
export function niceRange(values, step) {
  const epsilon = 1e-9;
  let min = Math.floor(Math.min(...values) / step) * step;
  let max = Math.ceil((Math.max(...values) + epsilon) / step) * step;
  if (max - min < step * 2) max = min + step * 2;
  return { min, max, stepSize: step };
}

const series = (label, key, color, history, pick, unit = '') => ({
  label,
  color,
  unit,
  data: history.map((entry) => pick(entry)),
  key,
});

export function buildBloodPressureChart(history) {
  const datasets = [
    series('Systolic', 'systolic', SERIES_COLORS.systolic, history, (e) => e.blood_pressure.systolic.value, ' mmHg'),
    series('Diastolic', 'diastolic', SERIES_COLORS.diastolic, history, (e) => e.blood_pressure.diastolic.value, ' mmHg'),
  ];
  return {
    labels: history.map(formatMonthLabel),
    datasets,
    yAxis: niceRange(datasets.flatMap((d) => d.data), 20),
  };
}

export function buildHeartAndRespiratoryChart(history) {
  const datasets = [
    series('Heart rate', 'heartRate', SERIES_COLORS.heartRate, history, (e) => e.heart_rate.value, ' bpm'),
    series('Respiratory rate', 'respiratoryRate', SERIES_COLORS.respiratoryRate, history, (e) => e.respiratory_rate.value, ' bpm'),
  ];
  return {
    labels: history.map(formatMonthLabel),
    datasets,
    yAxis: niceRange(datasets.flatMap((d) => d.data), 10),
  };
}

export function buildTemperatureChart(history) {
  const datasets = [
    series('Temperature', 'temperature', SERIES_COLORS.temperature, history, (e) => e.temperature.value, '°F'),
  ];
  return {
    labels: history.map(formatMonthLabel),
    datasets,
    yAxis: niceRange(datasets[0].data, 0.5),
  };
}
