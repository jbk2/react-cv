import React from "react";

export default function EmploymentInfo({employmentInfo, dispatchEmploymentInfo}) {
  return(
    <section>
      <h3>Work History</h3>
      {Object.entries(employmentInfo).map(([id, job], index) => (
        <React.Fragment key={id}>
          {index > 0 && <hr/> }
          <form action="#" className="col4-grid">
            <label htmlFor="employerName">Employer Name</label>
            <input
              type="text"
              id={`employerName-${id}`}
              value={job.employerName}
              onChange={(e) => {
                dispatchEmploymentInfo({
                  id: id,
                  type: "UPDATE",
                  fieldName: 'employerName',
                  payload: e.target.value
                })
              }}
            />

            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id={`jobTitle-${id}`}
              value={job.jobTitle}
              onChange={(e) => {
                dispatchEmploymentInfo({
                  id: id,
                  type: "UPDATE",
                  fieldName: 'jobTitle',
                  payload: e.target.value
                })
              }}
            />

            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id={`startDate-${id}`}
              value={job.startDate}
              onChange={(e) => {
                dispatchEmploymentInfo({
                  id: id,
                  type: "UPDATE",
                  fieldName: 'startDate',
                  payload: e.target.value
                })
              }}
            />

            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id={`endDate-${id}`}
              value={job.endDate}
              onChange={(e) => {
                dispatchEmploymentInfo({
                  id: id,
                  type: "UPDATE",
                  fieldName: 'endDate',
                  payload: e.target.value
                })
              }}
            />

            <label htmlFor="roleDescription">Role Description</label>
            <textarea
              id={`roleDescription-${id}`}
              value={job.roleDescription}
              onChange={(e) => {
                dispatchEmploymentInfo({
                  id: id,
                  type: "UPDATE",
                  fieldName: 'roleDescription',
                  payload: e.target.value
                })
              }}
            >
            </textarea>
            <button className="delete" onClick={(e) => {
              e.preventDefault();
              dispatchEmploymentInfo({type: "DELETE", id: id})
            }}>
              ❌
            </button>
          </form>
        </React.Fragment>
      ))}

      <button
        id="addJob"
        onClick={(e) => {
          e.preventDefault();
          dispatchEmploymentInfo({type: "ADD"})
        }}>
        Add Job
      </button>
      <hr className="sectionHR"/>
    </section>
  )
}