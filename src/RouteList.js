import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp"
import React from "react"
import NavBar from "./NavBar"
import Companies from "./Companies"
import Jobs from "./Jobs"
import CompanyDetail from "./CompanyDetail"
import Login from "./Login"
import Profile from "./Profile"

export default function RouteList ({user, register, login, logout, updateUser}) {
  return (
    <BrowserRouter>
        <NavBar user={user} logout={logout}/>
        <Routes>
          <Route path='/' element={<Home user={user}/>} />
          <Route exact path ="/signup" element={<SignUp user={user} register={register}/>} />
          <Route exact path = "/login" element={<Login login={login}/>}/>
          <Route exact path ="/profile" element={<Profile user={user} updateUser={updateUser} />}/>
          <Route exact path = "/companies" element={<Companies user={user}/>} />
          <Route exact path = "/companies/:handle" element={<CompanyDetail user={user}/>} />
          <Route exact path = "/jobs" element={<Jobs user={user} />}/>
        </Routes>
    </BrowserRouter>
  )
}