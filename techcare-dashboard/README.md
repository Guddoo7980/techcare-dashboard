# Tech.Care Patient Dashboard

React + Vite + Chart.js implementation of the Tech.Care patient dashboard design.
Patient data is fetched live (GET) from the Coalition Technologies Patient Data API;
the dashboard shows **Jessica Taylor** only.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

Optional: copy `.env.example` to `.env` to change the API URL / credentials.

## Features

- Pixel-matched layout: header, patients list, diagnosis history (Chart.js blood-pressure
  chart + vitals), profile, diagnostic list, lab results.
- **Show All Information** opens the complete record from the API: personal details,
  latest readings, full-history charts (blood pressure, heart/respiratory rate,
  temperature), month-by-month table, diagnostic list and lab results.
- Responsive: 3-column desktop → 2-column tablet (patients become a swipeable strip)
  → single-column mobile; the header nav collapses into a menu.
- Accessible modal (focus trap, Esc to close, focus restore), labelled regions, keyboard-usable tables.
- Loading, error-boundary and "API unreachable" states (falls back to sample data with a Retry button).

## Structure

```
src/
  api/          patientsApi.js            GET request + Basic auth
  hooks/        usePatients.js, useModalBehavior.js
  data/         fallbackPatients.js       only used if the API fails
  utils/        patient.js, chartData.js  formatting + chart series builders
  styles/       tokens.css, base.css      design tokens + resets
  assets/       jessica-taylor.png (supplied photo), doctor.png, portraits.js
  components/   one folder per component, each with its own .jsx + .css
```
