function EducationalInfo({educationalInfo, setEducationalInfo}) {
  const handleChange = ((e) => {
    const { id, value } = e.target;
    setEducationalInfo(prevState => ({
      ...prevState,
      [id]: value
    }));
  })
  
  return(
    <section>
      <h3>Education</h3>
      <form action="#" className="form-grid">
        <label htmlFor="qualificationTitle">Qualification Title</label>
        <input
          type="text"
          id="qualificationTitle"
          value={educationalInfo.qualificationTitle}
          onChange={handleChange}
        />

        <label htmlFor="awardYear">Award Year</label>
        <input
          type="date"
          id="awardYear"
          value={educationalInfo.awardYear}
          onChange={handleChange}
        />
        
        <button id="add-qualification">Add Qualification</button>
      </form>
      <hr />
    </section>
  )
}

export default EducationalInfo