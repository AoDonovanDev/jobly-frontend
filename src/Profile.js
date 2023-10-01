import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./SignUp.css"
import React from "react";

export default function Profile ({user, updateUser}) {

  const navigate = useNavigate()

  useEffect(() => {
    if(!user) return navigate('/')
  }, [])

 

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  })

  const {username, ...updatedInfo} = formData

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  

  return (
    <div className="conditionalWrapper">
    { user ?
    <form className="SignUp">
      <h3>Profile</h3>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder={user.username}
        disabled
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

      <button type="button" onClick={() => updateUser(updatedInfo, user.username, navigate)}>Save Changes</button>
    </form>
    :
    <></>
    }
    </div>
  );
}

