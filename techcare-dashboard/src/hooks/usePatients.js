import { useCallback, useEffect, useState } from 'react';
import { fetchPatients } from '../api/patientsApi.js';
import { FALLBACK_PATIENTS } from '../data/fallbackPatients.js';

/**
 * Loads patients from the API. If the request fails, the bundled sample data is
 * used instead and `isFallback` is set so the UI can say so.
 */
export function usePatients() {
  const [state, setState] = useState({ status: 'loading', patients: [], isFallback: false });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState((previous) => ({ ...previous, status: 'loading' }));

    fetchPatients({ signal: controller.signal })
      .then((patients) => setState({ status: 'ready', patients, isFallback: false }))
      .catch((error) => {
        if (error.name === 'AbortError') return;
        console.error('[usePatients]', error);
        setState({ status: 'ready', patients: FALLBACK_PATIENTS, isFallback: true });
      });

    return () => controller.abort();
  }, [attempt]);

  const retry = useCallback(() => setAttempt((count) => count + 1), []);

  return { ...state, retry };
}
