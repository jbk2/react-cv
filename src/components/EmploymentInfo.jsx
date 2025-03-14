function EmploymentInfo({employmentInfo, setEmploymentInfo}) {
  const handleChange = (id, fieldName, value) => {
    setEmploymentInfo(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [fieldName]: value
      }
    }));
  };

  const handleAddJob = () => {
    const newID = crypto.randomUUID()
    setEmploymentInfo(prevState => ({
      ...prevState,
      [newID]: { employerName:'', jobTitle:'', startDate:'', endDate:'', roleDescription:'' }
    }))
  }

  const handleDeleteJob = (id) => {
    setEmploymentInfo(prevState => {
      const newState =  {...prevState};
      delete newState[id];
      return newState;
    })
  }

  return(
    <section>
      <h3>Work History</h3>
      {Object.entries(employmentInfo).map(([id, job], index) => (
        <>
          {index > 0 && <hr/> }
          <form key={id} action="#" className="col4-grid">
            <label htmlFor="employerName">Employer Name</label>
            <input
              type="text"
              id={`employerName-${id}`}
              value={job.employerName}
              onChange={(e) => handleChange(id, 'employerName', e.target.value)}
            />

            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id={`jobTitle-${id}`}
              value={job.jobTitle}
              onChange={(e) => handleChange(id, 'jobTitle', e.target.value)}
            />

            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id={`startDate-${id}`}
              value={job.startDate}
              onChange={(e) => handleChange(id, 'startDate', e.target.value)}
            />

            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id={`endDate-${id}`}
              value={job.endDate}
              onChange={(e) => handleChange(id, 'endDate', e.target.value)}
            />

            <label htmlFor="roleDescription">Role Description</label>
            <textarea
              id={`roleDescription-${id}`}
              value={job.roleDescription}
              onChange={(e) => handleChange(id, 'roleDescription', e.target.value)}
            >
            </textarea>
            <button className="delete" onClick={() => handleDeleteJob(id)}>❌</button>
          </form>
        </>
      ))}
      <button id="addJob" onClick={handleAddJob}>Add Job</button>
      <hr className="sectionHR"/>
    </section>
  )
}

export default EmploymentInfo