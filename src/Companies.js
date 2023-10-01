import React from "react"
import Company from "./Company"
import { useEffect, useState } from "react"
import JoblyApi from "./api"
import SearchBar from "./SearchBar"
import { useNavigate } from "react-router-dom"
import 'bootstrap'



export default function Companies ({user}) {

  const navigate = useNavigate();
  useEffect(() => {
    if(!user) navigate('/')
  }, [])

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    async function getCompanies () {
      const { companies } = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, [])

  async function search (searchTerm) {
    const result = await JoblyApi.getCompanies(searchTerm);
    setCompanies(result.companies);
  }


  return (
    <div className="Companies list-group">
      <SearchBar search={search}/>
      {companies.map((c, i) => <div key={i} className="list-group list-group-item-info"><Company company={c} /></div>)}
    </div>

  )
}