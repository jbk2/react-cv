function EducationalInfo() {
  return(
    <section>
      <h3>Education</h3>
      <form action="#" className="form-grid">
        <label htmlFor="qualification-title">Qualification Title</label>
        <input type="text" id="qualification-title" />
        <label htmlFor="award-year">Award Year</label>
        <input type="date" id="award-year" />
        <button id="add-qualification">Add Qualification</button>
      </form>
      <hr />
    </section>
  )
}

export default EducationalInfo