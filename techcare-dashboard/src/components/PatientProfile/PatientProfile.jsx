import InfoRow from '../InfoRow/InfoRow.jsx';
import { BirthdayIcon, GenderIcon, PhoneIcon, ShieldIcon } from '../Icons/Icons.jsx';
import { formatDateOfBirth } from '../../utils/patient.js';
import './PatientProfile.css';

export default function PatientProfile({ patient, onShowAll }) {
  return (
    <section className="card profile" aria-labelledby="profile-name">
      <img
        className="profile__portrait"
        src={patient.portrait}
        alt={`Portrait of ${patient.name}`}
        width="200"
        height="200"
      />
      <h2 id="profile-name" className="profile__name">
        {patient.name}
      </h2>

      <dl className="profile__details">
        <InfoRow icon={<BirthdayIcon />} label="Date Of Birth" value={formatDateOfBirth(patient.date_of_birth)} />
        <InfoRow icon={<GenderIcon />} label="Gender" value={patient.gender} />
        <InfoRow icon={<PhoneIcon />} label="Contact Info." value={patient.phone_number} />
        <InfoRow icon={<PhoneIcon />} label="Emergency Contacts" value={patient.emergency_contact} />
        <InfoRow icon={<ShieldIcon />} label="Insurance Provider" value={patient.insurance_type} />
      </dl>

      <button type="button" className="profile__action" onClick={onShowAll}>
        Show All Information
      </button>
    </section>
  );
}
