import styles from '../assets/stylesheets/CV.module.css'
import React from "react";

function CV({generalInfo, eduInfo, employmentInfo}) {
  return(
    <div>
      <section className={styles.section}>
        <h3>General Info</h3>
        <ul>
          <li>First Name - {generalInfo.firstName}</li>
          <li>Last Name - {generalInfo.lastName}</li>
          <li>Email - {generalInfo.email}</li>
          <li>Telephone - {generalInfo.telephone}</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Educational Info</h3>
        <ul>
          {Object.entries(eduInfo).map(([id, entry]) => (
            <React.Fragment key={id}>
              <li key={`qualificationTitle-${id}`}>
                Qualification Title - {entry.qualificationTitle}
              </li>
              <li key={`awardYear-${id}`}>
                Award Year - {entry.awardYear}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Employment History</h3>
        <ul>
          {Object.entries(employmentInfo).map(([id, job], index) => (
            <React.Fragment key={id}>
                {index > 0 && <hr/> }
                <li key={`employerName-${id}`}>Employer Name - {job.employerName}</li>
                <li key={`jobTitle-${id}`}>Job Title - {job.jobTitle}</li>
                <li key={`startDate-${id}`}>Start Date - {job.startDate}</li>
                <li key={`endDate-${id}`}>End Date - {job.endDate}</li>
                <li key={`roleDescription-${id}`}>Role Description - {job.roleDescription}</li>
            </React.Fragment>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default CV;