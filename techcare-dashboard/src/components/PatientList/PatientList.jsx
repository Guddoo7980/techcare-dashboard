import Avatar from '../Avatar/Avatar.jsx';
import { MoreHorizontalIcon, SearchIcon } from '../Icons/Icons.jsx';
import './PatientList.css';

export default function PatientList({ patients, activeName }) {
  return (
    <aside className="card patient-list" aria-labelledby="patient-list-title">
      <div className="patient-list__header">
        <h2 id="patient-list-title" className="card__title">
          Patients
        </h2>
        <button type="button" className="patient-list__search" aria-label="Search patients">
          <SearchIcon size={22} />
        </button>
      </div>

      <div className="patient-list__body">
        <ul className="patient-list__items scroll">
          {patients.map((patient) => {
            const isActive = patient.name === activeName;
            return (
              <li
                key={patient.name}
                className={`patient-list__item ${isActive ? 'patient-list__item--active' : ''}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <Avatar src={patient.portrait} name={patient.name} size={48} />
                <div className="patient-list__text">
                  <p className="patient-list__name">{patient.name}</p>
                  <p className="patient-list__meta">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
                <button
                  type="button"
                  className="patient-list__more"
                  aria-label={`More options for ${patient.name}`}
                >
                  <MoreHorizontalIcon />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
