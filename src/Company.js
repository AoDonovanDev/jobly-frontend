import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap'
import './Company.css'


export default function Company ({company}) {
    
  return (
    <div className="Company list-group-item">
      <h3 className="list-group-action-item companyName"><Link to={`/companies/${company.handle}`}>{company.name}</Link></h3>
      <p>{company.description}</p>
    </div>
  )
}