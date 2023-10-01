import React from "react";

export default function Job ({job, applyToJob, applications}) {
  
  return (
    <div className="Job list-group-item list-group-item-info">
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <ul>
        <li>Salary: {job.salary}</li>
        <li>Equity: {job.equity}</li>
      </ul>
      {applications.includes(job.id) ? <button disabled>Applied</button> : 
      <button type="button" onClick={()=>applyToJob(job.id)}>Apply!</button>
      }
    </div>
  )
}