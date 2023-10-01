import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./SignUp.css" 
import React from "react";

export default function Login ({login}) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  

  return (
    <form className="SignUp">
      <h3>Login</h3>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />


      <button type="button" onClick={() => login(formData, navigate)}>Login</button>
    </form>
  );
}

