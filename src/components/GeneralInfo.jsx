// import { useState } from "react"

function GeneralInfo({generalInfo, setGeneralInfo}) {

  const handleChange = (e) => {
    const { id, value } = e.target;
    setGeneralInfo(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  return(
    <section>
      <h3>General Info</h3>
      <form action="#" className="col4-grid">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          value={generalInfo.firstName}
          onChange={handleChange}
        />
        
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          value={generalInfo.lastName}
          onChange={handleChange}
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={handleChange}
        />
        
        <label htmlFor="telephone">Telephone</label>
        <input
          type="text"
          id="telephone"
          value={generalInfo.telephone}
          onChange={handleChange}
        />
      </form>
      <hr className="sectionHR"/>
    </section>
  )
}

export default GeneralInfo