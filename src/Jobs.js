import React from "react";
import { useState, useEffect } from "react";
import Job from "./Job";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";


export default function Jobs ( { user } ) {

  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])

  useEffect(() => {
     if(!user) navigate('/');
  }, [])

  useEffect(() => {

    async function getJobs(){
      const { jobs } = await JoblyApi.getJobs()
      setJobs(jobs)
    }
    getJobs()
  }, [])


  const applyToJob = async (jobId) => {
    const username = user.username;
    const { applied } = await JoblyApi.applyToJob(username, jobId)
    const { jobs } = await JoblyApi.getJobs()
    user.applications.push(applied)
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
    setJobs(jobs)
  } 

  return (
    <div className="Jobs">
      {jobs.map((j, i) => <div key={i} className="list-group list-group-item-info"><Job job={j} applyToJob={applyToJob} applications={user.applications}/> </div>)}
    </div>
  )
}