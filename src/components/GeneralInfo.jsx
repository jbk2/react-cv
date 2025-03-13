import { useState } from "react"

function GeneralInfo() {
  const [ state, setState ] = useState({
    firstName:"",
    lastName:"",
    email:"",
    telephone:""
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  return(
    <section>
      <h3>General Info</h3>
      <form action="#" className="form-grid">
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          id="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
        
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          id="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={handleChange}
        />
        
        <label htmlFor="telephone">Telephone</label>
        <input
          type="text"
          id="telephone"
          value={state.telephone}
          onChange={handleChange}
        />
      </form>
      <hr />
    </section>
  )
}

export default GeneralInfo