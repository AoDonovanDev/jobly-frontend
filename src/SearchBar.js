import React from "react";
import { useState } from "react";
import './SearchBar.css'

export default function SearchBar ( { search } ) {
  
  
  const [formData, setFormData] = useState({
    searchTerm: ''
  })

  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(formData)
    setFormData(fData => ({
      [name]: value
    }));
  };
  
  return (
    <form className="SearchBar">
      <label htmlFor="searchBar"></label>
      <input
        id="searchTerm"
        name="searchTerm"
        type="text"
        value={formData.searchTerm}
        onChange={handleChange}
      />
      <button type="button" onClick={()=>search(formData.searchTerm)}>Submit</button>
    </form>
  ) 
}