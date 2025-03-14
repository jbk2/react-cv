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
          <li>Qualification Title - {educationalInfo.qualificationTitle}</li>
          <li>Award Year - {educationalInfo.awardYear}</li>
        </ul>
      </section>
      <section>
        <h3>Employment History</h3>
        <ul>
          <li>Employer Name - {employmentInfo.employerName}</li>
          <li>Job Title - {employmentInfo.jobTitle}</li>
          <li>Start Date - {employmentInfo.startDate}</li>
          <li>End Date - {employmentInfo.endDate}</li>
          <li>Role Description - {employmentInfo.roleDescription}</li>
        </ul>
      </section>
    </div>
  )
}

export default CV;