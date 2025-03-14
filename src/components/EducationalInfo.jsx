function EducationalInfo({educationalInfo, setEducationalInfo}) {
  const handleChange = (id, fieldName, value) => {
    setEducationalInfo(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [fieldName]: value
      }
    }));
  };
  
  return(
    <section>
      <h3>Education</h3>
      <form action="#">
        {Object.entries(educationalInfo).map(([id, entry]) => (
          <div key={id} className="qualification-entry form-grid">
            <label htmlFor={`qualificationTitle-${id}`}>Qualification Title</label>
            <input
              type="text"
              id={`qualificationTitle-${id}`}
              value={entry.qualificationTitle}
              onChange={(e) => handleChange(id, 'qualificationTitle', e.target.value)}
            />
            <label htmlFor={`awardYear-${id}`}>Award Year</label>
            <input
              type="date"
              id={`awardYear-${id}`}
              value={entry.awardYear}
              onChange={(e) => handleChange(id, 'awardYear', e.target.value)}
            />
          </div>
        ))}
        
        <button id="add-qualification">Add Qualification</button>
      </form>
      <hr />
    </section>
  )
}

export default EducationalInfo