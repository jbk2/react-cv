function WorkInfo() {
  return(
    <section>
      <h3>Work History</h3>
      <form action="#" className="form-grid">
        <label htmlFor="employer-name">Employer Name</label>
        <input type="text" id="employer-name" />
        <label htmlFor="job-title">Job Title</label>
        <input type="text" id="job-title" />
        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />
        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />
        <label htmlFor="description">Description</label>
        <textarea id="description"></textarea>
        <button id="add-job">Add Job</button>
      </form>
      <hr />
  </section>
  )
}

export default WorkInfo