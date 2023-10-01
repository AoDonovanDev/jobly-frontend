import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./SignUp.css"
import React from "react";

export default function SignUp ({register}) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
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
      <h3>Sign Up</h3>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={formData.name}
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

      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        type="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="button" onClick={() => register(formData, navigate)}>SignUp</button>
    </form>
  );
}

