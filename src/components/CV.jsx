import React from "react";
function CV({generalInfo, educationalInfo, employmentInfo}) {
  return(
    <div>
      <section>
        <h3>General Info</h3>
        <ul>
          <li>First Name - {generalInfo.firstName}</li>
          <li>Last Name - {generalInfo.lastName}</li>
          <li>Email - {generalInfo.email}</li>
          <li>Telephone - {generalInfo.telephone}</li>
        </ul>
      </section>
      <section>
        <h3>Educational Info</h3>
        <ul>
          {Object.entries(educationalInfo).map(([id, entry]) => (
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
      <section>
        <h3>Employment History</h3>
        {Object.entries(employmentInfo).map(([id, job]) => (
          <React.Fragment key={id}>
            <ul key={id}>
              <li key={`employerName-${id}`}>Employer Name - {job.employerName}</li>
              <li key={`jobTitle-${id}`}>Job Title - {job.jobTitle}</li>
              <li key={`startDate-${id}`}>Start Date - {job.startDate}</li>
              <li key={`endDate-${id}`}>End Date - {job.endDate}</li>
              <li key={`roleDescription-${id}`}>Role Description - {job.roleDescription}</li>
            </ul>
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}

export default CV;