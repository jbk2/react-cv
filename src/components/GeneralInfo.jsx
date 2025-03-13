function GeneralInfo() {
  // section, form with titles and inputs 
  // name, email, phone, twitter
  return(
    <section>
      <h3>General Info</h3>
      <form action="#" className="form-grid">
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last name</label>
        <input type="text" id="last-name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="telephone">Telephone</label>
        <input type="text" id="telephone" />
      </form>
      <hr />
    </section>
  )
}

export default GeneralInfo