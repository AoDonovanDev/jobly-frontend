import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import Job from "./Job";


export default function CompanyDetail ( {user} ) {
  
  const [jobs, setJobs] = useState([])

  const { handle } = useParams()

   useEffect(() => {

    async function getCompany(handle){
      const { company } = await JoblyApi.getCompany(handle)
      setJobs(company.jobs)
    }

    getCompany(`/${handle}`) 
   }, [])


   const applyToJob = async (jobId) => {
    const username = user.username;
    const { applied } = await JoblyApi.applyToJob(username, jobId)
    user.applications.push(applied)
    const { company } = await JoblyApi.getCompany(`/${handle}`)
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
    setJobs(company.jobs)
  } 

  return (
    <div className="CompanyDetail">
      { jobs.map ((j, i) => <Job key={i} job={j} applyToJob={applyToJob} applications={user.applications}/>) }
    </div>
  )
}