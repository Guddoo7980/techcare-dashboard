/**
 * Sample data used ONLY when the live API cannot be reached.
 * It follows the exact response shape of the Patient Data API.
 */

const HIGH = 'Higher than Average';
const LOW = 'Lower than Average';
const NORMAL = 'Normal';

const systolicLevel = (v) => (v >= 140 ? HIGH : v < 90 ? LOW : NORMAL);
const diastolicLevel = (v) => (v >= 90 ? HIGH : v < 80 ? LOW : NORMAL);
const heartRateLevel = (v) => (v > 100 ? HIGH : v < 80 ? LOW : NORMAL);

// [month, year, systolic, diastolic, heartRate, respiratoryRate, temperature]
const JESSICA_READINGS = [
  ['March', 2024, 160, 78, 78, 20, 98.6],
  ['February', 2024, 150, 70, 80, 19, 98.4],
  ['January', 2024, 110, 92, 76, 18, 98.6],
  ['December', 2023, 160, 108, 82, 21, 99.1],
  ['November', 2023, 115, 65, 74, 20, 98.5],
  ['October', 2023, 120, 110, 79, 20, 98.6],
];

const jessicaHistory = JESSICA_READINGS.map(([month, year, sys, dia, hr, rr, temp]) => ({
  month,
  year,
  blood_pressure: {
    systolic: { value: sys, levels: systolicLevel(sys) },
    diastolic: { value: dia, levels: diastolicLevel(dia) },
  },
  heart_rate: { value: hr, levels: heartRateLevel(hr) },
  respiratory_rate: { value: rr, levels: NORMAL },
  temperature: { value: temp, levels: NORMAL },
}));

const stub = (name, gender, age, pictureId) => ({
  name,
  gender,
  age,
  profile_picture: `https://fedskillstest.ct.digital/${pictureId}.png`,
});

export const FALLBACK_PATIENTS = [
  stub('Emily Williams', 'Female', 18, 1),
  stub('Ryan Johnson', 'Male', 45, 2),
  stub('Brandon Mitchell', 'Male', 36, 3),
  {
    ...stub('Jessica Taylor', 'Female', 28, 4),
    date_of_birth: '1996-08-23',
    phone_number: '(415) 555-1234',
    emergency_contact: '(415) 555-5678',
    insurance_type: 'Sunrise Health Assurance',
    diagnosis_history: jessicaHistory,
    diagnostic_list: [
      { name: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
      { name: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
      { name: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
      { name: 'Osteoarthritis', description: 'Degenerative joint disease', status: 'Under Observation' },
    ],
    lab_results: ['Blood Tests', 'CT Scans', 'Radiology Reports', 'X-Rays', 'Urine Test'],
  },
  stub('Samantha Johnson', 'Female', 56, 5),
  stub('Ashley Martinez', 'Female', 54, 6),
  stub('Olivia Brown', 'Female', 32, 7),
  stub('Tyler Davis', 'Male', 40, 8),
];
