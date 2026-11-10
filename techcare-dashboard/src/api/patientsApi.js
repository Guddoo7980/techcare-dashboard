const API_URL =
  import.meta.env.VITE_API_URL ?? 'https://fedskillstest.coalitiontechnologies.workers.dev';
const USERNAME = import.meta.env.VITE_API_USERNAME ?? 'coalition';
const PASSWORD = import.meta.env.VITE_API_PASSWORD ?? 'skills-test';

/**
 * Fetches every patient from the Coalition Technologies Patient Data API.
 *
 * @param {{ signal?: AbortSignal }} [options]
 * @returns {Promise<object[]>}
 * @throws {Error} when the request fails or the payload is not a list
 */
export async function fetchPatients({ signal } = {}) {
  const response = await fetch(API_URL, {
    signal,
    headers: {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Patient API request failed with status ${response.status}`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error('Patient API returned an unexpected response shape');
  }
  return data;
}
