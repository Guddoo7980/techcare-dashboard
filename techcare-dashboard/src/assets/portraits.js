import jessicaTaylor from './jessica-taylor.png';

/**
 * Locally supplied portraits. They take priority over the picture URL that
 * comes back from the API for the same patient.
 */
const PORTRAIT_OVERRIDES = {
  'Jessica Taylor': jessicaTaylor,
};

export function resolvePortrait(patient) {
  return PORTRAIT_OVERRIDES[patient.name] ?? patient.profile_picture ?? '';
}
