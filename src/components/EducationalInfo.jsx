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

  const handleAddQualification = () => {
    const newID = crypto.randomUUID()
    setEducationalInfo(prevstate => ({
      ...prevstate,
      [newID]: { qualificationTitle: '', awardYear: ''},
    }));
  };

  const handleDeleteQualification = (id) => {
    setEducationalInfo(prevState => {
      const newState = {...prevState};
      delete newState[id];
      return newState;
    });
  };
  
  return(
    <section>
      <h3>Education</h3>
      {Object.entries(educationalInfo).map(([id, entry], index) => (
        <>
          {index > 0 && <hr/> }
          <form key={id} className="qualification-entry col5-grid" action="#">
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
            <button className="delete" onClick={() => handleDeleteQualification(id)}>❌</button>
          </form>
        </>
      ))}
      
      <button id="add-qualification" onClick={handleAddQualification}>Add Qualification</button>
      <hr className="sectionHR"/>
    </section>
  )
}

export default EducationalInfo