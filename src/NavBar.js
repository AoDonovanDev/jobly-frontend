import 'bootstrap/dist/css/bootstrap.css' 
import "./NavBar.css"
import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function NavBar ({user, logout}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    setIsLoggedIn(tf => {
      if(user) return true
      return false
    })
  }, [user])

  return (
    <div className="navbar navbar-expand-lg navbar-dark">
      <div className="NavBar navLinks">
        <Link to="/">Jobly</Link>
        <div>
          {isLoggedIn ?
          <div className="loggedIn navLinks" >
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={()=>logout()}>Logout</Link>
          </div>
          :
          <div className="loggedOut navLinks">
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>
          }
        </div>
    </div>
    </div>
  )
}