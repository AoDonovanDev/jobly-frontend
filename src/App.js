import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import JoblyApi from './api'
import RouteList from "./RouteList";
function App() {

  const [user, setUser] = useState(null)

  const register = async (formData, navigate) => {
    const {token, newUser} = await JoblyApi.register(formData);
    const user = newUser
    setUser({
      ...user,
      token
    });
    JoblyApi.token = token;
    localStorage.setItem("user", JSON.stringify({...user, token}));
    navigate('/');
  }

  const login = async (formData, navigate) => {
    const {token} = await JoblyApi.login(formData);
    JoblyApi.token = token;
    const { user } = await JoblyApi.getUser(formData.username)
    setUser({
      ...user,
      token
    });
    console.log(user)
    localStorage.setItem("user", JSON.stringify({...user, token}));
    navigate('/');
  }

  const logout = async () => {
    setUser(null)
    JoblyApi.token = null;
    localStorage.setItem("user", null);
  }

  const updateUser = async (updatedInfo, handle, navigate) => {
    const { user } = await JoblyApi.updateUser(updatedInfo, handle)
    navigate('/')
    console.log(user)
  }


  useEffect(() => {
    const user = localStorage.getItem("user");

    if(user){
      const currentUser = JSON.parse(user)
      JoblyApi.token = currentUser.token; 
      setUser(currentUser);
    }
  }, [])

  return (
    <div className="App">
      <RouteList user={user} register={register} login={login} logout={logout} updateUser={updateUser} />
    </div>
  );
}

export default App;
