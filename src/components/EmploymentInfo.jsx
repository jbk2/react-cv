function EmploymentInfo({employmentInfo, setEmploymentInfo}) {
  const handleChange = ((e) => {
    const { id, value } = e.target;
    setEmploymentInfo(prevState => ({
      ...prevState,
      [id]: value
    }))
  })

  return(
    <section>
      <h3>Work History</h3>
      <form action="#" className="form-grid">
        <label htmlFor="employerName">Employer Name</label>
        <input
          type="text"
          id="employerName"
          value={employmentInfo.employerName}
          onChange={handleChange}
        />
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          value={employmentInfo.jobTitle}
          onChange={handleChange}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={employmentInfo.startDate}
          onChange={handleChange}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          value={employmentInfo.endDate}
          onChange={handleChange}
        />
        <label htmlFor="roleDescription">Role Description</label>
        <textarea
          id="roleDescription"
          value={employmentInfo.roleDescription}
          onChange={handleChange}
        >
        </textarea>
        <button id="add-job">Add Job</button>
      </form>
      <hr />
  </section>
  )
}

export default EmploymentInfo