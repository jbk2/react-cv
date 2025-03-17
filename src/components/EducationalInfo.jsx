import React from "react";

function EducationalInfo({eduInfo, dispatchEduInfo}) {
  
  return(
    <section>
      <h3>Education</h3>
      {Object.entries(eduInfo).map(([id, entry], index) => (
          <React.Fragment key={id}>
            {index > 0 && <hr /> }
            <form className="qualification-entry col5-grid" action="#">
              <label htmlFor={`qualificationTitle-${id}`}>Qualification Title</label>
              <input
                type="text"
                id={`qualificationTitle-${id}`}
                value={entry.qualificationTitle}
                onChange={(e) => dispatchEduInfo({id: id, type: "UPDATE", fieldName: 'qualificationTitle', payload: e.target.value})}
              />
              <label htmlFor={`awardYear-${id}`}>Award Year</label>
              <input
                type="date"
                id={`awardYear-${id}`}
                value={entry.awardYear}
                onChange={(e) => dispatchEduInfo({id: id, type: "UPDATE", fieldName: 'awardYear', payload: e.target.value})}
              />
              <button className="delete" onClick={(e) => {
                e.preventDefault();
                dispatchEduInfo({id: id, type: "DELETE"});
              }}>
                ❌
              </button>
            </form>
          </React.Fragment>
        ))}
      
      <button id="add-qualification" onClick={() => dispatchEduInfo({type: "ADD"})}>Add Qualification</button>
      <hr className="sectionHR"/>
    </section>
  )
}

export default EducationalInfo