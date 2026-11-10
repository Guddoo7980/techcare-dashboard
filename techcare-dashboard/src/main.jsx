import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // global tokens + base first, so component styles can override
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
